let planName = document.querySelector(".plan-name");
let price = document.querySelector(".price");
let change = document.querySelector(".change");
let planSection = document.querySelector(".plan-section");
let annual = true;

function changePlan(){
    if(annual == true){
        planName.textContent = "Monthly Plan";
        price.textContent = "$8.99/year";
        planSection.style.backgroundColor = "var(--neutral-pale-blue)";
        planSection.style.transition ="0.3s all ease-in";
        annual = false;
    } else {
        planName.textContent = "Annual Plan";
        price.textContent = "$59.99/year";
        planSection.style.backgroundColor = "var(--neutral-brighter-blue)";
        planSection.style.transition ="0.3s all ease-in";
        annual = true;
    }
}

change.addEventListener("click", changePlan);
order.addEventListener("click", cash);