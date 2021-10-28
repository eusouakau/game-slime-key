import Wall from "./wall.js";
import Plataform from "./plataform.js";
import Player from "./player.js";
import Door from "./door.js";
import Key from "./key.js";
import Saw from "./saw.js";

export default class Level extends Phaser.Scene{

    constructor(){
        super({
            key: 'Level'
        })
    }

    create(){
        //adicionando background
        this.add.image(400,300,'bg');
        //instanciando as paredes
        this.walls = new Wall(this)
        //instanciando plataformas
        this.plataform = new Plataform(this)
        //instanciando a porta
        this.door = new Door(this)
        //instanciando a chave
        this.key = new Key(this)
        //instanciando as serras
        this.saw = new Saw(this)
        //instanciando player
        this.player = new Player(this)
        
        
        //adicionando colisores
        this.physics.add.collider(this.player.sprite, this.walls.upWall)
        this.physics.add.collider(this.player.sprite, this.walls.downWall)
        this.physics.add.collider(this.player.sprite, this.walls.leftWall)
        this.physics.add.collider(this.player.sprite, this.walls.rightWall)
        this.physics.add.collider(this.player.sprite, this.plataform.group)
        this.physics.add.collider(this.player.sprite, this.door.group)
    }

    update(){

        //update dos game objects
        this.player.update()
        this.saw.update()
        this.key.update()
        this.door.checkUnlocked(this.key.body)
        
        //chamando metodo collect da Chave quando ocorrer overlap entre chave e player
        this.physics.add.overlap(this.player.sprite, this.key.sprite, this.key.collect, null, this)
        
        //chamando metodo death do Player quando ocorrer colisão entre player e as serras
        this.physics.add.overlap(this.player.sprite, this.saw.group, this.player.death, null, this.player)
    }
}