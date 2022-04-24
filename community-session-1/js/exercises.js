const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    },
]

// [
//     'banda1',
//     'banda2',
// ];

/*
- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/

// const bands = (bandsArray) => {
//     let notRepeatedBands = []
//     bandsArray.filter(song => {
//         if(song.band in notRepeatedBands){
//             // continue
//             notRepeatedBands.push(song.band)
//         }else{
//             notRepeatedBands.push(song.band)   
//         }
//         // return console.log(bandsArray.indexOf(song))
//     })
//     return console.log(notRepeatedBands)
// } 

// bands(songsData)

// - Agrupar los nombres de la bandas, que no esten repetidas
const nameBands = () => {
    const bands = songsData.map(song => song.band);
    const names = bands.filter((name, index) => bands.indexOf(name) === index);
    return names;
}
console.log(nameBands())


const getNotRepeatedBands = (songsArray) => {
    const repeatedBandsArray = songsArray.map(everySong => {
        return everySong.band
        })
    const notRepeatedBands = repeatedBandsArray.filter((name, index) => repeatedBandsArray.indexOf(name) === index);
    
    return notRepeatedBands
    }

getNotRepeatedBands(songsData)


//- Agrupar las canciones por banda

// const pullSong = (songsArray) =>{

//     let playlist = getNotRepeatedBands(songsArray).map(everyBand => {
//         return {}
//     })
    
//     let playlistContent = (songsArray => {
//         if (songsArray.everySong.band ==)

//     }
//     console.log(playlist)
//     // songsArray.map(everySong => {
//     //     if everySong.name === getNotRepeatedBands
//     //     return console.log([everySong])
//     // })
// }

// pullSong(songsData)






// const getPlaylistPerBand = (songsArray) => {
//      let playlist = {};
//      let songsPerBand = getNotRepeatedBands(songsArray).map(everyBand => {
//          playlist.everyBand = [];
//          songsArray.map(everySong => {
//              if everySong.band == everyBand{

//              }
//          })
//          playlist.everyBand.push()
         

//     })

//  }





// - La cancion con más reproducciones

const mostPlayedSong = (songsArray) => {

    let allReprod = songsArray.map(everySong => {
        return everySong.statistics.reproductions
    })
    
    let maxReprodSong = songsArray.filter(everySong => {
        if(everySong.statistics.reproductions === Math.max(...allReprod)){
            return everySong
        }
    })
    return console.log(...maxReprodSong)   
}


// mostPlayedSong(songsData)




// - La cancion con más likes

const mostLikedSong = (songsArray) => {

    let allNumLikes = songsArray.map(everySong => {
        return everySong.statistics.likes
    })
    
    let maxNumOfLikesSong = songsArray.filter(everySong => {
        if(everySong.statistics.likes === Math.max(...allNumLikes)){
            return everySong
        }
    })
    return console.log(...maxNumOfLikesSong)   
}

// mostLikedSong(songsData)


// - La cancion con más reproducciones
// - La cancion con más likes

const topSongs = (songsArray, statisticsType) => {
    let allStatisticalData = songsArray.map(everySong => {
        return everySong.statistics[statisticsType]
    })
    
    let topStatisticalDataSong = songsArray.filter(everySong => {
        if (everySong.statistics[statisticsType] === Math.max(...allStatisticalData)){
            return everySong
        }
    });
    return console.log(...topStatisticalDataSong)
    
}

// topSongs(songsData, "reproductions")
// topSongs(songsData, "likes")


// console.log(allStatisticalData)

// const oneArray = [2, 4, 5, 6, 7, 7]
// console.log(oneArray.indexOf(7))







