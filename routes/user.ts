import * as express from 'express'
import * as pc from '@prisma/client';

const router = express.Router();
const prisma = new pc.PrismaClient();

/* GET users listing. */
router.get('/', async (req, res, next) => {
    const users = await prisma.user.findMany();
    res.json({
        users
    });
});

export default router;