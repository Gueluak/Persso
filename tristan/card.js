
var card_1_nb = 0;
var card_1_color = 0;
var card_2_nb = 0;
var card_2_color = 0;
var	start = 1;
var	up = 0;
var	cobu = 0;

	piktoken(start);
	generation(); 
	dead_suivre();

function	good_bad(gb)
{
	if (gb)
	{
		$('#do').html('Good');
		$('#ans').css('background-color', '#2ecc71');
	}
	else
	{
		$('#do').html('Bad');
		$('#ans').css('background-color', '#c0392b');
	}
}

$('#Fold').click(function()
{
	if (up == 0)
	{
		if (test_reponce_dwn() == 0)
			good_bad(1);
		else
			good_bad(0);
	}
	else
	{
		if (test_relance() == 0 && test_suivre() == 0)
			good_bad(1);
		else
			good_bad(0);
	}
	reload();
});

$('#Suivre').click(function()
{
	if (test_suivre() == 1)
			good_bad(1);
	else
			good_bad(0);
	reload();
});

$('#Relancer').click(function()
{
	if (up == 0)
	{
		if (test_reponce_dwn() == 1)
			good_bad(1);
		else
			good_bad(0);
	}
	else
	{
		if (test_relance() == 1)
			good_bad(1);
		else
			good_bad(0);
	}
	reload();
});

function	test_relance()
{
	var result = 0;
	if (start <= 2 || start == 6)
		result = relance_1();
	else
		result = relance_2();
	return result;
}

function	test_suivre()
{
	var	result = 0;
	if (start == 2)
		result = suivre_mp();
	if (start == 1 || start == 5 || start == 4)
		result = suivre_co();
	if (start == 6)
		result = suivre_bu();
	return result;

}

function	suivre_mp()
{
	if (card_1_nb == card_2_nb)
		return (1);
	if (Math.max(card_2_nb, card_1_nb) == 13 && Math.min(card_1_nb, card_2_nb) >= 10)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 12)
		return (1);
	return (0);
}

function	suivre_co()
{
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 10)
		return (1);
	if (suivre_mp() == 1)
		return (1);
	return (0);
}

function	suivre_bu()
{
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 8)
		return (1);
	if (suivre_co() == 1)
		return (1);
	return (0);
}

function	relance_1()
{
	if (card_1_nb == card_2_nb && card_1_nb >= 11)
		return (1);
	if (Math.max(card_1_nb, card_2_nb) == 13 && Math.min(card_2_nb, card_1_nb) == 12)
		return (1);
	return (0);
}

function	relance_2()
{
	if (Math.max(card_2_nb, card_1_nb) == 13 && Math.min(card_1_nb, card_2_nb) >= 11 && cobu == 1)
		return (1);
	if (card_1_nb == card_2_nb && card_1_nb >= 10 && cobu == 1)
		return (1);
	if (relance_1() == 1)
		return (1);
	return (0);
}

function	test_reponce_dwn()
{
	var result = 0;
	if (start == 3)
		result = verif_utg_dwn();
	if (start == 2)
		result = verif_mp_dwn();
	if (start == 1)
		result = verif_co_dwn();
	if (start >= 4)
		result = verif_bu_dwn();
	return result;
}

function	verif_utg_dwn()
{
	if (card_1_nb == card_2_nb)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 12)
		return (1);
	if (Math.max(card_2_nb, card_1_nb) == 13 && Math.min(card_1_nb, card_2_nb) >= 11)
		return (1);
	return (0);
}

function	verif_mp_dwn()
{
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 10)
		return (1);
	if (verif_utg_dwn() == 1)
		return (1);
	return (0);
}

function	verif_co_dwn()
{
	if (Math.max(card_2_nb, card_1_nb) == 13 && Math.min(card_1_nb, card_2_nb) >= 9)
		return (1);
	if (Math.max(card_2_nb, card_1_nb) == 13 && Math.min(card_1_nb, card_2_nb) >= 6 && card_1_color == card_2_color)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 1 && Math.max(card_1_nb, card_2_nb) >= 10)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 9)
		return (1);
	if (verif_mp_dwn() == 1)
		return (1);
	return (0);
}

function	verif_bu_dwn()
{
	if (Math.max(card_1_nb, card_2_nb) == 13 && card_1_color == card_2_color)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 1 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 6)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 1 && Math.max(card_1_nb, card_2_nb) >= 8)
		return (1);
	if (Math.abs(card_2_nb - card_1_nb) == 2 && card_2_color == card_1_color && Math.max(card_1_nb, card_2_nb) >= 9)
		return (1);
	if (verif_co_dwn() == 1)
		return (1);
	return (0);
}

function	reload()
{

	card_1_nb = 0;
	card_1_color = 0;
	card_2_nb = 0;
	card_2_color = 0;
	$('#testout').children().each(function(){
		$(this).remove();
	});
	start++;
	if (start == 7)
		start = 1;
	piktoken(start);
	generation();
	dead_suivre();

	//suprimer chaque enfant et relancer le reste
	//document.getElementById('testout').removeChild(document.getElementByTagName('img'));
	//window.location.reload();
}

function 	dead_suivre()
{
	if (up == 0)
	{
		$('#Suivre').css('display', 'none')
	}
	else
	{
		$('#Suivre').css('display', 'inline-block')
	}
}

function 	puttoken(start)
{
	if (start == 1)
	{$('<img class = token src = ressource/5.png style = position:absolute;left:27vw;top:0vw;>').appendTo($('#testout'));}
	else if (start == 2)
	{$('<img class = token src = ressource/5.png style = position:absolute;left:9vw;top:-22vw;>').appendTo($('#testout'));}
	else if (start == 3)
	{$('<img class = token src = ressource/5.png style = position:absolute;left:45vw;top:-30vw;>').appendTo($('#testout'));}
	else if (start == 4)
	{$('<img class = token src = ressource/5.png style = position:absolute;left:80vw;top:-22vw;>').appendTo($('#testout'));}
	else if (start == 5)
	{$('<img class = token src = ressource/5.png style = position:absolute;left:63vw;top:0vw;>').appendTo($('#testout'));}
}

function 	putdeal(start, name)
{
	if (start == 1)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:27vw;top:0vw;>').appendTo($('#testout'));}
	else if (start == 2)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:4vw;top:-27vw;>').appendTo($('#testout'));}
	else if (start == 3)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:39vw;top:-35vw;>').appendTo($('#testout'));}
	else if (start == 4)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:76vw;top:-29vw;>').appendTo($('#testout'));}
	else if (start == 5)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:63vw;top:0vw;>').appendTo($('#testout'));}
	else if (start == 6)
	{$('<img class = token src = ressource/'+name+'.png style = position:absolute;left:43vw;top:-9vw;>').appendTo($('#testout'));}
}

function 	pose_question()
{
	return true;
}

function	piktoken(start)
{
	cobu = 0;
	up = 0;
	var	game = 0;
	var tok = start + 3;
	putdeal(start, "deal");
	putdeal(start + 1 < 7 ? start + 1 : start - 5, "lb");
	putdeal(start + 2 < 7 ? start + 2 : start - 4, "bb");
	for (var i = 0; i < 6; i++) 
	{
		game = Math.floor((Math.random()* 4) + 1);
		if (tok == 6) 
			return pose_question();
		else if (game == 1)
		{
			if (start - tok == 0 || start - tok == 1)
				cobu = 1;
			up = 1;
			if (tok >= 7)
				tok -= 6;
			puttoken(tok);
		}
		tok ++;
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
		$('<img class = card src = ressource/'+(card_1_nb + 1)+'-pique.jpg>').appendTo($('#testout'));
	else if (card_1_color == 2)
		$('<img class = card src = ressource/'+(card_1_nb + 1)+'-carreau.jpg>').appendTo($('#testout'));
	else if (card_1_color == 3)
		$('<img class = card src = ressource/'+(card_1_nb + 1)+'-coeur.jpg>').appendTo($('#testout'));
	else if (card_1_color == 4)
		$('<img class = card src = ressource/'+(card_1_nb + 1)+'-trefle.jpg>').appendTo($('#testout'));

	if (card_2_color == 1)
		$('<img class = card src = ressource/'+(card_2_nb + 1)+'-pique.jpg>').appendTo($('#testout'));
	else if (card_2_color == 2)
		$('<img class = card src = ressource/'+(card_2_nb + 1)+'-carreau.jpg>').appendTo($('#testout'));
	else if (card_2_color == 3)
		$('<img class = card src = ressource/'+(card_2_nb + 1)+'-coeur.jpg>').appendTo($('#testout'));
	else if (card_2_color == 4)
		$('<img class = card src = ressource/'+(card_2_nb + 1)+'-trefle.jpg>').appendTo($('#testout'));

}