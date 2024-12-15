const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// TODO: Add responsive density of stars based on zoom
const stars = [];
const starCount = 5000;
const starSize = 2;
const attractorSize = 300;
const scrollSpeed = 0.3;
const pointer = { x: 0, y: 0 };
const backgroundColor = '#000000';

let width, height, widthModulo, heightModulo;

var grad;
var gradBlur;

// Resize the canvas and update related properties
function resizeCanvas() {
    width = canvas.width = innerWidth;
    height = canvas.height = innerHeight;
    widthModulo = width + starSize + attractorSize;
    heightModulo = height + starSize + attractorSize;

    pointer.x = width / 2;
    pointer.y = height / 2;

    gradBlur = ctx.createLinearGradient(0, height, 0, height - 200);
    gradBlur.addColorStop(0, "rgb(0, 0, 0)");
    gradBlur.addColorStop(0.9, "rgba(0, 0, 0,0)");

    grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, "#002");
    grad.addColorStop(0.3, "black");
}

// Initialize stars with random positions, velocities, and colors
function initializeStars() {
    const randInt = (val) => (Math.random() * val) | 0
    for (let i = 0; i < starCount; i++) {
        // Want more stars at lower z values
        const z = Math.random() * Math.random() * Math.random();
        const col = Math.min(255, Math.floor(200 * z) + 60);
        stars.push({
            x: randInt(width * 1000),
            y: randInt(height * 1000),
            v: z + 0.5,
            col: `rgb(${col},${col},${col})`
        });
    }
    stars.sort((a, b) => a.v - b.v); // Sort in descending order
}

// Animation loop
function animate(timer) {
    // Check for resizing of window
    if (width !== innerWidth || height !== innerHeight) {
        resizeCanvas();
    }

    // Update direction
    // const dir = Math.sin(timer / 5000);
    // const dx = Math.cos(dir) * scrollSpeed;
    const dy = -scrollSpeed; // I like the upwards movement

    // Clear the canvas
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'lighter';

    // Render stars
    // Wrap around the screen
    const starSize2 = starSize / 2;
    const attractorSize2 = attractorSize / 2;
    for (const star of stars) {
        ctx.fillStyle = star.col;

        // Move the star
        // star.x += star.v * dx;
        star.y += star.v * dy;

        const x = ((star.x % widthModulo) + widthModulo) % widthModulo - (starSize2 + attractorSize2);
        const y = ((star.y % heightModulo) + heightModulo) % heightModulo - (starSize2 + attractorSize2);

        // Attract stars to the pointer
        const xx = pointer.x - x;
        const yy = pointer.y - y;
        const distance = Math.sqrt(xx ** 2 + yy ** 2);
        const attraction = attractorSize2 * star.v;

        const finalX = x - (xx / distance) * attraction;
        const finalY = y - (yy / distance) * attraction;

        // Draw the star
        const size = starSize * star.v;
        ctx.fillRect(finalX, finalY, size, size);
    }

    ctx.globalCompositeOperation = 'source-over';

    // Add bottom blur to create effect of stars appearing
    ctx.fillStyle = gradBlur;
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(animate);
}

// Initialize and start animation
resizeCanvas();
initializeStars();
requestAnimationFrame(animate);