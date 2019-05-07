const objects=[
    {
        name:'xxx',
        class:'aaa'

},
{
    name:'yyy',
    class:'bbb'
}
];

function print(){
    objects.forEach((values)=>{
console.log(values.name);
    })
}

function getValues(value){
    return new Promise((resolve,reject)=>{
           objects.push(value);

           const error = false;

           if(!error){
               resolve();
           }

           else{
               reject('Error:something went wrong');
           }
    })

}
async function setValues(){
    await getValues({
        name:'zzz',
        class:'ccc'
    }) ;

    print();
}

setValues();