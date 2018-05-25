var ninja = {
		//x, y, direction, isHiding
		init : function() {
			this.x = stage.startX;
			this.y = stage.startY;
			this.direction = up;
			this.isHiding = false;
		},
		moveForward : function() {
			var direction = this.direction;
			this.isHiding = false;
			if(direction == up)
				this.y--;
			else if(direction == left)
				this.x--;
			else if(direction == right)
				this.x++;
			else if(direction == down)
				this.y++;
		},
		turnLeft : function() {
			if(this.direction == left)
				this.direction = down;
			else
				this.direction--;
		},
		turnRight : function() {
			if(this.direction == down)
				this.direction = left;
			else
				this.direction++;
		},
		goAndHide : function() {
			if(this.existShadow() == up) {
				this.moveForward();
				this.isHiding = true;
			}
		},
		kill : function(direction) {
			var towardX = ninja.x;
			var towardY = ninja.y;
			var sldrs = stage.soldiers;
			if(sldrs == null) return;
			var realDirection = this.realDirection(direction);
			if(realDirection == up) towardY--;
			else if(realDirection == left) towardX--;
			else if(realDirection == right) towardX++;
			else if(realDirection == down) towardY++;
			for(var i = 0; i < sldrs.length; i++) {
				if(sldrs[i].x == towardX && sldrs[i].y == towardY) {
					sldrs[i].isKilled = true;
					console.log("kill success");
				}
			}
		},
		existWall : function() {
			var direction = this.direction;
			var x = ninja.x;
			var y = ninja.y;
			var map = stage.map;
			var realDirection;
			if(direction == up && isWall(map[y-1][x]))
				realDirection = up;
			else if(direction == left && isWall(map[y][x-1]))
				realDirection = left;
			else if(direction == right && isWall(map[y][x+1]))
				realDirection = right;
			else if(direction == down && isWall(map[y+1][x]))
				realDirection = down;
			else
				return not;
			return this.relativeDirection(realDirection);
		},
		//방향까지
		existSoldier : function() {
			var sldrs = stage.soldiers;
			if(sldrs == null) return false;
			var relativeDirection = not;
			for(var i = 0; i < sldrs.length; i++) {
				if(sldrs[i].isKilled) continue;
				var direction = sldrs[i].ninjaFindSoldier();
				if(direction != not) relativeDirection = direction;
			}
			if(relativeDirection == not) return not;
			return relativeDirection;
		},
		//존재하는 방향까지
		existShadow : function() {
			var direction = this.direction;
			var x = ninja.x;
			var y = ninja.y;
			var map = stage.map;
			var realDirection;
			if(map[y-1][x] == shdw)
				realDirection = up;
			else if(map[y][x-1] == shdw)
				realDirection = left;
			else if(map[y][x+1] == shdw) 
				realDirection = right;
			else if(map[y+1][x] == shdw)
				realDirection = down;
			else
				return not;
			if(realDirection == not) throw new Exception();
			return this.relativeDirection(realDirection);
		},

		//left down -3
		// 1 -> left
		// left -> 1
		// 1 + down = 5
		// 1 -> left
		
		//right left 2
		// 2 -> down
		// down -> 2
		// 2 + left = 3
		// 3 -> right
		
		//left up -> -1
		//3 -> right
		relativeDirection : function(realDirection) {
			var relativeDirection = realDirection + -1 * (this.direction - 2);
			if(relativeDirection > down) relativeDirection -= 4;
			if(relativeDirection < left) relativeDirection += 4;
			return relativeDirection;
		},
		realDirection : function(relativeDirection) {
			var realDirection = relativeDirection + this.direction - 2;
			if(realDirection > down) realDirection -= 4;
			if(realDirection < left) realDirection += 4;
			return realDirection;
		},
};