

const weblist = document.getElementById("weblist")

const websitelist = [
    ...webslist
];

// console.log(webslist)



for(let website of websitelist){
    weblist.innerHTML+=`
    <li class="listelem" id="${seperator}${website.name}${seperator}"><a href="${website.link}">${website.name}</a> <b>${website.category.join(", ")}</b> <i>${website.status} ${website.date}</i></li>
    `
}


