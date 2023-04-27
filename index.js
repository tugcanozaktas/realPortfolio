const educationIcon = document.getElementById("education");
const educationSection = document.getElementById("education-section");

const experienceIcon = document.getElementById("experience")
const experienceSection = document.getElementById("experience-section")

experienceIcon.addEventListener("click", function(){
    showFunc(experienceIcon,experienceSection, educationIcon, educationSection)
} , false)
educationIcon.addEventListener("click", function(){
    showFunc(educationIcon,educationSection, experienceIcon, experienceSection)
} , false);



function showFunc(icon,section, otherIcon, otherSection){
    if(window.getComputedStyle(section).opacity !== "0"){
        icon.style.padding = 0;
        icon.style.backgroundColor = "transparent";
        section.style.opacity = "0";
    } else if(window.getComputedStyle(section).opacity == "0" && window.getComputedStyle(otherSection).opacity == "0"){
        icon.style.padding = "10px";
        icon.style.backgroundColor = "rgb(10, 9, 9)"
        section.style.opacity = "1";
    } else if(window.getComputedStyle(section).opacity == "0" && window.getComputedStyle(otherSection).opacity !== "0"){

        otherIcon.style.padding = 0;
        otherIcon.style.backgroundColor = "transparent";
        otherSection.style.opacity = "0";

        icon.style.padding = "10px";
        icon.style.backgroundColor = "rgb(10, 9, 9)"
        section.style.opacity = "1";

    }
};