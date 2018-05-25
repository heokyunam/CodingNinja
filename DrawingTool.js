var DrawingTool = {
	imageInit : function() {
		context = document.getElementById("canvas").getContext("2d");
		this.imgNinjaU = new Image();
		this.imgNinjaL = new Image();
		this.imgNinjaR = new Image();
		this.imgNinjaD = new Image();
			
		this.imgSldrU = new Image();
		this.imgSldrL = new Image();
		this.imgSldrR = new Image();
		this.imgSldrD = new Image();
			
		this.imgRoad = new Image();
		this.imgShdw = new Image();
		this.imgRoof = new Image();
		this.imgDoor = new Image();
		this.imgNearWall = new Image();
		this.imgWindow = new Image();
		
		this.imgNinjaU.src = "image/ninja_up.png";
		this.imgNinjaL.src = "image/ninja_left.png";
		this.imgNinjaR.src = "image/ninja_right.png";
		this.imgNinjaD.src = "image/ninja_down.png";
			
		this.imgSldrU.src = "image/soldier_up.png";
		this.imgSldrL.src = "image/soldier_left.png";
		this.imgSldrR.src = "image/soldier_right.png";
		this.imgSldrD.src = "image/soldier_down.png";
			
		this.imgRoad.src = "image/road.png";
		this.imgShdw.src = "image/shadow.png";
		this.imgRoof.src = "image/roof.png";
		this.imgDoor.src = "image/door.png";
		this.imgNearWall.src = "image/wall.png";
		this.imgWindow.src = "image/window.png"
	},
	draw : function(stage) {
		var map = stage.map;
		var image = this.imgRoof;
		for(var i = 0; i < stage.width; i++) {
			for(var j = 0; j < stage.height; j++) {
				if(map[j][i] == wall)
					image = this.imgRoof;
				else if(map[j][i] == road)
					image = this.imgRoad;
				else if(map[j][i] == shdw)
					image = this.imgShdw;
				else if(map[j][i] == end)
					image = this.imgDoor;
				else if(map[j][i] == nrwl)
					image = this.imgNearWall;
				else if(map[j][i] == wdow)
					image = this.imgWindow;
				context.drawImage(image, tileSize * i, tileSize * j, tileSize, tileSize);
			}
		}
	},
	drawNinja : function(ninja) {
		if(ninja.isHiding) return;
		var imgNinja;
		if(ninja.direction == up)
			imgNinja = this.imgNinjaU;
		else if(ninja.direction == left)
			imgNinja = this.imgNinjaL;
		else if(ninja.direction == right)
			imgNinja = this.imgNinjaR;
		else if(ninja.direction == down)
			imgNinja = this.imgNinjaD;
		else {
			alert("ºŽ»çÀÇ ¹æÇâÀÌ ÀÌ»óÇÕŽÏŽÙ." + ninja.direction);
			return;
		}
		context.drawImage(imgNinja, ninja.x*tileSize, ninja.y * tileSize, tileSize, tileSize);
	},
	drawSoldier : function(soldier) {
		if(soldier.isKilled) return;
		var imgSldr;
		if(soldier.direction == up)
			imgSldr = this.imgSldrU;
		else if(soldier.direction == left)
			imgSldr = this.imgSldrL;
		else if(soldier.direction == right)
			imgSldr = this.imgSldrR;
		else if(soldier.direction == down)
			imgSldr = this.imgSldrD;
		else {
			alert("ºŽ»çÀÇ ¹æÇâÀÌ ÀÌ»óÇÕŽÏŽÙ." + soldier.direction);
			return;
		}
		context.drawImage(imgSldr, soldier.x*tileSize, soldier.y * tileSize, tileSize, tileSize);
	}
};


function setHelp() {
	var para = new Array(9);
	para[0] = document.getElementById("p11");
	para[1] = document.getElementById("p12");
	para[2] = document.getElementById("p13");
	para[3] = document.getElementById("p14");
	para[4] = document.getElementById("p15");
	para[5] = document.getElementById("p21");
	para[6] = document.getElementById("p22");
	para[7] = document.getElementById("p23");
	para[8] = document.getElementById("p24");
	


 if(stageNum == 1) {

  para[0].innerHTML = "** 여러분이 직접 만드신 저 코드는 지속적으로 호출됩니다. **";

  para[1].innerHTML = "run 버튼을 사용해 코드를 실행시킬 수 있습니다.";

  para[2].innerHTML = "stop 버튼을 사용해 코드를 정지시킬 수 있습니다.";

  para[3].innerHTML = "문에 도달하게 되면 다음 스테지로 가실 수 있습니다.";

  para[4].innerHTML = "ninja -> 게임에서 움직이는 닌자";

  para[5].innerHTML = "ninja.moveForward() -> 닌자를 앞으로 한칸 움직 일 수 있다.";

 }

 else if(stageNum == 2) {

  para[0].innerHTML = "** 여러분이 직접 만드신 저 코드는 지속적으로 호출됩니다. **";

  para[1].innerHTML = "흰색 병사 눈 앞에 닌자가 있으면 감시에 걸려 지나갈 수 없습니다.";

  para[2].innerHTML = "다만, 그림자에 숨는 경우에는 감시에 걸리지 않을 수 있습니다.";

  para[3].innerHTML = "ninja.goAndHide() -> 닌자 바로 앞에 그림자가 있는 경우 사용시 숨을 수 있습니다.";

  para[4].innerHTML = "ninja.existShadow() == up -> 닌자 바로 앞에 그림자가 존재하는 경우";

  para[5].innerHTML = "if(조건) (명령어) else (명령어) 조건문이 사용되며 java와 동일";

 }

 else if(stageNum == 3) {

  para[0].innerHTML = "** 여러분이 직접 만드신 저 코드는 지속적으로 호출됩니다. **";

  para[1].innerHTML = "ninja.existWall() == up -> 닌자 바로 앞에 벽이 존재하는 경우";

  para[2].innerHTML = "ninja.exist***의 이름을 가진 메소드는 전부 방향값을 반환합니다.";

  para[3].innerHTML = "방향 값은 up, left, right, down이 있습니다.";

  para[4].innerHTML = "ninja.turnLeft() -> 닌자의 방향을 왼쪽으로 돌립니다.";

  para[5].innerHTML = "ninja.turnRight() -> 닌자의 방향을 오른쪽으로 돌립니다.";

  para[6].innerHTML = "ninja.moveForward()는 닌자의 정면방향으로 전진함을 뜻합니다.";

 }

 else if(stageNum == 4) {

  para[0].innerHTML = "** 여러분이 직접 만드신 저 코드는 지속적으로 호출됩니다. **";

  para[1].innerHTML = "ninja.existSoldier() == 방향 -> 닌자 '방향'에 감시병사가 존재하는가";

  para[2].innerHTML = "ninja.kill(방향) -> 닌자가 보는 방향을 위라고 했을 때의 방향대로 감시 병사를 사라지게 합니다.";

  para[3].innerHTML = "방향 값은 up, left, right, down이 있습니다.";

  para[4].innerHTML = "ninja.goAndHide()는 닌자의 정면 방향으로 숨음을 뜻합니다.";

  para[5].innerHTML = "";

 }

 else if(stageNum == 5) {

  para[0].innerHTML = "** 여러분이 직접 만드신 저 코드는 지속적으로 호출됩니다. **";

  para[1].innerHTML = "";

  para[2].innerHTML = "길을 가는 도중 원래 규칙에 어긋난 다면,";

  para[3].innerHTML = "주변의 물체들의 조건에 따라 방향을 바꾸도록 하십시오.";

  para[4].innerHTML = "";

  para[5].innerHTML = "";

 }

}
