import anime from "animejs"

const img = document.createElement('img');
document.body.append(img);

const urlObj = new URL('./media/solar-flare.en.jpg', import.meta.url)
console.log(urlObj)

img.src = urlObj.href;

console.log(import.meta.url)


anime({
    targets: 'img',
    rotate: 360,
    duration: 8000,
    loop: true,

})