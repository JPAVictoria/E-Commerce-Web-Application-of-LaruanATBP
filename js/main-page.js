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


