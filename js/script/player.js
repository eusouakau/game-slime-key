export default class Player {
    constructor(scene){
        this.scene = scene
        this.collided = false
        this.dead = false
        this.sprite = scene.physics.add.sprite(64, 384, 'slime')
        this.sprite.setOrigin(0, 0).refreshBody()
        this.sprite.setCollideWorldBounds(false)

        //controles
        this.cursorKeys = scene.input.keyboard.createCursorKeys()
        this.space = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        
        scene.anims.create({
            key: 'parado',
            frames: scene.anims.generateFrameNumbers('slime', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'movendo',
            frames: scene.anims.generateFrameNumbers('slime', { start: 4, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'colidindo',
            frames: scene.anims.generateFrameNumbers('slime', { start: 6, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        
        scene.anims.create({
            key: 'explodindo',
            frames: scene.anims.generateFrameNumbers('slime', { start: 8, end: 12 }),
            frameRate: 10,
            repeat: 0
        });

        
    }
    
    update(){
        const sprite = this.sprite

        if(this.dead === false)
        {
            //se velocity x e y estão em 0, siginifica que está parado
            if(sprite.body.velocity.x === 0 && sprite.body.velocity.y === 0) {
                sprite.anims.play('parado', true)
                this.collided = true
            }

            //a variável collided impede que o jogador consiga apertar outro botão antes de parar
            if(this.collided === true){

                this.collided = false

                if(this.cursorKeys.left.isDown) {
                    sprite.setVelocityX(-1000)
                    sprite.anims.play('movendo', true)
                } else if(this.cursorKeys.right.isDown){
                    sprite.setVelocityX(1000)
                    sprite.anims.play('movendo', true)
                }

                if(this.cursorKeys.up.isDown){
                    sprite.setVelocityY(-1000)
                    sprite.setFlip(false, true)
                    sprite.anims.play('movendo', true)
                }else if(this.cursorKeys.down.isDown){
                    sprite.setVelocityY(1000)
                    sprite.setFlip(false, false)
                    sprite.anims.play('movendo', true)
                }
            }
        }
    }

    death ()
    {
        this.sprite.setVelocityX(0)
        this.sprite.setVelocityY(0)
        this.sprite.play('explodindo')
        this.dead = true
    }
}
