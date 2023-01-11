import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: MongoRepository<User>,
  ) {}


  async create(createUserDto : any) {
    try {
      const user = await this.userRepository.save(createUserDto);

      return 'Criado o usuario ' + user
    } catch (error) {
      console.log(error)

    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: any) {
    try {
      return await this.userRepository.findOne(id);
    } catch (error) {
      console.log(error)
    }

    
  }

  async  update(id: any, updateUserDto: any) {
    try {

      const response = await this.userRepository.update(id, updateUserDto);
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: any) {
   try {



    return await this.userRepository.delete(id);
   } catch (error) {
    console.log(error)
   }
  }
}
