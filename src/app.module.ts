import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { IndicatorsModule } from './indicators/indicators.module';

@Module({
  imports: [DoctorModule, IndicatorsModule],
})
export class AppModule {}
