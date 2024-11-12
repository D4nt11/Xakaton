import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
@Injectable()
export class UserService {
    async findAll(){
        const allUsers = await prisma.user.findMany()
        console.log(allUsers)
    }
}
