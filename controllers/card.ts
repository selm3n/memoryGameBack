import { Request, Response, NextFunction } from 'express';
import Card from "../models/card"


interface MulterRequest extends Request {
    files: any;
}

//add new card game
export const addCard = (req: MulterRequest, res: Response, next: NextFunction) => {
    try {
        const newCard = new Card({
            name: req.body.name.toLowerCase(),
        });

        if (req.files.src && req.files.src[0]) {
            newCard.src = `${process.env.REACT_APP_MEDIA_PATH}/${req.files.src[0].filename}`;
        }

        newCard.save().then((card: any) => res.json(
            {
                status: "success",
                message: "Card successfully added",
                data: card
            }
        ))

    } catch (err: any) {
        console.log(err);
        throw new Error(err.message);
    }
}

//get all cards
export const allCards = (req: Request, res: Response, next: NextFunction) => {
    try {
        Card.find().then((cards: any) => res.json(
            {
                status: "success",
                data: cards
            }
        ))

    } catch (err: any) {
        console.log(err);
        throw new Error(err.message);
    }
}
