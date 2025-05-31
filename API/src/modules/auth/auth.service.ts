import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "segredo_supersecreto";

interface User {
  id: number;
  username: string;
  password: string;
}

const fakeUser: User = {
  id: 1,
  username: "YWRtaW4=",
  password: "MTIzNA==",
};

export class AuthService {
  //Faz o login validando username e password. Se positivo retorna um token jwt
  login(username: string, password: string): string | null {
    if (username === fakeUser.username && password === fakeUser.password) {
      const token = jwt.sign(
        { id: fakeUser.id, username: fakeUser.username },
        SECRET,
        {
          expiresIn: "1h",
        },
      );
      return token;
    }
    return null;
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, SECRET);
    } catch {
      return null;
    }
  }
}
