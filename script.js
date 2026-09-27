// View Menu button
var menuButton = document.getElementById("menuButton");
var menuSection = document.getElementById("menu");

menuButton.addEventListener("click", function() {
    menuSection.scrollIntoView({ behavior: "smooth" });
});

// Contact form validation
var form = document.getElementById("contactForm");
var formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        formMessage.innerHTML = "Please fill in all the fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.innerHTML = "Thank you, " + name + "! Your message has been submitted.";
        formMessage.style.color = "green";
        form.reset();
    }
});