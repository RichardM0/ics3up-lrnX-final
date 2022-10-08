const pages = ["test"];

function storesearch(){
    const query = document.getElementById("searchInput").value.trim();
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
};


function search(){
    const results = document.getElementById("results");
    const ogquery = new URLSearchParams(window.location.search).get("q");
    const query = new URLSearchParams(window.location.search).get("q").toLowerCase();
    const matches = [];
    for (const page of pages){
        let commonchar = 0;
        for(const i in page){
            query.includes(page[i])?commonchar++:false;
        };
        if (commonchar>page.length/2){
            matches.push(page);
        };
    };
    if (matches.length==0){
      window.location.href="zero-results.html"
    };
    for (const match of matches){
        const condiv = document.createElement("div");
        const link = document.createElement("a");
        const res = document.createElement("h2");
        res.innerHTML = `Showing results for "${ogquery}"`
        link.href = `${match}.html`;
        link.innerHTML = match;
        condiv.appendChild(res);
        condiv.appendChild(link);
        results.appendChild(condiv);
    };
};