import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [ProductsModule, PrismaModule, AuthModule, UsersModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
