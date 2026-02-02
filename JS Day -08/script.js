const profile = document.getElementById("profile");
console.log(profile);

profile.style.backgroundColor = "#f5f5f5"; 
profile.style.padding = "20px";
profile.style.textAlign = "center";



const importantParagraphs = document.getElementsByClassName("important");
console.log(importantParagraphs.length);

for (let i = 0; i < importantParagraphs.length; i++) {
    importantParagraphs[2].style.color = "#ff5733";
    importantParagraphs[i].style.fontWeight = "bold";
    importantParagraphs[i].style.fontSize = "12px";
}