import fs from "fs";

const serve_single_file = async (filepath: URL) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


export {
    serve_single_file
}