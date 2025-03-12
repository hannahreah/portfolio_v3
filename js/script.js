//Animation function typing one letter at a time
document.addEventListener("DOMContentLoaded", () => {
  const textPartsContainer = document.getElementById("textParts"); 
  const typingContainer = document.getElementById("typingText");
  const cursor = document.querySelector(".cursor");

  let currentPart = 0;
  let charIndex = 0; 
  let textParts = []; 

  const typingSpeed = 50; 

  if (textPartsContainer && typingContainer && cursor) {
    const initializeTextParts = () => {
      const children = Array.from(textPartsContainer.childNodes);
      textParts = children.map((node) => ({
        text: node.textContent || "",
      }));
    };

    const typeText = () => {
      if (currentPart < textParts.length) {
        const text = textParts[currentPart].text;

        if (charIndex < text.length) {
          typingContainer.innerHTML += text[charIndex];
          charIndex++;
          setTimeout(typeText, typingSpeed); 
        } else {
          currentPart++;
          charIndex = 0;
          setTimeout(typeText, 200); 
        }
      } else {
        cursor.remove(); 
      }
    };

    initializeTextParts();
    typeText();
  }
});

//Contact Form Validation
const form = document.getElementById('contact-form');
const fullname = document.getElementById('fullname');
const message = document.getElementById('message');
const errorMessage = document.getElementById("errorMessage");

form.addEventListener('submit', function(event) {
  const nameValue = fullname.value.trim();
  const messageValue = message.value.trim(); 

  if (nameValue === "" || messageValue === "" ) {
    event.preventDefault(); 
    errorMessage.classList.remove("d-none");
    errorMessage.classList.remove("alert-success");
    errorMessage.classList.add("alert-danger");
    errorMessage.innerHTML = `Name or Message cannot be empty!`;

  } else {
    errorMessage.classList.remove("d-none");
    errorMessage.classList.remove("alert-danger");
    errorMessage.classList.add("alert-success");
    errorMessage.innerHTML = `Thank you for reaching out, ${nameValue}! Your form was submitted.`;
    
  }
  form.reset();
  setTimeout(() => {
    errorMessage.classList.add("d-none");
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const modalTrigger = document.getElementById('modalTrigger');
  if (modalTrigger) {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modalTrigger.addEventListener('click', () => myModal.show());
  }
});

//Scale the image/text on mouseover
const imageContainer = document.querySelector(".image-container");
imageContainer.addEventListener("mouseover", () => {
      imageContainer.style.transform = "scale(1.1)"; 
});
      
imageContainer.addEventListener("mouseout", () => {
      imageContainer.style.transform = "scale(1)"; 
});
