basic.forever(function () {
    eurate.Move(
    100,
    eurate.TwoDDir.FW,
    500
    )
    while (input.isGesture(Gesture.Shake)) {
        eurate.Move(
        255,
        eurate.TwoDDir.FW,
        500
        )
    }
})
