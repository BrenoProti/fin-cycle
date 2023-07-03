import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { Account } from 'src/account/entities/account.entity';

@Module({
  imports: [SequelizeModule.forFeature([Transaction, Account])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
