//Who's going to win?
//Option 1: Milwaukee
//Option 2: Bucks

//Bet Class
class Bet {
    //Class property types
    private player1: types.Player;
    private player2: types.Player;
    private option1: types.Option;
    private option2: types.Option;

    constructor(player1: types.Player, player2: types.Player, option1: types.Option, option2: types.Option) {
        this.player1 = player1;
        this.player2 = player2;
        this.option1 = option1;
        this.option2 = option2;
    }

    
}


//Initializing the Bet class