// XHLMttpRequest


// renderUsers is for translate an element from JSON object to JS Object
 const renderUsers = (users) => {
     users.forEach((user) => {
         showUser(user)
     })
 }


 // create function to show each element or name from JSON object on the DOM
const ul = document.createElement('ul')
document.body.appendChild(ul)


 const showUser = (user) => {
     const li = document.createElement('li');
    li.textContent = user.name
    ul.appendChild(li)

 }


// create the XHLMttpRequest object


/* In order to this file doesn't make requests everytime we save ti
it's necessary declare a function who makes the requests when
we call it. The name of this function is getUser */

const getUser = () => {
    

    
    const xhr = new XMLHttpRequest();
    console.log(xhr) // test the state of the request
    
    /* make xhr detects an event. We need the listener shows us the connection was succeded. Otherwise, it must shows us
    was failed */
    
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText)
            // we need to convert this JSON-string respons-type to JSON object format. We can do this with parse method//
            const response = JSON.parse(xhr.responseText)
            console.log(response) // primitive form to show the renderized response
            renderUsers(response)
            // To convert object-type response to a large string we use stringify method
            console.log(JSON.stringify(response))
        } else {
            console.log('fail!')
        }
        console.log(xhr)  // check the status of xhr object
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

// getUser()


// The next section is a show of the use of POST

const postUsers = () => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr);
        }else{
            console.log('Fail!')
        }
    })

    const URL = 'https://js-14va-default-rtdb.firebaseio.com/luisBalan/.json';
    console.log(xhr);

    xhr.open('POST', URL, true);
    xhr.send(JSON.stringify({name: 'Luis', lastName: 'Balan'}))

}


postUsers()
// change the next URL and put my name before /.json   //

// const URL = "https://js-14va-default-rtdb.firebaseio.com/rafamtz/.json";