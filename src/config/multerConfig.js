import multer from 'multer';
import { extname, resolve } from 'path';

/* Função para gerar um número aleátorio */
const aleatorio = () => Math.floor(Math.random() * 100000);

export default {
    // Método do pacote multer para filtar os tipos de arquivos que poderam ser enviado
    fileFilter: (req, file, callback) => {
        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
            return callback(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'), false);
        }

        return callback(null, true);
    },

    // Método do local para salvar a imagem
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
        },
        filename: (req, file, callback) => {
            callback(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        },
    }),
};
