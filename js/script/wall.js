export default class Wall {
    constructor(scene){

        this.scene = scene
        
        //paredes
        this.upWall = scene.physics.add.staticGroup({
            key: 'wall',
            repeat: 11,
            setXY: { x: 0, y: 0, stepX: 64}
        }).setOrigin(0, 0)
        this.upWall.children.iterate(function(child){
            child.refreshBody()
        })

        this.downWall = scene.physics.add.staticGroup({
            key: 'wall',
            repeat: 11,
            setXY: { x: 0, y: 448, stepX: 64}
        }).setOrigin(0, 0)
        this.downWall.children.iterate(function(child){
            child.refreshBody()
        })

        this.leftWall = scene.physics.add.staticGroup({
            key: 'wall',
            repeat: 5,
            setXY: { x: 0, y: 64, stepY: 64}
        }).setOrigin(0, 0)
        this.leftWall.children.iterate(function(child){
            child.refreshBody()
        })

       this.rightWall = scene.physics.add.staticGroup({
            key: 'wall',
            repeat: 3,
            setXY: { x: 704, y: 192, stepY: 64}
        }).setOrigin(0, 0)
        this.rightWall.children.iterate(function(child){
            child.refreshBody()
        })
    }
}