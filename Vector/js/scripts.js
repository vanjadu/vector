const width = window.innerWidth;

if(width > 750) {
    const banner = document.querySelector("#img");

        const tl = new TimelineMax();

        tl.fromTo(banner,1, {height: "0%"}, {height: "100%", ease: Power2.ease});
        tl.fromTo(banner,1, {width: "90%"}, {width: "100%", ease: Power2.ease});

        //HEADER + START ANIMACIJA

        const head = document.querySelector(".header");
        const start = document.querySelector(".start");

        tl.fromTo(head,1, {opacity: "0"}, {opacity: "1"});
        tl.fromTo(start,1, {opacity: "0"}, {opacity: "1"}, "=-1");
};