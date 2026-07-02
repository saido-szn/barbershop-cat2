//Feature 1:Loop-rendered dynamic content
// Array of barbershop services TO store the services
const services = [
    {
        name: "Classic Cut",
        description: "A timeless haircut that suits all ages and styles.",
        price: "KSh 1500"
    },
    {
        name: "Fade Cut",
        description: "A stylish modern haircut with smooth blending.",
        price: "KSh 1000"
    },
    {
        name: "Beard Trim",
        description: "Professional beard grooming for a clean look.",
        price: "KSh 800"
    },
    {
        name: "Kids Haircut",
        description: "Comfortable haircuts specially designed for children.",
        price: "KSh 500"
    },
    {
        name: "Hair Wash",
        description: "Professional washing and hair care.",
        price: "KSh 450"
    },
    {
        name: "Line Up & Styling",
        description: "Sharp edges and modern styling.",
        price: "KSh 350"
    }
];
//Finding the container element in HTML where the service cards will be appended
const servicesContainer=document.getElementById("services-container");

//Loop for going through each and every service in the services array and creating a card for each service
services.forEach(function(service){
    //Creating a new div element for each service card
    const card = document.createElement("div");
    //Giving it same name as the class name in the CSS file to apply the styles
    card.classList.add("service-card");

    //Adding content to the card using innerHTML
    //Notice we don't use (')apostrophes but (`) backticks for multi-line Strings 
    //<strong> used to indicate that an element is important
    //$ is used to indicate that we are using a variable inside the string but it is not necessary to use it if we are not using a variable inside the string
    /*card.innerHTML =`
    <h3>${service.name}</h3>
    <p>${service.description}$</p>
    <strong>${service.price}</strong>
    `;*/
    //or
    card.innerHTML =
    "<h3>" + service.name + "</h3>" +
    "<p>" + service.description + "</p>" +
    "<strong>" + service.price + "</strong>";
    
    //Appending (meaning  adding an element to the end of another element) the card to the services container
    servicesContainer.appendChild(card);
    
});