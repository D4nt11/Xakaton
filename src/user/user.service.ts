import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}
  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    if (createUserDto.role == 'user') {
      const existUser = await prisma.user.findUnique({
        where: {
          email: createUserDto.email,
        },
      });
      const existUser2 = await prisma.user.findUnique({
        where: {
          idCard: createUserDto.idCard,
        },
      });
      const existDoctor = await prisma.doctor.findUnique({
        where: {
          email: createUserDto.email,
        },
      });
      if ((existUser || existDoctor) && existUser2)
        throw new BadRequestException('This email and idCard already exist');
      if (existUser || existDoctor) throw new BadRequestException('This email already exist');
      if (existUser2) throw new BadRequestException('This idCard` already exist');

      const user = await prisma.user.create({
        data: {
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          patronymic: createUserDto.patronymic,
          email: createUserDto.email,
          idCard: createUserDto.idCard,
          password: await bcrypt.hash(createUserDto.password, salt),
          dateOfBirth: createUserDto.dateOfBirth,
        },
      });
      const token = this.jwtService.sign({ email: createUserDto.email });
      return { user, token };
    } else if (createUserDto.role == 'doctor') {
      const existDoctor = await prisma.doctor.findUnique({
        where: {
          email: createUserDto.email,
        },
      });
      const existUser = await prisma.user.findUnique({
        where: {
          email: createUserDto.email,
        },
      });
      if (existDoctor || existUser)
        throw new BadRequestException('This email already exist');

      const doctor = await prisma.doctor.create({
        data: {
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          patronymic: createUserDto.patronymic,
          email: createUserDto.email,
          password: await bcrypt.hash(createUserDto.password, salt),
          dateOfBirth: createUserDto.dateOfBirth,
        },
      });
      const token = this.jwtService.sign({ email: createUserDto.email });
      return { doctor, token };
    } else {
      throw new BadRequestException('Role is incorect');
    }
  }

  async findAll() {
    const allUsers = await prisma.user.findMany();
  }

  async findOne(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findOneDoctor(email: string){
    return await prisma.doctor.findUnique({
      where:{
        email
      }
    })
  }



  update(id: number, UpdateUserDto: UpdateUserDto) {
    return 'This update';
  }

  remove(id: number) {
    return 'This remove';
  }
}
