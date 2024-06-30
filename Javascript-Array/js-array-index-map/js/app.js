const students = [
    {
        id:1,
        name: 'paulo',
        score: 40,
        favoriteSubject: 'math',
    },
    {
        id:2,
        name: 'susan',
        score: 40,
        favoriteSubject: 'history',
    },
    {
        id:3,
        name: 'anna',
        score: 55,
        favoriteSubject: 'dev',
    },
    {
        id:4,
        name: 'ze',
        score: 89,
        favoriteSubject: 'programador',
    },
    {
        id:5,
        name: 'john',
        score: 89,
        favoriteSubject: 'designer',
    }
];

//function sayName(name){
    //console.log(name)
//}

//console.log(students)
//sayName('john');

// have access to students from index.js

const updatedStudents = students.map(function(students){
        //console.log(students);      
        students.role = 'student'// role == student

        return students;
});

// console.log(updatedStudents)

// Filter
const highScore = students.map(function(students){
    if (students.score <= 80){
       return students; // a value that coerces to true
    }

 // return students;
  //  if (students.score <= 80) return students;
  //return students.score >= 80; 

});

//console.log(highScore);

// find

const specificId = students.find(function(banana){
    return banana.id === 1;
});

const fruits = ['banana', 'orange'];

const random = fruits.find(function(fruit){
    return fruit === 'orange';
})

// console.log(random)
// console.log(specificId);

const averageScore = students.reduce(function(scoresTotal, student){
    //console.log(student);
    //return scoresTotal;
    console.log(scoresTotal);
    return scoresTotal + student.score
}, 0) / students.length;//,0

console.log(averageScore);

const subject = 'history'; // {}

const total = {};

total[subject] = 'some value';
console.log(total)

const survey = students.reduce(function(survey,student){

    //console.log(student.favoriteSubject);

    const favSubject = student.favoriteSubject;

    if(survey[favSubject]){ 
         survey[favSubject] = survey[favSubject] + 1;
    }
        else {
        survey[subject] = 1;
    }
    return survey;
}, {});

console.log(survey)
