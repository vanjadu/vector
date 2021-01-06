const width = window.innerWidth;

if(width > 750){
    const meni = document.querySelector(".header");
    const content = document.querySelector(".text-content");
    const h1 = document.querySelector(".naslov");
    const card1 = document.querySelector(".card-1");
    const card2 = document.querySelector(".card-2");
            
            
    const tl = new TimelineMax();
            
    tl.fromTo(h1,1.6, {x: "120"}, {x: "0"});
    tl.fromTo(meni,1, {opacity: "0"}, {opacity: "1"});
    tl.fromTo(content,1, {opacity: "0"}, {opacity: "1"}, "=-1");
    tl.fromTo(card1,1, {x: "150px"}, {x: "0px"}, "=-1");
    tl.fromTo(card2,1, {y: "200px"}, {y: "0px"});
    tl.fromTo(card2,1, {opacity: "0"}, {opacity: "1"}, "=-1")
}else if(width < 750) {
    const meni = document.querySelector(".header");
    const content = document.querySelector(".text-content");
    const h1 = document.querySelector(".naslov");

    const tl = new TimelineMax();

    tl.fromTo(h1,1.6, {x: "120"}, {x: "0"});
    tl.fromTo(meni,1, {opacity: "0"}, {opacity: "1"});
    tl.fromTo(content,1, {opacity: "0"}, {opacity: "1"}, "=-1");
};