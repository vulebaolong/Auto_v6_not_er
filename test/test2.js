let html_screen_size = `
<div class="screenshot_size" style="min-width: 90px; display: block;">
    <span>0 X 0</span>
</div>
`



let html_screen = `
<div id="capture1" class="screenshot_wrapper">
<div class="screenshot_top"></div>
<div class="screenshot_right"></div>
<div class="screenshot_bottom"></div>
<div class="screenshot_left"></div> 
<div class="screenshot_center" class="drsElement drsMoveHandle">
${html_screen_size}
</div>
</div>
`


let html_dragsize = `
        <div class="dragresize dragresize-tl" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-tm" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-tr" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-ml" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-mr" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-bl" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-bm" style="visibility: inherit;"></div>
        <div class="dragresize dragresize-br" style="visibility: inherit;"></div>
`
let body = document.querySelector('body')





// document.addEventListener("keydown", function (event) { console.log(event) }, false)
// body.onclick = () => {
//     console.log('devicePixelRatio: ', window.devicePixelRatio);
//     console.log('innerWidth: ', window.innerWidth, 'innerHeight: ', window.innerHeight);
//     console.log('innerWidth: ', window.outerWidth, 'innerHeight: ', window.innerHeight);
// }
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
    let el_screenshot_size = document.querySelector('.screenshot_size')





    addEventListener('resize', resizeDelte = () => {
        // console.log(window.innerHeight, window.innerWidth);
        let width_view = parseInt(el_screenshot_top.style.width, 10) + parseInt(el_screenshot_right.style.width, 10)
        let width_view_wrapper = parseInt(el_screenshot_wrapper.style.width, 10)
        //set lại width khi width window thay đổi
        el_screenshot_wrapper.style.width = window.innerWidth + "px"
        el_screenshot_wrapper.style.height = window.innerHeight + "px"
        // cộng thêm width còn thiếu
        if (width_view < width_view_wrapper) {
            let width_screenshot_right = parseInt(el_screenshot_right.style.width, 10)
            let width_screenshot_bottom = parseInt(el_screenshot_bottom.style.width, 10)
            let width_add = (width_view_wrapper - width_view)
            el_screenshot_right.style.width = width_screenshot_right + width_add + "px"
            el_screenshot_bottom.style.width = width_screenshot_bottom + width_add + "px"
        }
    });

    el_screenshot_wrapper.style.width = window.innerWidth + "px"
    el_screenshot_wrapper.style.height = window.innerHeight + "px"
    let el_screenshot_wrapper_width = parseInt(el_screenshot_wrapper.style.width, 10)
    let el_screenshot_wrapper_height = parseInt(el_screenshot_wrapper.style.height, 10)

    el_screenshot_wrapper.addEventListener("mousedown", mousedownDelte = (eDown) => {
        // console.log('mousedown =>>>>>>>', 'eDown.y: ', eDown.y, '         eDown.x: ', eDown.x);
        // el_screenshot_center.insertAdjacentHTML('beforeend', html_screen_size)
        el_screenshot_size.classList.add('show')

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
        el_screenshot_center.insertAdjacentHTML('afterbegin', html_dragsize)
        dragsize()

    })
    function setEmove(eMove, eDown) {
        let eDowny = eDown.y
        let eDownx = eDown.x
        let eMovey = eMove.y
        let eMovex = eMove.x


        let condition_top_left_X = eMovex - eDownx <= 0
        let condition_top_left_Y = eMovey - eDowny <= 0
        let conditon_XY = condition_top_left_X + condition_top_left_Y
        console.log(condition_top_left_X, condition_top_left_Y, conditon_XY);

        switch (true) {
            case (conditon_XY === 0) || (conditon_XY === 2):
                // console.log('mouseDown =>>>>>>>', 'eDown.y: ', eDown.y, '         eDown.x: ', eDown.x);
                // console.log('mouseMove =>>>>>>>', 'eMove.y: ', eMove.y, '         eMove.x: ', eMove.x);

                el_screenshot_top.style.width = eMovex + "px"
                el_screenshot_top.style.height = eDowny + "px"

                el_screenshot_right.style.width = el_screenshot_wrapper_width - eMovex + "px"
                el_screenshot_right.style.height = eMovey + "px"
                el_screenshot_right.style.left = eMovex + "px"

                el_screenshot_bottom.style.width = el_screenshot_wrapper_width - eDownx + "px"
                el_screenshot_bottom.style.height = el_screenshot_wrapper_height - eMovey + "px"
                el_screenshot_bottom.style.left = eDownx + "px"

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
                el_screenshot_right.style.left = eMovex + "px"

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

    function dragsize() {
        let el_dragresize_tl = document.querySelector('.dragresize-tl')
        let el_dragresize_tr = document.querySelector('.dragresize-tr')
        let el_dragresize_br = document.querySelector('.dragresize-br')
        let el_dragresize_bl = document.querySelector('.dragresize-bl')

        let el_dragresize_tm = document.querySelector('.dragresize-tm')
        let el_dragresize_mr = document.querySelector('.dragresize-mr')
        let el_dragresize_bm = document.querySelector('.dragresize-bm')
        let el_dragresize_ml = document.querySelector('.dragresize-ml')

        dragresize_tm(el_dragresize_tm)
        dragresize_mr(el_dragresize_mr)
        dragresize_bm(el_dragresize_bm)
        dragresize_ml(el_dragresize_ml)

        dragresize_tl(el_dragresize_tl)
        dragresize_tr(el_dragresize_tr)
        dragresize_br(el_dragresize_br)
        dragresize_bl(el_dragresize_bl)
    }
    function dragresize_tm(el_dragresize_tm) {
        el_dragresize_tm.addEventListener("mousedown", mousedownDelte_tm = (eDown_tm) => {
            eDown_tm.stopPropagation();
            console.log(eDown_tm.target);
            let el_screenshot_right_height = parseInt(el_screenshot_right.style.height, 10)
            let condition_right_height = el_screenshot_right_height - 10

            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_tm) => {
                eMove_tm.stopPropagation();
                let eMove_tmy = eMove_tm.y
                if (eMove_tmy <= condition_right_height) {
                    el_screenshot_center.style.top = eMove_tmy + 'px'
                    el_screenshot_center.style.height = el_screenshot_right_height - eMove_tmy + 'px'

                    el_screenshot_top.style.height = eMove_tmy + 'px'
                    el_screenshot_left.style.height = el_screenshot_wrapper_height - eMove_tmy + 'px'

                    el_screenshot_size.innerHTML = `
                    <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                    `
                }
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_tm = (eUp_tm) => {
            eUp_tm.stopPropagation();
            console.log(123);
            // el_dragresize_tm.removeEventListener('mousedown',mousedownDelte_tm)
            el_dragresize_tm.removeEventListener('mouseup', mousedownDelte_tm)
            el_screenshot_wrapper.removeEventListener('mousemove', mousemoveDelte_tm)
        })

    }
    function dragresize_mr(el_dragresize_mr) {
        el_dragresize_mr.addEventListener("mousedown", mousedownDelte_mr = (eDown_mr) => {
            eDown_mr.stopPropagation();
            console.log(eDown_mr.target);
            let el_screenshot_left_width = parseInt(el_screenshot_left.style.width, 10)

            let condition_right_height = el_screenshot_left_width + 10


            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_mr) => {
                eMove_mr.stopPropagation();
                let eMove_mrx = eMove_mr.x
                if (eMove_mrx >= condition_right_height) {
                    el_screenshot_top.style.width = eMove_mrx + 'px'

                    el_screenshot_right.style.width = el_screenshot_wrapper_width - eMove_mrx + 'px'
                    el_screenshot_right.style.left = eMove_mrx + 'px'

                    el_screenshot_center.style.width = eMove_mrx - el_screenshot_left_width + 'px'

                    el_screenshot_size.innerHTML = `
                    <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                    `
                }


            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_mr = (eUp_mr) => {
            eUp_mr.stopPropagation();
            console.log(123);
            el_dragresize_mr.removeEventListener('mouseup', mousedownDelte_mr)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_mr)
        })

    }
    function dragresize_bm(el_dragresize_bm) {
        el_dragresize_bm.addEventListener("mousedown", mousedownDelte_bm = (eDown_bm) => {
            eDown_bm.stopPropagation();
            console.log(eDown_bm.target);
            let el_screenshot_top_height = parseInt(el_screenshot_top.style.height, 10)
            let condition_top_height = el_screenshot_top_height + 10

            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_bm) => {
                eMove_bm.stopPropagation();
                let eMove_bmy = eMove_bm.y

                if (eMove_bmy >= condition_top_height) {
                    el_screenshot_right.style.height = eMove_bmy + 'px'
                    el_screenshot_bottom.style.height = el_screenshot_wrapper_height - eMove_bmy + 'px'

                    el_screenshot_center.style.height = eMove_bmy - el_screenshot_top_height + 'px'

                    el_screenshot_size.innerHTML = `
                        <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                        `
                }
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_bm = (eUp_bm) => {
            eUp_bm.stopPropagation();
            console.log(123);
            el_dragresize_bm.removeEventListener('mouseup', mousedownDelte_bm)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_bm)
        })

    }
    function dragresize_ml(el_dragresize_ml) {
        el_dragresize_ml.addEventListener("mousedown", mousedownDelte_ml = (eDown_ml) => {
            eDown_ml.stopPropagation();
            console.log(eDown_ml.target);
            let el_screenshot_top_width = parseInt(el_screenshot_top.style.width, 10)
            let condition_top_width = el_screenshot_top_width - 10


            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_ml) => {
                eMove_ml.stopPropagation();
                let eMove_mlx = eMove_ml.x

                if (eMove_mlx <= condition_top_width) {
                    el_screenshot_left.style.width = eMove_mlx + 'px'

                    el_screenshot_bottom.style.width = el_screenshot_wrapper_width - eMove_mlx + 'px'
                    el_screenshot_bottom.style.left = eMove_mlx + 'px'

                    el_screenshot_center.style.width = el_screenshot_top_width - eMove_mlx + 'px'
                    el_screenshot_center.style.left = eMove_mlx + 'px'

                    el_screenshot_size.innerHTML = `
                        <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                        `
                }
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_ml = (eUp_ml) => {
            eUp_ml.stopPropagation();
            el_dragresize_ml.removeEventListener('mouseup', mousedownDelte_ml)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_ml)
        })

    }

    function dragresize_tl(el_dragresize_tl) {
        el_dragresize_tl.addEventListener("mousedown", mousedownDelte_tl = (eDown_tl) => {
            eDown_tl.stopPropagation();
            console.log(eDown_tl.target);
            let el_screenshot_right_height = parseInt(el_screenshot_right.style.height, 10)
            let el_screenshot_top_width = parseInt(el_screenshot_top.style.width, 10)

            let condition_right_height = el_screenshot_right_height - 10
            let condition_top_width = el_screenshot_top_width - 10

            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_tl) => {
                eMove_tl.stopPropagation();
                let eMove_tly = eMove_tl.y
                let eMove_tlx = eMove_tl.x
                if (eMove_tly <= condition_right_height) {
                    el_screenshot_top.style.height = eMove_tly + 'px'

                    el_screenshot_left.style.height = el_screenshot_wrapper_height - eMove_tly + 'px'

                    el_screenshot_center.style.height = el_screenshot_right_height - eMove_tly + 'px'
                    el_screenshot_center.style.top = eMove_tly + 'px'
                }
                if (eMove_tlx <= condition_top_width) {
                    el_screenshot_left.style.width = eMove_tlx + 'px'

                    el_screenshot_bottom.style.width = el_screenshot_wrapper_width - eMove_tlx + 'px'
                    el_screenshot_bottom.style.left = eMove_tlx + 'px'

                    el_screenshot_center.style.width = el_screenshot_top_width - eMove_tlx + 'px'
                    el_screenshot_center.style.left = eMove_tlx + 'px'
                }
                el_screenshot_size.innerHTtl = `
                        <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                        `
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_tl = (eUp_tl) => {
            eUp_tl.stopPropagation();
            el_dragresize_tl.removeEventListener('mouseup', mousedownDelte_tl)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_tl)
        })

    }
    function dragresize_tr(el_dragresize_tr) {
        el_dragresize_tr.addEventListener("mousedown", mousedownDelte_tr = (eDown_tr) => {
            eDown_tr.stopPropagation();
            console.log(eDown_tr.target);
            let el_screenshot_right_height = parseInt(el_screenshot_right.style.height, 10)
            let el_screenshot_left_width = parseInt(el_screenshot_left.style.width, 10)

            let condition_right_height = el_screenshot_right_height - 10
            let condition_left_width = el_screenshot_left_width + 10


            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_tr) => {
                eMove_tr.stopPropagation();
                let eMove_try = eMove_tr.y
                let eMove_trx = eMove_tr.x

                if (eMove_try <= condition_right_height) {
                    el_screenshot_top.style.height = eMove_try + 'px'
                    el_screenshot_left.style.height = el_screenshot_wrapper_height - eMove_try + 'px'

                    el_screenshot_center.style.height = el_screenshot_right_height - eMove_try + 'px'
                    el_screenshot_center.style.top = eMove_try + 'px'
                }
                if (eMove_trx >= condition_left_width) {
                    el_screenshot_top.style.width = eMove_trx + 'px'

                    el_screenshot_right.style.width = el_screenshot_wrapper_width - eMove_trx + 'px'
                    el_screenshot_right.style.left = eMove_trx + 'px'

                    el_screenshot_center.style.width = eMove_trx - el_screenshot_left_width + 'px'
                }
                el_screenshot_size.innerHTML = `
                        <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                        `
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_tr = (eUp_tr) => {
            eUp_tr.stopPropagation();
            el_dragresize_tr.removeEventListener('mouseup', mousedownDelte_tr)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_tr)
        })

    }
    function dragresize_br(el_dragresize_br) {
        el_dragresize_br.addEventListener("mousedown", mousedownDelte_br = (eDown_br) => {
            eDown_br.stopPropagation();
            console.log(eDown_br.target);
            let el_screenshot_top_height = parseInt(el_screenshot_top.style.height, 10)
            let el_screenshot_left_width = parseInt(el_screenshot_left.style.width, 10)

            let condition_top_height = el_screenshot_top_height + 10
            let condition_left_width = el_screenshot_left_width + 10

            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_br) => {
                eMove_br.stopPropagation();
                let eMove_bry = eMove_br.y
                let eMove_brx = eMove_br.x
                if (eMove_bry >= condition_top_height) {
                    el_screenshot_right.style.height = eMove_bry + 'px'
                    el_screenshot_bottom.style.height = el_screenshot_wrapper_height - eMove_bry + 'px'
                    el_screenshot_center.style.height = eMove_bry - el_screenshot_top_height + 'px'
                }
                if (eMove_brx >= condition_left_width) {
                    el_screenshot_top.style.width = eMove_brx + 'px'
                    el_screenshot_right.style.width = el_screenshot_wrapper_width - eMove_brx + 'px'
                    el_screenshot_right.style.left = eMove_brx + 'px'
                    el_screenshot_center.style.width = eMove_brx - el_screenshot_left_width + 'px'
                }
                el_screenshot_size.innerHTML = `
                        <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                        `
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_br = (eUp_br) => {
            eUp_br.stopPropagation();
            el_dragresize_br.removeEventListener('mouseup', mousedownDelte_br)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_br)
        })

    }
    function dragresize_bl(el_dragresize_bl) {
        el_dragresize_bl.addEventListener("mousedown", mousedownDelte_bl = (eDown_bl) => {
            eDown_bl.stopPropagation();
            console.log(eDown_bl.target);
            let el_screenshot_top_height = parseInt(el_screenshot_top.style.height, 10)
            let el_screenshot_top_width = parseInt(el_screenshot_top.style.width, 10)

            let condition_top_height = el_screenshot_top_height + 10
            let condition_left_width = el_screenshot_top_width - 10

            el_screenshot_wrapper.addEventListener("mousemove", mousemoveDelte_tm = (eMove_bl) => {
                eMove_bl.stopPropagation();
                let eMove_bly = eMove_bl.y
                let eMove_blx = eMove_bl.x

                if (eMove_bly >= condition_top_height) {
                    el_screenshot_bottom.style.height = el_screenshot_wrapper_height - eMove_bly + 'px'
                    el_screenshot_right.style.height = eMove_bly + 'px'
                    el_screenshot_center.style.height = eMove_bly - el_screenshot_top_height + 'px'
                }
                if (eMove_blx <= condition_left_width) {
                    el_screenshot_left.style.width = eMove_blx + 'px'
                    el_screenshot_bottom.style.left = eMove_blx + 'px'
                    el_screenshot_bottom.style.width = el_screenshot_wrapper_width - eMove_blx + 'px'
                    el_screenshot_center.style.width = el_screenshot_top_width - eMove_blx + 'px'
                    el_screenshot_center.style.left = eMove_blx + 'px'
                }
                el_screenshot_size.innerHTML = `
                        <span>${el_screenshot_center.style.width} X ${el_screenshot_center.style.height}</span>
                        `
            })
        })

        el_screenshot_wrapper.addEventListener("mouseup", mouseupDelte_bl = (eUp_bl) => {
            eUp_bl.stopPropagation();
            el_dragresize_bl.removeEventListener('mouseup', mousedownDelte_bl)
            el_screenshot_wrapper.removeEventListener('mousemove', mouseupDelte_bl)
        })

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


// let lickme = document.querySelector('.click_me')
// lickme.onclick = (e) => {
//     console.log(e);
//     let path = '../file/faq1.txt'
//     fun_click_chat_end(path)
// }
function fun_click_chat_end(path) {
    //../file/faq1.txt
    fetch(path)
        .then(response => response.text())
        .then(async (texts_data) => {
            let texts = texts_data.split("\r\n")
            console.log(texts)
            let step = texts.length + 1
            let texts_length = texts.length
            for (let index = 0; index < step; index++) {
                if (index < texts_length) {
                    await fun_handle_click_chat_end(texts[index])
                }
                if (index === texts_length) {
                    console.log('click kết thúc');
                    // chat_top_menu.click();
                }
            }
        })
}
function fun_handle_click_chat_end(mess_chat) {
    return new Promise((resolve, reject) => {
        let mess
        if (mess_chat === '*') {
            mess = 'FAQ mess = el_mes_chat_textarea.value'
            // console.log(mess);
        } else {
            mess = mess_chat
        }

        console.log('gửi =>>>>', mess);
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}



let el_toolbar_wraper = document.querySelector('.toolbar_wraper')
let el_toolbar_left = document.querySelector('.toolbar_left')
let el_toolbar_container = document.querySelector('.toolbar_container')
let el_toolbar_right_collapse = document.querySelector('.toolbar_right_collapse')
let el_time_time = document.querySelector('.toolbar_wraper > .toolbar_left > .time_time')
console.log(el_time_time);

el_toolbar_right_collapse.onclick = (e) => {
    e.stopPropagation()
    // el_time_time.onmousedown = (e1) => { e1.stopPropagation() }
    // el_time_time.onmousemove = (e2) => { e2.stopPropagation() }
    // el_time_time.onmouseup = (e3) => { e3.stopPropagation() }
    let el_toolbar_container_left = el_toolbar_container.offsetLeft
    if (e.altKey) {
        console.log(el_toolbar_container_left);
        if (el_toolbar_container_left === 84) {
            
            el_toolbar_container.style.cssText = `
            left: unset;
            right: -15px;
            justify-content: start;
            `;
            el_toolbar_left.style.cssText = `
            justify-content: end;
            `;
            
            el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
            el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);
            el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
        }else {
            el_toolbar_container.style.cssText = `
            left: 84px;
            right: unset;
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
