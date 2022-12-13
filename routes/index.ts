import * as express from 'express';
import {check_session} from "./middlewares.js";
import {serve_single_file} from "./common.js";

const router = express.Router();

/* GET home page. */
router.get('/', [check_session], function (req: express.Request, res: express.Response) {
    serve_single_file(new URL('../dist/index.html', import.meta.url)).then(data => {
        res.end(data)
    }).catch(err => {
        console.error(err);
        throw err;
    })
});

export default router;