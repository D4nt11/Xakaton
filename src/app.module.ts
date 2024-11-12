import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DoctorModule, IndicatorsModule, UserModule, AuthModule],
  providers: [AuthService],
})
export class AppModule {}
