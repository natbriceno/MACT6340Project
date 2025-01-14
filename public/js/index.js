//pulled from https://developer.mozilla.org/en-US/docs/Glossary/IIFE
//when this js gets accessed, run everything inside 
// standard IIFE
(function () {
    // statements…
  })();
  
  // arrow function variant
  (() => {
    // statements…
  })();
  
  // async IIFE
  (async () => {

    "use strict";
    // statements…

document.querySelector("#testButton").addEventListener('click', handleClick);

function handleClick()
{
    console.log("Thank you for clicking.");
}

})();