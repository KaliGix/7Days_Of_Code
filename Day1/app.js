
//Booleans values
const trueValue = true;
let booleanValue = false;

//Numbers values
const numberZero = 0;
const numberOne = '1';
const numberTen = 10;
const numberTherty = 30;

//string values
const emptyString = '';
const stringZero = '0';
const stringOne = '1';
const stringTen = '10';
const stringThirty = '30';

//null and undefined values
const nullValue = null;
const undefinedValue = undefined;


if(numberOne == stringOne){
    console.log('The variables numberOne and stringOne have the same value, but different types');
} else {
    console.log('The variable numberOne and stringOne have not the same value');
}

if(numberTherty === stringThirty){
    console.log('The variables numberTherty and stringThirty have the same value and the same type');
} else {
    console.log('The variables numberTherty and stringThirty have no the same value');
}

if(numberTen == stringTen){
    console.log('The variables numberTen and stringTen have the same value, but different types');
} else {
    console.log('The variables numberTen and stringTen have no the same value');
}

//comparing boolean and number values
if(booleanValue === numberZero){
    console.log('The variables booleanValue and numberZero have the same value and the same type');
} else {
    console.log('The variables booleanValue and numberZero have different types ');
}

if(trueValue === numberOne){
    console.log('The variables trueValue and numberOne have the same value and the same type');
} else {
    console.log('The variables trueValue and numberOne have different  different types');
}

booleanValue = !false; //reassigning the value of the variable booleanValue. Now it is true

if(booleanValue === trueValue){
    console.log('The variables booleanValue and trueValue have the same value and the same type');
} else {
    console.log('The variable booleanValue and trueValue have different different types');
}

//comparing string and number values
if(emptyString === numberZero){
    console.log('The variables emptyString and numberZero have the same value and the same type');
} else {
    console.log('The variables emptyString and numberZero have different  different types')
}

if(stringZero === numberZero){
    console.log('The variables stringZero and numberZero have the same value and the same type');
} else {
    console.log('The variables stringZero and numberZero have  different types');
}

//if we compare a string and a number with the same value but different types, the result will be false
if(stringOne !== numberOne){
    console.log('The variables stringOne and numberOne have the same values but different types ');
} else{
    console.log('The variables stringOne and numberOne have the same value and the same type :)');
}

//comparing string values
if(emptyString === ""){
    console.log('The variables emptyString and "" have the same value and the same type');
}   else {
    console.log('There is no way this be printed');
}

//comparing null and undefined values
if(nullValue === undefinedValue){
    console.log('The variables nullValue and undefinedValue have the same value and the same type');
} else {
    console.log('The variables nullValue and undefinedValue have different values and different types');
}   
