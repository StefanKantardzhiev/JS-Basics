function lunch(input) {

    let nameSeries = input[0];
    let episodelength = Number(input[1]);
    let breaklength = Number(input[2]);

    let lunchtime = breaklength * 1/8;
    let breaktime = breaklength * 1/4;
    let timeleft = breaklength - breaktime - lunchtime;
    let total2=Math.ceil(timeleft-episodelength);
    let total = Math.ceil(episodelength - timeleft);
    


    if (timeleft >= episodelength) {

        console.log(`You have enough time to watch ${nameSeries} and left with ${total2} minutes free time.`)

    } else {

        console.log(`You don't have enough time to watch ${nameSeries}, you need ${total} more minutes.`)

    }


}
lunch([1,2,3])