let html_screen = `
<div class="screenshot_wrapper none" style="width: 1300px; height: 836px;">
<div class="screenshot_top"></div>
<div class="screenshot_right"></div>
<div class="screenshot_bottom"></div>
<div class="screenshot_left"></div>
<div class="screenshot_center" class="drsElement drsMoveHandle">
</div>
</div>
`
let body = document.querySelector('body')

body.insertAdjacentHTML('afterend',html_screen);
let el_screenshot_wrapper = document.querySelector('.screenshot_wrapper')
let el_screenshot_top = document.querySelector('.screenshot_top')
let screenshot_right = document.querySelector('.screenshot_right')
console.log(el_screenshot_wrapper);


addEventListener('resize', (event) => {
    console.log(window.innerHeight,window.innerWidth);
    el_screenshot_wrapper.style.width = window.innerWidth +"px"
    el_screenshot_wrapper.style.height = window.innerHeight +"px"
});

function run(params) {
    let el_screenshot_wrapper = document.querySelector('.screenshot_wrapper')
    el_screenshot_wrapper.classList.toggle('show')

    
}



console.log(body);
let xcurrent
let ycurrent

let xdown
let ydown


el_screenshot_wrapper.onmousemove = (e1) => {
    xcurrent = e1.x
    ycurrent = e1.y

}
el_screenshot_wrapper.onmousedown = (edown) => {
     xdown = edown.x
     ydown = edown.y
    console.log('Xdown: ', xdown, 'Xdown: ', ydown);

    
}

el_screenshot_wrapper.onmouseup = () => {
    console.log('Xcurrent: ', xcurrent, 'Ycurrent: ', ycurrent);
    el_screenshot_top.style.width = xcurrent +"px"
    el_screenshot_top.style.height = ydown +"px"

    screenshot_right.style.left = xcurrent +"px"
    screenshot_right.style.height = ydown +"px"
}
