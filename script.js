
gsap.to("#bg", {
    scrollTrigger: {
        scrub: 1,
        toggleActions: "play reverse play reverse"
    },
    scale: 1.5  
});

gsap.to("#mariposa", {
    scrollTrigger: {
        scrub: 1,
        toggleActions: "play reverse play reverse"
    },
    scale: 0.5  
});

gsap.to("#Butterfly1", {
    scrollTrigger: {
        scrub: 1,
        toggleActions: "play reverse play reverse"
    },
    x: 200 
});

gsap.to("#Butterfly2", {
    scrollTrigger: {
        scrub: 1,
        toggleActions: "play reverse play reverse"
    },
    x: -200 
});

gsap.to("#text", {
    scrollTrigger: {
        scrub: 1,
        toggleActions: "play reverse play reverse"
    },
    y: 500
});
