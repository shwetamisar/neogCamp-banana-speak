//button click
var btnTranslate=document.querySelector("#btn-translate");
//take input from text area
var textareaInput=document.querySelector(".textarea-input");
//show op
var outputArea=document.querySelector(".output-area");

//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(textareaInput)
{
    return serverURL+"?"+"text="+textareaInput;
}
function errorHandler(error)
{
    console.log("error occured",error)
    alert("Sever issue !! Try after sometime")
}
function clickEventHandler()
{
   //outputArea.innerText="gdhf"+textareaInput.value;
   var inputText=textareaInput.value;
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json =>{
       var translatedText=json.contents.translated;
       outputArea.innerText=translatedText;
   })
   .catch(errorHandler)

};
btnTranslate.addEventListener("click",clickEventHandler)