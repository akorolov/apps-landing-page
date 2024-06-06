
export function GenerateMessage() {
    if (Math.random() < 0.15) {
        return "Purrrr."
    }
    if (Math.random() < 0.15) {
        return "Mrrrrrr?"
    }
    if (Math.random() < 0.15) {
        return "Mrrrowr!"
    }
    let response = "Meow"
    let meows: number = Math.floor(Math.random() * 25)
    let i = 0;
    while (i < meows) {
        let meow = " meo"
        let ooos = Math.ceil(Math.random() * 5)
        let j = 0
        while (j < ooos) {
            if (j > 3) meow += "o";
            j += 1;
        }
        let wwws = Math.ceil(Math.random() * 10)
        j = 0
        meow += "w"
        while (j < wwws) {
            if (j > 5) meow += "w"
            j += 1
        }
        response += meow
        i += 1;
    }
    if (Math.random() < 0.5) {
        console.log("ending early")
        return (response + ".")
    }
    response += ". Meow"
    meows = Math.floor(Math.random() * 22)
    i = 0;
    while (i < meows) {
        let meow = " meo"
        let ooos = Math.ceil(Math.random() * 7)
        let j = 0
        while (j < ooos) {
            if (j > 3) meow += "o";
            j += 1;
        }
        let wwws = Math.ceil(Math.random() * 7)
        j = 0
        meow += "w"
        while (j < wwws) {
            if (j > 5) meow += "w"
            j += 1
        }
        response += meow
        i += 1;
    }

    response += (Math.random() < 0.5) ?  "." : "?"
    return response
}