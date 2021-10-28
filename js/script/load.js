export default class Load extends Phaser.Scene{

    constructor(){
        super({
            key: 'Load'
        })
    }

    preload(){

        const largura = this.sys.canvas.width
        //assim que completar o carregamento é para dar start na cena de jogo 
        const barraProgresso = this.add.graphics()
        
        const larguraBarra = 0.8 * largura
        this.load.on('progress', (value) => {
            barraProgresso.clear()
            barraProgresso.fillStyle(0xffffff, 1)
            barraProgresso.fillRect((largura - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20)
            barraProgresso.lineStyle(4, 0xffff00, 1)
            barraProgresso.strokeRect((largura - larguraBarra)/2, this.sys.game.config.height / 2, larguraBarra * value, 20)
           })
        
        this.load.on('complete', () => {
            this.scene.start('Level')
        }) 

        this.load.image('bg', '../assets/img/background.png')
        this.load.image('wall', '../assets/img/stone_wall.png')
        this.load.image('spike', '../assets/img/spike.png')
        this.load.image('door', '../assets/img/door.png', {frameWidth: 32, frameHeight: 64})
        this.load.spritesheet('slime', '../assets/img/slime.png', {frameWidth: 64, frameHeight: 64})      
        this.load.spritesheet('key', '../assets/img/key.png', {frameWidth: 64, frameHeight: 64})
        this.load.spritesheet('saw', '../assets/img/saw.png', {frameWidth: 64, frameHeight: 64})
    }
}