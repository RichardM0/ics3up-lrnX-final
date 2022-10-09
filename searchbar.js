const pages = [];

const mit6001x = {};
mit6001x.name = "mit6001x"; //what will the search query be?
mit6001x.image = "ics3up-MITx6001x.jpeg"; //link to image for the course (relative to results.html)
mit6001x.display = "MIT's Introduction to Computer Science with Python"; //what will the bolded heading say?
mit6001x.desc = " Intermediate and beginner course for those interested in programming with Python! Includes complexity, data types, and more."; //what will the description say?
mit6001x.link = "../ics3up-lrnX-final/courseslist/mit6001x.html"; //what should it be linked to? (relative to results.html)
mit6001x.keywords = ["mit","python","6001x",""]; //some keywords that will also bring up the course
pages.push(mit6001x);

const CS50W = {};
CS50W.name = "CS50W"; //what will the search query be?
CS50W.image = "ics3up-CS50W.webp"; //link to image for the course (relative to results.html)
CS50W.display = "CS50W's Web Development with Python and JavaScript"; //what will the bolded heading say?
CS50W.desc =  "Learn Web Development using Python, Javascript, Django, SQL and more!"; //what will the description say?
CS50W.link = "../ics3up-lrnX-final/courseslist/CS50W.html"; //what should it be linked to? (relative to results.html)
CS50W.keywords = ["javascript","python","harvard","cs50", "web development", "web programming"]; //some keywords that will also bring up the course
pages.push(CS50W);


function storesearch(){
    const query = document.getElementById("searchInput").value.trim();
    window.location.href = `results.html?q=${encodeURIComponent(query)}`;
};

    
        

function storesearchenter(key){
    if(key.keyCode === 13){
        storesearch();
    };
}; 

/*"element.classList.add('classname')"
"element.setAttribute('id','idname')"*/
function search(){
    const results = document.getElementById("results");
    const ogquery = new URLSearchParams(window.location.search).get("q");
    const query = new URLSearchParams(window.location.search).get("q").toLowerCase();
    const matches = [];
    for (const page of pages){
        let commonchar = 0;
        for(const i in page.name){
            query[i] == page.name[i]?commonchar++:false;
        };
        if (commonchar>page.name.length/2){
            matches.push(page);
        }else{
            for(const keyword of page.keywords){
                let commonchar = 0;
                for(const i in keyword){
                    query[i] == keyword[i]?commonchar++:false;
                };
                if (commonchar>keyword.length/2){
                    matches.push(page);
                };
            };
        };
    };
    if (matches.length==0){
        window.location.href = `zeroresults.html?q=${encodeURIComponent(query)}`
        
    }else{
        const res = document.createElement("h1");
        res.innerHTML = `Showing results for "${ogquery}"`
        res.classList.add('show-results-header-page')
        document.querySelector("#heading").appendChild(res)
    };
    for (const match of matches){
        const condiv = document.createElement("div");
        condiv.classList.add("showcaseitem");

        const link = document.createElement("a");
        link.href = match.link;
        link.style.textDecoration = "none";
        link.style.color = "black";

        const imagediv = document.createElement("div");
        const image = document.createElement("img");
        image.setAttribute("src",match.image);
        imagediv.appendChild(image);
        image.classList.add("showcaseimage");

        const descdiv = document.createElement("div");
        const p = document.createElement("p");
        p.classList.add("showcasedescription")
        p.innerHTML = match.desc
        const strong = document.createElement("strong");
        strong.innerHTML = match.display;
        descdiv.appendChild(strong);
        descdiv.appendChild(p);
        descdiv.style.marginTop = "15px";
        descdiv.style.padding = "0px 15px 0px 15px";
        descdiv.style.fontSize = "16px";
        
        link.appendChild(imagediv);
        link.appendChild(descdiv);

        condiv.appendChild(link);
        results.appendChild(condiv);
    };
};




function noresults(){
    const ogquery = new URLSearchParams(window.location.search).get("q");
    /*element.setAttribute('id','idname') how do i add id to the h1 text thingy "no results for:"*/
    document.querySelector("#noresults").innerHTML = `No results for: ${ogquery}`
}