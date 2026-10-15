"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Victor Heras
 */

const searchform = document.querySelector("#searchform");
const search = document.querySelector("#search");
const error = document.querySelector("#error");


async function getRecipe() {

    try {
        const response = await fetch('https://dummyjson.com/recipes/search?q=Margherita'+encodeURIComponent(search.value.trim));

        if (!response.ok){
            throw new resError(response.status)
        }

    } catch(resError){

    }
    
}

searchform.addEventListener("submit", function(event){
    event.preventDefault();
    error.innerHTML = "";

    //kollar om sökfras input är tomt och skriver ev ut isåfall felmeddelande
    if (search.value.trim()===""){ 
        error.innerHTML = "Du måste fylla i en sökfras"; 
    }

    });
