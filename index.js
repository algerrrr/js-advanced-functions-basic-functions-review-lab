// Your code here



function saturdayFun(a) {
    let activity = "roller-skate"
    if(typeof a!== "undefined"){
        activity = a
        
    } else{}
       
    
    return 'This Saturday, I want to ' + activity + "!"
}

console.log(saturdayFun())
function mondayWork(a) {
    let activity = 'go to the office'
    if(typeof a!== "undefined"){
        activity = a
    } else {}
    return 'This Monday, I will ' + activity + "."

}
console.log(mondayWork("work from home"))



function wrapAdjective(a="*") {
    let msg = "You are"
    return function(adjective) {
            return `${msg} ${a}${adjective}${a}!`
    }
    

}

console.log(wrapAdjective("")("a hardworker"))

const Calculator = {
    add: function(){return 1 + 3},
    subtract: function() {return 1 - 3},
    multiply: function() {return 1 * 3},
    divide: function() {return 10/5}
}
console.log(Calculator.add())


arrayOfTransforms = [
  function(a){ return a * 2 },
  function(a){ return a + 1000},
  function(a){ return a % 7 }]

let x = []
let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
function actionApplyer(z=0, x) {
    if (x.length=== 0)
    return z

    return 4
}

console.log(actionApplyer(13, arrayOfTransforms))
