let html_drag2 = `
<div class="toolbar_wraper">
        <div class="toolbar_left">
            <div class="toolbar_left_move">

                <i class="fa-solid fa-grip-lines-vertical"></i>
            </div>
            <div class="time_time">
                <div class="time_hour">89</div>:
                <div class="time_minutes">45</div>:
                <div class="time_second">67</div>        
            </div>    
        </div>
        <div class="toolbar_container_content">
            <div class="toolbar_container">
                <div class="toolbar_mid">
                    <div class="split"></div>
                    <div class="toolbar_mid_calendar">
                        <i class="fa-regular fa-calendar-days"></i>
                    </div>
                    <div class="toolbar_mid_camera">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div class="split"></div>
                </div>
                <div class="toolbar_right">
                    <div class="toolbar_right_collapse">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
            </div>
        </div>
        
    </div>`



function run_drag2(params) {
    
let el_toolbar_wraper = document.querySelector('.toolbar_wraper')
let el_toolbar_left = document.querySelector('.toolbar_left')
let el_toolbar_container = document.querySelector('.toolbar_container')
let el_toolbar_container_content = document.querySelector('.toolbar_container_content')
let el_toolbar_right_collapse = document.querySelector('.toolbar_right_collapse')
let el_time_time = document.querySelector('.toolbar_wraper > .toolbar_left > .time_time')
console.log(el_toolbar_container_content);

el_toolbar_right_collapse.onclick = (e) => {
    e.stopPropagation()
    // el_time_time.onmousedown = (e1) => { e1.stopPropagation() }
    // el_time_time.onmousemove = (e2) => { e2.stopPropagation() }
    // el_time_time.onmouseup = (e3) => { e3.stopPropagation() }
    let el_toolbar_container_left = el_toolbar_container_content.offsetLeft
    if (e.altKey) {
        console.log(el_toolbar_container_left);
        if (el_toolbar_container_left === 94) {
            el_toolbar_container_content.style.cssText = `
                left: unset;
                right: -15px;
                `
            el_toolbar_container.style.cssText = `
                
                justify-content: start;
                `;
            el_toolbar_left.style.cssText = `
                justify-content: end;
                `;

            el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
            el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);
            el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
        } else {
            el_toolbar_container_content.style.cssText = `
                left: 94px;
                right: unset;
                `
            el_toolbar_container.style.cssText = `            
                justify-content: end;
                `;

            el_toolbar_left.style.cssText = `
                justify-content: start;
                `;

            el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
            el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);

            el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
        }
    } else {
        console.log(el_toolbar_container_left);
        el_toolbar_right_collapse.classList.toggle('toolbar_right_collapse_toggle')
        el_toolbar_container.classList.toggle('toolbar_container_show')
    }
}

dragElement(el_toolbar_wraper)

let el_ar = [
    'toolbar_container',
    'time_time',

]

el_ar.forEach((e) => {
    let element = document.querySelector(`.${e}`)
    // element.onclick = (e1) => {e1.stopPropagation()}
    element.onmousedown = (e1) => { e1.stopPropagation() }
    element.onmousemove = (e1) => { e1.stopPropagation() }
    element.onmouseup = (e1) => { e1.stopPropagation() }
    if (element.getAttribute("type") === 'text') {
        element.onclick = (e) => {
            element.select()
        }
    }
})
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + 'header')) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
}