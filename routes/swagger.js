import * as express from 'express';
import fs from "fs";
const router = express.Router();
router.get('/', function (req, res) {
    res.render('swagger.pug');
});
router.get('/config', (req, res) => {
    fs.readFile(new URL('../sample.yaml', import.meta.url), (err, data) => {
        res.end(data);
    });
});
export default router;
