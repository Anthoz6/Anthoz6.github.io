const textElement = document.querySelector('.title .text');
const text = 'Tony Academy';
let index = 0;
let isDeleting = false;
let speed = 150;

function type() {
    if (!isDeleting && index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        speed = 150; 
    } else if (isDeleting && index > 0) {
        textElement.textContent = text.substring(0, index - 1);
        index--;
        speed = 50; 
    } else if (!isDeleting && index === text.length) {
        isDeleting = true;
        speed = 1000; 
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        speed = 500; 
    }

    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
