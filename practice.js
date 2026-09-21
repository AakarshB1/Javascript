//1) Comments In JS

//multiline comments

/*l1
l2
l3*/
/* Data Types: undefined,null,boolean,string,symbol,number,and object
*/

//Global Scope with Functions
/* If we use a var without any definer(var,let,const) it will be registered to the outermost scope and any other function could access and edit it
if we use any of the other 3 like var,let,const.  */
var myGlobal=10;
function fun1(){
    oopsGlobal=2
}
function fun2() {
    var output= "";
    if (typeof myGlobal!="undefined"){
        output+="myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal !="undefined"){
        output+=" oopsGlobal: "+oopsGlobal+1;
        oopsGlobal++
    }
    console.log(output)
}

fun1()
fun2()

// 2) local scope vs global scope in functions

var outerwear="T-Shirt";
function myOutfit() {
    var outerwear="sweater"
    return outerwear;
}
console.log(myOutfit()) //here we can see when we didnt had the local outerwear it became the global var after we brought back the same var into the fun itself it changed the output
console.log(outerwear) //if we call that same variable separately we will get the global variable

// 3) Understanding Undefined Value Returned from a function
// i) if we dont return anything from a function than it will return undefined


//4)Assignemnt with a return value

// 5)Stand in line:
function nextInLine(arr,item){
    arr.push(item) //push adds the item in the last
    return item;
}
var testArr=[1,2,3,4,5];

console.log("before:" + JSON.stringify(testArr))
console.log(nextInLine(testArr,6))
console.log("after:"+JSON.stringify(testArr))

//6-boolean values
//7-if statements
function torf(isittrue){
    if (isittrue) {
        return "yeah true";
    }
    //the fi in the end is used in the linux
    return "no , not true"
}
console.log(torf(false))  //if we dont use return then both the statements get printed

//8-Comparison with equality operator
function mt8 (num){
    if (num > 8){
        return "Yeah num id gr8er than 8"
    }
    return "not greater than 8"
}
console.log(mt8())
//9- && (and) and || (or) operator
//10- if ,else,else if statements

//11-Switch Statements (use )
function caseinswitch(val){
    var answer="";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta"
        default:
            answer="naah"
    }
    return answer; //keep the return statement out of the switch because switch's task is to update answer

}
//12-multiple identical options in switch statements.

//13 - Counting cards (use switch for easiness)

// 14) Javascript Objects :
var ourdog={
    "name":"goofy" ,//inside the object u better use : not =
    "legs": 4,
    "tails":1,
}
//accessing object using dot notation (either using dot notation or square bracket notation if using variabales)

// 15- manipulating complex objects(complex objects are those objects containing different datatypes as values)



var myname="Aakarsh"
myname=8  //can be used throughout the programme

let ourname="dhoom" //only be used inside the scope where we declared it

const pi=3.14 //cant be redifened

// ) Storing values with the assignment operator(=)
to=9;
// ) incrementting a number
var myvar=98;
myvar++;
 
//len of the string using (.length)
name="Aakarsh"
len=name.length
len
//to get a particular character from a string
console.log(name[2])
//bracket notation to get the nth character of a string

// Making a function named wordBlanks
function wordBlanks(myNoun,myAdjective,myverb,myadverb){
    var result=""
    result+="The "+myAdjective+" "+myNoun+" "+myverb+" "+myadverb
    return result;
}
//then u can the wordBlanks with some arguments and test it

//ARRAYS : These allows u to store multiple values
var myarray=["me",2]
console.log(myarray[1])
//nested arrays
 nested=[[32,45],[100,234],[342,34,"Not required"]]
 nested[2][2]= 453;
 console.log(nested)
 var mylst=[["milk","eggs"],["tree","pajamas"],["pokeball","regressor"],["representational learning","PCA"]]

 //function
 function ourReusable(){
    console.log("HEyya,world");
 }
ourReusable();
ourReusable();
ourReusable();

//Using parameters with functions

