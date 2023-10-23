const listelemArr=document.getElementsByClassName("listelem")
console.log(listelemArr)
for(let elem of listelemArr){
    elem.addEventListener("click",function(){
        const searchString = this.outerHTML.split(seperator)[1]; // The string you want to search for

        const filteredList = webslist.filter(item => item.name === searchString);
        
        let obj=filteredList[0]
        current=obj
        
    })
} 