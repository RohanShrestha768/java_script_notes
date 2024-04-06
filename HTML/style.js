ear
$(document).ready(function(){
let display='';
$('.calculator input').not('.equal').click(function(){
let buttonPressed =$(this).val();
console.log(buttonPressed);
display+=buttonPressed;
$('.display input').val(display);

});
$('.equal').click(function(){
display=eval(display);
$('.display input').val(display);

});
$('.operator[value="AC"]').click(function(){
    display='';
    $('.display input').val(display);
    
    });


});



// for test of restore 




