function tour(input) {
    let project = input[0]
    let route = input.shift().split("::")
    let newDestination = ""
    let switched = ''
    for (let line of input) {
        let tokens = line.split(":")

        if (tokens[0] === "Add Stop" && tokens[1] <= project.length) {
            let secondPart = project.slice(tokens[1], project.length)
            let firstPart = project.slice(0, tokens[1])
            newDestination = (firstPart + tokens[2] + secondPart)
            console.log(newDestination)
        }else{
            false
        }
        if (tokens[0] === "Remove Stop" && tokens[1] <= project.length) {
            let stopPoint = Number(tokens[2]) + 1;
            let removedStop = newDestination.slice(0, tokens[1])
            let leftStop = newDestination.substring(stopPoint, newDestination.length)
            newDestination = removedStop + leftStop
            console.log(newDestination)
        }
        else if (tokens[0] === "Switch") {
            switched = newDestination.split(tokens[1])
            switched = switched.join(tokens[2])
            console.log(switched)
        }
        else if (tokens[0] === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${switched}`)
            break
        }
    }


}
tour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])