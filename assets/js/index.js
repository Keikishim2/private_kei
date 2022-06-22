
let button = document.getElementById("button"),
    buttonText = document.getElementById("buttontext"),
    c = document.querySelector('#button'),
    root = document.documentElement;

button.onclick = (function () {
    let phrases =
    [
    "Click ME",
    "Happiest Birthday, Noemi!",
    "We love you","You are the best!",
    "Keep up the good work",
    "You are awesome!!!!", "I'm proud of you!",
    "I'll see you soonest",
    "Wish you the best!"
    ],

    img = 
    [
        "https://i.postimg.cc/Vkg9sRPj/IMG-8200.jpg",
        "https://i.postimg.cc/8cdJKp1h/IMG-8042.jpg",
        "https://i.postimg.cc/Rht82Y81/IMG-7971.jpg",
        "https://i.postimg.cc/Pxs12FWn/image.png",
        "https://i.postimg.cc/c4XPKPYH/image.png",
        "https://i.postimg.cc/k4CdNK5X/image.png",
        "https://i.postimg.cc/DzMxnK9V/IMG-8039.jpg",
        "https://i.postimg.cc/GmH8C6GY/IMG-9003.jpg",
        "https://birthdaycake24.com/uploads/worigin/2019/06/11/happy-birthday-cake-with-name-birthdaycake245cff57627fae2_1239920b09a2d01c20f8265f4a0e3efd.gif"
    ];

    let count = 0;
    let imageCount = 0;
    return function () {
        root.style.setProperty('--image', "url(" + img[++count % phrases.length] + ")");
        buttonText.textContent = phrases[++imageCount % phrases.length];
    };
}());