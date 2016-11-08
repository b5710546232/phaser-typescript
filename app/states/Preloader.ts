export default class Preloader extends Phaser.State{
    private ready:boolean
    init(){
        this.ready = false
    }
    preload(){
        // load something.
        this.preloadBar = this.add.sprite(0, 80, 'preloadbar');
        this.load.setPreloadSprite(this.preloadBar);
        this.game.load.image('sprite', '/sprites/Sprite01.png')
        for(let i = 0 ; i<10000;i++){
          this.game.load.image('sprite'+i, '/sprites/Sprite01.png')
        }
        this.game.load.onLoadComplete.add(this.loadComplete,this);
    }
    private loadComplete(){
        this.ready = true
    }

    update(){
        if(this.ready){
            // this.game.state.start('Play')
        }
    }


}
