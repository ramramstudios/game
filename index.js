const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)


class Sprite{
    constructor(position, velocity){
        this.position = position
        this.velocity = velocity
    }

    draw() {
    c.fillStyle = 'blue' 
    c.fillRect(this.position.x, this.position.y, 50, 150)
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
},
   velocity: {
       x:0
       y:0
   }
})


player.draw()

const enemy = new Sprite({
    position: {
    x: 900,
    y: 100
},
    velocity: {
        x:0,
        y:0
}
})

enemy.draw()


console.log(player)

console.log("canvas view loaded")

function animate(){

    window.requestAnimationFrame(animate)
    console.log("animate() is working")
}

animate()

