const meni = document.querySelector(".header");
const content = document.querySelector(".form-content");
const h1 = document.querySelector(".naslov");
const p = document.querySelector(".opis");


const tl = new TimelineMax();

tl.fromTo(h1,1.6, {y: "-250"}, {y: "0"});
tl.fromTo(p,1, {opacity: "0"}, {opacity: "1"},);
tl.fromTo(meni,1, {opacity: "0"}, {opacity: "1"});
tl.fromTo(content,1, {opacity: "0"}, {opacity: "1"}, "=-1");