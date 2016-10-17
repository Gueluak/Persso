#importe <Fundation/fundation.h>

@implementation game_objet

 - (BOOL) defineHitBoxWhithCoordonateT_x: (int)t_x t_y:(int)t_y
 {
 	if ([form isEqualToString:@"square"])
 		return (t_x <= x + size_x && t_x >= x - size_x && t_y < y + size_y && t_y > y - size_y);
 	else if ([form isEqualToString:@"circle"])
 	{
 		
 	}
 }