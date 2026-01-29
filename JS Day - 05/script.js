let sentence = "I am a comma separated sentence";
let words = sentence.split(",");
console.log(words); // Output: [ "I", " am", " a", " comma", " separated", " sentence" ]


let words2 = sentence.split("a");
console.log(words2); // Output: [ "I ", "m ", " ", " comm", " se", "p", "r", "ted sentence" ]

// find out the occurence of "r" in the given text
let str = " tu meri me tera me tera tu meri";
let count = str.split ("r");
console.log (count).length -1;


// Regular function


function sample(callback){
    console.log("sample")
    callback()
}

function live(){
    console.log("live")
}
sample(live)

