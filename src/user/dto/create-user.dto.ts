import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Tom', description: 'The firstName of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Besos', description: 'The lastName of the user' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'Alekseev', description: 'The patronymic of the user' })
  @IsString()
  patronymic?: string;

  @ApiProperty({ example: 'Tom@ya.ru', description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678901', description: 'The snils of the user(11 symbols)' })
  @IsString()
  idCard: string;

  @ApiProperty({ example: '1234', description: 'The password of the user' })
  @IsString()
  //   @MinLength(6, {message: 'Password must be more then 6 symbols'})
  password: string;

  @ApiProperty({ example: '2000-11-13T10:30:00.000Z', description: 'The dateOfBirth of the user(year-month-dayThour:minutes:seconds.milisecondsZ   ---- Z означает, что время указано в UTC)' })
  @Type(() => Date)
  @IsDate()
  dateOfBirth: Date;
}
