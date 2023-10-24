const infoarea = document.getElementById("info")

const urlSearchParams = new URLSearchParams(window.location.search);
const getname = decodeURIComponent(urlSearchParams.get('name'))
console.log(getname)

let searchString = getname

const filteredList = webslist.filter(item => item.name === searchString);

let obj = filteredList[0]
current = obj


infoarea.innerHTML = `
<a href="${current.link}">
<h3>${current.name}</h3>
</a>
<p><span></span> <b>${current.category.join(", ")}</b> <i>${current.status} ${current.date}</i></p>
<p>${current.description}</p>
`