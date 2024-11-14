import { Type } from 'class-transformer';
import { IsDate, IsNumber, isString, IsString } from 'class-validator';

export class CreateIndicatorDto {
  @IsString()
  name: string;

  @IsString()
  image: string;



  @IsNumber()
  idUI: number;

  @IsNumber()
  value: number;

  @IsNumber()
  valueUp: number;

  @IsNumber()
  valueDown: number;

  @Type(() => Date)
  @IsDate()
  createdAt: Date


  @IsNumber()
  userId: number

  @IsNumber()
  indicatorId: number
}
