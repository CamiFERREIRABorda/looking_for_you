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
    export const premio2 = SpriteKind.create()
    export const premio3 = SpriteKind.create()
}
function Nivel_3 () {
    game.splash("Nivel 3")
    tiles.setTilemap(tiles.createTilemap(hex`3c000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000914140000000000001b1b1b1400000000000000000000000000000000000000000000000000000000000000000000000005050000000000000000001b1b1b1b000000000000111b1b1b1b1b00000000000000000000000000151b1b1b1b1b1b1b00000000000000000000000b040400000000000000000000000000001b0000000000000000000000091b1b1b1b00001b1b1b1b1b1b0d000000000000001b1b000000000000000b0314040b0101010f0000000000000000000000000000000000000000001b0000000000000000000000000000000b0f000000000000000b0f00000b03061b0414010101010f09000017000000000b0f000000000018000000000b01100f0000000000000000000b0f0b10010f00000000000b01120f0b0306020a1b1b1b1b1b1b1b1b1b1b1b00001b1b1b1b1b1b1b1b1b1b1b000b1b1b1b1b1b1b0f001b1b00001b1b1b1b1b1b1b1b1b1b1b000b01011a120306060207070707070a0a0a0a070d000000110a070707070a070a0a0d0b08070a070707071b0f0000000011070a070a0a070a07070d0b1b1b1b1b1b1b1b1b1b07070a070a070707070d000000000b120a0a1210010f00000b081b0707070a07070a1b0f0000000b0112100101121212010f1b0e0e0e0e0e0e0e0c160a0a0a0a0a070a1313130b100f0b12121212100112120f0b081b07070a0707070707071b0f1909011210011212121212121b0e121212121212120c0607070707070a081c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c07070707070707070a070a1c1c1c1c1c1c1c1c1c121212120e121212121212121203060707070707070707070707070707070707070a070a07070707070a0707070a0707070707070a0707070a07070a1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c`, img`
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
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile6,sprites.builtin.brick,sprites.dungeon.hazardSpike,myTiles.tile10,myTiles.tile11,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile17,myTiles.tile22,myTiles.tile23,myTiles.tile19,myTiles.tile24,myTiles.tile26,myTiles.tile28,myTiles.tile30,sprites.castle.rock0,myTiles.tile31,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile14,sprites.dungeon.darkGroundCenter,sprites.dungeon.hazardLava1], TileScale.Sixteen))
    premio32 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
        . . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
        . . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
        . . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . . 
        . . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . . 
        . . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . . 
        . . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . . 
        . . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . . 
        . . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . . 
        . . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
        b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
        b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a . 
        b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . 
        b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a 
        b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a 
        b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a 
        b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a 
        b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a 
        b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a 
        b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a 
        b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a 
        b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
        b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a 
        b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a 
        b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a 
        . . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a 
        . . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a 
        . . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a 
        . . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a 
        . . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
        . . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
        `, SpriteKind.premio3)
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
    paleta_de_pintura = sprites.create(img`
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
    Prima_Nº1.setPosition(10, 0)
    paleta_de_pintura.setPosition(671, 88)
    premio32.setPosition(924, 104)
    Enemigo3.vy = 60
    Enemigo3.setFlag(SpriteFlag.BounceOnWall, true)
    info.startCountdown(30)
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
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . f . . f 9 9 . f . . . 
            . . . . f 3 9 f 5 5 9 f . . . . 
            . . . f 9 3 f 5 9 3 f . . . . . 
            . . f 9 5 f 9 3 3 f . . . . . . 
            . . f 3 3 f 9 9 3 f . . . . . . 
            . . f 9 9 f 9 9 3 f . . . . . . 
            . . f 9 9 f 9 3 3 f . . . . . . 
            . . . f 3 3 f 9 5 5 f . . . . . 
            . . . . f 3 5 f 3 5 3 f . . . . 
            . . . . . f 5 9 f 9 . . f . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Prima_Nº1, -200, 0)
    }
})
function Nivel_1 () {
    game.splash("Nivel 1")
    tiles.setTilemap(tiles.createTilemap(hex`3c000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000915150000000000001308130000000000000000000000000000000000000000000000000000000000000000000000000005050000000000000000001308081400000000000011080808081400000000000000000000000000161308080808081400000000000000000000000b04040000000000000000000000000000130000000000000000000000001308081400001308080808130d000000000000001314000000000000000b0315040b0101010f000000000000000000000000000000000000000000000000000000000000000000000000000b0f000000000000000b0f00000b0306130415010101010f09000018000000000b0f000000000019000000000b01100f0000000000000000000b0f0b10010f00000000000b01120f0b0306020a080808080808080808081400001308080808080808080814000b1308080808080f00131400001308080808080808080814000b01011b120306060207070707070a0a0a0a070d000000110a070707070a070a0a0d0b08070a07070707080f0000000011070a070a0a070a07070d0b17171717171717171707070a070a070707070d000000000b120a0a1210010f00000b080a0707070a07070a080f0000000b0112100101121212010f170e0e0e0e0e0e0e0c170a0a0a0a0a070a1414140b100f0b12121212100112120f0b080a07070a070707070707080f1a0901121001121212121212170e121212121212120c0607070707070a0808080808080808080808080808080808080807070707070707070a070a080808080808080808121212120e121212121212121203060707070707070707070707070707070707070a070a07070707070a0707070a0707070707070a0707070a07070a080808080808080808080808080808`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 2 2 2 2 . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . 2 2 2 2 2 2 . . . . . . . . 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
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
        `, SpriteKind.PREMIO1)
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
    lapiz = sprites.create(img`
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
    lapiz.setPosition(155, 88)
    microfono.setPosition(576, 88)
    Premio_1.setPosition(924, 104)
    enemigo.vy = 60
    enemigo.setFlag(SpriteFlag.BounceOnWall, true)
    info.startCountdown(30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PREMIO1, function (sprite, otherSprite) {
    otherSprite.destroy()
    enemigo.destroy()
    Nivel_2()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Prima_Nº1.isHittingTile(CollisionDirection.Bottom)) {
        Prima_Nº1.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.premio3, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
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
function Nivel_2 () {
    game.splash("Nivel 2")
    tiles.setTilemap(tiles.createTilemap(hex`3c000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000915150000000000001c1c1c1500000000000000000000000000000000000000000000000000000000000000000000000005050000000000000000001c1c1c1c000000000000111c1c1c1c1c00000000000000000000000000161c1c1c1c1c1c1c00000000000000000000000b040400000000000000000000000000001c0000000000000000000000091c1c1c1c00001c1c1c1c1c1c0d000000000000001c1c000000000000000b0315040b0101010f0000000000000000000000000000000000000000001c0000000000000000000000000000000b0f000000000000000b0f00000b0306130415010101010f09000018000000000b0f000000000019000000000b01100f0000000000000000000b0f0b10010f00000000000b01120f0b0306021c1c1c1c1c1c1c1c1c1c1c1c00001c1c1c1c1c1c1c1c1c1c1c000b1e1d1c1c1c1c0f001c1c00001c1c1c1c1c1c1c1c1c1c1c000b01011b120306060207070707070a0a0a0a070d000000110a070707070a070a0a0d0b1c070a070707071c0f0000000011070a070a0a070a07070d0b1c1c1c1c1c1c1c1c1c07070a070a070707070d000000000b120a0a1210010f00000b1c1c0707070a07070a1c0f0000000b0112100101121212010f1c0e0e0e0e0e0e0e0c170a0a0a0a0a070a1414140b100f0b12121212100112120f0b1c1c07070a0707070707071c0f1a09011210011212121212121c0e121212121212120c0607070707070a081f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f07070707070707070a070a1f1f1f1f1f1f1f1f1f121212120e121212121212121203060707070707070707070707070707070707070a070a07070707070a0707070a0707070707070a0707070a07070a1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f`, img`
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
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile6,sprites.builtin.brick,sprites.dungeon.hazardSpike,myTiles.tile10,myTiles.tile11,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile17,myTiles.tile22,myTiles.tile23,myTiles.tile19,myTiles.tile24,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile30,sprites.castle.rock0,myTiles.tile31,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile14,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3,sprites.builtin.oceanDepths4,sprites.dungeon.hazardLava1], TileScale.Sixteen))
    premio22 = sprites.create(img`
        . . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
        . . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . . 
        . . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . . 
        . . . . . . . . . e 4 6 7 7 6 6 7 7 2 3 2 e 7 7 7 6 6 8 . . . . 
        . . . . . . . . e 4 6 7 4 5 5 5 4 7 7 2 2 2 7 7 7 6 7 7 8 . . . 
        . . . . . . . 4 4 4 8 7 4 4 4 4 4 7 7 7 7 6 6 7 7 7 6 7 8 . . . 
        . . . . . . 4 5 2 2 e 7 7 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . . 
        . . . . . 4 5 2 3 2 2 7 7 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . . 
        . . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . . 
        . . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 . 
        . . . e 6 6 7 7 4 5 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4 
        . . e 4 6 7 7 7 4 4 4 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4 
        . . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e 
        . e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e 
        . e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e 
        . e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e 
        e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e . 
        e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . . 
        e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . . 
        e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . . 
        e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . . 
        e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . . 
        e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . . 
        e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . . 
        e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . . 
        e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . . 
        . e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . . 
        . e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . . 
        . . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . . 
        . . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.premio2)
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
    Prima_Nº1.setPosition(10, 0)
    bate.setPosition(320, 88)
    balon.setPosition(473, 88)
    premio22.setPosition(924, 104)
    Enemigo2.vy = 60
    Enemigo2.setFlag(SpriteFlag.BounceOnWall, true)
    info.startCountdown(30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.premio2, function (sprite, otherSprite) {
    otherSprite.destroy()
    Enemigo2.destroy()
    Nivel_3()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.wawawawaa.play()
    Prima_Nº1.setPosition(10, 0)
    info.changeLifeBy(-1)
})
let bate: Sprite = null
let balon: Sprite = null
let Enemigo2: Sprite = null
let premio22: Sprite = null
let microfono: Sprite = null
let lapiz: Sprite = null
let enemigo: Sprite = null
let Premio_1: Sprite = null
let Projectil: Sprite = null
let direccion = 0
let paleta_de_pintura: Sprite = null
let Enemigo3: Sprite = null
let premio32: Sprite = null
let Caminar = 0
let Prima_Nº1: Sprite = null
game.splash("Ayudame ", "A encontrar a mi prima")
scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
Prima_Nº1 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f . . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f . . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f . . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f . . . . . . 
    . . . . . . . f a a a a a a a a f . . . . . . . 
    . . . . . . . f a a a a a a a a . f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . . . a a a a a a a a f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Prima_Nº1, 100, 0)
let Derecha = animation.createAnimation(ActionKind.Derecha, Caminar)
let Izquierda = animation.createAnimation(ActionKind.Izquierda, Caminar)
let Parada = animation.createAnimation(ActionKind.Parada, Caminar)
Parada.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f f . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f f . . . . . 
    . . . . . . . f a a a a a a a a f f . . . . . . 
    . . . . . . . f a f a a a a a f . f . . . . . . 
    . . . . . . . f a f a a a a a f a f . . . . . . 
    . . . . . . f f a f a a a a a f a f . . . . . . 
    . . . . . . f a a f a a a a a f a f . . . . . . 
    . . . . . . f a a f a a a a a f a f f . . . . . 
    . . . . . . f a a f a a a a a f a f f . . . . . 
    . . . . . . . d d a a a a a a a d d . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f f f f . . . . . . . 
    . . . . . . . . . f 9 9 9 9 9 9 f . . . . . . . 
    . . . . . . . . f f 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . . . f 9 9 9 9 f f f f f . . . . . . 
    . . . . . . . . f 9 9 9 f f d d d . . . . . . . 
    . . . . . . . . f 9 9 9 f d d 7 d . . . . . . . 
    . . . . . . . . f 9 9 9 f d d 7 d . . . . . . . 
    . . . . . . . . f 9 9 9 f d d d d . . . . . . . 
    . . . . . . . . f 9 9 9 9 d d d d . . . . . . . 
    . . . . . . . . . f f 9 9 9 d d . . . . . . . . 
    . . . . . . . . . . 9 a 9 9 9 . . . . . . . . . 
    . . . . . . . . . . f a f a 9 a . . . . . . . . 
    . . . . . . . . . . f a f a a a . . . . . . . . 
    . . . . . . . . . . f a f a f a . . . . . . . . 
    . . . . . . . . . . f a f a f a . . . . . . . . 
    . . . . . . . . . . f a f a f a . . . . . . . . 
    . . . . . . . . . . f a f a f a . . . . . . . . 
    . . . . . . . . . . f a f f f a . . . . . . . . 
    . . . . . . . . . . f a f d f a . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 . . . . . . . . 
    . . . . . . . . . . . f 1 1 1 1 . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f f . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f f . . . . . 
    . . . . . . . f a a a a a a a a f f . . . . . . 
    . . . . . . . f a a a a a a a a . f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . f f a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . . . a a a a a a a a f f . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f f . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f f . . . . . 
    . . . . . . . f a a a a a a a a f f . . . . . . 
    . . . . . . . f a a a a a a a a . f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . f f a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . . . a a a a a a a a f f . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f f . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f f . . . . . 
    . . . . . . . f a a a a a a a a f f . . . . . . 
    . . . . . . . f a a a a a a a a . f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . f f a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . . . a a a a a a a a f f . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f f . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f f . . . . . 
    . . . . . . . f a a a a a a a a f f . . . . . . 
    . . . . . . . f a a a a a a a a . f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . f f a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . . . a a a a a a a a f f . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f . . . . . . . . 
    . . . . . . . f 9 9 9 9 9 9 9 9 f f . . . . . . 
    . . . . . . f 9 9 9 9 9 9 9 9 9 9 f f . . . . . 
    . . . . . . f 9 9 d d 9 d 9 9 9 9 f f . . . . . 
    . . . . . f 9 9 d d d d d d 9 9 9 f f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 1 1 7 d d 7 1 1 9 9 f . . . . . 
    . . . . . f 9 9 d 1 7 d d 7 1 d 9 9 f . . . . . 
    . . . . . . f 9 d d d d d d d d 9 9 f . . . . . 
    . . . . . . f 9 9 d d d d d d 9 9 9 f . . . . . 
    . . . . . . f 9 9 a a a a a a 9 9 f f . . . . . 
    . . . . . . . f a a a a a a a a f f . . . . . . 
    . . . . . . . f a a a a a a a a . f . . . . . . 
    . . . . . . . f a a a a a a a a a f . . . . . . 
    . . . . . . f f a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f . . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . f a a a a a a a a a a f f . . . . . 
    . . . . . . . . a a a a a a a a f f . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 6 6 6 6 6 6 6 f . . . . . . . 
    . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . 
    `)
animation.attachAnimation(Prima_Nº1, Izquierda)
animation.attachAnimation(Prima_Nº1, Derecha)
animation.attachAnimation(Prima_Nº1, Parada)
scene.cameraFollowSprite(Prima_Nº1)
Prima_Nº1.ay = 300
Nivel_1()
info.setLife(3)
Prima_Nº1.setPosition(10, 0)
music.powerUp.play()
game.onUpdate(function () {
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
})
