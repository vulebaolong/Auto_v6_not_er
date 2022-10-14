


let html_screen = `
<div id="capture1" class="screenshot_wrapper">
<div class="screenshot_top"></div>
<div class="screenshot_right"></div>
<div class="screenshot_bottom"></div>
<div class="screenshot_left"></div> 
<div class="screenshot_center" class="drsElement drsMoveHandle">
</div>
</div>
`

let html_screen_size = `
<div class="screenshot_size" style="min-width: 70px; display: block;">
    <span>0 X 0</span>
</div>
`
let body = document.querySelector('body')





// document.addEventListener("keydown", function (event) { console.log(event) }, false)
body.onclick = () => {
    console.log('devicePixelRatio: ', window.devicePixelRatio);
    console.log('innerWidth: ', window.innerWidth, 'innerHeight: ', window.innerHeight);
    console.log('innerWidth: ', window.outerWidth, 'innerHeight: ', window.innerHeight);
}
document.addEventListener(
    'keydown',
    function (event) {

        if (event.ctrlKey && event.shiftKey && event.code === 'KeyQ') {
            body.insertAdjacentHTML('afterend', html_screen);
            run()
        }
        if (event.code === 'Escape') {
            let el_screenshot_wrapper = document.querySelector('.screenshot_wrapper')
            el_screenshot_wrapper.remove()
        }
        if (event.code === 'KeyB') {

        }
    },
    false,
);

function run() {
    let el_screenshot_wrapper = document.querySelector('.screenshot_wrapper')
    let el_screenshot_top = document.querySelector('.screenshot_top')
    let el_screenshot_right = document.querySelector('.screenshot_right')
    let el_screenshot_bottom = document.querySelector('.screenshot_bottom')
    let el_screenshot_left = document.querySelector('.screenshot_left')

    let el_screenshot_center = document.querySelector('.screenshot_center')

    addEventListener('resize', () => {
        // console.log(window.innerHeight, window.innerWidth);
        el_screenshot_wrapper.style.width = window.innerWidth + "px"
        el_screenshot_wrapper.style.height = window.innerHeight + "px"
    });

    el_screenshot_wrapper.style.width = window.innerWidth + "px"
    el_screenshot_wrapper.style.height = window.innerHeight + "px"

    el_screenshot_wrapper.addEventListener("mousedown", mousedownDelte = (eDown) => {
        // console.log('mousedown =>>>>>>>', 'eDown.y: ', eDown.y, '         eDown.x: ', eDown.x);
        el_screenshot_center.insertAdjacentHTML('beforeend', html_screen_size)
        let el_screenshot_size = document.querySelector('.screenshot_size')

        el_screenshot_wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0  )'
        el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte = (eMove) => {
            setEmove(eMove, eDown)
            el_screenshot_size.innerHTML = `
                <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
            `
        });
    })
    el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte = () => {
        el_screenshot_wrapper.removeEventListener("mousemove", mousemoveDelte);
        el_screenshot_wrapper.removeEventListener("mouseup", mouseupDelte);
        el_screenshot_wrapper.removeEventListener("mousedown", mousedownDelte);

        let sX_left = parseInt(el_screenshot_center.style.left, 10)
        let sY_top = parseInt(el_screenshot_center.style.top, 10)
        let swidth = parseInt(el_screenshot_center.style.width, 10)
        let sheight = parseInt(el_screenshot_center.style.height, 10)

        sreenshot(sX_left, sY_top, swidth, sheight)
        // console.log(sX_left,sY_top,swidth,sheight);
    })
    function setEmove(eMove, eDown) {
        let eDowny = eDown.y
        let eDownx = eDown.x
        let eMovey = eMove.y
        let eMovex = eMove.x
        let el_screenshot_wrapper_width = parseInt(el_screenshot_wrapper.style.width, 10)
        let el_screenshot_wrapper_height = parseInt(el_screenshot_wrapper.style.height, 10)

        let condition_top_left_X = eMovex - eDownx <= 0
        let condition_top_left_Y = eMovey - eDowny <= 0
        let conditon_XY = condition_top_left_X + condition_top_left_Y
        // console.log(condition_top_left_X, condition_top_left_Y, conditon_XY);

        switch (true) {
            case (conditon_XY === 0) || (conditon_XY === 2):
                // console.log('mouseDown =>>>>>>>', 'eDown.y: ', eDown.y, '         eDown.x: ', eDown.x);
                // console.log('mouseMove =>>>>>>>', 'eMove.y: ', eMove.y, '         eMove.x: ', eMove.x);

                el_screenshot_top.style.width = eMovex + "px"
                el_screenshot_top.style.height = eDowny + "px"

                el_screenshot_right.style.width = el_screenshot_wrapper_width - eMovex + "px"
                el_screenshot_right.style.height = eMovey + "px"

                el_screenshot_bottom.style.width = el_screenshot_wrapper_width - eDownx + "px"
                el_screenshot_bottom.style.height = el_screenshot_wrapper_height - eMovey + "px"

                el_screenshot_left.style.width = eDownx + "px"
                el_screenshot_left.style.height = el_screenshot_wrapper_height - eDowny + "px"

                if (!condition_top_left_X && !condition_top_left_Y) {
                    el_screenshot_center.style.width = el_screenshot_wrapper_width - (eDownx + (el_screenshot_wrapper_width - eMovex)) + "px"
                    el_screenshot_center.style.height = el_screenshot_wrapper_height - (eDowny + (el_screenshot_wrapper_height - eMovey)) + "px"
                    el_screenshot_center.style.top = eDowny + "px"
                    el_screenshot_center.style.left = eDownx + "px"
                }
                if (condition_top_left_X && condition_top_left_Y) {
                    el_screenshot_center.style.width = el_screenshot_wrapper_width - (eMovex + (el_screenshot_wrapper_width - eDownx)) + "px"
                    el_screenshot_center.style.height = el_screenshot_wrapper_height - (eMovey + (el_screenshot_wrapper_height - eDowny)) + "px"
                    el_screenshot_center.style.top = eMovey + "px"
                    el_screenshot_center.style.left = eMovex + "px"
                }
                break;

            case conditon_XY === 1:
                el_screenshot_top.style.width = eMovex + "px"
                el_screenshot_top.style.height = eMovey + "px"

                el_screenshot_right.style.width = el_screenshot_wrapper_width - eMovex + "px"
                el_screenshot_right.style.height = eDowny + "px"

                el_screenshot_bottom.style.width = el_screenshot_wrapper_width - eDownx + "px"
                el_screenshot_bottom.style.height = el_screenshot_wrapper_height - eDowny + "px"

                el_screenshot_left.style.width = eDownx + "px"
                el_screenshot_left.style.height = el_screenshot_wrapper_height - eMovey + "px"
                if (condition_top_left_X && !condition_top_left_Y) {
                    el_screenshot_center.style.width = el_screenshot_wrapper_width - (eMovex + (el_screenshot_wrapper_width - eDownx)) + "px"
                    el_screenshot_center.style.height = el_screenshot_wrapper_height - (eDowny + (el_screenshot_wrapper_height - eMovey)) + "px"
                    el_screenshot_center.style.top = eDowny + "px"
                    el_screenshot_center.style.left = eMovex + "px"
                }
                if (!condition_top_left_X && condition_top_left_Y) {
                    el_screenshot_center.style.width = el_screenshot_wrapper_width - (eDownx + (el_screenshot_wrapper_width - eMovex)) + "px"
                    el_screenshot_center.style.height = el_screenshot_wrapper_height - (eMovey + (el_screenshot_wrapper_height - eDowny)) + "px"
                    el_screenshot_center.style.top = eMovey + "px"
                    el_screenshot_center.style.left = eDownx + "px"
                }
                break;

            default:
                break;
        }
    }
}

function sreenshot(sX_left, sY_top, swidth, sheight) {
    html2canvas(body, { scale: 1 })
        .then((canvas) => {
            let x = document.createElement('canvas').getContext('2d');
            x.canvas.width = swidth;
            x.canvas.height = sheight;
            x.drawImage(canvas, sX_left, sY_top, swidth, sheight, 0, 0, swidth, sheight);
            // document.body.appendChild(x.canvas)
            x.canvas.toBlob(blob => { navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]) }
            )
        });
}








