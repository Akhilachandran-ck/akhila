function array1()

{
var arrr1=[11,56,9,91];
console.log(arrr1[0]);
var flag=0;
for(let i=1; i<=arrr1[0]; i++)
{
if (arrr1[0]%i == 0)
{
    
    flag++;

}
}
if(flag==2)
{
    console.log("prime");

}
else
{
    console.log("not a prime");

}
}
array1();