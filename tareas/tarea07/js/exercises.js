const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 8,
      },
      {
        signature: "ReactJS",
        score: 8,
      },
    ],
  },
  {
    name: "Alan Medina",
    scores: [
      {
        signature: "HTML",
        score: 10,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Elvira Camarillo",
    scores: [
      {
        signature: "HTML",
        score: 9,
      },
      {
        signature: "CSS",
        score: 9,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 9,
      },
    ],
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
]


// get individual score by mentor
const getScoreByName = mentorName => {
let suma = 0;
let promedio= 0;
mentorsArray.forEach(mentor => {
    if(mentor.name === mentorName){
        mentor.scores.forEach((materia, index) => {
            suma += materia.score;
            promedio = suma/(index + 1);
        });
    }
});
return promedio.toFixed(1)
}


// get array with mentor names
const getMentorNames = (dataArray) => {
  return dataArray.map(eachMentor => eachMentor.name)
}

console.log(getMentorNames(mentorsArray))


// get array with another structure
const mentorsFullArray = mentorsArray.map((mentor) => {
const data = {
  mentor: mentor.name,
};
mentor.scores.forEach((signature) => {
  if(!data[signature.signature]){
    data[signature.signature] = signature.score;
  }
});
data['average'] = getScoreByName(mentor.name);

return data
}
);

console.log(mentorsFullArray)


//get general score of all modules. This will not be used

const getModulesAverages = (dateArray) => {
const average = dateArray.reduce((counter, currentValue) => {
  return counter + parseFloat(getScoreByName(currentValue.name))/dateArray.length
}, 0)
return average.toFixed(1)
}



//fill fields in table



// table-head
const table = document.createElement("table")
const thead = document.createElement("thead")
const trow = document.createElement("tr")
let fields = ["Mentor", "HTML", "CSS", "JS", "ReactJS" ,"Promedio", "Button"]

fields.forEach((field) => {
  const th = document.createElement('th');
  th.textContent = field;
  trow.appendChild(th)
})

thead.appendChild(trow)
table.appendChild(thead)
document.body.appendChild(table)

//--- table-body ----------------------------------------------------------

const tbody = document.createElement('tbody')

mentorsFullArray.forEach((mentor) => {
  const trow = document.createElement('tr'); 
  
  for(item in mentor){
    const td = document.createElement('td');
    td.textContent = mentor[item];
    trow.appendChild(td);
  }

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.setAttribute('id', `${mentor.mentor.split(' ')[0]}-delete`);

  deleteButton.classList.add('delete-button');
  trow.appendChild(deleteButton)

  tbody.appendChild(trow);
})

table.appendChild(tbody);
document.body.appendChild(table)

//delete button

const deleteButton = document.getElementsByClassName('delete-button')
console.log(deleteButton[1])

const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', () => {
  console.log(Math.random())
})


const deleteButtonArray = [];

for(button in deleteButton){
  deleteButtonArray.push(button)
  // button.addEventListener('click', () => {
  //   console.log(Math.random())
  //   });

}

console.log(deleteButtonArray)


/// este sirve 


