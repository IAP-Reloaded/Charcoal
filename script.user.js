// ==UserScript==
// @name         Charcoal
// @namespace    http://iap-reloaded.github.io/Charcoal
// @version      0.2
// @description  dark themes
// @author       You
// @match        https://www.google.com/
// @grant        none
// ==/UserScript==
    
    if (window.location.hostname  == "www.google.com")  {
    document.getElementById("lga").style.background-color = "black";
        }
