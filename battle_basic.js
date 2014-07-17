//declare player and enemy inital health
var playerHealth = 100;
var enemyHealth = 100;

//attack
function attack()
{
alert("You attack! 10 damage!");
enemyHealth = (enemyHealth - 10);
return enemyHealth;
}

//enemy's turn
function enemyTurn()
{
alert("enemy attacks! 10 damage!");
playerHealth = (playerHealth - 10);
}

//enemy's turn when he's pissed
function enemyTurnPissed()
{
alert("enemy attacks! 15 damage!");
playerHealth = (playerHealth - 15);
}

//tipping
function tipPizzaGuy() 
{
	var tip = (prompt("enter tip amount: $"));
	alert("$" + tip + " is too low! Now he's really pissed!");
	enemyTurnPissed();
}
