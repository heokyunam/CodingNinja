function Soldier(x, y, direction) {
	this.x = x;
	this.y = y;
	this.direction = direction;
	this.isKilled = false;
}
Soldier.prototype.ninjaInArea = function() {
	if(this.x != ninja.x && this.y != ninja.y)
		return false;
	if(this.isKilled) return false;
	var x = this.x;
	var y = this.y;
	do {
		if(x == ninja.x && y == ninja.y) {
			return true;	
		}
		if(this.direction == up)
			y--;
		else if(this.direction == left)
			x--;
		else if(this.direction == right)
			x++;
		else if(this.direction == down)
			y++;
	}while(!isWall(stage.map[y][x]))
	return false;
};
Soldier.prototype.ninjaFindSoldier = function() {
	if(this.isKilled) return not;
	var x = ninja.x;
	var y = ninja.y;
	var realDirection = not;
	if(this.x == x && this.y == y - 1) realDirection = up;
	else if(this.x == x && this.y == y + 1) realDirection = down;
	else if(this.x == x - 1 && this.y == y) realDirection = left;
	else if(this.x == x + 1 && this.y == y) realDirection = right;
	if(realDirection == not) return not;
	return ninja.relativeDirection(realDirection);
};