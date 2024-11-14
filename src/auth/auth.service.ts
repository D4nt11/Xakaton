import { UnauthorizedException, Injectable, BadRequestException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    const doctor = await this.userService.findOneDoctor(email)
    if(user){
      const pswd = await bcrypt.compare(password, user.password);
      if (user && pswd) {
        return user;
      }
    }
    else if(doctor){
      const pswd = await bcrypt.compare(password, doctor.password);
      if(doctor && pswd){
        return doctor;
      }
    }
    else{
      throw new BadRequestException()
    }
  }

  async login(user: IUser) {
    const {
      id,
      firstName,
      lastName,
      patronymic,
      email,
      idCard,
      dateOfBirth,
    } = user;
    return {
      id,
      firstName,
      lastName,
      patronymic,
      email,
      idCard,
      dateOfBirth,
      token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
}

// create(createAuthDto: CreateAuthDto) {
//   return 'This action adds a new auth';
// }

// findAll() {
//   return `This action returns all auth`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} auth`;
// }

// update(id: number, updateAuthDto: UpdateAuthDto) {
//   return `This action updates a #${id} auth`;
// }

// remove(id: number) {
//   return `This action removes a #${id} auth`;
// }
