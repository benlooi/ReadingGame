var game=new Phaser.Game(1200,800,Phaser.AUTO,"");

game.state.add("preload",Preload);
game.state.add("menu",Menu);
game.state.add("level_one_1",LevelOne_1);
game.state.add("level_one_2",LevelOne_2);

game.state.add("level_one_3",LevelOne_3);

game.state.add("level_one_4",LevelOne_4);

game.state.add("level_one_5",LevelOne_5);
game.state.add("level_one_6",LevelOne_6);



game.state.start("preload");
