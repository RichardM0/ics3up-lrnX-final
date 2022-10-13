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
    let counter = 0;
    let rowdiv = document.createElement("div");
    rowdiv.classList.add("row");
    rowdiv.setAttribute("id","webdev-showcase-items-row1");
    rowdiv.style.margin = "0px";
    rowdiv.style.marginLeft = "65px"
    rowdiv.style.justifyContent = "flex-start";
    results.appendChild(rowdiv);

    for (const match of matches){
        counter++;
        counter==5?counter=1:false;
        const condiv = document.createElement("div");
        condiv.classList.add("showcaseitem");
        condiv.classList.add(`col-${counter}-md`) ;
        condiv.style.marginTop = "40px";
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
        p.classList.add("showcasedescription");
        p.innerHTML = match.desc;
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
        rowdiv.appendChild(condiv);

    };
};




function noresults(){
    const ogquery = new URLSearchParams(window.location.search).get("q");
    /*element.setAttribute('id','idname') how do i add id to the h1 text thingy "no results for:"*/
    document.querySelector("#noresults").innerHTML = `No results for: ${ogquery}`
}
const pages = [];


const mit6001x = {};
mit6001x.name = "mit6001x"; //what will the search query be?
mit6001x.image = "ics3up-MITx6001x.jpeg"; //link to image for the course (relative to results.html)
mit6001x.display = "MIT's Introduction to Computer Science with Python"; //what will the bolded heading say?
mit6001x.desc = "Intermediate and beginner course for those interested in programming with Python! Includes complexity, data types, and more."; //what will the description say?
mit6001x.link = "../ics3up-lrnX-final/courseslist/mit6001x.html"; //what should it be linked to? (relative to results.html)
mit6001x.keywords = ["mit","python","6001x","introduction"]; //some keywords that will also bring up the course
pages.push(mit6001x);


const CS50W = {};
CS50W.name = "CS50W"; //what will the search query be?
CS50W.image = "ics3up-CS50W.webp"; //link to image for the course (relative to results.html)
CS50W.display = "CS50W's Web Development with Python and JavaScript"; //what will the bolded heading say?
CS50W.desc =  "Learn Web Development using Python, Javascript, Django, SQL and more!"; //what will the description say?
CS50W.link = "../ics3up-lrnX-final/courseslist/CS50W.html"; //what should it be linked to? (relative to results.html)
CS50W.keywords = ["javascript","python","harvard","cs50", "web development", "web programming"]; //some keywords that will also bring up the course
pages.push(CS50W);

const CS50P = {};
CS50P.name = "CS50P"; //what will the search query be?
CS50P.image = "ics3up-CS50P.jpeg"; //link to image for the course (relative to results.html)
CS50P.display = "CS50P's Introduction to Computer Science with Python"; //what will the bolded heading say?
CS50P.desc =  "Learn how to program using scripting language Python!"; //what will the description say?
CS50P.link = "../ics3up-lrnX-final/courseslist/CS50P.html"; //what should it be linked to? (relative to results.html)
CS50P.keywords = ["python","harvard","cs50","introduction","beginning"]; //some keywords that will also bring up the course
pages.push(CS50P);

const CS50x = {};
CS50x.name = "CS50x"; //what will the search query be?
CS50x.image = "ics3up-CS50X.png"; //link to image for the course (relative to results.html)
CS50x.display = "CS50x's Introduction to Computer Science"; //what will the bolded heading say?
CS50x.desc =  "Use C++ to learn how to program, along with Computer Science fundamentals such as binary, how a computer works, experiments, and more."; //what will the description say?
CS50x.link = "../ics3up-lrnX-final/courseslist/CS50x.html"; //what should it be linked to? (relative to results.html)
CS50x.keywords = ["C++","harvard","cs50","introduction","beginning",]; //some keywords that will also bring up the course
pages.push(CS50x);

const CS50M = {};
CS50M.name = "CS50M"; //what will the search query be?
CS50M.image = "ics3up-CS50M.webp"; //link to image for the course (relative to results.html)
CS50M.display = "CS50M: Mobile App Development with React Native"; //what will the bolded heading say?
CS50M.desc =  " Learn about mobile app development with React Native, a popular framework maintained by Facebook that enables cross-platform native apps using JavaScript without Java or Swift."; //what will the description say?
CS50M.link = "../ics3up-lrnX-final/courseslist/CS50M.html"; //what should it be linked to? (relative to results.html)
CS50M.keywords = ["react native","react","harvard","cs50","web programming","javascript", "web development",]; //some keywords that will also bring up the course
pages.push(CS50M);

const CS50AI = {};
CS50AI.name = "CS50AI"; //what will the search query be?
CS50AI.image = "ics3up-CS50AI.webp"; //link to image for the course (relative to results.html)
CS50AI.display = "CS50AI: Introduction to Artificial Intelligence with Python"; //what will the bolded heading say?
CS50AI.desc =  "Learn to use machine learning in Python in this introductory course on artificial intelligence."; //what will the description say?
CS50AI.link = "../ics3up-lrnX-final/courseslist/CS50AI.html"; //what should it be linked to? (relative to results.html)
CS50AI.keywords = ["ai","artificial intelligence","harvard","cs50","python","introduction", "beginner",]; //some keywords that will also bring up the course
pages.push(CS50AI);

const IBMDSC = {};
IBMDSC.name = "IBMDSC++"; //what will the search query be?
IBMDSC.image = "ics3up-IBMDSC++.webp"; //link to image for the course (relative to results.html)
IBMDSC.display = "IBM: Data Structures and Algorithms using C++"; //what will the bolded heading say?
IBMDSC.desc =  "Build efficient programs by learning how to implement data structures using algorithmic techniques and solve various computational problems using the C++ programming language."; //what will the description say?
IBMDSC.link = "../ics3up-lrnX-final/courseslist/IBMDSC++.html"; //what should it be linked to? (relative to results.html)
IBMDSC.keywords = ["data science","ibm","algorithm","data structures","data", "c++",]; //some keywords that will also bring up the course
pages.push(IBMDSC);

const IBMFC = {};
IBMFC.name = "IBMFC++"; //what will the search query be?
IBMFC.image = "ics3up-IBMFC++.webp"; //link to image for the course (relative to results.html)
IBMFC.display = "IBM: Fundamentals with C++"; //what will the bolded heading say?
IBMFC.desc =  "An introductory course with C++ that inspires kinesthetic learners!"; //what will the description say?
IBMFC.link = "../ics3up-lrnX-final/courseslist/IBMFC++.html"; //what should it be linked to? (relative to results.html)
IBMFC.keywords = ["starter","ibm","beginner","introduction","fundamentals", "c++",]; //some keywords that will also bring up the course
pages.push(IBMFC);

const IBMWJS = {};
IBMWJS.name = "IBMWJS"; //what will the search query be?
IBMWJS.image = "ics3up-IBMJS.webp"; //link to image for the course (relative to results.html)
IBMWJS.display = "IBM: Web Developing in the Cloud with JavaScript"; //what will the bolded heading say?
IBMWJS.desc =  "Using JavaScript and more to learn web development, and web development with the cloud."; //what will the description say?
IBMWJS.link = "../ics3up-lrnX-final/courseslist/IBMWJS.html"; //what should it be linked to? (relative to results.html)
IBMWJS.keywords = ["cloud","ibm","javascript","web development","front-end", "develop",]; //some keywords that will also bring up the course
pages.push(IBMWJS);

// TO ADD  UoPjs klwebsec W3CIWA W3CHC W3CH IBMPDS IBMLP ACCAML