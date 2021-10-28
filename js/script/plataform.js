export default class Plataform {
    constructor(scene) {

        this.scene = scene
        this.group = scene.physics.add.staticGroup()
        
        this.addPlataform(64, 128)
        this.addPlataform(320, 64)
        this.addPlataform(576, 64)
        this.addPlataform(576, 192)
        this.addPlataform(320, 384)

    }
    
    addPlataform(x, y, tile = 'wall'){
        this.group.create(x, y, tile).setOrigin(0, 0).refreshBody()
    }
}
    