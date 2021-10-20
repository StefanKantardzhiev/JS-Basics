function solve(input) {


    let nameNominee = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let inputL = input.length;
    let addedPoints = 0;
     
    

    for (i = 3; i < inputL; i=i+2) {
        let judgeName = input[i];
        let pointsPerNameLength = judgeName.length;
        let judgePoints = Number(input[i + 1]);

        startingPoints= ((pointsPerNameLength*judgePoints) / 2) + startingPoints;
        
        if (startingPoints > 1250.5) {
            break;
        }       
    }

    if (startingPoints > 1250.5) {
        console.log(`Congratulations, ${nameNominee} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
    } else if (startingPoints < 1250.5) {
        console.log(`Sorry, ${nameNominee} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }

}
solve(["Steve",10000,4])