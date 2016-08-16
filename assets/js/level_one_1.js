var A,A_teach,A_carp;
var LevelOne_1 = {

	create: function () {
		game.stage.backgroundColor = "#4488AA";
		
		var apron=game.add.text(200,200,"Apron",{font:"40px 'Arial Black'",fill:"#11420D"})
		A=game.add.text(200,200,"A",{font:"40px 'Arial Black'",fill:"#11420D"})
		apron.inputEnabled=true;
		apron.events.onInputDown.add(highlight_A,this);

		var teach=game.add.text(200,300,"Teach",{font:"40px 'Arial Black'",fill:"#11420D"})
		A_teach=game.add.text(255,300,"a",{font:"40px 'Arial Black'",fill:"#11420D"})
		teach.inputEnabled=true;
		teach.events.onInputDown.add(highlight_A_teach,this);

		var carp=game.add.text(200,400,"Carp",{font:"40px 'Arial Black'",fill:"#11420D"})
		A_carp=game.add.text(230,400,"a",{font:"40px 'Arial Black'",fill:"#11420D"})
		
		carp.inputEnabled=true;
		carp.events.onInputDown.add(highlight_A_carp,this);
		
	}
	}

function highlight_A () {

	A.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	A.fillStyle="#2BAA22";
	game.sound.play("apron").onStop.add(function () {
		A.setShadow(0,0,'rgba(255,255,255,0.5)',0);
	},this);
}

function highlight_A_teach () {

	A_teach.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	game.sound.play("teach").onStop.add(function () {
		A_teach.setShadow(0,0,'rgba(255,255,255,0.5)',0);
	},this);
}
function highlight_A_carp () {

	A_carp.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	game.sound.play("carp").onStop.add(function () {
		A_carp.setShadow(0,0,'rgba(255,255,255,0.5)',0);
	},this);
}

var LevelOne_2 = {
	
}

var LevelOne_3 = {
	
}

var LevelOne_4 = {
	
}

var LevelOne_5 = {
	
}

var LevelOne_6 = {
	
}