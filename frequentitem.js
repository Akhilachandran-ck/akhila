var arr1=[1,2,2,3,7,4,5,2,9,1];
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

        console.log(frequentelement1);

        
    






