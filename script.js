var arr=[12,15,16,18,45,24,27]

var final=arr.filter(function (val) {
    if (val%2) {
        return true
        
    }else{
        return false
    }
    
    
})
var ans=final.forEach(function (val) {
    console.log(val + 15);
    
    
})

''