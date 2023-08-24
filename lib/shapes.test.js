const { Triangle, Circle, Square } = require('./shape.js');


//test cirlcle
describe('Circle', () => {
    it('should return svg for a blue circle with white text "ex"', () => {
        const text = 'ex';
        const textColor = 'white';
        const shapeColor = 'blue';
        const logo = new Circle(text, textColor, shapeColor);
        const svg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
          <circle cx="150" cy="100" r="80" fill="${shapeColor}"/>
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        
        </svg>`;
        expect(logo.render(text, textColor, shapeColor)).toEqual(svg);
    });
});


//test triangle
describe('Triangle', () => {
    it('should return svg for a blue triangle with white text "ex"', () => {
        const text = 'ex';
        const textColor = 'white';
        const shapeColor = 'blue';
        const logo = new Triangle(text, textColor, shapeColor);
        const svg = `<svg version="1.1" height="210" width="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,10 250,182 40,182" fill="${shapeColor}"/>
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`;
        expect(logo.render(text, textColor, shapeColor)).toEqual(svg);
    });
});

//test square
describe('Square', () => {
    it('should return svg for a blue square with white text "ex"', () => {
        const text = 'ex';
        const textColor = 'white';
        const shapeColor = 'blue';
        const logo = new Square(text, textColor, shapeColor);
        const svg = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

          <rect x="80" y="50" width="150" height="150" fill="${shapeColor}"/>
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        
        </svg>`;
        expect(logo.render(text, textColor, shapeColor)).toEqual(svg);
    });
});

