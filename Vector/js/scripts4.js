const width = window.innerWidth;

if(width > 750){
    const tl = new TimelineMax();

        tl.fromTo('.about-over',2.5, {x: '800px'}, {x: '0px'});

        tl.fromTo('.header',1, {opacity: '0'}, {opacity: '1'}, '=-1');
        tl.fromTo('.header',1, {x: '-100px'}, {x: '0'}, '=-1');
    }else if(width < 580){
        const tl = new TimelineMax();

        tl.fromTo('.about-over',1.5, {x: '300px'}, {x: '0px'});

        tl.fromTo('.header',1, {opacity: '0'}, {opacity: '1'}, '=-1');
        tl.fromTo('.header',1, {x: '-60px'}, {x: '0'}, '=-1');
        tl.fromTo('.over-main a',1, {opacity: '0'}, {opacity: '1'});
};