"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Victor Heras
 */

const searchform = document.querySelector("#searchform");
const search = document.querySelector("#search");
const error = document.querySelector("#error");
const recipe = document.querySelector("#recipe");
const message = document.querySelector("#message")


async function getRecipe() {

    try {
        const response = await fetch('https://dummyjson.com/recipes/search?q=Margherita'); //+encodeURIComponent(search.value.trim));

        if (!response.ok){
            throw new resError(response.status)
        }

    } catch(resError){

    }
    
}

function showRecipe(){

    //Tar bort gamla receptet
    recipe.innerHTML = "";

    /*Plan på visa recept

    for (let i=0; i<obj.ingrediant.length; i++){
        let ingList =+ "<li>" + obj.ingrediant[i] + "</li>";
    }
    
    for (let i=0; i<obj.instuction.length; i++){
        let instrList =+ "<li>" + obj.instruction[i] + "</li>";
    }


    recipe.innerHTML = "<article>" + "<h3>" + obj.recNamn + "</h3>" +
    "<img src='" + obj.image + "' alt='" + obj.name +"'>" + 
    "<div class='recipe-info'>" +
        "<p><strong>obj.Servings:</strong> x</p>" +
        "<p><strong>obj.Prep time:</strong> y minutes</p>" +
        "<p><strong>obj.Cooking time:</strong> z minutes</p>" +
        "<p><strong>obj.Difficulty:</strong> 'difficulty'</p>" +
    </div> +
    "<h4>Ingredients</h4>" +
    "<ul>" + ingList "</ul>" +
    "<h4>Inscturction</h4>" +
    "<ol>" + instrList + "</ol>"
    "</article>""

    */
}

searchform.addEventListener("submit", function(event){
    event.preventDefault();
    error.innerHTML = "";
    message.innerHTML = "";

    //kollar om sökfras input är tomt och skriver ev ut isåfall felmeddelande
    if (search.value.trim()===""){ 
        error.innerHTML = "Du måste fylla i en sökfras"; 
    }

    });
