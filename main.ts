radio.onReceivedString(function (receivedString) {
    key = receivedString
})
let key = ""
radio.setGroup(33)
Drones.initModule(Drones.Runmodes.Master)
basic.showIcon(IconNames.House)
Drones.UAV_speed(100)
basic.forever(function () {
    if (key == "take off") {
        basic.showIcon(IconNames.Yes)
        Drones.Basic_action(Drones.Basicoptions.Takeoff)
    } else if (key == "landing") {
        basic.showIcon(IconNames.No)
        Drones.Basic_action(Drones.Basicoptions.Landing)
    } else if (key == "forward") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Drones.Move_action(Drones.Directionoptions.Forward, 100)
    } else if (key == "backward") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Drones.Move_action(Drones.Directionoptions.Backward, 100)
    } else if (key == "left") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Drones.Move_action(Drones.Directionoptions.Left, 100)
    } else if (key == "right") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Drones.Move_action(Drones.Directionoptions.Right, 100)
    } else if (key == "Turn left") {
        basic.showLeds(`
            . . . . .
            . . . # .
            # . # . #
            # # . . .
            # # # . .
            `)
        Drones.Rotation_action(Drones.Angleoptions.Left, 90)
    } else if (key == "Turn right") {
        basic.showLeds(`
            . . . . .
            . # . . .
            # . # . .
            . . . # #
            . . # # #
            `)
        Drones.Rotation_action(Drones.Angleoptions.Right, 90)
    } else if (key == "up") {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            `)
        Drones.Move_action(Drones.Directionoptions.Up, 100)
    } else if (key == "down") {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        Drones.Move_action(Drones.Directionoptions.Down, 100)
    }
})
