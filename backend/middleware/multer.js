import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
destination: function (req, file, cb) {

    const uploadPath = path.join(__dirname, "..", "uploads"); 
cb(null, uploadPath);
},
filename: function (req, file, cb) {
cb(null, Date.now() + "." + file.mimetype.split("/")[1]);
},
});

const upload = multer({ storage });

export default upload;