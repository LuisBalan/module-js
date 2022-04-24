// deployer

const productsDeployer = (array) => {
    const ul = document.createElement('ul')
    array.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = product.title
        ul.appendChild(li)
    })
    document.body.appendChild(ul);

}


const getProducts = () => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr)
            console.log(xhr.responseText);
            const imagesObject = JSON.parse(xhr.responseText);
            console.log(imagesObject);
            productsDeployer(imagesObject)
        };
    });


    const URL = 'https://fakestoreapi.com/products';
    // const URL = "https://api.unsplash.com/users/ugmonk/photos";

    xhr.open('GET', URL, true);

    xhr.send()

}

// getProducts()


const firstPost = () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        console.log(xhr.readyState)
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr)
        };
    });

    const URL = 'https://js-14va-default-rtdb.firebaseio.com/luisBalan/.json';

    xhr.open('POST', URL, true);
    xhr.send(JSON.stringify(["a", "b", "c", "d", "e"]))
}


firstPost()