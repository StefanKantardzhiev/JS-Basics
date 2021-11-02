function solve(input) {
    let currentTime = input[0]
    let [hour, minute, second] = currentTime.split(":")
    let addedTime = Number(input[1])
    let steps = Number(input[2])

    minute = Number(minute)
    hour = Number(hour)
    second = Number(second)

    let totalSeconds = second + addedTime



    for (let i = 0; i < steps; i++) {

        if(totalSeconds > 59){
            second = 0
            minute = minute + Math.round(totalSeconds/60)   
        }
        if (minute > 59){

            hour += (minute/60)     
        }
    }
    console.log(hour,minute,second)
}
solve([`23:49:13`,
    `5424`,
    `2`])