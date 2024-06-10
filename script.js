// script.js

const bengaliBadWords = [
    'BC', 'KC', 'RC', 'RM', 'BM', 'R', 'মাদা চোদা', 'বাল চোদা', 'ভোদা চোদা', 
    'গাঁড় চোদা', 'চুদাচুদি চোদা', 'হাঁড়ি চোদা', 'শালা চোদা', 'বাজে চোদা', 
    'বোকাচোদা', 'কুত্তার বাচ্চা চোদা', 'চুতমারানি', 'গাঁড় মারানি', 'চুতিয়া', 
    'ল্যাংটা', 'গাঁড়ু চোদা', 'ছাগল চোদা', 'গুদ', 'ঝামেলা চোদা', 'ধুর চোদা', 
    'বাজে চোদা', 'পাগল চোদা', 'গাঁধা চোদা', 'বেশ্যা চোদা', 'চোদাচুদি', 
    'খানকি চোদা', 'নেংটি চোদা', 'পাঁঠা চোদা', 'খানকি চোদা', 'খচ্চর চোদা', 
    'চুশিল চোদা'
];

let currentIndex = 0;
let isAlertClosed = false;

function showAlert() {
    if (currentIndex < bengaliBadWords.length) {
        var alertBox = document.getElementById('custom-alert');
        var alertMessage = document.getElementById('alert-message');
        alertMessage.textContent = bengaliBadWords[currentIndex];
        alertBox.style.display = 'block';
    } else {
        currentIndex = 0; // Reset the index to loop through the array again
    }
}

function closeAlert() {
    var alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none';
    isAlertClosed = true;
}

function reopenAlert() {
    if (isAlertClosed) {
        currentIndex++; // Move to the next word in the array
        showAlert(); // Show the next alert box
        isAlertClosed = false;
    }
}

setInterval(reopenAlert, 1000); // Check every second if the alert box should be reopened

showAlert();
