//Back end logic
const isNum = input => !isNaN(input) ? true : false;

const numFind = (input, name) => {
    var result = ''
    if (isNum(input)) {
        let resultArr = []
        let temp = []
        for (let i = 1; i <= input; ++i) {
            temp.push(i);
        }
        temp.forEach(number => {
            numArr = number.toString().split('')
            if (numArr.includes('3')) resultArr.push(`I'm sorry, ${name}. I'm afraid I can't do that,`);
            else if (numArr.includes('2')) resultArr.push('Beep!,');
            else if (numArr.includes('1')) resultArr.push('Boop!,');
            else resultArr.push(`${number},`);

        })
        result = resultArr.join(' ');
    }
    else {
        result = "Oops! What you entered is not a number";
    }
    return result;
}


//Front end Logic
$(document).ready(() => {
    $('#form1').submit(event => {
        event.preventDefault();
        var input = parseInt($("#input2").val());
        var name = $("#input1").val();
        var result = numFind(input, name);
        var audio = $("#mysoundclip")[0]

        $('#display-result').text(result);
        $('#form-jumbo').addClass('noDisplay');
        $('#result-jumbo').removeClass('noDisplay');
        audio.play()

    })


    $("#resetBtn").click(function () {
        location.reload(true);
    })
})

