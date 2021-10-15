function Converter(input){


    let animals = (input[0]);
    
    switch(animals){
        
    case "dog":
         console.log("mammal");
         break;
    case "crocodile":
    case "snake":
    case "tortoise":
        console.log("reptile");
        break;

    default:
    console.log("unknown");
    break;
    
    }
}
Converter([`cheetah`])