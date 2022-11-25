let odd = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.AB, function () {
    odd = 1
    for (let index = 0; index <= 20; index++) {
        basic.showNumber(odd)
        odd += 2
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211190")
})
basic.forever(function () {
	
})
