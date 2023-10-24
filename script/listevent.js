const listelemArr = document.getElementsByClassName("listelem")
console.log(listelemArr)
for (let elem of listelemArr) {
    elem.addEventListener("click", function () {
        const searchString = this.outerHTML.split(seperator)[1]; // The string you want to search for

        const filteredList = webslist.filter(item => item.name === searchString);

        let obj = filteredList[0]
        current = obj


        // // Get the current URL
        const currentURL = window.location.href;

        // // Define the name you want to pass
        const name = current.name;

        // // Append the name as a query parameter
        const updatedURL = currentURL + '?name=' + encodeURIComponent(name);

        // // Update the URL without navigating to a new page
        // window.history.pushState({ path: updatedURL }, '', updatedURL);


        window.location.href = `/assets/pages/details.html?name=${encodeURIComponent(name)}`;

    })
} 