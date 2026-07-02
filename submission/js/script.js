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

//Feature 2: Dynamically adding and removing Elements by the user through an input button of 
//using createElement() and appendChild()), and each item gets its own button to remove it (using remove()).
//Finding the input element in HTML where the user will type the service name
const input= document.getElementById("service-input");
const button = document.getElementById("add-button");
const list= document.getElementById("service-list");
//Adding an event listener to the button so that when it is clicked, the function inside it will be executed
//we have many events including click dblclick, mouseover, keydown ,keyup ,submit etc
button.addEventListener("click",function(){
    //Getting the value of the input element
    const newService = input.value;
    //Preventing the user from adding an empty service to the list
    if(newService === ""){
        alert("Kindly Enter a Service");
        return;
    }
    console.log(newService);
    //Creating a new li element for the new services, it creates <li></li> in the HTML
    const listItem = document.createElement("li");
    //Entering the value of the input element into the li element, it creates <li>newService</li> in the HTML
    listItem.textContent = newService;
    //Creating a new button element for the remove button, it creates <button></button> in the HTML
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    //Here we are putting the remove button inside the li element, not like list.appendChild(listItem); we put it inside the ul element, it creates <li>newService<button>Remove</button></li> in the HTML
    listItem.appendChild(removeButton);
    //Adding an event listener to the remove button so that when it is clicked, the function inside it will be executed
    removeButton.addEventListener("click",function(){
        listItem.remove();
        
    });
    //Appending li element (adding it to the end of the ul element) to the ul element, it creates <ul><li>newService</li></ul> in the HTML
    //we use list instead of listItem because we want to append the li element to the ul element
    list.appendChild(listItem);
    //Empting the textbox after the user has added a service, so that the user can add another service without having to delete the previous one
    input.value = "";
});
