// Obtener todos los tags que existen                                ready
// Ordenar los libros en orden alfabetico                            ready
// realizar filtrado dinamico por genero,                            ready
// realizar busqueda por titulo, encontrar coincidencias             ready
// obtener top 3 de los libros mas rankeados                         ready
// obtener los 3 libros mas baratos                                  ready                         
// obtener el libro con fecha de publicacion mas reciente,           ready     
// obtener los libros fuera de stock                                 ready

const bookList = [
    {
        name : "The Lightning Thief",
        author : "Rick Riordan",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 5,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "Old Possum's Book of Practical Cats",
        author : "T. S. Eliot",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 3,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "The Everything Book of Cats and Kittens",
        author : "DK",
        genre_s : "Suspense",
        inStock : true,
        pages : 120,
        ratingCount: 2,
        price: {
            amount:5.99,
            currencyCode:"USD"
        },
        publishedDate:"2018-06-12",
        tags :[
            "Best Seller","Popular"
        ]
    },
    {
        name : "There are Cats in this Book",
        author : "Viviane Schwarz",
        genre_s : "Didactic",
        inStock : true,
        pages : 220,
        ratingCount: 4,
        price: {
            amount:17.99,
            currencyCode:"USD"
        },
        publishedDate:"2008-06-12",
        tags :[
            "Cats","Animals"
        ]
    },
    {
        name : "Don Quijote",
        author : "Miguel de Cervantes",
        genre_s : "Literature",
        inStock : false,
        pages : 520,
        ratingCount: 7,
        price: {
            amount:47.99,
            currencyCode:"USD"
        },
        publishedDate:"1990-06-12",
        tags :[
            "Best Seller","Reference"
        ]
    },
    {
        name : "The lord of the rings",
        author : "J.R.R. Tolkien",
        genre_s : "fantasy",
        inStock : false,
        pages : 620,
        ratingCount: 9,
        price: {
            amount:59.99,
            currencyCode:"USD"
        },
        publishedDate:"2001-06-12",
        tags :[
            "Swords","Golum"
        ]
    },
    {
        name : "Harry Potter and the Philosopher's Stone",
        author : "J.K. Rowling.",
        genre_s : "fantasy",
        inStock : true,
        pages : 820,
        ratingCount: 10,
        price: {
            amount:99.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Magician","Harry Potter"
        ]
    },
    {
        name : "The Hobbit",
        author : "J.R.R. Tolkien.",
        genre_s : "fantasy",
        inStock : true,
        pages : 1220,
        ratingCount: 8,
        price: {
            amount:69.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Golum","Dragons","Best Seller"
        ]
    },
];


// Obtener todos los tags que existen

const getAllTags = (theArray) => {
    const allTagsArray = theArray.reduce((counter, currentValue) => {
        currentValue.tags.forEach((item) => {
            if (!counter.includes(item)) counter.push(item)
        })

        return counter
      
    },[])

    return allTagsArray
}


console.log(getAllTags(bookList))





// Ordenar los libros en orden alfabetico

//iterar el arreglo de libros
// tomar el nombre de cada libro
// usar método sort
// retornar el arreglo ordenado

const sortedBooklist = (theArray) => {
    console.log(theArray.sort(function(a,b){
        if(a.name > b.name){
            return 1
        }
        if (a.name < b.name){
            return -1
        }
    })
    )
}

sortedBooklist(bookList)

// console.log(sortedBooklist(bookList))

const getBooksPerGenre = (theArray, theGenre) => {
   return theArray.filter((everyBook) => everyBook.genre_s === theGenre)
}

console.log(getBooksPerGenre(bookList, "Suspense"))



// realizar busqueda por titulo, encontrar coincidencias

//generar la función que reciba qué parámetros el nombre de la palabra a buscar
// crear un arreglo vacío donde guardemos los libros con coincidencias
// usar un filter usando de condición una expresión regular o usando includes
// retornar el arreglo con los libros con coincidencias

const getBookByTitle = ( theArray, search) => {
    let filteredBooks = theArray.filter((book) => {
        return book.name.includes(search)
    })

    return console.log(filteredBooks)
}

getBookByTitle(bookList, "The")




// obtener top 3 de los libros más rankeados

/*
crear función que acepte el array y el numero de top como parámetros
usar sort para ordenar
usar sllice que delimite hasta donde se mostrará el ranking
*/

const getTopRankedBook = (theArray, top) => {
    return console.log(theArray.sort((a, b) => {
        return a.ratingCount - b.ratingCount
    }).slice(0, top))
}

getTopRankedBook(bookList, 5)


// obtener top 3 de los libros más baratos

/*
crear función que acepte el array y número de top como parámetros y arroje un array con el resultado
usar sort para ordenar de menor a mayor
usar slice para delimitar hasta donde 
*/

const getTopCheaperBooks = (theArray, top) => {
    return console.log(theArray.sort((a, b) => {
        return a.price.amount - b.price.amount
    }).slice(0, top))
}

getTopCheaperBooks(bookList, 3)




// obtener el libro con fecha de publicacion mas reciente,   

/* 
-crear la función que almacenará el resultado
-el resultado será un arreglo con el objeto (libro) más reciente
-usar filter
-usar sort

*/


// with the next solution fixing sort is needed
const recentReleaseDateBook = (theArray, top) => {
    return console.log(theArray.sort( function(a, b){
       if(a.publishedDate > b.publishedDate){
           return 1
         }
        if(a.publishedDate < b.publishedDate){
        return -1
        }}).slice(0,top))
}

recentReleaseDateBook(bookList, bookList.length + 1)




// with next solution 



const getOnlyDates = (theArray) => {
    return theArray.map((everyBook) => {
        return everyBook.publishedDate
    })
}

console.log(getOnlyDates(bookList).sort().reverse())
console.log(getOnlyDates(bookList).sort((a,b) => b-a))









// libros fuera de stock

const getOutOfStockBooks = (theArray) => {
    return theArray.filter((everyBook) =>{
                return everyBook.inStock === true
    })
}


console.log(getOutOfStockBooks(bookList))


const getOutOfStockBooks2 = (theArray) => {
    const filteredArray = theArray.reduce((acum, current) => {
        if (current.inStock === true){
            acum.push(current)
        }
        return acum
    }, [])
    return filteredArray
}

console.log(getOutOfStockBooks2(bookList))




