function Figures(input){

    let type = input[0];
    if (type === "square"){
        let a = Number(input[1]);
        let result = a * a
        console.log(result)
    }

    else if (type === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let result = a * b
        console.log(result.toFixed(3));
    }
    else if (type === "circle"){
        let r = Number(input[1]);
        let result = Math.PI * r * r;
        console.log(result.toFixed(3));
    }
    else if (type === "triangle"){
    let a = Number(input[1])
    let h = Number(input[2])
    let result = a * h / 2 
    console.log(result.toFixed(3))
    }
}
Figures(["circle",20,30])