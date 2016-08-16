var A;
var LevelOne_1 = {

	create: function () {
		game.stage.backgroundColor = "#4488AA";
		A=game.add.text(200,200,"A",{font:"40px 'Arial Black'",fill:"#11420D"})
		var apron=game.add.text(200,200,"Apron",{font:"40px 'Arial Black'",fill:"#11420D"})
		apron.inputEnabled=true;
		apron.events.onInputDown.add(highlight_A,this);
		
	}
	}

function highlight_A () {

	A.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	game.sound.play("apron").onStop.add(function () {
		A.setShadow(0,0,'rgba(255,255,255,0.5)',0);
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