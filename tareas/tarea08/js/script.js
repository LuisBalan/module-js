const squaresContainer = $('<div></div>');
$(squaresContainer).addClass('squares-container')
$('body').append(squaresContainer)
const btn = $('button')

btn.click((event) => {
    const content = $('input').val()
    const contentContainer = $('<span></span>')
    contentContainer.addClass('content-style')
    contentContainer.append(content)
    const square = $('<button></button>')
    square.addClass('squares')
    square.attr('type', 'button')
    square.attr('id', content)
    square.append(contentContainer)
    console.log('hola', content)
    squaresContainer.append(square)
    square.click((event)=> {
        console.log($(this).attr('id'))
    })
})


