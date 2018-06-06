var left = 1, up = 2, right = 3, down = 4, not = -1;
var forward = up, backward = down;
var runStop = false;
var stageNum = 0;
var road = 1, shdw = 2, end = 3, wall = 4, nrwl = 5, wdow = 6;
var tileSize = 18;
var context;
var msg;

function init() {
	DrawingTool.imageInit();
	var level = localStorage.getItem("level");
	stageNum = (level == null)? 0 : level;
	
	stageClear(stage);
	msg = {};
	msg.value = null;
}

function draw() {
	DrawingTool.draw(stage);
	DrawingTool.drawNinja(ninja);
	var sdlrs = stage.soldiers;
	if(sdlrs != null) {
		for(var i = 0; i < sdlrs.length; i++)
			DrawingTool.drawSoldier(sdlrs[i]);		
	}
};
function update() {

	if(runStop) {
		btnStop();
		ninja.init();
		if(msg.value != null) {
			alert(msg.value);
			msg.value = null;
			return;
		}
	}

	draw();

	if(stage.isNinjaInGate()) {
		btnStop();
		stageClear();
	}
	try {
		turn();		
	}catch(e) {
		alert(e.message);
		btnStop();
	}
	
	stage.soldiersUpdate();
	if(runStop == false)
		runStop = !stage.collisionCheck(msg);
	
};

function exception(e) {
	console.log(e + "|" + e.name + "|" + e.message + "|" + e.description);
}
