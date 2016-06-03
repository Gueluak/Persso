#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

char	ft_carte(int carte)
{
	if (carte == 0)
		return ('2');
	if (carte == 1)
		return ('3');
	if (carte == 2)
		return ('4');
	if (carte == 3)
		return ('5');
	if (carte == 4)
		return ('6');
	if (carte == 5)
		return ('7');
	if (carte == 6)
		return ('8');
	if (carte == 7)
		return ('9');
	if (carte == 8)
		return ('T');
	if (carte == 9)
		return ('J');
	if (carte == 10)
		return ('Q');
	if (carte == 11)
		return ('K');
	if (carte == 12)
		return ('A');
	return ('f');
}
/*
int		ft_sort_1(int card, int ecart, int pair, int relance, int reponce);
{
	if(relance)
	{

	}
	else
	{

	}
}

int		ft_sort_2(int card, int ecart, int pair, int relance, int reponce);
{
	if(relance)
	{

	}
	else
	{
		
	}
	
}

int		ft_sort_3(int card, int ecart, int pair, int relance, int reponce);
{
	if(relance)
	{

	}
	else
	{
		
	}
	
}

int		ft_sort_4(int card, int ecart, int pair, int relance, int reponce);
{
	if(relance)
	{

	}
	else
	{
		
	}
	
}

int		ft_sort_5(int card, int ecart, int pair, int relance, int reponce);
{
	if(relance)
	{

	}
	else
	{
		
	}
	
}

int		ft_sort_6(int card, int ecart, int pair, int relance, int reponce);
{
	if(relance)
	{

	}
	else
	{
		
	}
	
}*/

int		ft_sort(int reponce, int cart1, int cart2, int pair, int relance, int place)
{
	int		card;
	int		ecart;

	card = (cart1 > cart2 ? cart1 : cart2);
	ecart = (cart1 > cart2 ? cart1 : cart2) - (cart1 < cart2 ? cart1 : cart2);
/*	if (place == 1)
		return (ft_sort_1(card, ecart, pair, relance, reponce));
	if (place == 2)
		return (ft_sort_2(card, ecart, pair, relance, reponce));
	if (place == 3)
		return (ft_sort_3(card, ecart, pair, relance, reponce));
	if (place == 4)
		return (ft_sort_4(card, ecart, pair, relance, reponce));
	if (place == 5)
		return (ft_sort_5(card, ecart, pair, relance, reponce));
	if (place == 6)
		return (ft_sort_6(card, ecart, pair, relance, reponce));*/
	return (1);
}

int		main(int argc, char **argv)
{
	// recupere la plus grand des deux et monte jusque a 13 en meintenant l'ecart
	// verifi si la valeur rentrer est comprise
	// renvoiy true or false en fonction
	// as condition d'ecart
	//	stoquer couleur sur deuxiemme octer

	/*
		- generer deux carte, une position aleatoir et un eta
		- demander reponce
		- definir validiter
			- recupere le cas de la paire
			- atribuer valeur d'ecart et de parayage
			- recupere corespondance dans tableau
			- comparer et definir bonne reponce 
			- comparer reponce et bonne reponce

	*/
	int		env;
	char	*buff;
	int		cart1;
	int 	cart2;
	int		pair;
	int		relance;
	int		place;
	char	*s_place;

	buff = (char *)malloc(1);

	srand((unsigned int)(long)buff);

	while ((1))
	{
		env = (rand() % 13) + (rand() % 13) * 0x100 + (rand() % 8) * 0x10000 + (rand() % 6 + 1) * 0x1000000;

		cart1 = env & 0xf;
		cart2 = (env & 0xf00) >> 8;
		pair = (env & 0x30000) >> 16;
		relance = (env & 0x40000) >> 18;
		place = (env & 0xff000000) >> 24;
		if (place == 1)
			s_place = "UTG";	
		if (place == 2)
			s_place = "MP ";	
		if (place == 3)
			s_place = "CO ";	
		if (place == 4)
			s_place = "BU ";	
		if (place == 5)
			s_place = "SB ";	
		if (place == 6)
			s_place = "BB ";	
		printf("%c%c%c %s place = %s\n", ft_carte(cart1), ft_carte(cart2) ,(pair == 1 ? 's' : 'o'), (relance == 1 ? "call" : "raise"), s_place);
		read(0, buff, 1);
		if (ft_sort((buff[0] == 'o' ? 1 : 0), cart1, cart2, pair, relance, place))
			printf("good\n\n\n\n");
		else
			printf("bad\n\n\n\n");
	}
	return (0);
}