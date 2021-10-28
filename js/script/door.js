export default class Door {
    constructor(scene) {

        this.scene = scene
        this.group = scene.physics.add.staticGroup()
        this.addDoor(704, 64)
    }

    addDoor(x, y, angle = 0, tile = 'door'){
        this.group.create(x, y, tile).setOrigin(0, 0).setAngle(angle).refreshBody()
    }
    
    checkUnlocked(key){
        // this.key = key
        // this.key.children.iterate(function(child){
        //     if (!child.body.enabled)
        //     {
        //         this.group.children.iterate(function(child) {
        //             child.body.disableBody(value, value);
        //         })
        //     }
        // })
        if (key.enable === false)
        {
            this.group.children.iterate(function(child) {
                    child.disableBody(true, true);
            })
        }
        
    }
}