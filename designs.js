// Select color input

function colorFill(){

      let columnRow= $('td');
      columnRow.click(function(){
      let color = $('#colorPicker').val();
      if ($(this).attr('style')) {

          $(this).removeAttr('style');

      }
      else {

        $(this).attr('style', 'background-color:' +color);
      }
   });
}
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){
    event.preventDefault();
    let row = $("#inputHeight").val();
    let column = $('#inputWeight').val();
    makeGrid(row, column);
    colorFill(); 
});
// Your code goes here!
function makeGrid(height,width) {

    $('tr').remove() // remove tr element and its child

    for(let i=1; i<=height; i++){
         $('#pixelCanvas').append('<tr></tr>'); //add tr 
    
        for(let j=1; j<=width; j++){
            $('tr').filter(':last').append('<td></td>');   // add td to the last td
        }
    } 
}





