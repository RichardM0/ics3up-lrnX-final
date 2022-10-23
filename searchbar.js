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
        if (matches.includes(page)){
            continue
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
        res.style.paddingLeft = "calc(100vh / 12)";
        res.style.fontSize = "60px";
        document.querySelector("#heading").appendChild(res)
    };
    let counter = 0;
    let rowdiv = document.createElement("div");
    rowdiv.classList.add("row");
    rowdiv.setAttribute("id","webdev-showcase-items-row1");
    rowdiv.style.marginTop = "30px";
    rowdiv.style.marginLeft = "65px"
    rowdiv.style.justifyContent = "flex-start";
    rowdiv.style.paddingLeft = "calc(100vh / 10)";
    results.appendChild(rowdiv);

    for (const match of matches){
        counter++;
        counter==5?counter=1:false;
        const condiv = document.createElement("div");
        condiv.classList.add("showcaseitem");
        condiv.classList.add(`col-${counter}-md`) ;
        condiv.style.marginBottom = "50px";
        condiv.style.marginLeft = "0px";
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
        descdiv.style.margin = "0px 0px 0px 0px";
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

const IBMPDS = {};
IBMPDS.name = "IBMPDS"; //what will the search query be?
IBMPDS.image = "ics3up-IBMPDS.webp"; //link to image for the course (relative to results.html)
IBMPDS.display = "IBM: Python Basics for Data Science"; //what will the bolded heading say?
IBMPDS.desc =  "This Python course provides a beginner-friendly introduction to Python for Data Science. Practice through lab exercises, and you'll be ready to create your first Python scripts on your own."; //what will the description say?
IBMPDS.link = "../ics3up-lrnX-final/courseslist/IBMPDS.html"; //what should it be linked to? (relative to results.html)
IBMPDS.keywords = ["python","ibm","basics","data science","data", "beginner","introduction",]; //some keywords that will also bring up the course
pages.push(IBMPDS);

const IBMLP = {};
IBMLP.name = "IBMLP"; //what will the search query be?
IBMLP.image = "ics3up-IBMLP.webp"; //link to image for the course (relative to results.html)
IBMLP.display = "IBM: Machine Learning with Python"; //what will the bolded heading say?
IBMLP.desc =  "Machine Learning can be an incredibly beneficial tool to uncover hidden insights and predict future trends. This Machine Learning with Python course will give you all the tools you need to get started with supervised and unsupervised learning."; //what will the description say?
IBMLP.link = "../ics3up-lrnX-final/courseslist/IBMLP.html"; //what should it be linked to? (relative to results.html)
IBMLP.keywords = ["python","ibm","machine learning","ai","data", "neural","artificial intelligence",]; //some keywords that will also bring up the course
pages.push(IBMLP);

const UoPjs = {};
UoPjs.name = "UoPjs"; //what will the search query be?
UoPjs.image = "ics3up-UoPjs.webp"; //link to image for the course (relative to results.html)
UoPjs.display = "UoP: Programming for the Web with JavaScript"; //what will the bolded heading say?
UoPjs.desc =  "Learn how to develop dynamic, interactive, and data-driven web apps using JavaScript."; //what will the description say?
UoPjs.link = "../ics3up-lrnX-final/courseslist/UoPjs.html"; //what should it be linked to? (relative to results.html)
UoPjs.keywords = ["javascript","uop","javascript","web development","front-end", "develop","university of pensylvannia"]; //some keywords that will also bring up the course
pages.push(UoPjs);

const klwebsec = {};
klwebsec.name = "klwebsec"; //what will the search query be?
klwebsec.image = "ics3up-klwebsec.jpg"; //link to image for the course (relative to results.html)
klwebsec.display = "Ku Leuven's Web Security Fundamentals"; //what will the bolded heading say?
klwebsec.desc =  "Essential knowledge for every web developer, discover important principles of modern web security, and learn about current security best practices."; //what will the description say?
klwebsec.link = "../ics3up-lrnX-final/courseslist/klwebsec.html"; //what should it be linked to? (relative to results.html)
klwebsec.keywords = ["web security","ku leuven","javascript","web development","front-end", "develop","web"]; //some keywords that will also bring up the course
pages.push(klwebsec);

const W3CHC = {};
W3CHC.name = "W3CHC"; //what will the search query be?
W3CHC.image = "ics3up-W3CHC.webp"; //link to image for the course (relative to results.html)
W3CHC.display = "W3C: HTML5 and CSS Fundamentals"; //what will the bolded heading say?
W3CHC.desc =  "Learn how to build Web sites using HTML5 and basic CSS, directly from W3C, creator of the latest Web standards."; //what will the description say?
W3CHC.link = "../ics3up-lrnX-final/courseslist/W3CHC.html"; //what should it be linked to? (relative to results.html)
W3CHC.keywords = ["css","html","javascript","web development","front-end", "develop","web","w3c"]; //some keywords that will also bring up the course
pages.push(W3CHC);

const W3CH = {};
W3CH.name = "W3CH"; //what will the search query be?
W3CH.image = "ics3up-W3CH.webp"; //link to image for the course (relative to results.html)
W3CH.display = "W3C: HTML5 Coding Essentials and Best Practices"; //what will the bolded heading say?
W3CH.desc =  "Learn how to write Web pages and Web sites by mastering HTML5 coding techniques and best practices."; //what will the description say?
W3CH.link = "../ics3up-lrnX-final/courseslist/W3CH.html"; //what should it be linked to? (relative to results.html)
W3CH.keywords = ["css","fundamentals","basic","beginner","introduction","html","javascript","web development","front-end", "develop","web","w3c"]; //some keywords that will also bring up the course
pages.push(W3CH);

const CS50G = {};
CS50G.name = "CS50G"; //what will the search query be?
CS50G.image = "ics3up-CS50G.webp"; //link to image for the course (relative to results.html)
CS50G.display = "CS50G's Introduction to Game Development"; //what will the bolded heading say?
CS50G.desc =  "Learn about the development of 2D and 3D interactive games in this hands-on course, as you explore the design of games such as Super Mario Bros., Pokémon, Angry Birds, and more"; //what will the description say?
CS50G.link = "../ics3up-lrnX-final/courseslist/CS50G.html"; //what should it be linked to? (relative to results.html)
CS50G.keywords = ["C++","harvard","cs50","introduction","beginning","lua","games","game development"]; //some keywords that will also bring up the course
pages.push(CS50G);

const W3CIWA = {};
W3CIWA.name = "W3CIWA"; //what will the search query be?
W3CIWA.image = "ics3up-W3CIWA.webp"; //link to image for the course (relative to results.html)
W3CIWA.display = "W3C's Introduction to Web Authentication"; //what will the bolded heading say?
W3CIWA.desc =  "Web developers dig deep into modern Web Authentication to secure access to resources and applications"; //what will the description say?
W3CIWA.link = "../ics3up-lrnX-final/courseslist/W3CIWA.html"; //what should it be linked to? (relative to results.html)
W3CIWA.keywords = ["css","w3c","introduction","beginning","html","web","web development","authentication"]; //some keywords that will also bring up the course
pages.push(W3CIWA);

const ACCAML = {};
ACCAML.name = "ACCAML"; //what will the search query be?
ACCAML.image = "ics3up-ACCAML.webp"; //link to image for the course (relative to results.html)
ACCAML.display = "ACCA: Machine Learning with Python for Financial Professionals"; //what will the bolded heading say?
ACCAML.desc =  "A machine learning course focused on delivering practical Python skills for finance professionals looking to maximise their use of these time-saving tools within their organisation."; //what will the description say?
ACCAML.link = "../ics3up-lrnX-final/courseslist/ACCAML.html"; //what should it be linked to? (relative to results.html)
ACCAML.keywords = ["acca","python","ai","machine","financial","finance","machine learning"]; //some keywords that will also bring up the course
pages.push(ACCAML);

const HARVP = {};
HARVP.name = "HARVP"; //what will the search query be?
HARVP.image = "ics3up-harvp.jpg"; //link to image for the course (relative to results.html)
HARVP.display = "Harvard: Using Python for Research"; //what will the bolded heading say?
HARVP.desc =  "Take your introductory knowledge of Python programming to the next level and learn how to use Python 3 for your research."; //what will the description say?
HARVP.link = "../ics3up-lrnX-final/courseslist/HARVP.html"; //what should it be linked to? (relative to results.html)
HARVP.keywords = ["harvard","python","research","intermediate","student","education"]; //some keywords that will also bring up the course
pages.push(HARVP);

// TO ADD W3Cjs GAIjs EPFLNJS
