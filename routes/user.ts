import * as express from 'express'
import * as pc from '@prisma/client';

const router = express.Router();
const prisma = new pc.PrismaClient();

type User = {
    id: number,
    name: string,
    age: number,
    email: string | null,
    updatedAt: Date
}


/* GET users listing. */
router.get('/', async (req, res, next) => {
    const users: User[] = await prisma.user.findMany();
    res.json({
        users
    });
});

export default router;