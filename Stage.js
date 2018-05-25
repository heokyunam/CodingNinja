var stage = {
		//map, startX, startY, endX, endY, height, width, soldiers, soldierNum
		init : function() {
			if(this.soldiers != null) {
				for(var i = 0; i < this.soldiers.length; i++)
					this.soldiers[i].isKilled = false;
			}
		},
		collisionCheck : function(msg) {
			if(!ninja.isHiding && this.soldiers != null) {
				var soldiers = this.soldiers;
				for(var i = 0;i < soldiers.length; i++) {
					var ninjaInArea = soldiers[i].ninjaInArea();
					if(ninjaInArea) {
						msg.value = "닌자가 감시망에 잡혔습니다!";
						return false;	
					}
				}
			}
			if(this.isNinjaInWall()) {
				msg.value = "닌자가 벽을 향해 돌진하고 있습니다!";
				return false;
			}
			if(this.isNinjaInGate()) {
				localStorage.setItem("level", stageNum);
				msg.value = "스테이지를 클리어했습니다!";
				return true;
			}
			return true;
		},
		isNinjaInGate : function() {
			if(this.map[ninja.y][ninja.x] == end)
				return true;
			else
				return false;
		},
		isNinjaInWall : function() {
			if(isWall(this.map[ninja.y][ninja.x]))
				return true;
			else
				return false;
		},
		getObject : function(x, y) {
			try {
				return this.map[ninja.x][ninja.y];				
			}catch(e) {
				exception(e);
				return null;
			}
		},
		//병사가 움직일때
		soldiersUpdate : function() {
			
		},
};

function isWall(tile) {
	return (tile == wall || tile == nrwl || tile == wdow);
};

function stageClear() {
	stageNum++;
	setHelp();
	if(stageNum == 1) {
		stage.map = new Array(13);
		stage.map[0] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[1] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[2] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, end, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[3] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[4] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[5] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[6] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[7] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[8] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[9] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[10] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[11] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[12] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.startX = 8;
		stage.startY = 10;
		stage.endX = 8;
		stage.endY = 2;
		stage.height = 13;
		stage.width = 17;
		
		stage.soldiers = null;
	}
	else if(stageNum == 2) {
		stage.map = new Array(13);
		stage.map[0] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[1] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[2] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, end, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[3] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[4] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[5] = new Array(wall, wall, wall, wall, wall, wall, nrwl, nrwl, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[6] = new Array(wall, wall, wall, wall, wall, wall, road, road, shdw, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[7] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[8] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[9] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[10] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[11] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[12] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.startX = 8;
		stage.startY = 10;
		stage.endX = 8;
		stage.endY = 2;
		stage.height = 13;
		stage.width = 17;
		
		stage.soldiers = new Array(1);
		stage.soldiers[0] = new Soldier(6, 6, right);
	}
	else if(stageNum == 3) {
		stage.map = new Array(13);
		stage.map[0] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[1] = new Array(wall, wall, wall, wall, nrwl, nrwl, wdow, nrwl, nrwl, wdow, nrwl, nrwl, wall, wall, wall, wall, wall);
		stage.map[2] = new Array(wall, wall, wall, wall, road, road, road, road, road, road, road, road, wall, wall, wall, wall, wall);
		stage.map[3] = new Array(wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall);
		stage.map[4] = new Array(wall, wall, wall, wall, road, wall, wall, wall, wall, wall, wall, road, wall, wall, wall, wall, wall);
		stage.map[5] = new Array(wall, wall, wall, wall, road, wall, nrwl, nrwl, nrwl, nrwl, wall, road, wall, wall, wall, wall, wall);
		stage.map[6] = new Array(wall, wall, wall, wall, road, wall, road, road, road, end, wall, road, wall, wall, wall, wall, wall);
		stage.map[7] = new Array(wall, wall, wall, wall, road, wall, road, wall, road, wall, wall, road, wall, wall, wall, wall, wall);
		stage.map[8] = new Array(wall, wall, wall, wall, road, wall, road, wall, road, wall, wall, road, wall, wall, wall, wall, wall);
		stage.map[9] = new Array(wall, wall, wall, wall, road, wall, road, nrwl, road, nrwl, nrwl, road, wall, wall, wall, wall, wall);
		stage.map[10] = new Array(wall, wall, wall, wall, road, wall, road, road, road, road, road, road, wall, wall, wall, wall, wall);
		stage.map[11] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[12] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.startX = 4;
		stage.startY = 10;
		stage.endX = 9;
		stage.endY = 6;
		stage.height = 13;
		stage.width = 17;
		
		stage.soldiers = null;
	}
	else if(stageNum == 4) {
		stage.map = new Array(13);
		stage.map[0] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[1] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[2] = new Array(wall, wall, wall, wall, wall, wall, nrwl, nrwl, wdow, nrwl, wall, wall, wall, wall, wall, wall, wall);
		stage.map[3] = new Array(wall, wall, wall, wall, wall, wall, road, road, road, road, wall, wall, wall, wall, wall, wall, wall);
		stage.map[4] = new Array(wall, wall, wall, wall, wall, wall, road, wall, wall, road, wall, wall, wall, wall, wall, wall, wall);
		stage.map[5] = new Array(wall, wall, wall, wall, wall, wall, road, nrwl, nrwl, road, wall, wall, wall, wall, wall, wall, wall);
		stage.map[6] = new Array(wall, wall, wall, wall, wall, wall, road, road, road, road, nrwl, nrwl, wall, wall, wall, wall, wall);
		stage.map[7] = new Array(wall, wall, wall, wall, wall, wall, road, wall, wall, shdw, road, road, wall, wall, wall, wall, wall);
		stage.map[8] = new Array(wall, wall, wall, wall, wall, wall, road, wall, wall, road, wall, wall, wall, wall, wall, wall, wall);
		stage.map[9] = new Array(wall, wall, wall, wall, wall, wall, road, wall, wall, road, wall, wall, wall, wall, wall, wall, wall);
		stage.map[10] = new Array(wall, wall, wall, wall, wall, wall, road, wall, wall, end, wall, wall, wall, wall, wall, wall, wall);
		stage.map[11] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[12] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.startX = 6;
		stage.startY = 10;
		stage.endX = 8;
		stage.endY = 10;
		stage.height = 13;
		stage.width = 17;
		
		stage.soldiers = new Array(2);
		stage.soldiers[0] = new Soldier(7, 6, right);
		stage.soldiers[1] = new Soldier(11, 7, left);
	}
	else if(stageNum == 5) {
		stage.map = new Array(13);
		stage.map[0] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[1] = new Array(wall, wall, nrwl, wdow, nrwl, nrwl, wdow, nrwl, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[2] = new Array(wall, wall, road, road, road, road, road, road, wall, wall, nrwl, wdow, nrwl, nrwl, wall, wall, wall);
		stage.map[3] = new Array(wall, wall, road, wall, wall, wall, wall, road, wall, wall, road, road, road, road, wall, wall, wall);
		stage.map[4] = new Array(wall, wall, road, wall, wall, wall, wall, road, wall, wall, road, wall, wall, road, wall, wall, wall);
		stage.map[5] = new Array(wall, wall, road, wall, wall, wall, wall, road, wall, wall, road, wall, wall, road, wall, wall, wall);
		stage.map[6] = new Array(wall, wall, road, nrwl, nrwl, nrwl, nrwl, road, wall, wall, road, wall, wall, road, wall, wall, wall);
		stage.map[7] = new Array(wall, wall, shdw, road, road, road, road, shdw, wall, wall, road, wall, wall, road, wall, wall, wall);
		stage.map[8] = new Array(wall, wall, road, wall, wall, wall, wall, road, nrwl, nrwl, road, nrwl, nrwl, road, wall, wall, wall);
		stage.map[9] = new Array(wall, wall, road, wall, wall, wall, wall, road, shdw, road, road, road, road, road, wall, wall, wall);
		stage.map[10] = new Array(wall, wall, road, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, end, wall, wall, wall);
		stage.map[11] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[12] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.startX = 2;
		stage.startY = 10;
		stage.endX = 13;
		stage.endY = 10;
		stage.height = 13;
		stage.width = 17;
		
		stage.soldiers = new Array(3);
		stage.soldiers[0] = new Soldier(4, 7, left);
		stage.soldiers[1] = new Soldier(5, 7, right);
		stage.soldiers[2] = new Soldier(11, 9, right);
	}
	else if(stageNum == 6) {
		/*
		stage.map = new Array(13);
		stage.map[0] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[1] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[2] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[3] = new Array(wall, wall, wall, wall, nrwl, nrwl, nrwl, nrwl, nrwl, wall, nrwl, nrwl, nrwl, wall, wall, wall, wall);
		stage.map[4] = new Array(wall, wall, wall, wall, road, road, road, shdw, road, wall, road, road, road, wall, wall, wall, wall);
		stage.map[5] = new Array(wall, wall, wall, wall, road, wall, wall, road, road, wall, road, wall, road, wall, wall, wall, wall);
		stage.map[6] = new Array(wall, wall, wall, wall, road, wall, wall, road, road, wall, road, wall, road, wall, wall, wall, wall);
		stage.map[7] = new Array(wall, wall, wall, wall, road, wall, wall, road, road, wall, end, wall, road, wall, wall, wall, wall);
		stage.map[8] = new Array(wall, wall, wall, nrwl, road, nrwl, nrwl, road, road, wall, wall, wall, road, wall, wall, wall, wall);
		stage.map[9] = new Array(wall, wall, wall, road, shdw, road, road, shdw, road, nrwl, nrwl, nrwl, road, wall, wall, wall, wall);
		stage.map[10] = new Array(wall, wall, wall, wall, road, wall, wall, road, road, road, road, road, road, wall, wall, wall, wall);
		stage.map[11] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.map[12] = new Array(wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall, wall);
		stage.startX = 4;
		stage.startY = 10;
		stage.endX = 10;
		stage.endY = 7;
		stage.height = 13;
		stage.width = 17;
		
		stage.soldiers = new Array(2);
		stage.soldiers[0] = new Soldier(3, 9, right);
		stage.soldiers[1] = new Soldier(8, 10, up);
		*/
		alert("스테이지들을 모두 클리어 하셨습니다!");
	}
	ninja.init();
	draw();
};