const woj = document.querySelectorAll('.land');
const choosenwoj = { index: "", woj: "" };
const slider = document.querySelector(".slider")
const smallImages = document.querySelectorAll(".small-picture")
const mainImage = document.querySelector(".main-picture")
const button = document.querySelector("button")
const slideImg = [
    [
        "./images/img1.jpg",
        "./images/img2.jpg",
        "./images/img3.jpg",]
    ,
    [
        "./images/img4.jpg",
        "./images/img5.jpg",
        "./images/img6.jpg",]
    ,
    [
        "./images/img7.jpg",
        "./images/img8.jpg",
        "./images/img9.jpg",],
    [
        "./images/img10.jpg",
        "./images/img11.jpg",
        "./images/img12.jpg",],
    [
        "./images/img13.jpg",
        "./images/img14.jpg",
        "./images/img15.jpg",],
    [
        "./images/img16.jpg",
        "./images/img17.jpg",
        "./images/img18.jpg",],
    [
        "./images/img19.jpg",
        "./images/img20.jpg",
        "./images/img21.jpg",],
    [
        "./images/img22.jfif",
        "./images/img23.jfif",
        "./images/img24.jpg",],
    [
        "./images/img25.jpg",
        "./images/img26.jpg",
        "./images/img27.jpg",],
    [
        "./images/img28.jpg",
        "./images/img29.jfif",
        "./images/img30.jpg",],
    [
        "./images/img31.jpg",
        "./images/img32.jpg",
        "./images/img33.jpg",],
    [
        "./images/img34.jpg",
        "./images/img35.jfif",
        "./images/img36.jpg",],
    [
        "./images/img37.jpg",
        "./images/img38.webp",
        "./images/img39.jfif",],
    [
        "./images/img40.jpg",
        "./images/img41.jpg",
        "./images/img42.jpg",],
    [
        "./images/img43.jpg",
        "./images/img44.jpg",
        "./images/img45.jpg",],
    [
        "./images/img46.jpg",
        "./images/img47.webp",
        "./images/img48.jpg",],
];
const slideDesc = [
    "Zajmuje obszar 22 892,48 km². 30 czerwca 2019 r. miało 1,7 mln mieszkańców. Siedzibą władz województwa jest Szczecin. Jest najdalej wysuniętym na zachód województwem w Polsce. ",
    "Siedzibą władz województwa jest Gdańsk. Obejmuje obszar o powierzchni 18 310,34 km². Jest najdalej wysuniętym na północ województwem. 30 czerwca 2019 roku województwo miało 2 337 769 mieszkańców",
    "Położone jest w północno-wschodniej części kraju. Siedzibą wojewody i władz samorządu województwa jest Olsztyn. Obejmuje obszar 24 173,47 km² i liczy 1,43 mln mieszkańców (31 grudzień 2018)",
    "Położone jest w północno-wschodniej części kraju, w geograficznym środku Europy. Przez jego środek przepływa Narew. Siedzibą władz województwa jest Białystok. Na dzień 30 czerwca 2016 województwo miało 1,2 mln mieszkańców. Obejmuje obszar 20 187,02 km²",
    "Utworzone w 1999 roku z większości terytoriów dawnych województw: gorzowskiego i zielonogórskiego oraz niewielkiej części leszczyńskiego, a funkcjonujące od 1 stycznia 1999. Siedzibą wojewody jest Gorzów Wielkopolski, zaś władz samorządu województwa – Zielona Góra. ",
    "Województwo wielkopolskie zajmuje drugie miejsce w kraju pod względem powierzchni i trzecie pod względem liczby ludności. Siedzibą wojewody i władz samorządu województwa jest Poznań",
    "Zostało utworzone na mocy ustawy z dnia 24 lipca 1998 w przybliżeniu z dawnych województw: bydgoskiego, toruńskiego i włocławskiego. 30 czerwca 2019 województwo liczyło 2,07 mln mieszkańców",
    "Największe pod względem powierzchni i ludności województwo, znajdujące się w środkowej i wschodniej części Polski. Obejmuje obszar o powierzchni 35 558,47 km². Według danych z 30 czerwca 2018 r. miało 5,39 mln mieszkańców",
    "Według danych GUS w 2018 roku zamieszkiwało je 2,117 mln osób. Siedzibą władz wojewódzkich jest Lublin. Jest najdalej wysuniętym na wschód województwem w Polsce.",
    "Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego. Województwo to jest położone na południowym zachodzie Polski",
    "Obejmując obszar o powierzchni 9412 km² jest obecnie najmniejszym województwem w Polsce. Według danych z 30 czerwca 2019 r. było też województwem z najmniejszą liczbą mieszkańców – 984 300 mieszkańców. Siedzibą władz województwa jest Opole.",
    "Położone w centralnej części kraju. Obejmuje obszar o powierzchni 18 218,95 km². Według danych z 31 grudnia 2018 województwo zamieszkiwało 2,5 mln osób. Ma najmniejszą lesistość w kraju. Siedzibą władz województwa jest Łódź.",
    "Województwo obejmuje obszar 11 710,50 km² i zamieszkuje je 1,24 mln osób. Siedziąbą włądz województwą są Kielce",
    "Województwo o powierzchni 12 333,09 km² zamieszkuje 4,52 mln osób. Jest województwem o najwyższym stopniu urbanizacji i gęstości zaludnienia. Siedzibą władz województwa są Katowice",
    "Województwo zajmuje powierzchnię 15 182 km² i jest jednym z mniejszych w Polsce (12 miejsce w kraju). Województwo ma 3,4 mln mieszkańców (stan na 30 VI 2019)",
    "Województwo zajmuje powierzchnię 17 845,76 km² i zajmuje 11. miejsce w kraju. Pod względem liczby mieszkańców (2,13 mln osób) znajduje się na 9. miejscu w Polsce. Jest najdalej wysuniętym na południe województwem Polski.",
]


function wojSelection() {
    choosenwoj.woj = this.dataset.land;
    switch (choosenwoj.woj) {
        case "Zachodniopomorskie":
            choosenwoj.index = 0;
            break;
        case "Pomorskie":
            choosenwoj.index = 1;
            break;
        case "Warmińsko-Mazurskie":
            choosenwoj.index = 2;
            break;
        case "Podlaskie":
            choosenwoj.index = 3;
            break;
        case "Lubuskie":
            choosenwoj.index = 4;
            break;
        case "Wielkopolskie":
            choosenwoj.index = 5;
            break;
        case "Kujawsko-Pomorskie":
            choosenwoj.index = 6;
            break;
        case "Mazowieckie":
            choosenwoj.index = 7;
            break;
        case "Lubelskie":
            choosenwoj.index = 8;
            break;
        case "Dolnośląskie":
            choosenwoj.index = 9;
            break;
        case "Opolskie":
            choosenwoj.index = 10;
            break;
        case "Łódzkie":
            choosenwoj.index = 11;
            break;
        case "Świętokrzyskie":
            choosenwoj.index = 12;
            break;
        case "Śląskie":
            choosenwoj.index = 13;
            break;
        case "Małopolskie":
            choosenwoj.index = 14;
            break;
        case "Podkarpackie":
            choosenwoj.index = 15;
            break;
    }
    showSlider()
}
function showSlider() {
    slider.style.display = "block";
    document.querySelector("[data-header=choosenwoj]").textContent = choosenwoj.woj;
    document.querySelector("[data-description=choosenwoj-desc]").textContent = slideDesc[choosenwoj.index];
    mainImage.src = slideImg[choosenwoj.index][0]
    for (let i = 0; i < slideImg[0].length; i++) {
        smallImages[i].src = slideImg[choosenwoj.index][i];
    }
    smallImages.forEach(img => img.addEventListener("click", changeImg))
}
function changeImg() {
    mainImage.src = this.src
}
function closeSlider() {
    const div = this.parentElement;
    div.style.display = "none";
    smallImages.forEach(img => img.src = "")
    mainImage.src = ""
}


button.addEventListener("click", closeSlider)
woj.forEach(w => w.addEventListener("click", wojSelection));