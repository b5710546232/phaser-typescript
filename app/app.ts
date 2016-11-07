import Boot from './states/Boot';
class App extends Phaser.Game{
	constructor(width,height){
		super(width, height, Phaser.CANVAS ,null)
		this.state.add('Boot', Boot)
		this.state.start('Boot');
	}
}
// 160px x 144px
export = new App(160,144)
