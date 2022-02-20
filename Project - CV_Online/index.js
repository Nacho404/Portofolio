const startWorkJob1 = document.querySelector("#start-work-job1");
const startWorkJob2 = document.querySelector("#start-work-job2");

const endWorkJob1 = document.querySelector("#end-work-job1");
const endWorkJob2 = document.querySelector("#end-work-job2");

console.log([startWorkJob1])

// Calculate -> total work of Job1 (FLANCO)
function tellMeTheMonth (month){
    let monthStart;
    if(month == "January") {
        monthStart = 0;
    } else if(month == "February") {
        monthStart = 1;
    } else if(month == "March") {
        monthStart = 2;
    } else if(month == "April") {
        monthStart = 3;
    } else if(month == "May") {
        monthStart = 4;
    } else if(month == "June") {
        monthStart = 5;
    } else if(month == "July") {
        monthStart = 6;
    } else if(month == "August") {
        monthStart = 7;
    } else if(month == "September") {
        monthStart = 8;
    } else if(month == "October") {
        monthStart = 9;
    } else if(month == "November") {
        monthStart = 10;
    } else if(month == "December") {
        monthStart = 11;
    }

    return monthStart;
}

function totalWorkJob(startWork, endWork) {
    const month = startWork.firstElementChild.innerText;
    let monthStart = tellMeTheMonth(month);
    const yearStart = parseInt(startWork.lastElementChild.innerText);




    if(endWork.innerText == "Present"){
        console.log("yes");
        const monthNow = new Date().getMonth();
        const yearNow = new Date().getFullYear();

        if((yearNow - yearStart) == 0){
            document.querySelector("#total-time-worked-job1").innerText = `${monthNow - monthStart} months`;
            return;

        } else if((yearNow - yearStart) > 0){

            if((yearNow - yearStart == 1) && (monthStart-monthNow > 0)){
                let totalMothsOfWork = (12 - monthStart) + monthNow;
                document.querySelector("#total-time-worked-job1").innerText = `${totalMothsOfWork} months`;
                return;
            }

            if((yearNow - yearStart > 1) && (monthStart-monthNow > 0)){
                let totalMothsOfWork = (12 - monthStart) + monthNow;
                document.querySelector("#total-time-worked-job1").innerText = `${yearNow-yearStart-1} years and ${totalMothsOfWork} months`;
                return;
            }

            if((monthStart-monthNow) == 0){
                document.querySelector("#total-time-worked-job1").innerText = `${yearNow-yearStart} years`;
                return;
            }
            
            if((monthStart-monthNow) < 0){
                document.querySelector("#total-time-worked-job1").innerText = `${yearNow-yearStart} years and ${monthNow-monthStart} months`;
                return;
            }

        }
    } else {
        const yearEnd = parseInt(endWork.lastElementChild.innerText);
        const month = endWork.firstElementChild.innerText;
        let monthEnd = tellMeTheMonth(month);


        if((yearEnd - yearStart) == 0){
            document.querySelector("#total-time-worked-job2").innerText = `${monthEnd - monthStart} months`;
            return;

        } else if((yearEnd - yearStart) > 0){

            if((yearEnd - yearStart == 1) && (monthStart-monthEnd > 0)){
                let totalMothsOfWork = (12 - monthStart) + monthEnd;
                document.querySelector("#total-time-worked-job2").innerText = `${totalMothsOfWork} months`;
                return;
            }

            if((yearEnd - yearStart > 1) && (monthStart-monthEnd > 0)){
                let totalMothsOfWork = (12 - monthStart) + monthEnd;
                document.querySelector("#total-time-worked-job2").innerText = `${yearEnd-yearStart-1} years and ${totalMothsOfWork} months`;
                return;
            }

            if((monthStart-monthEnd) == 0){
                document.querySelector("#total-time-worked-job2").innerText = `${yearEnd-yearStart} years`;
                return;
            }
            
            if((monthStart-monthEnd) < 0){
                document.querySelector("#total-time-worked-job2").innerText = `${yearEnd-yearStart} years and ${monthEnd-monthStart} months`;
                return;
            }
        }
        
    }

}


totalWorkJob(startWorkJob1, endWorkJob1);
totalWorkJob(startWorkJob2, endWorkJob2);

// ...see more & ...see less BTN functionality

const body = document.querySelector("body");
const seeMoreOrLessBtn = document.querySelector("#button-show-more-less");
const paragraph = document.querySelector("#add-class-paragraph");

paragraph.classList.add("over-flow-yes");


function hiddenOrReveal (){
    if(seeMoreOrLessBtn.innerText == "...see more"){
        paragraph.classList.remove("over-flow-yes");
        seeMoreOrLessBtn.innerHTML = "...<u>see less</u>";

    }else if(seeMoreOrLessBtn.innerText == "...see less"){
        paragraph.classList.add("over-flow-yes");
        seeMoreOrLessBtn.innerHTML = "...<u>see more</u>";
        window.scrollTo(0, 1850);
    }
}



// Navigation menu functionality

const goToIntroduction = document.querySelector("#go-to-introduction");

function addClassForAnimation(){
    document.querySelector("#cv-name h1").classList.add("cv-name-h1-animation");
    document.querySelector("#cv-name h3").classList.add("cv-name-h3-animation")
    document.querySelector("#about-me #photo").classList.add("about-me-photo-description-animation");
    document.querySelector("#about-me #description").classList.add("about-me-photo-description-animation");

    let paragraphs = document.querySelectorAll("#contact-details p");

    paragraphs.forEach(element => {
        element.classList.add("contact-details-paragraphs-animation");
    });

}

function removeClassForAnimation() {
    document.querySelector("#cv-name h1").classList.remove("cv-name-h1-animation");
    document.querySelector("#cv-name h3").classList.remove("cv-name-h3-animation")
    document.querySelector("#about-me #photo").classList.remove("about-me-photo-description-animation");
    document.querySelector("#about-me #description").classList.remove("about-me-photo-description-animation");

    let paragraphs = document.querySelectorAll("#contact-details p");

    paragraphs.forEach(element => {
        element.classList.remove("contact-details-paragraphs-animation");
    });
}

addClassForAnimation();
setTimeout(removeClassForAnimation, 3000);

const myMenu = document.querySelector("#navigation-menu ul");

function goToElement (nameOfElement){

   switch(nameOfElement){
       case "Introduction":
        addClassForAnimation();
        setTimeout(removeClassForAnimation, 3000);
        myMenu.classList.remove("expand-menu");
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        break;

        case "Professional experience":
            if(window.innerWidth < 992){
                myMenu.classList.remove("expand-menu");
                window.scrollTo({
                    top: document.querySelector("#professional-experience h2").offsetTop - 130,
                    left: 0,
                    behavior: 'smooth'
                });
            }else {
                window.scrollTo({
                    top: document.querySelector("#professional-experience h2").offsetTop - 40,
                    left: 0,
                    behavior: 'smooth'
                });
            }

        break;

        case "Education":
            if(window.innerWidth < 992){
                myMenu.classList.remove("expand-menu");
                window.scrollTo({
                    top: document.querySelector("#education h2").offsetTop - 130,
                    left: 0,
                    behavior: 'smooth'
                });
            }else {
                window.scrollTo({
                    top: document.querySelector("#education h2").offsetTop - 40,
                    left: 0,
                    behavior: 'smooth'
                });
            }

        break;

        case "Courses & Certificates":
            if(window.innerWidth < 998){
                myMenu.classList.remove("expand-menu");
                window.scrollTo({
                    top: document.querySelector("#courses-certificates h2").offsetTop - 130,
                    left: 0,
                    behavior: 'smooth'
                });
            }else {
                window.scrollTo({
                    top: document.querySelector("#courses-certificates h2").offsetTop - 40,
                    left: 0,
                    behavior: 'smooth'
                });
            }


        break;

        case "My Projects":
            if(window.innerWidth < 998){
                myMenu.classList.remove("expand-menu");
                window.scrollTo({
                    top: document.querySelector(".my-projects-github h2").offsetTop - 130,
                    left: 0,
                    behavior: 'smooth'
                });
            }else {
                window.scrollTo({
                    top: document.querySelector(".my-projects-github h2").offsetTop - 40,
                    left: 0,
                    behavior: 'smooth'
                });
            }


        break;
   }

}





function expandMyMenu () {
    if(myMenu.classList.contains("expand-menu")){
        myMenu.classList.remove("expand-menu");
    }else {
        myMenu.classList.add("expand-menu");
    }
}
