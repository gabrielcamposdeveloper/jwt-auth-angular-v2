import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Autenticação",
      version: "1.0.0",
      description: "Documentação da API de autenticação com JWT",
    },
    servers: [
      {
        url: "http://localhost:5001/api",
      },
    ],
  },
  apis: ["src/modules/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
