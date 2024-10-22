//ham chieu dai chieu rong
const  length = 10;
const width = 5;

//ham dien tich
const area = (lenght, width) => lenght * width;

// chu vi
const perimeter = (lenght, width) => 2*(lenght * width);

//tinh chu vi va dien tich

const rectPerimeter = perimeter(length, width);
const rectArea = area(length, width);

// In ket qua
console.log(`chu  vi hinh chu nhat : ${rectPerimeter}`);
console.log(`dien tich hinh chu nhat : ${rectArea}`);


