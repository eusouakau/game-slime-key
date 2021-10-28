import Load from './load.js'
import Level from './level.js'

const config = {
   type: Phaser.CANVAS,
   width: 768,
   height: 512,
   parent: 'slime-key', //elemento html onde o canvas vai criar o elemento
   physics: {
       default: 'arcade',
       arcade: {
           debug: false,
       }
   },
   scene: [
        Load,
        Level
   ]

}
//instancia do phaser
export const game = new Phaser.Game(config)

