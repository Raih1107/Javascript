const revealBTn = document.querySelector("reveal-btn");
const hiddenContent = document.querySelector("hidden-content");
function revealContent(){
    if(hiddenContent.classList.contains("reveal-btn")){
        hiddenSection.classList.remove("reveal-btn");
    } else{
        hiddenContent.classList.add("reveal-btn");
    }
}
revealBTn.addEventListener("click" , revealContent);