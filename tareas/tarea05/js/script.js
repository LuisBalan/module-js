// Tomando en cuenta el array songsData 

// Ejercicio 1

// input: 'The Cure'
// output: {
//   {
//     name: "Just like Heaven",
//     band: "The Cure",
//     releaseYear: "1980",
//     statistics: {
//       likes: 2545109856,
//       reproductions: 4324309,
//     }
//   }
// }
// ----------------------------
// Ejercicio 2
// -Generar el top 5 de las canciones mas escuchadas
// -Mostrar la cancion mas reciente
// -Mostrar el artista mas gustado a los fans


let songsData = [
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  },
  {
    name: "Nikita",
    band: "Elton John",
    releaseYear: "1980",
    statistics: {
      likes: 9409483256,
      reproductions: 9843293,
    }
  },
  {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    }
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
      likes: 25000,
      reproductions: 100000,
    }
  }, {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 95000,
    }
  }, {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
      likes: 128000,
      reproductions: 915000,
    }
  }, {
    name: "Daze",
    band: "Poets of the Fall",
    releaseYear: "2014",
    statistics: {
      likes: 3548413,
      reproductions: 87095138,
    }
  }, {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
      likes: 26268856,
      reproductions: 2424568,
    }
  }
]

//------------- Exercise 1 solution -------------------

function oneSong1(){
    let input = window.prompt("Nombre de la banda: ")
    for (i = 0 ; i < songsData.length ; i++){
        if (input.toUpperCase() != songsData[i].band.toUpperCase()){
            // console.log("No se encontró ningún resultado")
        }else if (input.toUpperCase() == songsData[i].band.toUpperCase()){
            console.log(songsData[i])
        }
    }
}

// oneSong1()

function oneSong2(){
    let bandsArray = []
    for (i = 0 ; i < songsData.length ; i++){
        bandsArray.push(songsData[i].band.toUpperCase())
    }
    
    let input = window.prompt("Nombre de la banda: ")
    let upperCaseInput = input.toUpperCase()
    
    if(bandsArray.includes(upperCaseInput)){
        console.log(songsData[bandsArray.indexOf(upperCaseInput)])
    } else{
        console.log("No se encontró ninguna coincidencia")
    }
    
}

// oneSong2()



//------------ Exercise 2 solution --------------------


// -Generar el top 5 de las canciones mas escuchadas (ready)

const topArray = (theArray, top) =>{
  let sortedArray = theArray.sort(function(a, b){
    return b.statistics.reproductions - a.statistics.reproductions
  }) 

  return console.log(sortedArray.slice(0, 3))
}


topArray(songsData, songsData.length)

// -Mostrar la cancion mas reciente (ready)

const mostRecentSongs = (theArray, top) => {
  let recentSongs = theArray.sort(function(a, b){
    return b.releaseYear - a.releaseYear
  })

  return console.log(recentSongs.slice(0, top))

}

mostRecentSongs(songsData, 2)


// -Mostrar el artista más gustado a los fans

const mostLikedSong = (theArray, top) => {
  let likedSongs = theArray.sort(function(a, b){
    return b.statistics.likes - a.statistics.likes
  })

  return console.log(likedSongs.slice(0, top))

}

mostLikedSong(songsData, 3)