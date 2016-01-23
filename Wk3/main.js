
/**
 *Name:  Priscilla Hernandez-Monroy
 * Date: 01/22/16

 Assignment: PWA1 Goal3: Assignment: Duel3
 Part 1/4 of series
 */

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //spiderman and batman are the player names 
    var Spiderman = ["Spiderman", 20, 100];
    console.log("index 0 is: ",Spiderman[0]);
    var Batman = ["Batman", 20, 100];
    console.log("index 1 is: ",Batman[1]);

    //players damage
    var SpidermAn = [20];
    console.log("index 3 is: ",Spiderman[3]);
    var Batman = [20];
    console.log("index 4 is:",Batman[4]);

    //players health both at 100 
    var Spiderman = [100];
    var Batman = [100];

    //initiate round
    var round=0;

    function fight(){
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = Spiderman * .5;
            var minDamage2 = Batman * .5;
            var f1 = Math.floor(Math.random()*(Spiderman-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(Batman-minDamage2)+minDamage2);

            //inflict damage
            Spiderman-=f1;
           	Batman-=f2;
			//console.log for player health
            console.log(Spiderman+": "+Spiderman + " " + Batman+":"+Batman);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
               
            } else{
                alert(result);
                break;
            };

        };
    };
	//Results of winner
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