// XHLMttpRequest

// create the XHLMttpRequest object


/* In order to this file doesn't make requests everytime we save ti
it's necessary declare a function who makes the requests when
we call it. The name of this function is getUser */

const getUser = () => {
    

    
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    
    /* make xhr detects an event. We need the listener shows us the connection was succeded. Otherwise, it must shows us
    was failed */
    
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText)
            // we need to convert this string respons-type to JSON format. We can do this with parse method//
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            // To convert object-type response to a large string we use stringify method
            console.log(JSON.stringify(response))
        } else {
            console.log('fail!')
        }
        console.log(xhr)
    });
    
    /* we define an URL variable and assign it a 'real' URl */
    
    const URL = 'https://jsonplaceholder.typicode.com/users'
    
    /* we need to active an event. We use the open method for this
    the third value parameter (true or false) is for syncronism
    Open is for open the connection
    true: syncronic
    false: asyncronic
    */
    xhr.open('GET', URL, true)

    /* send is for initialize the request */
    xhr.send()

    return xhr
}

getUser()

// aplication of DELETE method

const deleteUser = () => {
    const xht = new XMLHttpRequest();
    // primero url de la base de datos, si la ponemos, borrará toda la base de datos
  
    // luego url del registro. para eliminar el registro específico
    
    
    // luego el xhr.open

    // despues xhr.send()


    // la respuesta es un null (porque ya se ha eliminado)
}