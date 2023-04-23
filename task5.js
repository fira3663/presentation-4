function mass(arr){
    let nb=arr.sort(function(a,b){return b-a})
  
    
    return nb[0]
}
console.log(mass([1,2,3,45,6,7,8,9]))
function masss(arr){
    let nb=arr.sort(function(a,b){return a-b})
  
    
    return nb[0]
}
console.log(masss([1,2,3,45,6,7,8,9]))