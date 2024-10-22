class Shape {
    constructor(rong, dai) {
        if (rong !== undefined && dai !== undefined) {
            this.rong = rong;
            this.dai = dai;
            this.dientich = this.rong * this.dai;  // Calculate area in the same constructor
        }
    }

    displayInfo() {
        console.log(`Dientich: ${this.dientich}`);  // Use backticks for template literals
    }
}

// Create an instance of Shape
const chieudai1 = new Shape(5, 4);

// Call the displayInfo() method on the instance
chieudai1.displayInfo();  // Output: Dientich: 20
