import * as express from 'express';
import {serve_single_file} from "./common.js";

const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
    res.render('swagger.pug');
});

router.get('/config', (req, res) => {
    const path: URL = new URL('../sample.yaml', import.meta.url);
    serve_single_file(path).then((data) => {
        res.end(data);
    }).catch((err) => {
        console.error(err);
        throw err;
    });
});
export default router;