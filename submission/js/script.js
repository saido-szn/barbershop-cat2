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
    },
    {
        name: "Sauna",
        description: "Relaxing sauna session followed by a soothing massage.",
        price: "KSh 3000"
    },
    {
        name: "Manicure",
        description: "Professional nail care and grooming.",
        price: "KSh 2200"
    },
    {
        name: "Pedicure",
        description: "Professional foot care and grooming.",
        price: "KSh 2500"
    },
    {
        name: "Back Massage",
        description: "Relaxing back massage to relieve tension and stress.",
        price: "KSh 3000"
    },
    {
        name: "Full Body Massage",
        description: "A complete massage experience for relaxation and rejuvenation.",
        price: "KSh 10,000"
    },
    {
        name: "Facial Treatment",
        description: "Professional facial treatment for healthy and glowing skin.",
        price: "KSh 5000"
    },
    {
        name: "Hair Coloring and Dyeing",
        description: "Professional hair coloring and dyeing services for a vibrant look.",
        price: "KSh 3000"
    },
    {
        name: "Bald Cut",
        description: "Professional bald grooming and maintenance.",
        price: "KSh 2000"
    },
    {
        name: "Taper Cut",
        description: "A stylish haircut with a gradual fade from short to long.",
        price: "KSh 1200"
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

//Feature 3:Form Handling with validation Feedback using event.preventDefault()
// For us we are going to use Book Appointment form 
//where the user will enter their name, email, phone number and select a service from the dropdown list and then click the submit button to book an appointment
const bookingForm = document.getElementById("booking-form");

//Getting the input fields from the form
const customerName = document.getElementById("customer-name");
const customerEmail = document.getElementById("customer-email");
const customerService = document.getElementById("customer-service");
//Display message getting from HTML to show the user if the form was submitted successfully or not
const formMessage = document.getElementById("form-message");

//Adding an Event Listener to the form so that when it is submitted, the function inside it will be executed
bookingForm.addEventListener("submit", function(event){
    //To prevent the form from submitting and refreshing the page 
    event.preventDefault();
    //Getting the values of the input fields
    const name = customerName.value;
    const email = customerEmail.value;
    const service = customerService.value;

    //Validating the form fields to make sure they are not empty
    // || in JavaScript is the logical OR operator, it returns true if either of the operands is true, and false if both are false
    if(name ===""|| email ==="" || service ===""){
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "red";
    }else{
        //If the form is valid, we can submit the form and show a success message
        formMessage.textContent = "Thank you for booking your service with us!";
        formMessage.style.color = "green";
        //Here we can also clear the form fields after successful submission
        customerName.value = "";
        customerEmail.value = "";
        customerService.value = "";
        //  Here we can also send the form data to the server using AJAX or Fetch API, but for now we will just show a success message
        //We can also clear the form message after a few seconds using setTimeout() function
        //setTimeout(function(){
           // formMessage.textContent = "";
        //}, 3000); we can also use this to clear the form message after 3 seconds
    }
});

