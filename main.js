function toggleDropdown(event) {
    let navbarToggle = document.getElementById("navbar-toggle");
    // https://stackoverflow.com/questions/36770523/onclick-event-doesnt-work-inside-form-tag/36770875
    event.preventDefault();
    if (navbarToggle.className === "topnav") {
        navbarToggle.className += " responsive";
    } else {
        navbarToggle.className = "topnav";
    }
}

