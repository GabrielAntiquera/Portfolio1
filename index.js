const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Robo animation//
let paths = ["imgs/Robo1.png","imgs/Robo1.png","imgs/Robo2.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png"]

let img = document.getElementById("robo");
let i = 0;
let timer = setInterval(function(){
// If we've reached the end of the array...
if(i >= paths.length){
i=0;
}
img.src = paths[i++]; // Sete the path to the current counter and then increase the counter
}, 200);

document.querySelectorAll('.galleryGroup img').forEach(image => {
    image.onclick = () => {
    document.querySelector('.imagePopUp').style.display = 'block';
    document.querySelector('.imagePopUp img').src = image.getAttribute("src");
    }
});

document.querySelector('.imagePopUp span').onclick = () => {
    document.querySelector('.imagePopUp').style.display = 'none';
}