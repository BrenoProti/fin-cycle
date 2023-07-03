import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({ ...createTransactionDto });
  }

  findAll() {
    return this.transactionModel.findAll();
  }
}
