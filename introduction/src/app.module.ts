import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://admin:sRHTdYt9BbwY83vV@cluster0.enzs5ol.mongodb.net/TESTDB?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
