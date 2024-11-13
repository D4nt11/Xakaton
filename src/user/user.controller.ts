import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    @ApiOperation({ summary: 'Add user' })
    @ApiResponse({ status: 200, description: 'Registration' })
    @UsePipes(new ValidationPipe())
    create(@Body() CreateUserDto: CreateUserDto){
        return this.userService.create(CreateUserDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of users retrieved successfully.' })
    findAll(){
        return this.userService.findAll()
    }

    // @Get(':id')
    // findOne(@Param('id') id: string){
    //     return this.userService.findOne(+id)
    // }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto){
        return this.userService.update(+id, UpdateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.userService.remove(+id);
    }
}