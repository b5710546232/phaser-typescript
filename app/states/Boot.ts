export default class Boot extends Phaser.State{
  init(){
    this.game.stage.backgroundColor = "#d58050"
  }
  preload(){
    this.game.load.image('preloadbar', 'assets/loading.png')
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  }
  create(){
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.game.scale.pageAlignHorizontally = true
    this.game.scale.pageAlignVertically = true
    this.game.state.start('Preloader')
  }
}
