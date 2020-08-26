enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Derecha,
    Izquierda,
    Parada
}
namespace SpriteKind {
    export const Premio_Final = SpriteKind.create()
    export const PrimaNº1 = SpriteKind.create()
    export const PREMIO1 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direccion == 1) {
        Projectil = sprites.createProjectileFromSprite(img`
            . f 9 . . . . . . . . . . . . . 
            . . f 9 9 5 f . . . . . . . . . 
            . . . f 9 9 5 f 9 9 f . . . . . 
            . . . . f 3 9 5 f 5 9 f . . . . 
            . . . . . f 9 3 5 f 9 9 f . . . 
            . . . . . . f 3 3 3 f 5 3 f . . 
            . . . . . . f 9 5 3 f 3 3 f . . 
            . . . . . . f 9 3 3 f 9 . f . . 
            . . . . . . f 5 3 3 f 5 5 f . . 
            . . . . . f 9 9 . f 9 3 f . . . 
            . . . . f 3 3 . f 3 3 f . . . . 
            . . . f 9 5 . f 9 . f . . . . . 
            . . f 9 5 . f 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Prima_Nº1, 200, 0)
    } else {
        Projectil = sprites.createProjectileFromSprite(img`
            . f 9 . . . . . . . . . . . . . 
            . . f 9 9 5 f . . . . . . . . . 
            . . . f 9 9 5 f 9 9 f . . . . . 
            . . . . f 3 9 5 f 5 9 f . . . . 
            . . . . . f 9 3 5 f 9 9 f . . . 
            . . . . . . f 3 3 3 f 5 3 f . . 
            . . . . . . f 9 5 3 f 3 3 f . . 
            . . . . . . f 9 3 3 f 9 . f . . 
            . . . . . . f 5 3 3 f 5 5 f . . 
            . . . . . f 9 9 . f 9 3 f . . . 
            . . . . f 3 3 . f 3 3 f . . . . 
            . . . f 9 5 . f 9 . f . . . . . 
            . . f 9 5 . f 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Prima_Nº1, -200, 0)
    }
})
function Nivel_1 () {
    tiles.setTilemap(tiles.createTilemap(hex`3c000c0000000000000000000000000003000000000000030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c1818000000000000160b16180000000000000000000000000000000000000000000000000000000000000000000000000808000000000000000000160b0b17000000000000140b0b0b0b170000000000000000000000000019160b0b0b0b0b1700000000000000000000000e070700000000000000000000000000001600000000000000000000000c160b0b170000160b0b0b0b1610000000000000001617000000000000000e0618070e04040412000000000000000000000000000000000000000000160000000000000000000000000000000e12000000000000000e1200000e060916071804040404120c1b0203000000000e12000202020202020000030e0413120300000303000003030e120e13041201010100000e0415120e0609050d0b0b0b0b0b0b0b0b0b0b170000160b0b0b0b0b0b0b0b0b17000e160b0b0b0b0b120016170000160b0b0b0b0b0b0b0b0b17000e04041515060909050a0a0a0a0a0d0d0d0d0a10000000140d0a0a0a0a0d0a0d0d100e0b0a0d0a0a0a0a0b1200000000140a0d0a0d0d0a0d0a0a100e1a1a1a1a1a1a1a1a1a0a0a0d0a0d0a0a0a0a10000000000e150d0d1513041200000e0b0d0a0a0a0d0a0a0d0b120000000e041513040415151504121a111111111111110f1a0d0d0d0d0d0a0d1717170e13120e1515151513041515120e0b0d0a0a0d0a0a0a0a0a0a0b12000c041513041515151515151a11151515151515150f090a0a0a0a0a0d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0d0a0a0a0a0a0a0a0a0d0a0d0b0b0b0b0b0b0b0b0b1515151511151515151515151506090a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0d0a0d0a0a0a0a0a0d0a0a0a0d0a0a0a0a0a0a0d0a0a0a0d0a0a0d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 2 2 2 2 . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . 2 2 2 2 2 2 . . . . . . . . 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 . . 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 . . . . . . . . 2 
        2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile7,myTiles.tile8,myTiles.tile2,myTiles.tile3,myTiles.tile6,sprites.builtin.brick,sprites.dungeon.hazardSpike,myTiles.tile10,myTiles.tile11,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile17,myTiles.tile22,myTiles.tile23,myTiles.tile19,myTiles.tile24,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile30,sprites.castle.rock0,myTiles.tile31,myTiles.tile9], TileScale.Sixteen))
    Premio_1 = sprites.create(img`
        . . . . . . . f f f . . . . . . . . 
        . . . . . . f f d d f . . . . . . . 
        . . . . . f d f d d d f . . . . . . 
        . . . . f d d f d d d d f . . . . . 
        . . . f d d d f d d d d d f . . . . 
        . . f d d d d f d d d d d d f . . . 
        . f 3 d d d d f 3 3 d d d d d f . . 
        f 3 3 d d d d f 2 2 3 d d d d 3 f . 
        f 3 3 3 d d d d 2 2 2 3 d d d 3 3 f 
        f 3 3 3 3 d d d 2 2 2 3 3 3 3 3 3 f 
        . f 3 3 3 3 d 3 3 3 f f f f f f f f 
        . . f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 3 3 3 3 3 3 f . . . . 
        . . . . . . f 3 3 3 3 3 f . . . . . 
        . . . . . . . f 3 3 3 f . . . . . . 
        . . . . . . . . f f f . . . . . . . 
        `, SpriteKind.PREMIO1)
    tiles.placeOnRandomTile(Premio_1, myTiles.transparency16)
    game.splash("Nivel 1")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PREMIO1, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Prima_Nº1.isHittingTile(CollisionDirection.Bottom)) {
        Prima_Nº1.vy = -150
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(Prima_Nº1, ActionKind.Parada)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Prima_Nº1, ActionKind.Izquierda)
    direccion = 0
})
info.onCountdownEnd(function () {
    game.over(false)
    music.wawawawaa.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Prima_Nº1, ActionKind.Derecha)
    direccion = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio_Final, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.wawawawaa.play()
    Prima_Nº1.setPosition(10, 0)
    tiles.placeOnRandomTile(enemigo, myTiles.tile7)
    tiles.placeOnRandomTile(Enemigo2, myTiles.tile7)
    tiles.placeOnRandomTile(Enemigo3, myTiles.tile7)
    info.changeLifeBy(-1)
})
let Projectil: Sprite = null
let direccion = 0
let prima2: Sprite = null
let Prima_Nº1: Sprite = null
let Enemigo3: Sprite = null
let Enemigo2: Sprite = null
let enemigo: Sprite = null
let Premio_1: Sprite = null
scene.setBackgroundColor(9)
game.splash("Ayudame ", "A encontrar a mi prima")
Nivel_1()
effects.clouds.startScreenEffect(35000)
Premio_1 = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.PREMIO1)
enemigo = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
Enemigo2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
Enemigo3 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
let enemigo4 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d d d b b b b b b b f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b d d b b b b d d b b b b f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b d d b b b d d d d b b b f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b d d d b b d d d d d d b b b f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b b b b b b d d d d d d b b b f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b d d d d d d d d d d d d b b f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . d d d d d d d d f f f f f b f b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d f f f f f f f f f f f f f b f b d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b f f f f f f f f f f f f d b f b d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b f f f f f f f f f f f f d b f b d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b f f f f f f f f d d d d d b f b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . d d d d d d d d d b b b b b f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b b b b b b b b f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f f f b b b b b f f f f f f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . b b b b b b b f f f f f f b b f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f f d f b b b b f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d f f f f f d f b d d d f f f . . . . . . . . . . . . 
    . . . . . . . . . . . f f f f f . f d d d d d f b f b d d f d d b d f . . . . . . . . . . . 
    . . . . . . . . . . f 5 5 5 f f f f b b b b b f b b d d d f f f b d d f . . . . . . . . . . 
    . . . . . . . . . . f f f f f 5 5 f b b f b b f d d d d b b f f f f d f . . . . . . . . . . 
    . . . . . . . . . . f 5 5 5 f 5 5 f b b f b 5 f d d b b b b f . . f f f f f f . . . . . . . 
    . . . . . . . . . . f f f f f 5 5 f b b f f 5 f d b b 5 b b f . . . f f f 5 5 5 . . . . . . 
    . . . . . . . . . . f 5 5 5 f f f f f f f f f f f f b b 5 f f . . . f 5 f 5 5 5 . . . . . . 
    . . . . . . . . . . f f f f f f f f f f . f b f f f b b 5 f f f . . f f f 5 5 5 . . . . . . 
    . . . . . . . . . . f f 5 5 5 f f f f . . f 5 5 5 5 b b f 5 f f . . f 5 f f f f . . . . . . 
    . . . . . . . . . . . f f f f f f f . . . f 5 f f f b f 5 5 f b f . f 5 5 5 f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f 5 f 5 f f f f f d b b f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . f f 5 f f f b b b d d b b f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f b d 5 5 5 5 f f f d d d f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f d d d . f . . . f d f b b b f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f d d d f . . . . f f b d d b b b f . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . f d d d b b b f . . . . . . . . 
    . . . . . . . . . . . . . . . . . f b b b f f f . . . . . . f d d d d b b b f . . . . . . . 
    . . . . . . . . . . . . . . . . . f b b b b b f . . . . . . f b d d d b b b f f . . . . . . 
    . . . . . . . . . . . . . . . . f b d b b b b f . . . . . . . f d d b f f f f f f . . . . . 
    . . . . . . . . . . . . . . . f f f f f b b f f . . . . . . . f b b f f f f f f f f . . . . 
    . . . . . . . . . . . . . . f f f f b b b b f . . . . . . . . . f f f b b b b b b f f . . . 
    . . . . . . . . . . . . . f f f f b d d d b f . . . . . . . . . f b b b b b b b b f f f . . 
    . . . . . . . . . . . f f b b d d d d d b b f . . . . . . . . . . f b b d d d d d b b f f . 
    . . . . . . . . . . . f b b b b b b b b b f f . . . . . . . . . . f b d d d d d d d b b f . 
    . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . f f f f f f f f f f f f . 
    `, SpriteKind.Enemy)
let enemigo5 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . e e e e e e e e e . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . e e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e e e e e d e e e e e e e e . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e e e e e d e e d e e e e e e . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e e d e e d e e e e e e e e e . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e e d e e e e e e e e e e e e e . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e d d e e d e e e e e e e e e e . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . e e e f f f e d e e e e e e e e e e . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . e e e d d f f d f f e e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . e . e d d d d d d d e e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e f f f f d f f e e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e d f f f f f f e e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e f f f f d f f e e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e d d d d d d d d e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e d d d d f f f d d d e e e e e e e . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . e e d d f f f f d d d a f f e e e e . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . e e d d d d d d d a a f f f f f e e . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . e e d d d d f a a f f f f f f f e . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . e e e a f f a a f f a f f f f f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . e e f a a a f f f f f f a a a f f f . . . . . . . . . . . . 
    . . . . . . . . . . . f f f f f . f f f f a f f a f f f a f a a f a f . . . . . . . . . . . 
    . . . . . . . . . . f 5 5 5 f f f f f a a f f f a f f f a f f f f a a f . . . . . . . . . . 
    . . . . . . . . . . f f f f f 5 5 f f a f f f f a f f f f f f f f f a f . . . . . . . . . . 
    . . . . . . . . . . f 5 5 5 f 5 5 f f f f f a f a f f f f f . . . f f f f f f . . . . . . . 
    . . . . . . . . . . f f f f f 5 5 f f f f f a f a f f a f f . . . . f f f 5 5 5 . . . . . . 
    . . . . . . . . . . f 5 5 5 f f f f f f f f f f f f f f a f . . . . f 5 f 5 5 5 . . . . . . 
    . . . . . . . . . . f f f f f f f f f f . f a f f f f f a f . . . . f f f 5 5 5 . . . . . . 
    . . . . . . . . . . f f 5 5 5 f f f f . . f a a a a f f f a f . . . f 5 f f f f . . . . . . 
    . . . . . . . . . . . f f f f f f f . . . f f f f f f f a a 5 f . . f 5 5 5 f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f 5 5 5 5 5 5 5 5 5 f f f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . f f f f f f f f f a a f f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a a a a a 5 f f f a a a f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f a a a a f . . . f a f a a a f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f a a a f . . . . f f a a a a a a f . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . f 5 5 5 a a a f . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a a a f f f . . . . . . f 5 5 5 5 a a a f . . . . . . . 
    . . . . . . . . . . . . . . . . . f a a a a a f . . . . . . f a 5 5 5 a a a f f . . . . . . 
    . . . . . . . . . . . . . . . . f a 5 a a a a f . . . . . . . f 5 5 a f f f f f f . . . . . 
    . . . . . . . . . . . . . . . f f f f f a a f f . . . . . . . f a a f f f f f f f f . . . . 
    . . . . . . . . . . . . . . f f f f a a a a f . . . . . . . . . f f f a a a a a a f f . . . 
    . . . . . . . . . . . . . f f f f a 5 5 5 a f . . . . . . . . . f a a a a a a a a f f f . . 
    . . . . . . . . . . . f f a a 5 5 5 5 5 a a f . . . . . . . . . . f a a 5 5 5 5 5 a a f f . 
    . . . . . . . . . . . f a a a a a a a a a f f . . . . . . . . . . f a 5 5 5 5 5 5 5 a a f . 
    . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . f f f f f f f f f f f f . 
    `, SpriteKind.Enemy)
let microfono = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 b b b b b b 1 1 1 1 1 
    1 1 1 1 b b b b b b b b 1 1 1 1 
    1 1 1 b b b b b b b b b b 1 1 1 
    1 1 1 b b b b b b b b b b 1 1 1 
    1 1 1 d d d d d d d d d d 1 1 1 
    1 1 1 b b b b b b b b b b 1 1 1 
    1 1 1 b b b b b b b b b b 1 1 1 
    1 1 1 1 d d d d d d d d 1 1 1 1 
    1 1 1 1 1 b b b b b b 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f d d f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(microfono, myTiles.transparency16)
let balon = sprites.create(img`
    . . . . . . 4 4 f 4 4 . . . . . . 
    . . . . 4 4 4 4 f 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
    . . 4 f 4 4 4 4 f 4 4 4 4 f 4 . . 
    . 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 . 
    . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
    4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
    4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
    f f f f f f f f f f f f f f f f f 
    4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
    4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
    . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
    . 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 . 
    . . 4 f 4 4 4 4 f 4 4 4 4 f 4 . . 
    . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
    . . . . 4 4 4 4 f 4 4 4 4 . . . . 
    . . . . . . 4 4 f 4 4 . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(balon, myTiles.transparency16)
let bate = sprites.create(img`
    . . . . . . . . . . . . . . . . . 4 4 . . 
    . . . . . . . . . . . . . . . . 4 d d 4 . 
    . . . . . . . . . . . . . . . 4 d d 4 4 2 
    . . . . . . . . . . . . . . 4 d d 4 4 2 4 
    . . . . . . . . . . . . . 4 d d 4 4 2 4 . 
    . . . . . . . . . . . . 4 d d 4 4 2 4 . . 
    . . . . . . . . . . . 4 d d 4 4 2 4 . . . 
    . . . . . . . . . . 4 d d 4 4 2 4 . . . . 
    . . . . . . . . . 4 d d 4 4 2 4 . . . . . 
    . . . . . . . . 4 d d 4 4 2 4 . . . . . . 
    . . . . . . . . 4 d 4 4 2 4 . . . . . . . 
    . . . . . . . . 4 4 4 2 4 . . . . . . . . 
    . . . . . . . 6 6 6 2 4 . . . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . . . . . . 
    . . . . . 6 6 6 . . . . . . . . . . . . . 
    . . . . 9 9 9 . . . . . . . . . . . . . . 
    . . . 6 6 6 . . . . . . . . . . . . . . . 
    . . 4 4 2 . . . . . . . . . . . . . . . . 
    4 4 4 2 . . . . . . . . . . . . . . . . . 
    . 4 2 . . . . . . . . . . . . . . . . . . 
    . . 2 . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(bate, myTiles.transparency16)
let lapiz = sprites.create(img`
    . . . . . . . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . f 3 f . . . . . 
    . . . . . . . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . . . . . . f 3 3 3 3 3 f . . . 
    . . . . . . . . . . . f 1 b 3 3 3 3 3 f . . 
    . . . . . . . . . . f 5 f 1 b 3 3 3 3 3 f . 
    . . . . . . . . . f 5 5 5 f 1 b 3 3 3 3 3 f 
    . . . . . . . . f d 5 5 5 5 f 1 b 3 3 3 f . 
    . . . . . . . f d 5 5 5 5 5 5 f 1 b 3 f . . 
    . . . . . . f 5 5 5 5 5 5 5 5 5 f 1 f . . . 
    . . . . . f 5 5 5 5 5 5 5 5 5 5 d f . . . . 
    . . . . f 5 5 5 5 5 5 5 5 5 5 d f . . . . . 
    . . . f d 5 5 5 5 5 5 5 5 5 5 f . . . . . . 
    . . f d 5 5 5 5 5 5 5 5 5 d f . . . . . . . 
    . f d 5 5 5 5 5 5 5 f 5 d f . . . . . . . . 
    f 4 4 5 5 5 5 5 5 f 5 d f . . . . . . . . . 
    f 4 4 4 5 5 5 5 f 5 d f . . . . . . . . . . 
    f f 4 4 4 5 5 f 5 d f . . . . . . . . . . . 
    f f f 4 4 4 5 5 d f . . . . . . . . . . . . 
    f f f f 4 4 4 d f . . . . . . . . . . . . . 
    f f f f f 4 4 f . . . . . . . . . . . . . . 
    f f f f f f f . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(lapiz, myTiles.transparency16)
let paleta_de_pintura = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . e e e e e e e . . . . . . . 
    . . . . . . . . e e e e e e e e e e e e e . . . . 
    . . . . . . . e e e e d d d d d d d d e e e e . . 
    . . . . . e e e e e d d 3 3 d d d d d d e e e e . 
    . . . . e e e e d d d 3 3 3 d d a a d d d e e e . 
    . . . e e e d d d d d 3 3 d d a a a d d d d e e e 
    . . e e e d d 5 5 d d d d d d a a d d d d e e e e 
    . e e e d d 5 5 5 d d d d d d d d d d e e e e e e 
    . e e d d d 5 5 d d d d d d d d d e e e e e e e . 
    e e e d d d d d d d d d d d d e e e e e e e e . . 
    e e e d d 9 9 d d d d d d d d e e e e e e . . . . 
    e e e d 9 9 9 d d d d d d d d d e e . . . . . . . 
    e e e d 9 9 d d 4 4 d d 2 2 d d d e e e . . . . . 
    . e e e d d d 4 4 4 d 2 2 2 d d d e e e e . . . . 
    . e e e e d d 4 4 d d 2 2 d d d d d e e e e . . . 
    . . e e e e e d d d d d d d d d d d e e e e . . . 
    . . . e e e e e e d d d d d d d d e e e e . . . . 
    . . . . . e e e e e e e e e e e e e e e . . . . . 
    . . . . . . . . e e e e e e e e e e . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(paleta_de_pintura, myTiles.transparency16)
let Caminar = 100
Prima_Nº1 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Prima_Nº1, 100, 0)
let Derecha = animation.createAnimation(ActionKind.Derecha, Caminar)
let Izquierda = animation.createAnimation(ActionKind.Izquierda, Caminar)
let Parada = animation.createAnimation(ActionKind.Parada, Caminar)
Parada.addAnimationFrame(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `)
Derecha.addAnimationFrame(img`
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 e f f . 
    . f f 4 4 f b f 4 4 e f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f 4 d d d d f . . . 
    . . . f e e 4 4 4 e f . . . 
    . . . 4 d d e 3 3 3 f . . . 
    . . . e d d e 3 3 3 f . . . 
    . . . f e e f 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . f f f . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 c f f . 
    . f f 4 4 f b f 4 4 f f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f e e d d d f . . . 
    . . . f 4 d d e 4 e f . . . 
    . . . f e d d e 3 3 f . . . 
    . . f f f e e f 6 6 f f . . 
    . . f f f f f f f f f f . . 
    . . . f f . . . f f f . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 c f f . 
    . f f 4 4 f b f 4 4 f f f . 
    . f f 4 d 4 1 f d d c f . . 
    . . f f f 4 d d d d f . . . 
    . . 4 d d e 4 4 4 e f . . . 
    . . e d d e 3 3 3 3 f . . . 
    . . f e e f 6 6 6 6 f f . . 
    . . f f f f f f f f f f . . 
    . . . f f . . . f f f . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f e 4 4 c c c f f f f . 
    . f f e 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e e f . . . 
    . . . f 3 3 3 e d d 4 . . . 
    . . . f 3 3 3 e d d e . . . 
    . . . f 6 6 6 f e e f . . . 
    . . . . f f f f f f . . . . 
    . . . . . . f f f . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d e e f f f . . 
    . . . f e 4 e d d 4 f . . . 
    . . . f 3 3 e d d e f . . . 
    . . f f 6 6 f e e f f f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f c d d f 1 4 d 4 f f . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e d d 4 . . 
    . . . f 3 3 3 3 e d d e . . 
    . . f f 6 6 6 6 f e e f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `)
animation.attachAnimation(Prima_Nº1, Izquierda)
animation.attachAnimation(Prima_Nº1, Derecha)
animation.attachAnimation(Prima_Nº1, Parada)
tiles.setTilemap(tiles.createTilemap(hex`3c000c0000000000000000000000000003000000000000030303020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c1818000000000000160b16180000000000000000000000000000000000000000000000000000000000000000000000000808000000000000000000160b0b17000000000000140b0b0b0b170000000000000000000000000019160b0b0b0b0b1700000000000000000000000e070700000000000000000000000000001600000000000000000000000c160b0b170000160b0b0b0b1610000000000000001617000000000000000e0618070e04040412000000000000000000000000000000000000000000160000000000000000000000000000000e12000000000000000e1200000e060916071804040404120c180203000000000e12000202020202020000030e0413120300000303000003030e120e13041201010100000e0415120e0609050d0b0b0b0b0b0b0b0b0b0b170000160b0b0b0b0b0b0b0b0b17000e160b0b0b0b0b120016170000160b0b0b0b0b0b0b0b0b17000e04041515060909050a0a0a0a0a0d0d0d0d0a10000000140d0a0a0a0a0d0a0d0d100e0b0a0d0a0a0a0a0b1200000000140a0d0a0d0d0a0d0a0a100e1a1a1a1a1a1a1a1a1a0a0a0d0a0d0a0a0a0a10000000000e150d0d1513041200000e0b0d0a0a0a0d0a0a0d0b120000000e041513040415151504121a111111111111110f1a0d0d0d0d0d0a0d1717170e13120e1515151513041515120e0b0d0a0a0d0a0a0a0a0a0a0b12000c041513041515151515151a11151515151515150f090a0a0a0a0a0d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0d0a0a0a0a0a0a0a0a0d0a0d0b0b0b0b0b0b0b0b0b1515151511151515151515151506090a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0d0a0d0a0a0a0a0a0d0a0a0a0d0a0a0a0a0a0a0d0a0a0a0d0a0a0d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 2 2 2 2 . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . 2 2 2 2 2 2 . . . . . . . . 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 . . 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 . . . . . . . . 2 
    2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile7,myTiles.tile8,myTiles.tile2,myTiles.tile3,myTiles.tile6,sprites.builtin.brick,sprites.dungeon.hazardSpike,myTiles.tile10,myTiles.tile11,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile17,myTiles.tile22,myTiles.tile23,myTiles.tile19,myTiles.tile24,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile30,sprites.castle.rock0,myTiles.tile31], TileScale.Sixteen))
scene.cameraFollowSprite(Prima_Nº1)
Prima_Nº1.ay = 300
enemigo.vy = 60
Enemigo2.vy = 60
Enemigo3.vy = 60
enemigo.setFlag(SpriteFlag.BounceOnWall, true)
Enemigo2.setFlag(SpriteFlag.BounceOnWall, true)
Enemigo3.setFlag(SpriteFlag.DestroyOnWall, true)
tiles.placeOnRandomTile(enemigo, myTiles.tile7)
tiles.placeOnRandomTile(Enemigo2, myTiles.tile7)
tiles.placeOnRandomTile(Enemigo3, myTiles.tile7)
info.startCountdown(30)
info.setLife(3)
info.setScore(0)
Prima_Nº1.setPosition(10, 40)
prima2.setPosition(775, 85)
music.powerUp.play()
game.onUpdate(function () {
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
})
