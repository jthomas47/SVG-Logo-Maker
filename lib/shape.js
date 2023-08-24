class Shape {
    constructor(color, text, ) {
        this.color = color;
        this.text = text;
    }
    
}

class Triangle extends Shape {
    constructor(text, textColor, color) {
        super(color, text);
        this.textColor = textColor; 
    }

    render () {
        return `<svg version="1.1" height="210" width="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,10 250,182 40,182" fill="${this.color}"/>
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, color) {
        super(color, text);
        this.textColor = textColor;
    }

    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
          <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    }
}

class Square extends Shape {
    constructor(text, textColor, color) {
        super(color, text);
        this.textColor = textColor;
    }

    render () {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

          <rect x="80" y="50" width="150" height="150" fill="${this.color}"/>
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    }
}

module.exports = { Triangle, Circle, Square };