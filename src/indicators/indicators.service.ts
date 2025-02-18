import {
  UserIndicators,
  DreamIndicator,
  StepIndicator,
} from './../../node_modules/.prisma/client/index.d';
import { Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class IndicatorsService {
  async createIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicator = await prisma.indicator.create({
      data: {
        name: createIndicatorDto.name,
        image: createIndicatorDto.image,
      },
    });
    return { indicator };
  }

  async createPulseIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicatorId = 1;

    const userIndicators = await prisma.userIndicators.upsert({
      where: {
        userId_indicatorId: {
          userId: createIndicatorDto.userId,
          indicatorId: indicatorId,
        },
      },
      update: {},
      create: {
        userId: createIndicatorDto.userId,
        indicatorId: indicatorId,
      },
    });

    const pulseIndicator = await prisma.pulseIndicator.create({
      data: {
        idUI: userIndicators.idUI,
        value: createIndicatorDto.value,
        createdAt: createIndicatorDto.createdAt,
      },
    });
    return { pulseIndicator };
  }

  async createHeightIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicatorId = 2;

    const userIndicators = await prisma.userIndicators.upsert({
      where: {
        userId_indicatorId: {
          userId: createIndicatorDto.userId,
          indicatorId: indicatorId,
        },
      },
      update: {},
      create: {
        userId: createIndicatorDto.userId,
        indicatorId: indicatorId,
      },
    });

    const heightIndicator = await prisma.heightIndicator.create({
      data: {
        idUI: userIndicators.idUI,
        value: createIndicatorDto.value,
        createdAt: createIndicatorDto.createdAt,
      },
    });
    return { heightIndicator };
  }

  async createWeightIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicatorId = 3;

    const userIndicators = await prisma.userIndicators.upsert({
      where: {
        userId_indicatorId: {
          userId: createIndicatorDto.userId,
          indicatorId: indicatorId,
        },
      },
      update: {},
      create: {
        userId: createIndicatorDto.userId,
        indicatorId: indicatorId,
      },
    });

    const weightIndicator = await prisma.weightIndicator.create({
      data: {
        idUI: userIndicators.idUI,
        value: createIndicatorDto.value,
        createdAt: createIndicatorDto.createdAt,
      },
    });
    return { weightIndicator };
  }

  async createPressureIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicatorId = 4;

    const userIndicators = await prisma.userIndicators.upsert({
      where: {
        userId_indicatorId: {
          userId: createIndicatorDto.userId,
          indicatorId: indicatorId,
        },
      },
      update: {},
      create: {
        userId: createIndicatorDto.userId,
        indicatorId: indicatorId,
      },
    });

    const pressureIndicator = await prisma.pressureIndicator.create({
      data: {
        idUI: userIndicators.idUI,
        valueUp: createIndicatorDto.valueUp,
        valueDown: createIndicatorDto.valueDown,
        createdAt: createIndicatorDto.createdAt,
      },
    });
    return { pressureIndicator };
  }

  async createDreamIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicatorId = 5;

    const userIndicators = await prisma.userIndicators.upsert({
      where: {
        userId_indicatorId: {
          userId: createIndicatorDto.userId,
          indicatorId: indicatorId,
        },
      },
      update: {},
      create: {
        userId: createIndicatorDto.userId,
        indicatorId: indicatorId,
      },
    });

    const dreamIndicator = await prisma.dreamIndicator.create({
      data: {
        idUI: userIndicators.idUI,
        value: createIndicatorDto.value,
        createdAt: createIndicatorDto.createdAt,
      },
    });
    return { dreamIndicator };
  }

  async createStepIndicator(createIndicatorDto: CreateIndicatorDto) {
    const indicatorId = 6;

    const userIndicators = await prisma.userIndicators.upsert({
      where: {
        userId_indicatorId: {
          userId: createIndicatorDto.userId,
          indicatorId: indicatorId,
        },
      },
      update: {},
      create: {
        userId: createIndicatorDto.userId,
        indicatorId: indicatorId,
      },
    });

    const stepIndicator = await prisma.stepIndicator.create({
      data: {
        idUI: userIndicators.idUI,
        value: createIndicatorDto.value,
        createdAt: createIndicatorDto.createdAt,
      },
    });
    return { stepIndicator };
  }




  async findAllPulse(id: number) {
    const indicatorId = 1;
    const idUIPulse = await prisma.userIndicators.findUnique({
      where: {
        userId_indicatorId: {
          userId: id,
          indicatorId: indicatorId,
        },
      },
    });
    const allIndicators = await prisma.pulseIndicator.findMany({
      where:{
        idUI: idUIPulse.idUI,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return {allIndicators}
  }



  async findAllHeight(id: number) {
    const indicatorId = 2;
    const idUIPulse = await prisma.userIndicators.findUnique({
      where: {
        userId_indicatorId: {
          userId: id,
          indicatorId: indicatorId,
        },
      },
    });
    const allIndicators = await prisma.heightIndicator.findMany({
      where:{
        idUI: idUIPulse.idUI,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return {allIndicators}
  }



  async findAllWeight(id: number) {
    const indicatorId = 3;
    const idUIPulse = await prisma.userIndicators.findUnique({
      where: {
        userId_indicatorId: {
          userId: id,
          indicatorId: indicatorId,
        },
      },
    });
    const allIndicators = await prisma.weightIndicator.findMany({
      where:{
        idUI: idUIPulse.idUI,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return {allIndicators}
  }


  async findAllPressure(id: number) {
    const indicatorId = 4;
    const idUIPulse = await prisma.userIndicators.findUnique({
      where: {
        userId_indicatorId: {
          userId: id,
          indicatorId: indicatorId,
        },
      },
    });
    const allIndicators = await prisma.pressureIndicator.findMany({
      where:{
        idUI: idUIPulse.idUI,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return {allIndicators}
  }



  async findAllDream(id: number) {
    const indicatorId = 5;
    const idUIPulse = await prisma.userIndicators.findUnique({
      where: {
        userId_indicatorId: {
          userId: id,
          indicatorId: indicatorId,
        },
      },
    });
    const allIndicators = await prisma.dreamIndicator.findMany({
      where:{
        idUI: idUIPulse.idUI,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return {allIndicators}
  }



  async findAllStep(id: number) {
    const indicatorId = 6;
    const idUIPulse = await prisma.userIndicators.findUnique({
      where: {
        userId_indicatorId: {
          userId: id,
          indicatorId: indicatorId,
        },
      },
    });
    const allIndicators = await prisma.stepIndicator.findMany({
      where:{
        idUI: idUIPulse.idUI,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return {allIndicators}
  }


  findAll() {
    return 'findAll';
  }

  findOne(id: number) {
    return `This action returns a #${id} indicator`;
  }

  update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    return `This action updates a #${id} indicator`;
  }

  remove(id: number) {
    return `This action removes a #${id} indicator`;
  }
}
