import { Module } from '@nestjs/common';
import { IndicatorsModule } from './indicators/indicators.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    IndicatorsModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DoctorModule,
  ],
  providers: [],
})
export class AppModule {}
