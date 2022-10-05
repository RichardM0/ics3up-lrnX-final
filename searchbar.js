const searchInput = document.getElementById("searchInput");
const namesFromDOM = document.getElementsByClassName("name");

console.log(searchInput)

searchInput.addEventListener("keyup", input => {
    const { value } = event.target;
    
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();
        // compare current name to search input
        if (name == (searchQuery)) {
            // found name matching search, display it
            openfile("searchQuery.html")
        }
        else {
            // no match, don't display name
            return
        }
    }
});