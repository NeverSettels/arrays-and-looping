//Back end logic
const isNumb = input => !isNaN(input) ? true : false;



//Front end Logic
$(document).ready(() => {

    $('#form1').submit(event => {
        event.preventDefault()
        var input = parseInt($("#input1").val())
        console.log(input, isNumb(input))
    })



})
