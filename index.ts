//Who's going to win?
//Option 1: Milwaukee
//Option 2: Bucks
namespace app {
    //Bet Class
    class Bet {
        //Class property types
        private player1: app.Player;
        private player2: app.Player;
        private option1: app.Option;
        private option2: app.Option;

        constructor(player1: app.Player, player2: app.Player) {
            this.player1 = player1;
            this.player2 = player2;
        }

        defineBet = (option1: app.Option, option2: app.Option): void => {
            this.option1 = option1;
            this.option2 = option2;
        }
    }
}



//Initializing the Bet class