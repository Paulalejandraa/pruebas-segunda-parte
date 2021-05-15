input.onButtonPressed(Button.A, function () {
    temperatura = pins.analogReadPin(AnalogPin.P0)
    p1 = pins.map(
    temperatura,
    0,
    1023,
    0,
    100
    )
    temperatura = pins.analogReadPin(AnalogPin.P1)
    p2 = pins.map(
    temperatura,
    0,
    1023,
    0,
    100
    )
    temperatura = pins.analogReadPin(AnalogPin.P2)
    p3 = pins.map(
    temperatura,
    0,
    1023,
    0,
    100
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + ((p1 + p2 + p3) / 3))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (p1))
    basic.pause(500)
    basic.showString("" + (p2))
    basic.pause(500)
    basic.showString("" + (p3))
    basic.pause(500)
})
let temperatura = 0
let p3 = 0
let p2 = 0
let p1 = 0
p1 = 0
p2 = 0
p3 = 0
