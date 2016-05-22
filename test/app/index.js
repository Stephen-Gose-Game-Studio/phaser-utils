var Phaser = require('phaser');
var rootScope = {
	options:{
		width:300,
		height:300,
		where:'master-canvas'
	},
	debug:false // make sure set it to false when release
}

require('./modules/stats')();

var game = new Phaser.Game(rootScope.options.width, rootScope.options.height, Phaser.CANVAS, rootScope.options.where, rootScope.options.where);

game.state.add('game', require('./game')(game,rootScope));

game.state.start('game');
