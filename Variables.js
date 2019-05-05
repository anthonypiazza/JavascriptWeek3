//Var
//var myVar = 'I am a var';
//var myVar = 'I am a new var';
//console.log(myVar);

//Let
//let myLet = 'I am a let';
//let myLet = 'I am a new let';
//myLet = 'I am an update let value';
//console.log(myLet);

//Const
//const myConst = 'I am a const';
//myConst = 'I am a new const';
//console.log (myConst);


//function and block scope example:
function myFunction(){

    if(true) {
        //block scope here
        let varScope = "Yes we can use let";
        var varScope = "Yes we can use var";
        console.log("Can we access let here?" + letScope);
        console.log("Can we access var here?" + varScope);   
    }
//function scope here
console.log("Can we access var in function scope?" + varScope);
console.log("Can we access let in function scope?" + letScope);
}

myFunction();