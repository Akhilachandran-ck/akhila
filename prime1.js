function array1()

{
var arrr1=[11,56,9,91];
console.log(arrr1[0]);
var j=0;
for(let i=1; i<=arrr1[0]; i++)
{
if (arrr1[0]%i == 0)
{
    
    j++;

}
}
if(j==2)
{
    console.log("prime");

}
else
{
    console.log("not a prime");

}
}
array1();