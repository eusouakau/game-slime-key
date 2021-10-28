export default class Key {
    constructor(scene){

        this.scene = scene
        //this.group = scene.physics.add.group()
        //this.group.create(64, 64, 'key').setOrigin(0, 0).refreshBody()
        this.sprite = scene.physics.add.sprite(64, 64, 'key').setOrigin(0, 0).refreshBody()
        this.body = this.sprite.body
    }
    
    update()
    {
        // this.group.children.iterate(function(child){
        //     // animações
        //     child.anims.create({
        //         key: 'brilhando',
        //         frames: child.anims.generateFrameNumbers('key', { start: 0, end: 3 }),
        //         frameRate: 10,
        //         repeat: -1
        //     });
        //    
        //     child.anims.play('brilhando', true)
        // })

        this.sprite.anims.create({
            key: 'brilhando',
            frames: this.sprite.anims.generateFrameNumbers('key', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.sprite.anims.play('brilhando', true)
        
    }
    //chave desaparece quando slime colide e "entra dentro dela"
    collect (player, key)
    {
        key.disableBody(true, true);
    }
}