function addToCartZoro(){

    alert("You added an item to your cart");

}

function addToCartLuffy(){

    alert("You added an item to your cart");

}

function addToCartSanji(){

    alert("You added an item to your cart");

}

function addToCartGarp(){

    alert("You added an item to your cart");

}

function addToCartBorsalino(){

    alert("You added an item to your cart");

}

function addToCartAokiji(){

    alert("You added an item to your cart");

}

function addToCartMihawk(){

    alert("You added an item to your cart");

}

function addToCartDoflamingo(){

    alert("You added an item to your cart");

}

function addToCartBoa(){

    alert("You added an item to your cart");

}



function signoutAlertAndRedirect() {
    var confirmed = confirm("Are you sure you want to sign out? All your saved data will be lost.");
    if (confirmed) {
        // User confirmed, proceed with sign out
        window.location.href = "login-interface.php";
        sessionStorage.clear();
        localStorage.clear();
    } else {
        // User canceled, do nothing
    }
}