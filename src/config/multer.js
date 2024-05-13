import multer from 'multer';
import { v4 } from 'uuid';

import { extname, resolve } from 'node:path';

export default {
    storege: multer.diskStorege({
        destination: resolve(__dirname, '..','..', 'upload'),
        filename: (request, file, callback) => {
            return callback(null, v4() + extname(file.originalname)) 
        }
    }),
};