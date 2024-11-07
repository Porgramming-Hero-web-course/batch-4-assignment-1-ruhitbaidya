type Circle = {
    shape: "circle"; 
    radius: number;
};

type Rectangle = {
    shape: "rectangle";  
    width: number;
    height: number;
};

const calculateShapeArea = (calculateValue: Circle | Rectangle) => {
    if (calculateValue.shape === "circle") {
        return Math.PI * calculateValue.radius * calculateValue.radius;
    } else if (calculateValue.shape === "rectangle") {
        return calculateValue.width * calculateValue.height;
    } else{
        return `You are filled wrong input`
    }
};


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); 

const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea);  
