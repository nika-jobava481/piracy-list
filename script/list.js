// {/* <li><a href="srulad.com">srulad.com</a> <b>movies</b> <i>checked</i> <i>2023-10-21</i></li> */}


const weblist = document.getElementById("weblist")

const websitelist = [
    {
        name: "Website 1",
        link: "https://example.com",
        description: "This is the first website.",
        date: "2023-10-21",
        status: "Active",
        category: ["Tech", "News"]
    },
    {
        name: "Website 2",
        link: "https://sample.com",
        description: "A sample website with details.",
        date: "2023-10-22",
        status: "Inactive",
        category: ["Entertainment"]
    },
    {
        name: "Website 3",
        link: "https://test.com",
        description: "A testing website for experimentation.",
        date: "2023-10-23",
        status: "Active",
        category: ["Tech", "Development"]
    },
    // Add more objects as needed
];



for(let website of websitelist){
    weblist.innerHTML+=`
    <li><a href="${website.link}">${website.name}</a> <b>${website.category}</b> <i>${website.status}</i> <i>${website.date}</i></li>
    `
}


