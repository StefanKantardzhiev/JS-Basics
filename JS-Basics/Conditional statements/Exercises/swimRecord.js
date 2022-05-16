function WR(input) {

    let wrinsec = Number(input[0]);
    let wrinmet = Number(input[1]);
    let timeonemet = Number(input[2]);


    let totalsec = wrinmet * timeonemet;
    let slowage = Math.floor(wrinmet / 15) * 12.5;
    let persrec = totalsec + slowage;

    if (persrec < wrinsec) {
        console.log(`Yes, he succeeded! The new world record is ${persrec.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(persrec-wrinsec).toFixed(2)} seconds slower.`)
    }

}
WR([1,2,3])