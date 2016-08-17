
var Preload= {

	preload: function () {

		game.load.pack("audio_files","assets/json/audio_files.json",null, this);
		game.load.pack("dan_character","assets/json/audio_files.json",null, this);
		game.load.pack("daniel_character","assets/json/audio_files.json",null, this);
		
		game.load.image("rwm","assets/images/rwm.png");
		game.load.spritesheet('buttons',"assets/images/buttons.png",400,100,4);
		game.load.spritesheet('mouth',"assets/images/dan/mouth_shapes.png",50,40,5);

	},
	create: function () {
		game.state.start("menu");
	}
}
