document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showZoro");
    if (showZoro === "true") {
        document.getElementById("showZoro").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }

    document.getElementById("removeButton").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showZoro");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showZoro");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showZoro");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showLuffy");
    if (showZoro === "true") {
        document.getElementById("showLuffy").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }

    document.getElementById("removeButtonLuffy").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showLuffy");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showLuffy");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showLuffy");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showSanji");
    if (showZoro === "true") {
        document.getElementById("showSanji").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonSanji").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showSanji");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showSanji");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showSanji");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showGarp");
    if (showZoro === "true") {
        document.getElementById("showGarp").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonGarp").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showGarp");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showGarp");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showGarp");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showBorsalino");
    if (showZoro === "true") {
        document.getElementById("showBorsalino").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonBorsalino").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showBorsalino");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showBorsalino");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showBorsalino");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showAokiji");
    if (showZoro === "true") {
        document.getElementById("showAokiji").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonAokiji").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showAokiji");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showAokiji");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showAokiji");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showMihawk");
    if (showZoro === "true") {
        document.getElementById("showMihawk").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonDoflamingo").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showMihawk");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showMihawk");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showMihawk");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showDoflamingo");
    if (showZoro === "true") {
        document.getElementById("showDoflamingo").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonDoflamingo").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showDoflamingo");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showDoflamingo");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showDoflamingo");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var showZoro = sessionStorage.getItem("showBoa");
    if (showZoro === "true") {
        document.getElementById("showBoa").style.display = "block";
        document.querySelector(".checkout-button").style.display = "block";
    }
    document.getElementById("removeButtonBoa").addEventListener("click", function() {
        // Remove the item from sessionStorage
        sessionStorage.removeItem("showBoa");

        // Optionally, remove the item from localStorage if you are using it
        localStorage.removeItem("showBoa");

        // Remove the product element from the DOM
        var productElement = document.getElementById("showBoa");
        if (productElement) {
            productElement.parentNode.removeChild(productElement);
        }
    });
});

function checkOutButtonClick() {

    // Get all product elements
    var products = document.querySelectorAll('.product');

    // Initialize total price
    var totalPrice = 0;

    // Calculate total price
    products.forEach(function(product) {
        var productName = product.querySelector('.productName').textContent;
        var quantity = parseInt(localStorage.getItem(productName + '_quantity')) || 0;
        var priceProduct = parseFloat(product.querySelector('.priceProduct').textContent.replace('₱', '').replace(',', ''));
        
        // Add the price of the product to the total if it's in the cart
        if (quantity > 0) {
            
            totalPrice += priceProduct;
        }
    });

    // Prompt user for payment
    var payment = prompt("Total amount to pay: ₱" + totalPrice.toFixed(2) + "\nEnter payment amount:");

    // Handle different scenarios
    if (payment === null) {
        alert("Transaction cancelled.");
    } else {
        var amountPaid = parseFloat(payment);
        if (isNaN(amountPaid)) {
            alert("Invalid input. Please enter a valid amount.");
            checkOutButtonClick(); // Prompt again if invalid input
        } else if (amountPaid < totalPrice) {
            alert("Insufficient payment. Please pay the exact amount or more.");
            checkOutButtonClick(); // Prompt again for payment
        } else {
            var change = amountPaid - totalPrice;
            if (change === 0) {
                alert("Thank you for your purchase!");
            } else {
                alert("Thank you for your purchase! Your change is: ₱" + change.toFixed(2));
            }

            // Clear sessionStorage and localStorage
            sessionStorage.clear();
            localStorage.clear();

            // Redirect to main page
            window.location.href = "main-page.php";
        }
    }
}


 
