function SumSeconds(input){

    let timefirst = Number(input[0]);
    let timesecond = Number(input[1]);
    let timethird = Number(input[2]);

    let totaltime = timefirst + timesecond + timethird

    

    let minutes = Math.floor(totaltime/60)
    let seconds = totaltime % 60;

    if(seconds < 10){

        console.log(`${minutes}:0${seconds}`)
    }
    else{

        console.log(`${minutes}:${seconds}`);
    }
}
SumSeconds([1,2,3])