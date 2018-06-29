/**
 * JavaScript
 * Includes event listners using jquery-3.3.1.min.js library
 *
 * Date: 2018-06-29
 */

// TODO: add background color to the body

$('body').css('background-color', '#cac9cc');

/*
Select color input on click
accepts the color selected
attr adds attribute value
*/

function colorFill(){

    $('td').click(function() {

        let color = $('.colorPicker').val();

        if ($(this).attr('style')) {

            $(this).removeAttr('style');

        } else {

            $(this).attr('style', 'background-color:' +color);

        }
    });
}

/*
When size is submitted by the user, call makeGrid() and colorFill()
inputHeight - accepts the user's value for height as argument for makeGrid()
inputWeight - accepts the user's value for width as argument for makeGrid()
*/

$('.sizePicker').submit(function(event) {

    event.preventDefault();
    let row = $(".inputHeight").val();
    let column = $('.inputWeight').val();
    makeGrid(row, column);
    colorFill();

});

/*
make n by m grid
{number} n - The number of rows
{number} m - The  number of columns
remove removes tr and its child
the for loop loops the height and width and append the column to the last row
css style removes the body background color and adds white background to the table
*/

function makeGrid(n, m) {

    $('tr').remove();

    for(let i=1; i<=n; i++) {

        $('.pixelCanvas').append('<tr></tr>');

        for(let j=1; j<=m; j++) {

            $('tr').filter(':last').append('<td></td>');
            $('.pixelCanvas').css('background-color', '');
            $('.pixelCanvas').css('background-color', 'white');

        }
    }
}
