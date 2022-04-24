
// const post = {
//     id:'Mz6gjasR9808',
//     title:'I built a social network for developers to showcase their projects',
//     body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
//     tag:['javascript','css','HTML'],
//     date:'02/11/2021',
//     likes:25145
// }

// const urlDB = 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/'

// // const sendPost = (post, url) => {
    
    
// //     return send
// // }

// $.ajax({
//     method: 'POST',
//     url: urlDB,
//     data: JSON.stringify(post),
//     sucess: (response) => {
//         console.log(response)
//     },
//     error: (error) => {
//         console.log(error)
//     },
//     async:true
// })
// sendPost(post, urlDB)



// function bouncer(arr){
//     let resArray = arr.slice();
//       for(let i = 0; i < resArray.length ; i++){
//         if(Boolean(resArray[i]) == false){
//           resArray.splice(i, 1)
//         }
//     }
//     console.log(resArray)
//     return resArray;
// }

const bouncer = (arr) => {
    let newArray = [];
    for(let i = 0; i < arr.length ; i++){
        Boolean(arr[i]) == false ? null : newArray.push(arr[i]) 
    };
    return newArray;
};
    
console.log("test01", bouncer([7, "ate", "", false, 9]));
console.log("test02", bouncer(["a", "b", "c"]));
console.log("test03", bouncer([false, null, 0, NaN, undefined, ""]));
console.log("test04", bouncer([null, NaN, 1, 2, undefined]));


