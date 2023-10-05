
document.addEventListener('DOMContentLoaded', function() {
const countdownDate = new Date("December 24, 2023 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = countdownDate - now;

    if (timeDifference < 0) {
        document.querySelector(".countdown").innerHTML = "The countdown has ended!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

updateCountdown();  // Call immediately to set the initial values
setInterval(updateCountdown, 1000);  // Update every second





// Function to toggle the display of the popup
function togglePopup() {
    const popup = document.querySelector('.popup');
    const displayStatus = window.getComputedStyle(popup).display;
    if (displayStatus === 'none') {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
}

// Display the popup when the Christmas tree is clicked
const christmasTree = document.querySelector('.christmas-tree');
christmasTree.addEventListener('click', togglePopup);

// Hide the popup when the close button is clicked
const closeButton = document.querySelector('.close-popup');
closeButton.addEventListener('click', togglePopup);

// Close the popup when clicking outside the message box
const popupBackdrop = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
popupBackdrop.addEventListener('click', function(event) {
    // If the event target is the popup backdrop or a child of the popup content, do nothing
    if (event.target === popupContent || popupContent.contains(event.target)) {
        return;
    }
    // Otherwise, close the popup
    togglePopup();
});

});
