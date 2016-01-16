
/**
 *Name:  Priscilla Hernandez-Monroy
 * Date: 01/15/16

 Assignment: PWA1 Goal1: Assignment: Duel1
 Part 1/3 of series
 */

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = ["Spiderman", 20, 100];
    console.log("index 0 is: ",playerOneName[0]);
    var playerTwoName = ["Batman", 20, 100];
    console.log("index 1 is: ",playerTwoName[1]);

    //player damage
    var player1Damage = [20];
    console.log("index 3 is: ",player1Damage[3]);
    var player2Damage = [20];
    console.log("index 4 is:",player2Damage[4]);

    //player health
    var playerOneHealth = [100];
    var playerTwoHealth = [100];

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
    fight();

})();