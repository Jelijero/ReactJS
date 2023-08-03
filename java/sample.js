var a=25;
console.log("before "+" " +a)
{
    var a=6
    console.log("after "+" " +a)
}
console.log("block "+" " +a)

let b=13;
console.log("before "+" " +b)
{
    let b=6
    console.log("after "+" " +b)
}
console.log("block "+" " +b)

const c=38;
console.log(c)
a=0
if(a==0){
    console.log("the no is zero")
    a=a+1
}
if(a>0){
    console.log("the no is positive")

}


l=5
for(i=0; i<l;i++){
    console.log(i)

}

i=0

while(i<l){
    console.log(i)
    i++
}


array=[25,13]
array.forEach(element => console.log(element));

const arrray=[25,13,"AB",10.00,Date()]
for(var ele in arrray){
    console.log(arrray[ele])

}

console.log("after change:")
arrray.push("bhavi")

for (var ele in arrray){
    console.log(arrray[ele])
}
arrray.pop()
arrray.pop()
arrray.pop()
arrray.pop()
arrray.pop()
arrray.pop()
console.log("after popping")
console.log(arrray)
arrray.push("hi")
console.log(arrray)

if(arrray.length>0){
    console.log("elements are present")
    for (var ele in arrray){
        console.log(arrray[ele])
    }

}

else{
    console.log("no elements")
}
arrray.push("hi")
console.log(arrray)
