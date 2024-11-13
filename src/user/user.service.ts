import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const existUser = await prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    const existUser2 = await prisma.user.findUnique({
      where: {
        snils: createUserDto.snils,
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
        snils: createUserDto.snils,
        password: await bcrypt.hash(createUserDto.password, salt),
        dateOfBearth: createUserDto.dateOfBearth,
      },
    });
    return { user };
  }

  async findAll() {
    const allUsers = await prisma.user.findMany();
  }

  async findOne(id: string) {
    return await prisma.user.findUnique({
      where: {
        id: +id,
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
