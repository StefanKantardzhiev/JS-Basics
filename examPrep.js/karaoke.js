function karaoke(input) {

    let participants = input[0].split(", ")

    let availableSongs = input[1].split(", ")
    let awards =0;
    let currentPerformance = input.slice(2,input.length)

   



    for (let line of currentPerformance){
        let result = [];
        let tokens = line.split(", ")
        let currentName = tokens[0]
        let currentSong = tokens[1]
        let nomination = tokens[2]

        
       
        if(availableSongs.includes(currentSong)){
            if(participants.includes(currentName)){
                result.push(currentName,nomination,awards)
                
            }
        }
         
       console.log(result.join(","))
    } 

}

karaoke([`Trifon, Vankata, Gesha`,
    `Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals`,
    `Gesha, Bon Jovi - It's my life, Best Rock`,
    `Vankata, Dragana - Kukavice, Best Srabsko`,
    `Vankata, Dragana - Kukavice, Best Srabsko`,
    `Vankata, Dragana - Kukavice, Stiga Tolko Srabsko`,
    `Vankata, PHP Web, Educational 101`,
    `dawn`
])