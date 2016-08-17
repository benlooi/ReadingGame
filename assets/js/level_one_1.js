var A,A_teach,A_carp;
var dan_mouth;
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

		var back=game.add.text(50,50,"back",{font:"30px 'Arial Black'",fill:"#9B2432"})
		
		back.inputEnabled=true;
		back.events.onInputDown.add(goBack,this);
		
		Dan= game.add.group();
		var dan_base=game.add.sprite(0,0,"dan_base");

		dan_mouth=game.add.sprite(120,150,"mouth",2);
		dan_mouth.animations.add("apron",[3,2,1,3,2],10,false);
		dan_mouth.animations.add("teach",[3,3,3,2],30,false);
		dan_mouth.animations.add("carp",[04,4,2],10,false);
		dan_mouth.scale.setTo(2);
		Dan.add(dan_base);
		Dan.add(dan_mouth);
		Dan.scale.setTo(0.6);
		Dan.x=600;
		Dan.y=300;
	}
	}

function highlight_A () {

	A.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	A.fillStyle="#2BAA22";
	game.sound.play("apron").onStop.add(function () {
		A.setShadow(0,0,'rgba(255,255,255,0.5)',0);
	},this);
	//dan_mouth.loadTexture("dan_ah");
dan_mouth.animations.play("apron");
}

function highlight_A_teach () {

	A_teach.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	game.sound.play("teach").onStop.add(function () {
		A_teach.setShadow(0,0,'rgba(255,255,255,0.5)',0);
	},this);
	//dan_mouth.loadTexture("dan_oh");
	dan_mouth.animations.play("teach");

}
function highlight_A_carp () {

	A_carp.setShadow(5,5,'rgba(255,255,255,0.5)',15);
	game.sound.play("carp").onStop.add(function () {
		A_carp.setShadow(0,0,'rgba(255,255,255,0.5)',0);
	},this);
	//dan_mouth.loadTexture("dan_llu");
	dan_mouth.animations.play("carp");
}

function goBack () {
	game.state.start("menu");
}

var LevelOne_2 = {
	create: function (){
		var daniel= game.add.group();
	var daniel_base=game.add.sprite(0,0,"daniel_base");
	var daniel_mouth=game.add.sprite(100,160,"mouth",2);
	daniel_mouth.scale.setTo(1.5);
	daniel.add(daniel_base);
	daniel.add(daniel_mouth);
	daniel.x=game.world.centerX;
	daniel.y=game.world.centerY-200;

	game.sound.play("eugene_vo");
	}
	
}

var LevelOne_3 = {
	create: function (){
		var daniel= game.add.group();
	var daniel_base=game.add.sprite(0,0,"daniel_base");
	var daniel_mouth=game.add.sprite(100,160,"mouth",2);
	daniel_mouth.scale.setTo(1.5);
	daniel.add(daniel_base);
	daniel.add(daniel_mouth);
	daniel.x=game.world.centerX;
	daniel.y=game.world.centerY-200;

	game.sound.play("eugene_vo");
	}
}

var LevelOne_4 = {
	create: function (){
		var daniel= game.add.group();
	var daniel_base=game.add.sprite(0,0,"daniel_base");
	var daniel_mouth=game.add.sprite(100,160,"mouth",2);
	daniel_mouth.scale.setTo(1.5);
	daniel.add(daniel_base);
	daniel.add(daniel_mouth);
	daniel.x=game.world.centerX;
	daniel.y=game.world.centerY-200;

	game.sound.play("bernard_vo");
	}
}

var LevelOne_5 = {
	create: function (){
		var daniel= game.add.group();
	var daniel_base=game.add.sprite(0,0,"daniel_base");
	var daniel_mouth=game.add.sprite(100,160,"mouth",2);
	daniel_mouth.scale.setTo(1.5);
	daniel.add(daniel_base);
	daniel.add(daniel_mouth);
	daniel.x=game.world.centerX;
	daniel.y=game.world.centerY-200;

	game.sound.play("samantha_vo");
	}
}

var LevelOne_6 = {
	create: function (){
		var daniel= game.add.group();
	var daniel_base=game.add.sprite(0,0,"daniel_base");
	var daniel_mouth=game.add.sprite(100,160,"mouth",2);
	daniel_mouth.scale.setTo(1.5);
	daniel.add(daniel_base);
	daniel.add(daniel_mouth);
	daniel.x=game.world.centerX;
	daniel.y=game.world.centerY-200;

	game.sound.play("sandy_vo");
	}
}