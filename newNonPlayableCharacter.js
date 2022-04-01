function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    function walk(time, facing){
        return new Promise((resolve) => {
            direction = facing
            element.src = `./assets/red-character/${facing}.gif`
            setTimeout(() => {
                stop()
                resolve()
            }, time)
        })
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walk: walk,
        stop: stop
    }
}