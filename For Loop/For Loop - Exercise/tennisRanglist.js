function TennisRangList(input){

    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let wins = 0;

    let inputL = input.length;
    let points=startPoints;


    for(let a=2;a<inputL;a++){
        
        let stage = input[a];


        switch(stage){

        case "W":
        points+=2000;
        wins++;
        break;

        case"F":
        points+=1200;
        break;

        case"SF":
        points+=720;
        break;
        }
    }
    
let avgPoints = (points-startPoints) / tournaments;
console.log(`Final points: ${points}`)
console.log(`Average points: ${Math.floor(avgPoints)}`)
let percentage = wins/tournaments*100
console.log(`${percentage.toFixed(2)}%`)

}
TennisRangList([4,
    750,
    `SF`,
    `W`,
    `S`,`F`,
    `W`])