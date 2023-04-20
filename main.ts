scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
let movement = 5
let mySprite = sprites.create(img`
    . . . 2 2 2 2 2 2 2 2 . . . . 
    . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    2 c 2 e e e e e e e b c 4 2 2 
    2 2 e b b e b b b e e b 4 2 2 
    2 e b b b e b b b b e 2 2 2 2 
    e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    e e e e e e f e e e f e 2 d d 
    e e e e e e f e e f e e e 2 d 
    e e e e e e f f f e e e e e e 
    e f f f f e e e e f f f e e e 
    . f f f f f e e f f f f f e . 
    . . f f f . . . . f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, movement, movement)
mySprite.vy = 150
scene.cameraFollowSprite(mySprite)
info.setLife(3)
forever(function () {
    if (movement == 305) {
        movement = 300
    }
    if (movement == 0) {
        movement = 5
    }
    if (movement == -1) {
        movement = 1
    }
})
game.onUpdateInterval(500, function () {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        movement += 5
        controller.moveSprite(mySprite, movement, movement)
        info.setScore(movement)
    }
    if (!(controller.left.isPressed() || controller.right.isPressed())) {
        movement += -5
        controller.moveSprite(mySprite, movement, movement)
        info.setScore(movement)
    }
})
