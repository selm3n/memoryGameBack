import Player from "../models/player";
import { Request, Response, NextFunction } from 'express';

//add a new player score
export const addPlayer = (req: Request, res: Response, next: NextFunction) => {
    try {
        const newPlayer = new Player({
            userName: req.body.userName.toLowerCase(),
            timeToWin: req.body.timeToWin
        });

        newPlayer.save().then((player: any) => res.json(
            {
                status: "success",
                message: "Player successfully added",
                data: player
            }
        ))

    } catch (err:any) {
        console.log(err);
        throw new Error(err.message);
    }
}

//get best score
export const getBestTimePlayer = (req: Request, res: Response, next: NextFunction) => {
    try {
        Player.findOne().sort({ "timeToWin": 1 }).limit(1).then((player: any) => res.json(
            {
                status: "success",
                data: player
            }
        ))

    } catch (err:any) {
        console.log(err);
        throw new Error(err.message);
    }
}
