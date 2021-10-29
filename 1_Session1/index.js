//!Typeof:
var x1 = true; 
var x2 = 354;
var x3 = "This is a String";
var x4 = new String( "This is a String Object" );

console.log(typeof x1) //"boolean"
console.log(typeof x2) //"number"
console.log(typeof x3) //"string"
console.log(typeof x4) //"object"


//!Object:
var person = {
    firstName: 'Linh',
    lastName: 'Hoang Thuy',
    18: 'Age',
    showName: function(){
        console.log(this.firstName + '' + this.lastName);
    }
};

console.log(person.firstName); //Linh

for (var prop in person){
    console.log(prop);
}


//!Array:
var task1 = [
    { content: 'Học JS', duration: 8},
    { content: 'Học CSS', duration: 12},
    { content: 'Học HTML', duration: 4}
]

//array.map:
const newTask2 = task1.map(function(task){
    return {
        content: task.content,
        duration: task.duration * 60
    }
})

console.log(newTask2);

//array.find:
const newTask3 = task1.find(function(task){
    return task.content == 'Học JS';
})

console.log(newTask3);

//array.reduce:
const newTask4 = task1.reduce(function(sum, task){
    console.log(sum, task);
    return sum + task.duration;
}, 0);

console.log(newTask4);


//!Callback Function:
function first(){
    console.log("Một");
}

function second(){
    console.log("Hai");
}

first();
second();


//!DOM:
var titleEl = document.getElementById('title');
console.log(titleEl);

titleEl.innerHTML = "Hello Title";
titleEl.style.color = 'red';


//!var, const, let - nên dùng const, let:
function sayHi(){
    let greeting = "hey hi";
    const times = 4;
    // times = 2 //Lỗi vì const ko thể thay đổi
    
    if (times > 3){
        let greeting = "hey hello";
        console.log('1', greeting); //1 hey hello
    }
    console.log('2', greeting); //2 hey hi    
}
sayHi();


//!Template String:
var name = "Bob", time = "Today";
console.log(
    `Hello ${name}
    How are you ${time} ? `
);


//!Arrow Function:
var task2 = [
    { content: 'Học JS', duration: 8},
    { content: 'Học CSS', duration: 12},
    { content: 'Học HTML', duration: 4}
]

const longTasks = task2.map(task => ({
    content: task.content,
    duration: task.duration * 2
}));

console.log(longTasks);


//!Default parameter:
let sayHi1 = (message = "Helloooo") => console.log(message);
console.log(sayHi1);


//!Spread Operator - tách Array - Deep Copy Shallow Copy:
const iphones = ['iphone11', 'iphone12', 'iphone13'];
const macbooks = ['macbook2015', { model: 'macbook2014'}, 'macbook2017'];

const appleProducts1 = ['iphone11', 'iphone12', 'iphone13', 'iTag', ...macbooks, 'apple watch'] //Shallow Copy
// const appleProducts2 = ['iphone11', 'iphone12', 'iphone13', 'iTag', ...JSON.parse(JSON.stringify(macbooks)), 'apple watch'] //Chống Shallow Copy

appleProducts1[5].model = 'mac m1';

console.log(appleProducts1);
// console.log(appleProducts2);

console.log(macbooks); //=> model thay đổi theo appleProducts1 vì bị Shallow Copy


//!Rest Operator - gộp Array:
function calculateGPA1(math, literature, ...rest){
    console.log(rest);
}
calculateGPA1(8, 6, 4, 3);


//!Spread tach Array, Rest gom lai thanh Array:
const courses = ['C4E', 'CI', 'Web', 'Mobile', 'Games'];
const [beginner, medium, ...advances] = courses


//!Function, Arrow Function:
const aaa = function calculateGPA2(math, literature, ...physic){
    console.log(physic);
}
console.log(aaa(8, 6, 4, 3));

const bbb = () => {console.log("Khánh")};
console.log(bbb());

const ccc = (a, b) => { return a * b };
console.log(ccc(3,2))

const ddd = phrase => phrase.split(" ");
console.log(ddd("Framgia AwesomeTrip"));  // ["Framgia", "AwesomeTrip"]


//!Giải thích tại sao hiển thị Hai trước Một: run functions first then run callback function:
setTimeout(function() {
  console.log('Một');
}, 0);

function second() {
  console.log('Hai');
}
second();


//!Destructuring ES6:
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const foo = ['one', 'two', 'three'];
const [red, yellow, blue] = foo;
console.log(red); //"one"
console.log(yellow); //"two"
console.log(blue); //"three"