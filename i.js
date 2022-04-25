
// not defined, undefined, null
//not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// console.log(myAge);//not defined

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true


//global scope and local/block scope
//outside the blocks is called global scope
//sth which is inside the blocks is called block scope
let fname = "luna";
const lname ="ss";
var age = 29;

console.log(fname ,lname, age);
{
    console.log(fname ,lname, age);   
}
console.log(fname ,lname, age);


//block scope
{
    let fname = "luna";
    const lname ="ss";
    var age = 29;
    
    console.log(fname ,lname, age);    
}

//on global scope generally we are not able to access block scope variables
//as long as there's let/const keywords,so it will give us a reference error of not defined
//but for var we can access them even on global scope space.
console.log(fname);
console.log(lname);
console.log(age);

//var key words only can be accessed in both block and global scope

//Hoisting - Its only supported with that of var keywords and with the functions
  //Let and const keywords donot support hoisting.
 //Let keyword variables cannit be accessed before declaration/initialization 
 //console.log(game);//reference error:cannot access 'game' before intizialization
  console.log(game);
  //console.log(game);//reference error:cannot access 'game' before intizialization
  const game ="cricket";
  let game1 ="cricket";
  //var keyword variables are hoisted.
  console.log(game2);
  game2 ="badminton";
  console.log(game2);//badminton

  //note - For var keyword variables, if we try to access before assigning the values to
  //the will give us undefined but the moment we declare a value to it,it will give 
  //us the assigned value.

  //hoisting in functions
  //functions are hoisted becoz of which we can call the function before 
   //declaring the function.

  add(2,3);//arguments

  function add(a,b){ //parameters
     let result = a+b;
      console.log(result);
  }


 //OPERATORS:-
 //arithmetic operators
 //+ ,-,/,*,%

 //modulus-It gives us the remainder

 console.log(2+3);//5
 console.log(2-3);//-1
 console.log(2*3);//6
 console.log(2/3);//0.666666
 console.log(2%3);//2

 //Comparison operators
 //==/!= only checks the values and not the data types.
 //===/!=== checks both the values and data types.
 // < , > , <= , >= , == , ===
 console.log(2<3);//true(boolean values as answer)
 console.log(2>3);//false
 console.log(2>=3);//false
 console.log(2<=3);//true
 console.log(2==2);//true
 console.log(2===2);//true
 console.log(2=="2");//true
 console.log(2==="2");//false

 console.log(2!=3);//true(boolean values as answer)
 console.log(2!=2);//false
 console.log(2!==2);//false
 console.log(2<=3);//true

 //logical operators
 // ||, && ,!

 console.log(0||3);//2
 console.log(2||3);//3
 console.log(0||0);//0

 console.log(2 && 3);//3
 console.log(0 && 3);//0
 console.log(1 && 3);//0

 console.log(!0)//true
 console.log(!1)//false
 console.log(!2)//false

 //increment decrement operators
//post increment operators (++)
 let a=1;
 a++;//a= a+1
 console.log(a);//2
 a--;//a=a-1
 console.log(a);//1
 //a=1;
 console.log(a++);//1//I will first print the value of a, and 
                        //then increment its value with 1 which will be reflected/shown in next line,not on the same line
 console.log(a);//2
 console.log(a--);//1//I will first print the value of a, and 
                        //then increment its value with 1 which will be reflected/shown in next line,not on the same line
 console.log(a);//2

