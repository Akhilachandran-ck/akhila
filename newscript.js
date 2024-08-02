console.log('MY fourth CODE');
// Variables
var c=5
console.log(c);
let b=1;
{
    var a=9;
    console.log(a)
}
let car=new Object()
car.name='Alto'
car.colour='red'
console.log(car2);
function display(fname)
{
console.log('Welcome'+fname+' to function');


}
//display('Akhila');
function mult_value(a,b){
var product1=a*b;
return product1;


}
var result1=mult_value(10,20)
console.log('the product is' +result1)
var exp= (4*7)-8**2+9;
console.log(exp);
if(exp>0)
{
console.log('Value is greater than zero');

}else if(exp==0){

    console.log('Value is equal to zero');

}
else{

    console.log('Value is less than zero');

}
for( let i=0;i<10;i++)
    {
    console.log(i+1);
    
    }
    var array=[1,45,34,56,78];
    for(let i=0;i<array.length;i++)
    {
    console.log(array[i]);
    
    }
    var obj={fname:'akhila',age:30,location:'pandalam'}
    for (const i in obj
    
    ) {
        console.log(i);
    }
    for (const i of array) {
        console.log(i);
    
        
    }
    let i=0;
    while(i<10)
    {
        console.log(i+1);
        i++;
    }
    let r=1;
    do {
        console.log(r);
        r++;
    } while (r<=10);
let object1={fname:'ani',age:10}
for (const k in object1) {
   // if (Object.hasOwnProperty.call(object, key)) 
       // const element = object[key];
   console.log(k);
        
    }
    //let object2={fname:'ani',age:10}

for (const j of array) {
    console.log(j);

}