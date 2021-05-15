input.onButtonPressed(Button.A, function () {
    p1 += pins.map(
    input.temperature(),
    0,
    1023,
    0,
    100
    )
    basic.showString("" + (p1))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + ((p1 + p2 + p3) / 3))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (p1))
    basic.pause(1000)
    basic.showString("" + (p2))
    basic.pause(1000)
    basic.showString("" + (p3))
    basic.pause(1000)
})
let p3 = 0
let p2 = 0
let p1 = 0
p1 = 0
p2 = 0
p3 = 0
