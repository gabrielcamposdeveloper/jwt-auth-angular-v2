import { Request, Response } from 'express';
import { UsersService } from './users.service';

export class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  getUsers = (req: Request, res: Response): void => {
    const users = this.usersService.getAllUsers();
    res.json(users);
  }
}
