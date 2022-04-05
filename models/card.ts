import mongoose from 'mongoose'

export interface ICard extends mongoose.Document {
    name: string;
    src: string;
};

// Create Schema card
const CardSchema = new mongoose.Schema({
    name: String,
    src: String,

},
    {
        timestamps: true
    }
);


const Card = mongoose.model<ICard>('cards', CardSchema);
export default Card;

