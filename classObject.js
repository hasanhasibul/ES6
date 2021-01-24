class Parent{
    constructor(Fname,job){
        this.Fname = "Abdul Kader",
        this.job = "Businnes man"
    }
}
class Student extends Parent{
    constructor(sId,sName,sAge){
        super()
        this.id = sId,
        this.name = sName,
        this.age = sAge,
        this.school="city university"
    }
}

const student1 = new Student(125,"hasib",25);
const student2 = new Student(202,"tushar",31);
console.log(student2);

// es6 templante

const firstName = 'abdul khalek';
const secondName = "Mulla";
const fullName = `${firstName} ${secondName} is very 
much good
 boy`;
console.log(fullName);

//  spreed operator 

const array1 = [4,5,6,7,8];
const array2 = [2,3,5,6,6,7,7,];
const arrayNew = [...array1, ... array2];
console.log(arrayNew);
