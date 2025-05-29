import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  //Recebe a requisição e valida o usuário e retorna o token se validado.
  login = (req: Request, res: Response): void => {
    const { username, password } = req.body;

    const token = this.authService.login(username, password);
    if (!token) {
      res.status(401).json({ message: 'Usuário ou senha inválidos' });
      return;
    }

    res.json({ token });
  }
}
