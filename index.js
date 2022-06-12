const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
// checkBoxes()

let loads = 0;

let inits = setInterval(check, 300);

function check() {
    loads++

    if (loads==300) {
        clearInterval(inits);
        checkBoxes()
    }
}

function checkBoxes() {
    const triggerHeight = window.innerHeight / 6.46 * 4
    console.log(triggerHeight);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop <= triggerHeight) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}