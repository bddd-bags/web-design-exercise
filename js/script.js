const getNavbarScroll = document.querySelector("#header .navbar-scroll");
const getHeaderContent = document.querySelector("#header .header-content");
const getImage = document.getElementById("header");
const images = [
    "../images/prau-2.jpg",
    "../images/prau-3.jpg",
    "../images/header-background.jpg",
    "../images/prau-7.jpg",
];
let num = 0;

if (getImage) {
    setInterval(() => {
        getImage.style.backgroundImage = `radial-gradient(189.96% 61.18% at 100% 43.82%, rgba(255, 181, 72, 0) 0%, rgba(44, 42, 38, 0.803) 73.22%, #08090A 99.74%), url('${images[num]}')`;
        getImage.style.backgroundRepeat = "no-repeat";
        getImage.style.backgroundSize = "cover";
        getImage.style.backgroundPosition = "center";
        getImage.style.backgroundPositionX = "center";
        getImage.style.backgroundPositionY = "center";
        num++;
        if (num > 3) num = 0;
    }, 5000);

    window.addEventListener("scroll", function() {
        let win = this.window.scrollY;
        if (win <= 90) {
            getNavbarScroll.classList.remove("nav-background");
        } else if (win >= 90) {
            getNavbarScroll.classList.add("nav-background");
        }
    });
}

// handle table and form

const getForm = document.querySelector("form");
const getButton = getForm.querySelector("button");
const getTableHandle = document.getElementsByClassName("table-handle")[0];
let count = 1;

getButton.addEventListener("click", function(e) {
    const getName = document.getElementById("name").value;
    const getAddress = document.getElementById("address").value;
    const getBirthDate = document.getElementById("birth-date").value;
    const getDateClimb = document.getElementById("date-climb").value;
    const getRoute = document.getElementById("route").value;
    getTableHandle.style.display = "block";

    if (Boolean(getName)) {
        const getTbody = document.querySelector("table tbody");
        const createTr = document.createElement("tr");

        const createTd1 = document.createElement("td");
        const createTd2 = document.createElement("td");
        const createTd3 = document.createElement("td");
        const createTd4 = document.createElement("td");
        const createTd5 = document.createElement("td");
        const createTd6 = document.createElement("td");

        createTd1.append(`${count++}.`);
        createTd2.append(getName);
        createTd3.append(getBirthDate);
        createTd4.append(getAddress);
        createTd5.append(getRoute);
        createTd6.append(getDateClimb);
        createTr.append(
            createTd1,
            createTd2,
            createTd3,
            createTd4,
            createTd5,
            createTd6
        );
        getTbody.append(createTr);
    }
    e.preventDefault();
});