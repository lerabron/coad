// Define the rectShape object with a context method
const rectShape = {
    context: function(context) {
        // Return a function that draws a rectangle on the given context
        return function(item, x, y) {
            context.fillStyle = item.color;
            context.fillRect(x, y, item.width, item.height);
        };
    }
};

// Usage of the defined rectShape
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const item = { color: 'blue', width: 50, height: 30 };
const x = 10;
const y = 20;

// Call the method
return rectShape.context(context)(item, x, y);
