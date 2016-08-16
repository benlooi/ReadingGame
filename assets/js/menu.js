var level_buttons;
var level_button;
var levels= [
{"label":"Vowels",
"state":"level_one_1"},
{"label":"Consonents",
"state":"level_one_2"},
{"label":"Topic 3",
"state":"level_one_3"},
{"label":"Vowels",
"state":"level_one_4"},
{"label":"Vowels",
"state":"level_one_5"},
{"label":"Vowels",
"state":"level_one_6"}];
var Menu = {
	create: function () {
		game.add.sprite(0,0,"rwm");
		//game.add.text(200,300,"Welcome",{font:"60px Arial",fill:"white"});
		level_buttons=game.add.group();

		for (var x=0;x<6;x++){
			level_button=level_buttons.create(800,x*60+300,"buttons",0);
			var level_text=game.add.text(830,level_button.y+10,levels[x].label,{font:"20px Arial",fill:"#ffffff"});
			level_buttons.add(level_text);
			level_button.state=levels[x].state;
			level_button.scale.setTo(0.5);
			level_button.inputEnabled=true;
			level_button.input.useHandCursor=true;
			level_button.events.onInputOver.add(highlight,this);
			level_button.events.onInputOut.add(lowlight,this);
			level_button.events.onInputDown.add(gotoState,this);
		
		}
		//var text=game.add.text(300,150,"Let's learn A",{font:"20px Helvetica",fill:"#ffffff"})
		var hello=game.add.audio("welcome");
		hello.play().onStop.add(saySomething,this);
		
	}
}

function saySomething () {
	var apron=game.add.audio("apron");
	apron.play();
}

function highlight (button) {
button.loadTexture("buttons",1);
level_buttons.children[1].style.fontSize="50px";
game.sound.play("ding");
game.add.tween(button.scale).to({x:0.6,y:0.6},500,Phaser.Easing.Bounce.Out,true, null);
}

function lowlight (button) {
button.loadTexture("buttons",0);
game.add.tween(button.scale).to({x:0.5,y:0.5},500,Phaser.Easing.Bounce.Out,true, null);

}

function gotoState (button){
	game.state.start(button.state);
}