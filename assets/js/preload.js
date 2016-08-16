
var Preload= {

	preload: function () {

		game.load.pack("audio_files","assets/json/audio_files.json",null, this);
		game.load.image("rwm","assets/images/rwm.png");
		game.load.spritesheet('buttons',"assets/images/buttons.png",400,100,4);

	},
	create: function () {
		game.state.start("menu");
	}
}
