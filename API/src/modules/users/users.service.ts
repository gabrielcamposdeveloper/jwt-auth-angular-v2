export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
}

export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: "admin",
      email: "admin@exemplo.com",
      fullName: "Administrador",
    },
    {
      id: 2,
      username: "jose",
      email: "jose@exemplo.com",
      fullName: "José Silva",
    },
    {
      id: 3,
      username: "maria",
      email: "maria@exemplo.com",
      fullName: "Maria Souza",
    },
    {
      id: 4,
      username: "joao",
      email: "joao@exemplo.com",
      fullName: "João Pereira",
    },
    {
      id: 5,
      username: "ana",
      email: "ana@exemplo.com",
      fullName: "Ana Oliveira",
    },
    {
      id: 6,
      username: "paulo",
      email: "paulo@exemplo.com",
      fullName: "Paulo Gomes",
    },
    {
      id: 7,
      username: "lucia",
      email: "lucia@exemplo.com",
      fullName: "Lúcia Martins",
    },
    {
      id: 8,
      username: "carlos",
      email: "carlos@exemplo.com",
      fullName: "Carlos Mendes",
    },
    {
      id: 9,
      username: "patricia",
      email: "patricia@exemplo.com",
      fullName: "Patrícia Reis",
    },
    {
      id: 10,
      username: "fernando",
      email: "fernando@exemplo.com",
      fullName: "Fernando Lima",
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }
}
