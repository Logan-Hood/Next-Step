  // This is the Index.HTML login button


document.addEventListener("DOMContentLoaded", () => {
  // Select the login button
  const loginButton = document.querySelector(".login-button");

  // Add a click event listener to the button
  loginButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default button behavior (optional)
    
    // Redirect to ready.html
    window.location.href = "ready.html";
  });
});




  // This is the ready.HTML yes and no buttons

document.addEventListener("DOMContentLoaded", () => {
  // Select the "Yes" and "No" buttons
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  // Add a click event listener to the "Yes" button
  yesButton.addEventListener("click", () => {
    // Redirect to location.html
    window.location.href = "location.html";
  });

  // Add a click event listener to the "No" button
  noButton.addEventListener("click", () => {
    // Redirect to index.html
    window.location.href = "index.html";
  });
});




  // This is the location.HTML back and next buttons

document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("back-button");
  
  // Navigate back to ready.html
  backButton.addEventListener("click", () => {
    window.location.href = "ready.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next-button");
  
  // Navigate to gender.html
  nextButton.addEventListener("click", () => {
    window.location.href = "gender.html";
  });
});


// This is the gender.HTML back and next buttons

  document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("back-button2");
    
    // Navigate back to ready.html
    backButton.addEventListener("click", () => {
      window.location.href = "location.html";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next-button2");
    
    // Navigate to gender.html
    nextButton.addEventListener("click", () => {
      window.location.href = "comms.html";
    });
  });



  // This is the comms.HTML back and next buttons

  document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("back-button3");
    
    // Navigate back to ready.html
    backButton.addEventListener("click", () => {
      window.location.href = "gender.html";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next-button3");
    
    // Navigate to gender.html
    nextButton.addEventListener("click", () => {
      window.location.href = "found.html";
    });
  });




  // This is the found.HTML see sponsors

  document.addEventListener("DOMContentLoaded", () => {
    const seeSponsorsButton = document.getElementById("see-sponsors-button");
  
    // Redirect to the sponsors page
    seeSponsorsButton.addEventListener("click", () => {
      window.location.href = "sponsor.html"; // Adjust this to the correct file name if needed
    });
  });






  
  
   // This is the sponsor.HTML
   // button to finish swiping

  document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("done-button");
    
    // Navigate to gender.html
    nextButton.addEventListener("click", () => {
      window.location.href = "done.html";
    });
  });



  // This is the sponsor.HTML 
    // the carousel 

    document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll(".carousel-card");
      const rejectButton = document.getElementById("reject-button");
      const acceptButton = document.getElementById("accept-button");
    
      let currentCard = 0;
    
      const updateCards = () => {
        cards.forEach((card, index) => {
          if (index === currentCard) {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
          } else {
            card.style.transform = "scale(0.9)";
            card.style.opacity = "0";
          }
        });
      };
    
      const swipeCard = (direction) => {
        if (direction === "right" && currentCard < cards.length - 1) {
          currentCard++;
        } else if (direction === "left" && currentCard > 0) {
          currentCard--;
        }
        updateCards();
      };
    
      rejectButton.addEventListener("click", () => swipeCard("left"));
      acceptButton.addEventListener("click", () => swipeCard("right"));
    
      // Initialize cards
      updateCards();
    });


