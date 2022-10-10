let html_time_time = /*html*/ `
<div class="drag_one">  
    <div class="drag_grip"><i class="fa-solid fa-grip-vertical"></i></div>
        <div class="drag_container">
            <div class="leadtime">
                <input class="leadtime_current" type="date"/>
                <input class="leadtime_request" type="text" value="14"/>       
                <div class="leadtime_checkbox">
                    <input class="leadtime_nlv" type="checkbox" checked="true">
                    <div class="leadtime_label">làm việc</div>
                </div>
            <div class="leadtime_get btn_leadtime">
                <div class="leadtime_get_btn">get</div>
                <div class="leadtime_result" >10-09-2022</div>
            </div>
        </div>  
        <div class="time_time btn-8 ">
            <div class="time_hour">00</div>:
            <div class="time_minutes">00</div>:
            <div class="time_second">00</div>        
        </div>    
    </div>                                                      
</div>
`;

function drag() {
    let drag = document.querySelector('.drag_one')
    let el_leadtime = document.querySelector('.leadtime')
    
    dragElement(drag);
    drag.onclick = (e) => {
        if (e.altKey) {
            el_leadtime.classList.toggle('show_leadtime')
        }
    }
    
    let el_ar = [
        'leadtime',
        'leadtime_current',
        'leadtime_request',
        'leadtime_nlv',
        'leadtime_label',
        'leadtime_get',
        'leadtime_get_btn',
        'leadtime_result',
    ]

    el_ar.forEach((e) => {
        let element = document.querySelector(`.${e}`)
        element.onclick = (e1) => {e1.stopPropagation()}
        element.onmousedown = (e1) => { e1.stopPropagation() }
        element.onmousemove = (e1) => { e1.stopPropagation() }
        element.onmouseup = (e1) => { e1.stopPropagation() }
        if (element.getAttribute("type") === 'text') {
            element.onclick = (e) => {
                element.select()
            }
        }
    }) 

    let el_leadtime_result = document.querySelector('.leadtime_result');
    let el_leadtime_current = document.querySelector('.leadtime_current');
    let el_leadtime_nlv = document.querySelector('.leadtime_nlv');
    let el_leadtime_request = document.querySelector('.leadtime_request');
    let el_leadtime_get_btn = document.querySelector('.leadtime_get_btn');
    let el_leadtime_get = document.querySelector('.leadtime_get');
   

    el_leadtime_get_btn.onmousedown = () => {el_leadtime_get.style.paddingTop="2px"}
    el_leadtime_get_btn.onmouseup = () => {el_leadtime_get.style.paddingTop="0"}
    el_leadtime_get_btn.onclick = () => {
        let values = el_leadtime_current.value
        let ar_value = values.split('-')
        let str_value = ar_value[1] + '-' + ar_value[2] + '-' + ar_value[0]
        console.log('leadtime =>>>>>>', el_leadtime_request.value, str_value, el_leadtime_nlv.checked);
        let day_result = leadtime(el_leadtime_request.value, str_value, el_leadtime_nlv.checked)
        el_leadtime_result.innerHTML = day_result
        console.log('ngày cuối cung: =>>>>>>', day_result);
    }
}

function leadtime(day_request, current, lam_viec) {
    let day_result

    let day_current = Date.parse(new Date(current)) || Date.parse(new Date());
    // console.log(day_current);

    for (let index = 0; index < day_request;) {
        let day_step = new Date(day_current += 86400000);
        console.log(day_step.toString());
        let year = day_step.getFullYear();
        let month = day_step.getMonth() + 1;
        let day = day_step.getDate();
        let dayofweek = day_step.getDay();

        // const dayname = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];    
        // console.log(dayname[dayofweek] + ' ngày ' + day + '/' + month + '/' + year);
        day_result = day + '-' + month + '-' + year
        // console.log(day_result);

        if (lam_viec) {
            if (dayofweek === 0 || dayofweek === 6) {
                // console.log('thứ 7 và chủ nhật không chạy dayofweek: ', dayofweek);
            } else {
                index++
            }
        } else {
            index++
        }


    }
    return day_result
}

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