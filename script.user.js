// ==UserScript==
// @name         Charcoal
// @namespace    http://iap-reloaded.github.io/Charcoal
// @version      0.5
// @description  dark themes
// @author       You
// @match        https://www.google.com/
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_addStyle
// ==/UserScript==
    
    if (window.location.hostname  == "www.google.com")  {
    GM_addStyle('.lga {background-color: black;}');
        }
