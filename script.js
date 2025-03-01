//complete this code
class Person {
  constructor(name , age){
	   this._name=name 
	   this._age=age
  }
 get name() {
    return this._name;
  }
	get age() {
	  return this._age
  }
   set age(newAge){
	    return this._age=newAge
   }
}

class Student extends Person {
	 constuctor(name ,age){
		  super(name , age)
	 }
      study(){
		   return `${this.name} is studying`
	  }
}

class Teacher extends Person {
	constuctor(name ,age){
		  super(name , age)
	 }
      teach(){
		   return `${this.name} is teaching`
	  }
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const person= new Person("John" , 25)
console.log(person.name)
person.age="30"
console.log(person.age)

 const student= new Student("John" , 30)
student.study()

 const teacher= new Teacher("John" , 30)
student.teach()




