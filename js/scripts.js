//Back end logic
const isNum = input => !isNaN(input) ? true : false;

const numFind = input => {
    var result = ''
    if (isNum(input)) {
        let temp = []
        for (let i = 1; i <= input; ++i) {
            if (i === 1) temp.push('Boop!')
            else if (i === 2) temp.push('Beep!')
            else if (i === 3) temp.push("I'm sorry, Dave. I'm afraid I can't do that.")
            else temp.push(i)
        }
        result = temp.join(' ')

    }
    else {
        result = "Oops! What you entered is not a number"
    }
    return result
}


//Front end Logic
$(document).ready(() => {

    $('#form1').submit(event => {
        event.preventDefault()
        var input = parseInt($("#input1").val())
        console.log(input, numFind(input))
    })



})
