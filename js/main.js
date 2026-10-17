"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Victor Heras
 */

const searchform = document.querySelector("#searchform");
const search = document.querySelector("#search");
const error = document.querySelector("#error");
const recipeSection = document.querySelector("#recipe");
const message = document.querySelector("#message")


async function getRecipe() {

    try {
        const response = await fetch('https://dummyjson.com/recipes/search?q=Margherita'); //+encodeURIComponent(search.value.trim));

        //Kollar om svaret från servern är ok, skapar ett fel annars
        if (!response.ok){
            throw new resError(response.status);
        }

        //Gör om response från JSON till ett obj
        const recipeData = await response.json();
        const recipe = recipeData.recipe;

        //Om inget recept hittades med sökfrasen ge it meddelande och return
        if (recipe.length === 0){
            recipeSection.innerHTML = "";
            message.innerHTML = "Inget recept hittades, prova med en annan sökfras";
            return;
        }

        //Visar bara första recepted
        showRecipe(recipe[0]);

    } catch(err){
        //Om fel sker vid inhämtning
        recipeSection.innerHTML = "";
        message.innerHTML = "Ett fel inträffade, Försök igen";
        //Skriver ut till console error fel
        console.error(err);
    }

}


//Funciton som skriver ut recepter på sidan
function showRecipe(obj){

    //Tar bort gamla receptet
    recipeSection.innerHTML = "";

    ///Loop som skapar ingridients listan
    //Tömmer ingList
    let ingList = "";
    for (let i=0; i<obj.ingredients.length; i++) {
        ingList += "<li>" + obj.ingredients[i] + "</li>";
    }

    ///Loop som skapar instrucions listan
    //Tömmer instrList
    let instrList = "";
    for (let i=0; i<obj.instuctions.length; i++){
        instrList += "<li>" + obj.instruction[i] + "</li>";
    }

    
    recipeSection.innerHTML = 
        "<article>" + 
            "<h3>" + obj.name + "</h3>" +
            "<img src='" + obj.image + "' alt='" + obj.name +"'>" + 
            "<div class='recipe-info'>" +
                "<p><strong>Servings:</strong>" + obj.servings + "</p>" +
                "<p><strong>Prep time:</strong>" + obj.prepTimeMinutes + "minutes</p>" +
                "<p><strong>Cooking time:</strong>" + obj.cookTimeMinutes + "minutes</p>" +
                "<p><strong>Difficulty:</strong>" + obj.difficulty + "</p>" +
            "</div>" +
        "<h4>Ingredients</h4>" +
        "<ul>" + ingList + "</ul>" +
        "<h4>Inscturction</h4>" +
        "<ol>" + instrList + "</ol>"
        "</article>";

}
    

searchform.addEventListener("submit", function(event){
    event.preventDefault();

    //Tar bort gamla fel och meddelanden
    error.innerHTML = "";
    message.innerHTML = "";

    //kollar om sökfras input är tomt och skriver ev ut isåfall felmeddelande samt return
    if (search.value.trim()===""){ 
        error.innerHTML = "Du måste fylla i en sökfras"; 
        return; //Avbryter så inget anrop görs
    }

    //Kallar getRecipe som hämtar och visar receptet
    getRecipe(search.value.trim());

    });
