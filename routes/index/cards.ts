import { addCard, allCards }from "../../controllers/card";
import { Request } from 'express'
var multer = require("multer");
import path from "path";
type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void


const storage = multer.diskStorage({
    destination: function (req: Request, file:Express.Multer.File, cb:DestinationCallback) {
        cb(null, path.join(__dirname, "../../uploads"));
    },
    filename: function (req: Request, file:Express.Multer.File, cb:FileNameCallback) {
        cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
    },
    language: function (req: Request, file:any, cb:any) {
        cb(null, Date.now() + "-" + file.language.replace(/\s/g, ""));
    }
});
const upload = multer({
    storage: storage,
});

export default function cardsSetup (app:any) {
    //route to add a new card
    app.post('/cards',
    upload.fields([
        { name: "src", maxCount: 1 },
    ]),
    addCard);

    //route to get all cards
    app.get('/cards',allCards);

}
