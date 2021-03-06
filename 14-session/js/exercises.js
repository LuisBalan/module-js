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



// get array with mentor names
const getMentorNames = (dataArray) => {
    return dataArray.map(eachMentor => eachMentor.name)
}

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
  data[average] = getScoreByName(mentor.name);
}
);

console.log(mentorsFullArray)



// console.log(getMentorNames(mentorsArray))



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
// console.log(getScoreByName("Ivan Diaz"))


//get general score of all modules

const getModulesAverages = (dateArray) => {
  const average = dateArray.reduce((counter, currentValue) => {
    return counter + parseFloat(getScoreByName(currentValue.name))/dateArray.length
  }, 0)
  return average.toFixed(1)
}


// table-head
const table = document.createElement("table")
const thead = document.createElement("thead")
const trow = document.createElement("tr")
let fields = ["Mentor", "HTML", "CSS", "JS", "ReactJS" ,"Promedio", "Button"]
 
const cabecera = fields.forEach((item) => {
    const td = document.createElement("td")
    const text = document.createTextNode(item)
    td.appendChild(text)
    trow.appendChild(td)
})
thead.appendChild(trow)
table.appendChild(thead)
document.body.appendChild(table)

//table-body

const tbody = document.createElement("tbody")
mentorsArray.forEach((mentor) => {
  const tMentor = document.createElement("tr")
  const tdName = document.createElement("td")
  const mentorName = document.createTextNode(mentor.name)
  tdName.appendChild(mentorName)
  tMentor.appendChild(tdName)
  mentor.scores.forEach((eachModule) => {
    const td = document.createElement("td")
    const moduleScore = document.createTextNode(eachModule.score)
    td.appendChild(moduleScore)
    tMentor.appendChild(td)

  })
  const tdAverage = document.createElement("td")
  const mentorAverage = document.createTextNode(getScoreByName(mentor.name))
  tdAverage.appendChild(mentorAverage)
  tMentor.appendChild(tdAverage)
  tbody.appendChild(tMentor)

  const tdButton = document.createElement("td")
  const button = document.createElement("button")
  const textButton = document.createTextNode("Delete")
  // button.classList.add(`${mentor["name"]}`)
  button.appendChild(textButton)
  tdButton.appendChild(button)
  tMentor.appendChild(tdButton)


}


)

table.appendChild(tbody)
document.body.appendChild(table)

//table-foot
const tfoot = document.createElement("tfoot")
const tMentor = document.createElement("tr")
const promedioTd = document.createElement("td")
const promedioTag = document.createTextNode("Promedio General")
promedioTd.appendChild(promedioTag)
tMentor.appendChild(promedioTd)

const promedioNextCols = document.createElement("td")
promedioNextCols.colSpan = "4"
tMentor.appendChild(promedioNextCols)

const averageValueTd = document.createElement("td")
const averageValueText = document.createTextNode(getModulesAverages(mentorsArray))
averageValueTd.appendChild(averageValueText)
tMentor.appendChild(averageValueTd)

const tdButton = document.createElement("td")
const button = document.createElement("button")
const textButton = document.createTextNode("Delete")
button.appendChild(textButton)
tdButton.appendChild(button)
tMentor.appendChild(tdButton)


tfoot.appendChild(tMentor)
table.appendChild(tfoot)
document.body.appendChild(table)


// const deleteButton = document.querySelectorAll("button")
//   mentorsArray.forEach((mentor) => {
//     deleteButton.forEach((button) => {
//       button.classList.add(`myclass`)

//     })
//   })
  


// deleteButton.forEach((button) => {
//   button.addEventListener("click", (event) => {
//   })
// })



