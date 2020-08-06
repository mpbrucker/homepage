var elem = document.querySelector('.ProjectList__project-title');

console.log(elem);
document.addEventListener('mousemove', function(e) {
    elem.style.left = e.clientX;
    elem.style.top = e.clientY;
    console.log(e.target);
})