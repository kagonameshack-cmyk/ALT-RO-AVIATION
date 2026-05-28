/* STICKY HEADER */

const header =
document.getElementById("header");

window.addEventListener(
"scroll",()=>{

    header.classList.toggle(
    "sticky",
    window.scrollY > 50
    );

});

/* REVEAL */

const reveals =
document.querySelectorAll(
".reveal"
);

window.addEventListener(
"scroll",()=>{

    reveals.forEach(reveal=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop <
        windowHeight - 100){

            reveal.classList.add(
            "active"
            );

        }

    });

});

/* PARALLAX */

const parallax =
document.querySelectorAll(
".parallax"
);

window.addEventListener(
"scroll",()=>{

    let scroll =
    window.pageYOffset;

    parallax.forEach(img=>{

        img.style.transform =
        `translateY(${scroll * 0.12}px)`;

    });

});

const toggle =
document.getElementById(
"menu-toggle"
);

const mobileMenu =
document.getElementById(
"mobile-menu"
);

toggle.addEventListener(
"click",()=>{

    mobileMenu.classList.toggle(
    "active"
    );

});

/* CLOSE MENU WHEN LINK CLICKED */

document.querySelectorAll(
".mobile-menu a"
).forEach(link => {

    link.addEventListener(
    "click",()=>{

        mobileMenu.classList.remove(
        "active"
        );

    });

});
