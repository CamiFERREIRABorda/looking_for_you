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
    export const Premio_1 = SpriteKind.create()
}
function Nivel_3 () {
    game.splash("Nivel 3")
    scene.setBackgroundImage(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d 1 d d d d d d d d d d d 1 1 d d d d d d d d d c c c 1 d c 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 d d d d d d c d d d d 1 1 1 d c d c d d d d c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 d d d d d d c d d d d 1 1 1 c c c d d d d d c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 d d c d d c c d d d 1 1 1 1 c c d d d d d d c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 d 1 d c d d c c d d 1 d 1 1 1 d c d d d d d c c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 d 1 d c c c d d d d 1 1 d 1 d d d d d d d d c c d c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 d 1 d d d d d d d d 1 1 1 d d d d d d d d c c c d 1 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 1 d d d d d d d d 1 1 d d c d d d d d c d c c c 1 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d 1 1 1 d d d d d d d d d d c d d d d d c d c c d c 1 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d 1 d d d d c d d d d c c d d d d c c c c c c c 1 1 1 d 1 f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f 1 d 1 1 1 d d d c d d d d d d c c c c c c c c c c d 1 1 1 d 1 f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d 1 1 1 d c d c d d c d d d c c c c c c c d 1 1 1 d d 1 f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d d c c d c d c d d d d d d d d d d 1 1 1 d d 1 f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d d c c d c c c d d d d d d d d 1 1 1 d d 1 f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d c c c c c c c d d d d 1 1 1 1 1 1 d 1 f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 d d d d d d d c d d c d d 1 1 1 1 d d d d 1 1 f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d d c c c c c c c c d d d d d 1 f f f f f f f f f f f f 
        f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d 1 d d d d d d d d d d d d 1 f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 d d 1 1 1 d d d d d d 1 1 1 f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `)
    tiles.setTilemap(tiles.createTilemap(hex`5a00140002081a181b0000000000000000000000000000000000000000000000000000000000000000001a181f1e1e1e181b1a181b1c0000000000000000000000000000000000000000000000000000000000000000000000000000000009091a1f181b0000000000000000001c00001a1b0000001c1c000000000000000000001c000000171e1e1e1e171e181e1b181b000000000000000000000000000000001c1a1b1c00000000000000000000000000000000000000090902201a181b000000000000001a181b1a18181b001a18181b001c0000000000001a181b00070209090902020209190019000000000000000000000000000000001c1a18181f1b00000000000000000000000000000000000002090902081a181d00000000001c00191c1a1717171a1818181b1b181b00000000001a1e1b07020909020202020209090902080000000000000000000000000000001a18181e181b00001700000016000017000000000000000010090909022019001c00001c1a181b0917070a0a0a081719171f1f171d000000000000191702020902020202020216160909020816000019000000000000000000000000191719170004030303030303030306000000000000000f1009090902201a181d1a181b170902020909090902090902201719000000040303030303030306020209090403030303060202090208191700000003030316000000070909090908040c0c0c0c0c0c0c0c06000000000000000f0f100d090202081900001907020202090909020202020909022019040316031111111111110303060909090411111111060202090909090908030303030316031607090909090403030c0c0c0c0c0c0c0406000000000000000f0f100d090902092004030303060202090204030303060209090220121111111312111111111113060909021211111111130602020209090916030c0c0c0c0c16160303030316120c0c0c0c0c0c0c0c0c0c05000000000000000403030303030303161211111304031616061211111104161603030306090202020e0209090909090409161606020204030303160202020904160c0c0c0c0c0c0c160c0c0c0c0909120c04030303030306050516140000000000221211111111111309090909091211111113091209091211111111111309090909000009090909091211111113000012111111130403030303030303060c0c0c0c0c0c0c0c13090909120c0c0c0c0c0c0c0c050505160000000024220b121111130909090909090912111309000009090909090909090109020e0000000000000000000000000000000000000002121111111111111113120c0c0c0c0c0c130909090909120c0c0c0c0c0c0c0505051400000000242401010101010909090909010901010000000000000000000000000000000000000000000000000000000000000000000000000012130000121113020000000000000000000909090000000000000000050505051400000000242422220101010109010909090909010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505141400000000242824242222220909090909090101090900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000262527242424242222222222090909010909000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000242424242824242424282424222222090909090100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000242424262527242426252724242527222222222200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000242424242424242424242424242424242424242400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000232323232323232323232323232323232323232323000000000000000000000000000000000000000023000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000212121212121212121212121212121212121212123232323232323232323232323232323232323232323000000000000000000000000000000000000151515151515151515151515151515151515151515151515151515151515`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 . . . . 2 2 2 . . . . . . 2 
        2 2 . . . . . . . 2 2 2 2 2 . . . . 2 2 2 2 2 . . . . . 2 2 2 2 2 . . . . . . 2 2 . . . 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 . . 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . . . . . . . . . 2 2 2 2 . . . 2 
        2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile35,myTiles.tile37,myTiles.tile69,myTiles.tile71,myTiles.tile67,myTiles.tile72,myTiles.tile20,myTiles.tile23,myTiles.tile26,myTiles.tile14,myTiles.tile36,myTiles.tile39,myTiles.tile41,myTiles.tile44,myTiles.tile50,myTiles.tile55,myTiles.tile75,myTiles.tile76,myTiles.tile77,sprites.castle.rock1,sprites.builtin.oceanDepths4,myTiles.tile80,myTiles.tile81,myTiles.tile82,myTiles.tile83,myTiles.tile84,myTiles.tile85,myTiles.tile86,myTiles.tile88,myTiles.tile89,myTiles.tile90,myTiles.tile91,myTiles.tile92,myTiles.tile93,myTiles.tile94,myTiles.tile95,myTiles.tile97,myTiles.tile98,myTiles.tile99,myTiles.tile103], TileScale.Sixteen))
    PREMIO3 = sprites.create(img`
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
    Prima_Nº1.setPosition(15, 0)
    paleta_de_pintura.setPosition(671, 88)
    PREMIO3.setPosition(924, 104)
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
            . . . . f 3 9 f 9 5 3 f . . . . 
            . . . f 9 3 f 3 5 3 f . . . . . 
            . . f 9 5 f 9 5 9 f . . . . . . 
            . . f 3 3 f 5 9 3 f . . . . . . 
            . . f 5 5 f 3 9 3 f . . . . . . 
            . . f 3 5 f 9 5 9 f . . . . . . 
            . . . f 3 5 f 3 5 3 f . . . . . 
            . . . . f 9 5 f 9 5 . f . . . . 
            . . . . . f 3 9 f 9 . . f . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Prima_Nº1, -200, 0)
    }
})
function Nivel_1 () {
    game.splash("Nivel 1")
    tiles.setTilemap(tiles.createTilemap(hex`5a001c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000270000000000000000000000000000000000000000000000131500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0b2727000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0b021c1c1926000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0b0b02181919191909260000000018191919191909000000000000000000181919190900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0b0b0802272727272719190900000027272727272727090000000001001819020202021819191919191919090000000000000000000f292929292929100000000000000000000000000000000000000000000f0703070303070b0b0b0802272727272727271919190927020202020202271919190900001702020202020202020202020202020900000000000000292929220808082429292910000f292929292929292910000000000f290f070308080807080b0b0b08021b1b272727272727272727270d00000000000e2727270d00000e17020202020202020202020202020202090000000000110b0b0b0b0b080824292929292929292922080808080810002929290a080807080307080808080808021b1b000000000000000e270d0000000000000000000000000000170202020202280202020202280202020d0000000000000000110b0b0b08081e1e1e1e1e1e1e1e080808080808081000000f08030303030308070808080808021b1b2600000000000000000000000000000000000000000000251702020202020202020202020202020d000000000000000000000b0b0b0b0303030808080808080808080808030708100f0808030303070807080808080808081b1b1b260000000000000000000000000000000000000000251b170202280202020228020202020202000000000000000000000011030303030303030303030303030303030307292929292929030307030808080807080303021b1b1b1b00000000000000000000251b1c260000000000251c1b170202020202020202020202020202000000000000000000000000110303030303030303030303030303030729221e1e1e1e0a0303030808080808030303030302021909000000000000000000251b1c1c1b26000000251c1b1b17020202020202020202020202020206000000000000000000000000000011030303030303030303030307292216120011030a0b0808070b0807080b03031a1a02020219090000000000000000181919191919191919191919190606060606060606060602280202021819191919191919090000000000000000000011080808080729292929161200000f080a0b0b0b0b242408030303071a1a280202020900000000000000000e02020202020202020202020202020202020202020202020202020202020202020202022929292929290000000000002929292929292929120000000f0808080b0724240404220303031a1a02020202021909000000000000000000000000000000000000000000000000000000000000000e0228020202020202280202110b0808081f290000000000110b0b0b0b0b0b120000000f08080808082404050521230303031a1a0202020d0e021900000000000000000000000000000000000000000000000000000000000000000e0202020202020202020d00110b0b08081f2900000000000000000000000000000f080808080824040405210c23220b031a1a02020d00000e19191919190900000000000000000000000000000000000000000000000000000000000000000000000000000000000000110b29290000000000000000000000000f0808080808240405052120202322031a1a1a0202000000000202020202061919090000000000001819191919191919191909000000000000000000000000000000000000000000000000111f2929000000000000000000000f082929292929292929292929292929292929291a0226000000000000022802020202191919191919191902020228022802020d00000000000000000000000000000000000000000000000000111f292929290000000000000f29291a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a021b2600000000251c2600000000000025260000000000000000251c1c1c260000001806060900000000000000000000060606060910000000110b08080b00000000000f29291a1e1e1e1e1e1e1e1e1e1e1e1e1e1e1a1a1a1a1a021c1b260000251c1c1c2600000000251b1c25260000002526251b1c1c1b1b260000251b1c260000000000000000180606020202292910000000000000000000000f29291a1a220808030303080808080808080808081e1a1a1a02021b1b00001b1c1b1b1c260000251c1c1c1c1b2526001c1b1b1c1c1b1c1c1c26001b1b1b1b26000000180606060602020202020229081000000000000000000f291a1a221e03030808080303030808030303080808081e1a1a02021b1b00251b1c1c1c1c1b26251c1b1c1c1c1b1c1c261c1c1c1c1b1c1c1c1c1c251b1c1c1c1c1c19191b1b1b1b1b0202280202021d2908100000000000000f29291a221e080808080808080803030808030303080308081a1a02021b1b001c1c1c1c1c1c1c1c1b1c1c1c1c1c1c1b1c1c1c1c06060606060606060606060606060606061b1b0202020202020202021d292929100000000000291a1a221e16160308030308080303030308080803080803031a1a0202060606060606060606060606060606060606060606060606060202020202020202020202020202020202020202020202020203081e1d0a07100000000f1e1e1e1e031624242424240a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a02280202020202020202020202020202020202020202020202020202020202020202022802020202020202020202020202020202020808081d292929290f16161616161616240a0a0a0a1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e0202020202020202280202020202020202020202020202280202020202020202020202020202020202020202022802020202020308080808081e1e1e1e0a0a0a0a0a0a0a0a0a1e1e1e1e1e080808080808080808030303030303`, img`
        . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 . . . . . . . . . . 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 
        2 2 . . . . . . . 2 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . 2 . . . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
        2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . 2 
        2 . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
        2 . . . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile12,myTiles.tile11,myTiles.tile2,myTiles.tile6,myTiles.tile10,myTiles.tile15,myTiles.tile19,myTiles.tile26,myTiles.tile28,myTiles.tile31,myTiles.tile14,myTiles.tile43,myTiles.tile17,myTiles.tile18,myTiles.tile20,myTiles.tile23,myTiles.tile24,myTiles.tile44,myTiles.tile46,myTiles.tile48,myTiles.tile49,myTiles.tile35,myTiles.tile16,myTiles.tile27,myTiles.tile30,myTiles.tile32,myTiles.tile58,myTiles.tile59,myTiles.tile21,myTiles.tile22,myTiles.tile38,myTiles.tile50,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile60,myTiles.tile61,myTiles.tile62,sprites.builtin.brick,myTiles.tile64,myTiles.tile65], TileScale.Sixteen))
    PREMIO12 = sprites.create(img`
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
        `, SpriteKind.Premio_1)
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
    PREMIO12.setPosition(709, 330)
    microfono.setPosition(576, 88)
    enemigo.vy = 60
    enemigo.setFlag(SpriteFlag.BounceOnWall, true)
    info.startCountdown(40)
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio_1, function (sprite, otherSprite) {
    otherSprite.destroy()
    enemigo.destroy()
    Nivel_2()
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
    tiles.setTilemap(tiles.createTilemap(hex`28003200060c061e0505060606060606061e1e060e0f1414141414141414141414141414141414141414141406070c0d0605061e05060506050605050d0e0f100a13131003030a0a130a130a0a0a140a140a14140607110c0d05050505050505051e050605050e0f100a100a0a13030a130a0a130a140a0a13141314060707110c0d0506050505050505060d061e060e0f0a0a0a0a0a0a03100a130a0a13100a0a130a1406070711110c0d0505051e0505060d060505050e090f0a0a100a0a130a0a100a0a100a0a100a0a140607070711110c060505060d1c1c1c1c1c1c1c1c1c1d0f0a0a0a0a0a0a0a0b0b0b0b0b0b0b0b0b0b1c1c1c1c1c1c1c1c1c1c1c1c1c121d121212121d1c1c1c0f0a0a100a0a0b120a1413130a0a0a141412121212121d12121d12121212121d121d1212121212120f0a0a0a0a0b121514131315130a130a1412121d121d1d121212121d1212121212121212121d12120f0a100a0a14120a130a140a0a0a1415141212121212121212121d1212121212121212121d1d120f0a0a0a0a0b1314130a0a130a1313131414021d121212121212121212121212121212121212120f0b0b0b0b0b0b13130a130a0a0a0a0a1313130212121d1212121212121212121212121d1d1212120f0a140a1315130a0a0a0a0a150a100a15130a021c1c1c1c1c1c1c1c1c1d121212121d1212121212120f130a0a0a0a0a140a100a130a140a0a150a01010106060606060e1c1d1d1212121c1c1c1c1c1c1c1c0a0a0a0a150a0a0a130a0a0a130a0a130a011e01011e06061e060e1c1212121d0f0a0a0a130a0a0a0a0a0a0a0a0a0a0a0a130a0a0a0a150a0a1e01010101010101010e1c1c121d1d120a130a0a0a0a100a0a100a0a0a0a0a140a100a0a0a13150a010101060606060601011e06161212120f0a0a0a0a130a0a0a0a0a0a0a0a0a0a0a140a0a0a0a130a0101010606060106060101060616121d1d0f0a150a0a0a0a15150a0a0a150a0a0a130a150a0a0a0a1e0101060606060606010101011c1c1c120f0a0a0a0a0a0a0a150a0a0a130a0a0a0a0a130a0a150a010101060606060606011e010106061c1d0f0a0a100a0a0a0a130a0a100a0a0a0a150a0a0a0a130a01011e01011e011e011b1c1c0106061c1c1c1c1c1c1c1c0a0a0a0a0a0a0a150a0a0a0a100a100a0a041c1c1c1c1c1c1c1c1c1c18011e010e140a13130a141c100a0a0a150a0a0a0a100a0a0a0a100a0a191909090909090909090909180d0d0e130a0a0a0a0a141c0a0a0a150a0a0a0a0a150a0a1510100a090909090909090909090909091818090f0a0a15100a0a140a100a130a0a0a0a150a130a0a130a0a09090909090909090909090909090909090f0a0a150a0a101c1c0a0a0a0a0a15150a0a0a100a150a0909090909090909090909090909090909090f1315150a0a141c0a0a0a100a130a13100a1015130a0909090909090909090909090909090909090f0a130a0a0a0a0a0a0a0a0a0a0a0a0a101510100a0a0909090909090909090909090909090909090f0a0a150a0a0a0a0a0a150a1010101010131510100a09090909090909090909090909041c1c1c1c1c0a0a0a0a0a100a0a0a130a15151515100a1315150a09090909090909041c1c1c1c1c1c1c0f0a0a150a0a0a0a0a0a0a0a0a0a0a15130a1310100a130a0a040909090909041c191212121212121d0f0a0a0a0a150b0b0b0b0b0b0b0b0a0a0a0a1410100a130a0404040404041c19121d091d12121212120f0a0a0a1c1514130a130a140a0a0a0a0a0a15100a0a0a1c1c1c1c1c1c19120909090909090912121d0f0a0a1c1c0a0a0a0a0a130b0b0b0a10130a1410100a1912121212121209091d090909091d1c1c1c1c1c1c1c0a130a0a100a0a0a140a0a0a0a0a1315150a121d121d120909090909090909091c1c1c15140a130a0a0a0a150a0a0a130a0b0b0b150a0a0a140a12121d12120909090909090904121c150a13130a0a1912121d12121d0f0a0a0a140a150a0a130a0a1d1212121209090909090909041c1c140a0a0a0a19121d1212121212120f0a0a130a0a0a0a0a0a0a041d121212090909090909091d03030a150a0a19121d09090909090909120f0a0a0a150a0a0a150a1c1c1c1c1c0909090909091212030a130a0a190909091d09090909091d09121d0f0a0a150b0b0b0b1c121d12120909090912121d1d030a0a0a1912090909091816161609121d0912120a15031a0711071c1d121d0909091d121c1c1c1c0a130a0a12121d091616171e081e0e0909091d1d030303071111111c121d09090909121d1c0a0a0a130a19191209091608081e0808081e0e091d12031a0711111107071c121d090912121d1c1c1514130a191212091616081e080808080808080e09031a111111111107071c1d090904121d1c1c15140a0a1909121d09180808080808080808080803030311110707111107071c121d121d1d1c1c1c150a130a191d12090918081e08080808081e0303031a1111111111110707071c121d1d1c1c1c1c1c15150a0a0a19121209181e08080808080303031a11111111110707111107071c1c1c1c1c1c1c1c1c15150a150a0a09120918171e08081e081a11111111111111110711110707071c1c1c1c1c1c1c1c1c1515150a0a0a191212181e080808081a1111111107110707110711071107071c1c1c1c1c1c1c1c1c151515150a0a0a091d1817170d0d1a111111071111110707110707071107071c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 . . . . . . 2 2 . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . 2 2 . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . 2 
        2 2 . . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . 2 2 2 . . . . . . . 2 
        2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . 2 2 2 . . . . . 2 
        2 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
        2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 
        2 2 . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 
        2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . 2 
        2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . 2 
        2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . 2 
        2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . 2 
        2 2 . . 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile36,myTiles.tile26,myTiles.tile25,myTiles.tile37,myTiles.tile39,myTiles.tile50,myTiles.tile51,myTiles.tile34,myTiles.tile35,myTiles.tile38,myTiles.tile41,myTiles.tile43,myTiles.tile52,myTiles.tile40,myTiles.tile42,myTiles.tile53,myTiles.tile56,myTiles.tile22,myTiles.tile14,myTiles.tile54,myTiles.tile55,myTiles.tile57,myTiles.tile60,myTiles.tile66,myTiles.tile67,myTiles.tile68], TileScale.Sixteen))
    PREMIO2 = sprites.create(img`
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
    Prima_Nº1.setPosition(15, 0)
    bate.setPosition(41, 14)
    balon.setPosition(15, 69)
    PREMIO2.setPosition(142, 107)
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
    Prima_Nº1.setPosition(15, 0)
    info.changeLifeBy(-1)
})
let bate: Sprite = null
let balon: Sprite = null
let Enemigo2: Sprite = null
let PREMIO2: Sprite = null
let microfono: Sprite = null
let lapiz: Sprite = null
let enemigo: Sprite = null
let PREMIO12: Sprite = null
let Projectil: Sprite = null
let paleta_de_pintura: Sprite = null
let Enemigo3: Sprite = null
let PREMIO3: Sprite = null
let direccion = 0
let Caminar = 0
let Prima_Nº1: Sprite = null
game.splash("Ayudame ", "A encontrar a mi prima")
scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
Prima_Nº1 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 8 6 6 1 6 6 6 6 1 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 8 d 8 6 6 6 8 6 6 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 8 8 8 d d d 8 6 8 d 8 8 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 f f f f d d d 8 f f f f 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 1 7 1 7 d d d d 7 1 7 1 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 6 9 1 6 6 f d d d d f 6 6 1 6 6 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 1 b b f d d d d f b b 1 9 6 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d f d d d f d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d f f f d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 f d d d d d d d d d d f 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 f f f f f f f f f f f f 9 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f f f f a c d d c a f f . . f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f c c a a a a a c c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f c a c c c c c a c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f c f a 1 a a a 1 a f c f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f c c f a 1 a a a 1 a f a c f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f c f a a 1 1 1 1 1 a a f c f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f c a f a a 1 1 1 1 1 a a f a c f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f c f c a a 1 1 b 1 1 a a c f c f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f c a f a a a 1 1 1 1 1 a a a f a c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f c f a a a a a a a a a a a a a f c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f a f a a a a a a a a a a a a a f c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f b b b b b c c c b b b b b f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f d f 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f 6 6 6 6 6 6 f 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 6 6 6 6 6 6 f 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 6 6 6 6 6 6 f 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f f f f f . f f f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 1 1 1 1 f . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f b b b b f . f b b b b f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b b b f . f b b b b b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b b b f . f b b b b b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f f f f f . . . f f f f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Prima_Nº1, 100, 0)
let Derecha = animation.createAnimation(ActionKind.Derecha, Caminar)
let Izquierda = animation.createAnimation(ActionKind.Izquierda, Caminar)
let Parada = animation.createAnimation(ActionKind.Parada, Caminar)
Parada.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
animation.attachAnimation(Prima_Nº1, Izquierda)
animation.attachAnimation(Prima_Nº1, Derecha)
animation.attachAnimation(Prima_Nº1, Parada)
scene.cameraFollowSprite(Prima_Nº1)
Prima_Nº1.ay = 300
Nivel_1()
info.setLife(3)
Prima_Nº1.setPosition(15, 0)
music.powerUp.play()
direccion = 1
Prima_Nº1.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
})
