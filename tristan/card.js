
var card_1_nb = 0;
var card_1_color = 0;
var card_2_nb = 0;
var card_2_color = 0;
var	test = 0;

	piktoken(1);
	generation(); 

$('#ok').click(function()
{
	//suprimer chaque enfant et relancer le reste
	//document.getElementById('testout').removeChild(document.getElementByTagName('img'));
	//window.location.reload();
});

function 	puttoken(start, name)
{
	if (start == 1)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:27vw;top:0vw;>').appendTo($('#testout'));}
	else if (start == 2)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:9vw;top:-22vw;>').appendTo($('#testout'));}
	else if (start == 3)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:45vw;top:-30vw;>').appendTo($('#testout'));}
	else if (start == 4)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:80vw;top:-22vw;>').appendTo($('#testout'));}
	else if (start == 5)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:63vw;top:0vw;>').appendTo($('#testout'));}
}

function 	pose_question()
{
	return true;
}

function	piktoken(start)
{
	var	game = 0;
	puttoken(start, "deal");
	for (var i = 0; i < 6; i++) 
	{
		game = Math.floor((Math.random()* 4) + 1);
		console.log(game);
		if (start == 6) 
			return pose_question();
		else if (game == 1)
			puttoken(start, "5");
		start ++;
	}
}

function	generation()
{
	while(card_1_nb == card_2_nb && card_1_color == card_2_color)
	{

		card_1_nb = Math.floor((Math.random() * 13) + 1);
		card_1_color = Math.floor((Math.random() * 4) + 1);
		card_2_nb = Math.floor((Math.random() * 13) + 1);
		card_2_color = Math.floor((Math.random() * 4) + 1);
	}

	if (card_1_color == 1)
		$('<img class = card src = ressource/'+card_1_nb+'-pique.jpg>').appendTo($('#testout'));
	else if (card_1_color == 2)
		$('<img class = card src = ressource/'+card_1_nb+'-carreau.jpg>').appendTo($('#testout'));
	else if (card_1_color == 3)
		$('<img class = card src = ressource/'+card_1_nb+'-coeur.jpg>').appendTo($('#testout'));
	else if (card_1_color == 4)
		$('<img class = card src = ressource/'+card_1_nb+'-trefle.jpg>').appendTo($('#testout'));

	if (card_2_color == 1)
		$('<img class = card src = ressource/'+card_2_nb+'-pique.jpg>').appendTo($('#testout'));
	else if (card_2_color == 2)
		$('<img class = card src = ressource/'+card_2_nb+'-carreau.jpg>').appendTo($('#testout'));
	else if (card_2_color == 3)
		$('<img class = card src = ressource/'+card_2_nb+'-coeur.jpg>').appendTo($('#testout'));
	else if (card_2_color == 4)
		$('<img class = card src = ressource/'+card_2_nb+'-trefle.jpg>').appendTo($('#testout'));

	card_1_nb = 0;
	card_1_color = 0;
	card_2_nb = 0;
	card_2_color = 0;
}