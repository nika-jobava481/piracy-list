// {/* <li><a href="srulad.com">srulad.com</a> <b>movies</b> <i>checked</i> <i>2023-10-21</i></li> */}


const weblist = document.getElementById("weblist")

const websitelist = [
    {
        name: "srulad.com",
        link: "https://srulad.com",
        description: "use dns",
        date: "2023-10-21",
        status: "Active",
        category: ["movies"]
    },
    {
        name: "adjaranet.to",
        link: "https://adjaranet.to",
        description: "change player if stream won't start.",
        date: "2023-10-21",
        status: "Active",
        category: ["movies"]
    },
    {
        name: "fmoviesz",
        link: "https://fmoviesz.to",
        description: "domain change is often",
        date: "2023-10-21",
        status: "Active",
        category: ["movies"]
    },
    // Add more objects as needed
];



for(let website of websitelist){
    weblist.innerHTML+=`
    <li><a href="${website.link}">${website.name}</a> <b>${website.category.join(", ")}</b> <i>${website.status}</i> <i>${website.date}</i></li>
    `
}


