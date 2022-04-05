import { addPlayer, getBestTimePlayer } from "../../controllers/player";

export default function playersSetup (app:any) {
    //route to add a player
    app.post('/players',addPlayer);

    //route the player with the best score
    app.get('/players/player',getBestTimePlayer);

}
