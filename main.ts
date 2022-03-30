input.onButtonPressed(Button.B, function () {
    teller = 7
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(880, music.beat(BeatFraction.Quarter))
    teller += -1
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
let teller = 0
teller = 7
basic.forever(function () {
    if (teller == 0) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showString("GAME OVER!")
    }
    if (teller == 0) {
        teller = 7
    }
    basic.showNumber(teller)
})
