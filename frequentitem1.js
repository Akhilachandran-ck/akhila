var arr1=[3,2,2,3,7,3,5,3,9,1];
var count=0;
var temp=1;

var  frequentelement1;
for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr1.length;j++)
{
    if(arr1[i]==arr1[j])

    count++;
    if(temp<count)
    {
temp=count;
        frequentelement1=arr1[i];
    }
}
count=0;
}

        console.log("Most frequent item of an array is " +frequentelement1);

        
    






