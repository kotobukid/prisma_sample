import * as express from 'express';
import fs from "fs";
import { check_session } from "./middlewares.js";
const router = express.Router();
/* GET home page. */
router.get('/', [check_session], function (req, res) {
    fs.readFile(new URL('../dist/index.html', import.meta.url), (err, data) => {
        res.end(data);
    });
});
export default router;
