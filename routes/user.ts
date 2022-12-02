import * as express from 'express'

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        users: [
            {id: 1, name: 'Taro', age: 18},
            {id: 2, name: 'Jiro', age: 17},
            {id: 3, name: 'Saburo', age: 15},
            {id: 4, name: 'Hanako', age: 18},
            {id: 5, name: 'Jane', age: 20},
        ]
    });
});

export default router;