import { Router } from 'express';
import { UsersController } from './users.controller';

const router = Router();
const controller = new UsersController();

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Retorna a lista de usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   fullName:
 *                     type: string
 */
router.get('/', controller.getUsers);

export default router;
