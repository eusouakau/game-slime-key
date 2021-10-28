export default class Saw {
    constructor(scene){
    
        this.scene = scene
        this.group = scene.physics.add.group()

        this.group.create(384, 128, 'saw').setOrigin(0, 0).refreshBody()
        this.group.create(384, 256, 'saw').setOrigin(0, 0).refreshBody()
    }

    update()
    {
        this.group.children.iterate(function(child){
            // animações
            child.anims.create({
                key: 'girando',
                frames: child.anims.generateFrameNumbers('saw', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });
            
            child.anims.play('girando', true)
        })
    }
}