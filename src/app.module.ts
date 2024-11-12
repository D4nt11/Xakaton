import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DoctorModule, IndicatorsModule, UserModule],
})
export class AppModule {}
