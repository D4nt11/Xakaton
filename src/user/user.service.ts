import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService){}
  async create(createUserDto: CreateUserDto) {
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
    if (existUser && existUser2)
      throw new BadRequestException('This email and snils already exist');
    if (existUser) throw new BadRequestException('This email already exist');
    if (existUser2) throw new BadRequestException('This snils already exist');
    const salt = await bcrypt.genSalt();
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
    const token = this.jwtService.sign({email: createUserDto.email})
    return { user, token };
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

  update(id: number, UpdateUserDto: UpdateUserDto) {
    return 'This update';
  }

  remove(id: number) {
    return 'This remove';
  }
}
