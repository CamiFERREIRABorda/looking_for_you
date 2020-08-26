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
    export const Food2 = SpriteKind.create()
    export const Food3 = SpriteKind.create()
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
    tiles.setTilemap(tiles.createTilemap(hex`3c000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000915150000000000001308131500000000000000000000000000000000000000000000000000000000000000000000000005050000000000000000001308081400000000000011080808081400000000000000000000000000161308080808081400000000000000000000000b04040000000000000000000000000000130000000000000000000000091308081400001308080808130d000000000000001314000000000000000b0315040b0101010f000000000000000000000000000000000000000000130000000000000000000000000000000b0f000000000000000b0f00000b0306130415010101010f09000018000000000b0f000000000019000000000b01100f0000000000000000000b0f0b10010f00000000000b01120f0b0306020a080808080808080808081400001308080808080808080814000b1308080808080f00131400001308080808080808080814000b01011b120306060207070707070a0a0a0a070d000000110a070707070a070a0a0d0b08070a07070707080f0000000011070a070a0a070a07070d0b17171717171717171707070a070a070707070d000000000b120a0a1210010f00000b080a0707070a07070a080f0000000b0112100101121212010f170e0e0e0e0e0e0e0c170a0a0a0a0a070a1414140b100f0b12121212100112120f0b080a07070a070707070707080f1a0901121001121212121212170e121212121212120c0607070707070a0808080808080808080808080808080808080a07070707070707070a070a080808080808080808121212120e121212121212121203060707070707070707070707070707070707070a070a07070707070a0707070a0707070707070a0707070a07070a080808080808080808080808080808`, img`
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
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile6,sprites.builtin.brick,sprites.dungeon.hazardSpike,myTiles.tile10,myTiles.tile11,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile17,myTiles.tile22,myTiles.tile23,myTiles.tile19,myTiles.tile24,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile30,sprites.castle.rock0,myTiles.tile31,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen))
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
        `, SpriteKind.Premio_Final)
    tiles.placeOnRandomTile(Premio_1, myTiles.tile14)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food3, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile13)
    info.changeScoreBy(1)
    bate.destroy()
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
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile9)
    info.changeScoreBy(1)
    microfono.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile12)
    info.changeScoreBy(1)
    balon.destroy()
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
let Premio_1: Sprite = null
let Projectil: Sprite = null
let direccion = 0
let Caminar = 0
let bate: Sprite = null
let balon: Sprite = null
let microfono: Sprite = null
let Enemigo3: Sprite = null
let Enemigo2: Sprite = null
let enemigo: Sprite = null
let Prima_Nº1: Sprite = null
game.splash("Ayudame ", "A encontrar a mi prima")
scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
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
enemigo = sprites.create(img`
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
Enemigo2 = sprites.create(img`
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
Enemigo3 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f . . . . . . . . . . 
    . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
    . . . . . . . f 1 1 1 1 1 1 1 d f . . . . . . . 
    . . . . . . f d 1 1 1 1 1 1 1 d d f . . . . . . 
    . . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
    . . . . . . f d 1 1 1 d d d d d d f . . . . . . 
    . . . . . . f d 1 d f b d d d d b f . . . . . . 
    . . . . . . f b d d f c d b b b c f . . . . . . 
    . . . . . . . f 1 1 1 1 1 b b c f . . . . . . . 
    . . . . . . . f 1 b 1 f f f f f . . . . . . . . 
    . . . . . . . f b f c 1 1 1 b f . . . . . . . . 
    . . . . . . . . f f 1 b 1 b f f . . . . . . . . 
    . . . . . . . . . f b f b f f f . f . . . . . . 
    . . . . . . . . . . f f f f f f f f . . . . . . 
    . . . . . . . . . . . . f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
microfono = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . b b b b b b b b . . . . 
    . . . b b b b b b b b b b . . . 
    . . . b b b b b b b b b b . . . 
    . . . d d d d d d d d d d . . . 
    . . . b b b b b b b b b b . . . 
    . . . b b b b b b b b b b . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Food)
balon = sprites.create(img`
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
bate = sprites.create(img`
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
enemigo.vy = 60
Enemigo2.vy = 60
Enemigo3.vy = 60
enemigo.setFlag(SpriteFlag.BounceOnWall, true)
Enemigo2.setFlag(SpriteFlag.BounceOnWall, true)
Enemigo3.setFlag(SpriteFlag.DestroyOnWall, true)
tiles.placeOnRandomTile(enemigo, myTiles.tile7)
tiles.placeOnRandomTile(Enemigo2, myTiles.tile7)
tiles.placeOnRandomTile(Enemigo3, myTiles.tile7)
scene.cameraFollowSprite(Prima_Nº1)
Prima_Nº1.ay = 300
info.startCountdown(30)
info.setLife(3)
Prima_Nº1.setPosition(10, 40)
music.powerUp.play()
Nivel_1()
game.onUpdate(function () {
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
})
