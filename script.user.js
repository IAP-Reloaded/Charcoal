// ==UserScript==
// @name         Charcoal
// @namespace    http://iap-reloaded.github.io/Charcoal
// @version      0.4
// @description  dark themes
// @author       You
// @match        https://www.google.com/
// @grant        none
// ==/UserScript==
    
    if (window.location.hostname  == "www.google.com")  {
    var sheet = document.createElement('style');
    sheet.innerHTML = ".lga {background-color: black;}";
    document.body.appendChild(sheet);
        }
