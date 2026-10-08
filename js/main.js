"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Victor Heras
 */

const searchform = document.querySelector("#searchform");
const search = document.querySelector("#search");
const error = document.querySelector("#error");

searchform.addEventListener("submit", function(event){
    event.preventDefault();
    error.innerHTML = "";

    if (search.value.trim()===""){
        error.innerHTML = "Du måste fylla i en sökfras";
    }

    });