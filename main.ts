controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    hp += -1
    game.splash("\"HP  \"" + hp)
})
let hp = 0
hp = 3
scene.setBackgroundColor(2)
game.splash("\" YOU HAVE " + hp + " CHANCE ONLY\"")
forever(function () {
    if (hp == 0) {
        game.over(true)
    }
})
