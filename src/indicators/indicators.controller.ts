import { HeightIndicator } from './../../node_modules/.prisma/client/index.d';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Post()
  createIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createIndicator(createIndicatorDto);
  }

  @Post('pulse')
  createPulseIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createPulseIndicator(createIndicatorDto);
  }

  @Post('height')
  createHeightIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createHeightIndicator(createIndicatorDto);
  }

  @Post('weight')
  createWeightIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createWeightIndicator(createIndicatorDto);
  }

  @Post('pressure')
  createPressureIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createPressureIndicator(createIndicatorDto);
  }

  @Post('dream')
  createDreamIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createDreamIndicator(createIndicatorDto);
  }

  @Post('step')
  createStepIndicator(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.createStepIndicator(createIndicatorDto);
  }

  @Get('pulse/get/all/:id')
  findAllPulse(@Param('id') id: string) {
    return this.indicatorsService.findAllPulse(+id);
  }

  @Get()
  findAll() {
    return this.indicatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndicatorDto: UpdateIndicatorDto) {
    return this.indicatorsService.update(+id, updateIndicatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicatorsService.remove(+id);
  }
}
