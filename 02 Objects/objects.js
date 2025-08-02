// Objects store values in key value pairs

// Key: value;


// declear with either let , var , const but same thing


//Method 01
let musanif ={
   firstName: "Muhammad",
   lastName : "Musanif",
   age:20,
   cnic:'212323123123',

}

console.log(musanif)

//firstName, lastName, age, cnic are called attributes or keys of object

//accessing keys

console.log(musanif.firstName); // Muhammad
console.log(musanif.age)  // 20



//method 2 

let student = new Object();

student.firstName = "majeed";
student.car = "corola"

console.log(student);


//we can declear with var and const keyword 
//mostly we use const keyword


const teacher = {
    name:"imran khalil",
    // subject: "machine learning",
    department: "cs & it",
    subjects : ['Machine Learning', 'Operation Research', 'Advnace stats', 'DAA']
}


console.log(teacher.subjects) // ['Machine Learning', 'Operation Research', 'Advnace stats', 'DAA']
console.log(teacher.subjects[0]); // Machine Learning