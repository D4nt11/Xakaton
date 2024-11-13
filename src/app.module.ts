import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DoctorModule,
    IndicatorsModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [],
})
export class AppModule {}
