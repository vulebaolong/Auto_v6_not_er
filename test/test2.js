


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
let body = document.querySelector('body')





// document.addEventListener("keydown", function (event) { console.log(event) }, false)
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
            sreenshot1()
        }
    },
    false,
);

function run(params) {
    let el_screenshot_wrapper = document.querySelector('.screenshot_wrapper')
    let el_screenshot_top = document.querySelector('.screenshot_top')
    let el_screenshot_right = document.querySelector('.screenshot_right')
    let el_screenshot_bottom = document.querySelector('.screenshot_bottom')
    let el_screenshot_left = document.querySelector('.screenshot_left')

    let el_screenshot_center = document.querySelector('.screenshot_center')

    addEventListener('resize', (event) => {
        // console.log(window.innerHeight, window.innerWidth);
        el_screenshot_wrapper.style.width = window.innerWidth + "px"
        el_screenshot_wrapper.style.height = window.innerHeight + "px"
    });

    el_screenshot_wrapper.style.width = window.innerWidth + "px"
    el_screenshot_wrapper.style.height = window.innerHeight + "px"

    el_screenshot_wrapper.addEventListener("mousedown", mousedownDelte = (eDown) => {
        console.log('mousedown =>>>>>>>', 'eDown.y: ', eDown.y, '         eDown.x: ', eDown.x);
        el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte = (eMove) => {
            setEmove(eMove, eDown)
        });
    })

    el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte = () => {
        el_screenshot_wrapper.removeEventListener("mousemove", mousemoveDelte);
        el_screenshot_wrapper.removeEventListener("mouseup", mouseupDelte);
        el_screenshot_wrapper.removeEventListener("mousedown", mousedownDelte);
        console.log('up=>>>>>>>>>>>>>>>>');
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
        console.log(condition_top_left_X, condition_top_left_Y, conditon_XY);

        switch (true) {
            case (conditon_XY === 0) || (conditon_XY === 2):
                console.log('mouseDown =>>>>>>>', 'eDown.y: ', eDown.y, '         eDown.x: ', eDown.x);
                console.log('mouseMove =>>>>>>>', 'eMove.y: ', eMove.y, '         eMove.x: ', eMove.x);

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

function sreenshot1(params) {
    html2canvas(document.querySelector("body"))
        .then((canvas) => {

            let cropper = document.createElement('canvas').getContext('2d');
            let swidth = 500
            let sheight = 500
            let sY_top = 200
            let sX_left = 220
            cropper.canvas.width = swidth;
            cropper.canvas.height = sheight;

            cropper.drawImage(canvas, sX_left, sY_top, swidth, sheight, 0, 0, swidth, sheight);

            

            document.body.appendChild(cropper.canvas)
            cropper.canvas.toBlob(
                blob => {
                    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
                }
            )


        });
}








