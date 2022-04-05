import mongoose from 'mongoose'

export interface IPlayer extends Document {
    userName: string;
    timeToWin: Number;
};

// Create Schema Player
const PlayerSchema = new mongoose.Schema({
    userName: String,
    timeToWin: Number,

},
    {
        timestamps: true
    }
);


const Player = mongoose.model<IPlayer>('players', PlayerSchema);
export default Player;

