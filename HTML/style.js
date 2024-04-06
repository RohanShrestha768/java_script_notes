$(document).ready(function(){
let display='';
$('.calculator input').not('.equal').click(function(){
let buttonPressed =$(this).val();
console.log(buttonPressed);
display+=buttonPressed;
$('.display input').val(display);

    });
    $('.operator[value="AC"]').click(function () {
        display = '';
        $('.display input').val(display);

    });
    $('.delete[value="DEL"]').click(function () {

        display = display.slice(0, -1);
        $('.display input').val(display);

    });



});







