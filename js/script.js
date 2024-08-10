//let response = await fetch("../main.html")
//let main = await response.text();
//document.getElementById("main-content").innerHTML = main;

// import { lattices } from "./lattices.js";
import {atoms} from "./atoms.js";

atoms();

/*
document.getElementById("projects-side").addEventListener("click", async () => {
    let response = await fetch("../projects.html");
    let projects = await response.text();
    document.getElementById("main-content").innerHTML = projects;
    
    document.getElementById("atoms").addEventListener("click", async () => {
        let response = await fetch("../projects/atoms.html");
        let content = await response.text();
        document.getElementById("main-content").innerHTML = content;

        atoms();
    });
});

document.getElementById("home-side").addEventListener("click", async () => {
    let response = await fetch("../main.html");
    let main = await response.text();
    document.getElementById("main-content").innerHTML = main;
    lattices();
});
*/
