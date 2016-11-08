/// <reference path="../lib/phaser.d.ts"/>
import Boot from './states/Boot'
import Preloader from './states/Preloader'
import Play from './states/Play'
class App extends Phaser.Game{
	constructor(width,height){
		super(width, height, Phaser.CANVAS ,null)
		this.state.add('Boot', Boot)
		this.state.add('Preloader', Preloader)
		this.state.add('Play', Play)
		this.state.start('Boot')
	}
}
// 160px x 144px
export = new App(160,144)
