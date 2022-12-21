let html_tool_bar = `
<div class="toolbar_wraper">
    <div class="toolbar_left">
        <div class="toolbar_left_move">
            <i class="fa-solid fa-grip-lines-vertical"></i>
        </div>
        <div class="time_time">
            <div class="time_hour2">89</div>:
            <div class="time_minutes2">45</div>:
            <div class="time_second2">67</div>
        </div>
    </div>
    <div class="toolbar_container_content">
        <div class="toolbar_container">
            <div class="toolbar_mid">
                <div class="split"></div>
                <div class="toolbar_item toolbar_mid_calendar">
                    <i class="fa-regular fa-calendar-days"></i>
                    <div class="toolbar_mid_calendar_container">
                        <div class="toolbar_mid_calendar_content">
                            <input class="toolbar_mid_calendar_date" type="date">
                            <div class="toolbar_mid_calendar_period">
                                <input class="toolbar_mid_calendar_input" type="text" value="14" maxlength="3">
                                <input class="toolbar_mid_calendar_checkbox" type="checkbox" checked="true">
                                <label>Ngày làm việc</label>
                            </div>
                            <div class="toolbar_mid_calendar_button">
                                <i class="fa-solid fa-calendar-plus"></i>
                                <div>Get</div>
                            </div>
                            <input class="toolbar_mid_calendar_result" type="text" value="??-??-???">
                        </div>
                    </div>
                </div>
                <div class="toolbar_item toolbar_mid_change_text">
                    <i class="fa-regular fa-arrows-repeat"></i>
                    <div class="toolbar_mid_change_text_container">
                        <div class="toolbar_mid_change_text_content">
                            <div class="toolbar_mid_change_text_request">
                                <input type="text" value="bạn">
                                <textarea id="request_text" cols="30" rows="10"></textarea>
                            </div>
                            <span class="toolbar_mid_change_text_content_icon" >
                                <i class="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div class="toolbar_mid_change_text_result">
                                <input type="text" value="người mua">
                                <textarea id="result_text" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="toolbar_item toolbar_mid_camera">
                    <i class="fa-solid fa-camera"></i>
                </div>
                <div class="toolbar_item toolbar_mid_setting">
                    <i class="fa-solid fa-gear"></i>
                    <div class="toolbar_mid_setting_container">
                        <div class="toolbar_mid_setting_content">
                            <div class="split_c margin_top10"></div>
                            <div class="toolbar_mid_setting_item1">
                                <p>Auto play audio chat new</p>
                                <label class="toggle_switch chat_audio">
                                    <input class="on_off_audio " type="checkbox" checked="true">
                                    <span></span>
                                </label>
                            </div>
                            <div class="split_c"></div>
                            <div class="toolbar_mid_setting_item2">
                                <p class="toolbar_mid_setting_title">Pause chat time</p>
                                <div class="toolbar_mid_setting_pause1">
                                    <div class="toolbar_mid_setting_time">
                                        <input class="pause_h input_toobar input_pause input_pause11" maxlength="2" value="06">
                                        <span class="pause_text2">Giờ</span>
                                        <input class="pause_m input_toobar input_pause input_pause12" maxlength="2" value="00">
                                        <span class="pause_text2">Phút</span>
                                        <input class="pause_s input_toobar input_pause input_pause13" maxlength="2" value="00">
                                        <span class="pause_text2">Giây</span>
                                    </div>
                                    <label class="toggle_switch">
                                        <input class="chat_pause1" type="checkbox" checked="true">
                                        <span></span>
                                    </label>
                                </div>
                                <div class="toolbar_mid_setting_pause1">
                                    <div class="toolbar_mid_setting_time">
                                        <input class="pause_h input_toobar input_pause input_pause21" maxlength="2" value="00">
                                        <span class="pause_text2">Giờ</span>
                                        <input class="pause_m input_toobar input_pause input_pause22" maxlength="2" value="00">
                                        <span class="pause_text2">Phút</span>
                                        <input class="pause_s input_toobar input_pause input_pause23" maxlength="2" value="00">
                                        <span class="pause_text2">Giây</span>
                                    </div>
                                    <label class="toggle_switch">
                                        <input class="chat_pause2" type="checkbox">
                                        <span></span>
                                    </label>
                                </div>                                
                            </div>
                            <div class="split_c"></div>
                            <div class="toolbar_mid_setting_item3">
                                <button class="btn_toolbar btn_opentab">Open Tab</button>
                            </div>
                            <div class="split_c"></div>
                            <div class="toolbar_mid_setting_item4">
                                <button class="btn_toolbar btn_changeTheme">Change Theme</button>                                
                            </div>
                            <div class="split_c margin_bottom10"></div>
                        </div>
                    </div>
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
</div>
`



function run_toolBar(body) {


    let el_toolbar_wraper = document.querySelector('.toolbar_wraper')
    let el_toolbar_left = document.querySelector('.toolbar_left')
    let el_toolbar_container = document.querySelector('.toolbar_container')
    let el_toolbar_container_content = document.querySelector('.toolbar_container_content')
    let el_toolbar_right_collapse = document.querySelector('.toolbar_right_collapse')
    let el_toolbar_mid = document.querySelector('.toolbar_mid')
    let el_toolbar_mid_calendar = document.querySelector('.toolbar_mid_calendar')
    let el_toolbar_mid_camera = document.querySelector('.toolbar_mid_camera')
    let el_toolbar_mid_calendar_content = document.querySelector('.toolbar_mid_calendar_content')
    let el_toolbar_mid_calendar_input = document.querySelector('.toolbar_mid_calendar_input')
    let el_toolbar_mid_calendar_container = document.querySelector('.toolbar_mid_calendar_container')
    let el_toolbar_mid_change_text_container = document.querySelector('.toolbar_mid_change_text_container')
    let el_toolbar_mid_calendar_button = document.querySelector('.toolbar_mid_calendar_button')
    let el_toolbar_mid_calendar_date = document.querySelector('.toolbar_mid_calendar_date')
    let el_toolbar_mid_calendar_checkbox = document.querySelector('.toolbar_mid_calendar_checkbox')
    let el_toolbar_mid_calendar_result = document.querySelector('.toolbar_mid_calendar_result')
    let el_toolbar_mid_change_text = document.querySelector('.toolbar_mid_change_text')
    let el_toolbar_mid_change_text_content = document.querySelector('.toolbar_mid_change_text_content')

    let el_toolbar_mid_setting_container = document.querySelector('.toolbar_mid_setting_container')
    let el_toolbar_mid_setting = document.querySelector('.toolbar_mid_setting')
    let el_toolbar_mid_setting_content = document.querySelector('.toolbar_mid_setting_content')
    let el_btn_opentab = document.querySelector('.btn_opentab')

    let el_btn_changeTheme = document.querySelector('.btn_changeTheme')

    let el_time_hours2 = document.querySelector('.time_hour2');
    let el_time_minutes2 = document.querySelector('.time_minutes2');
    let el_time_second2 = document.querySelector('.time_second2');

    array_elements = [
        el_toolbar_mid_calendar_content,
        el_toolbar_mid_change_text_content,
        el_toolbar_mid_setting_content
    ]
    handle_click_stopPropagation(array_elements)

    el_toolbar_right_collapse.onclick = (e) => {
        e.stopPropagation()
        let el_toolbar_container_left = el_toolbar_container_content.offsetLeft
        if (e.altKey) {
            console.log(el_toolbar_container_left);
            if (el_toolbar_container_left === 94) {
                el_toolbar_container_content.style.cssText = `left: unset; right: -15px;`
                el_toolbar_container.style.cssText = `justify-content: start;`;
                el_toolbar_left.style.cssText = `justify-content: end;`;
                el_toolbar_mid_calendar_container.style.cssText = `right: 0; left: unset;`
                el_toolbar_mid_change_text_container.style.cssText = `right: 0; left: unset;`
                el_toolbar_mid_setting_container.style.cssText = `right: 0; left: unset;`
                el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
                el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);
                el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
            } else {
                el_toolbar_container_content.style.cssText = `left: 94px; right: unset;`
                el_toolbar_container.style.cssText = `justify-content: end; `;
                el_toolbar_left.style.cssText = `justify-content: start;`;
                el_toolbar_mid_calendar_container.style.cssText = `left: 0; right: unset;`
                el_toolbar_mid_change_text_container.style.cssText = `right: unset; left: 0;`
                el_toolbar_mid_setting_container.style.cssText = `left: 0; right: unset;`
                el_toolbar_container.appendChild(el_toolbar_container.firstElementChild);
                el_toolbar_left.appendChild(el_toolbar_left.firstElementChild);
                el_toolbar_right_collapse.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
            }
        } else {
            console.log(el_toolbar_container_left);
            el_toolbar_right_collapse.classList.toggle('toolbar_right_collapse_toggle')
            el_toolbar_container.classList.toggle('toolbar_container_show')
            let el_active_toolbar = el_toolbar_mid.querySelector(`.active_toolbar`)
            el_active_toolbar && el_active_toolbar.classList.remove('active_toolbar')
        }
    }

    el_toolbar_mid_calendar.onclick = () => {
        toolBarActive(el_toolbar_mid_calendar, el_toolbar_mid, 'active_toolbar')
    }

    el_toolbar_mid_calendar_input.onclick = (e) => { el_toolbar_mid_calendar_input.select() }
    el_toolbar_mid_calendar_button.onclick = (e) => {
        let values = el_toolbar_mid_calendar_date.value
        let ar_value = values.split('-')
        let str_value = ar_value[1] + '-' + ar_value[2] + '-' + ar_value[0]
        let leadtime_request = el_toolbar_mid_calendar_input.value
        let check = el_toolbar_mid_calendar_checkbox.checked
        console.log('leadtime =>>>>>>', leadtime_request, str_value, check);
        let result = leadtime(leadtime_request, str_value, check)
        el_toolbar_mid_calendar_result.value = result
        console.log(result);
    }

    el_toolbar_mid_change_text.onclick = () => {
        toolBarActive(el_toolbar_mid_change_text, el_toolbar_mid, 'active_toolbar')
    }

    el_toolbar_mid_camera.onclick = () => {
        toolBarActive(el_toolbar_mid_camera, el_toolbar_mid, 'active_toolbar')
        body.insertAdjacentHTML('afterend', html_screen);
        run_screen_shot(body)
    }

    el_toolbar_mid_setting.onclick = (e) => {
        toolBarActive(el_toolbar_mid_setting, el_toolbar_mid, 'active_toolbar')
    }

    el_btn_opentab.onclick = () => {
        Open_tab()
    }

    el_btn_changeTheme.onclick = () => {
        body.classList.toggle('theme_1')
    }



    let request = document.querySelector('.toolbar_mid_change_text_request > input')
    let request_text = document.getElementById('request_text')
    let result = document.querySelector('.toolbar_mid_change_text_result > input')
    let result_text = document.getElementById('result_text')
    let toolbar_mid_change_text_content_icon = document.querySelector('.toolbar_mid_change_text_content_icon')

    toolbar_mid_change_text_content_icon.onclick = () => {
        changeText(request.value.trim(), request_text.value, result.value.trim(), result_text)
    }



    function handle_changeText(request, request_text, result, result_text) {
        let text = request_text
        if (request.trim()) {
            const change = RegExp(`${request}`, 'gi')
            text = request_text.replace(change, `${result}`)
        }
        result_text.value = handle_textAction(text)
        //xoay icon  
        toolbar_mid_change_text_content_icon.classList.add('animation')
        setTimeout(() => {
            toolbar_mid_change_text_content_icon.classList.remove('animation')
        }, 400);
    }

    const changeText = debounce((request, request_text, result, result_text) => handle_changeText(request, request_text, result, result_text));
    function debounce(func, delay = 300) {
        let timer;
        return (request, request_text, result, result_text) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(request, request_text, result, result_text);
            }, delay);
        };
    }

    function toolBarActive(element, parent, active_toolbar) {
        let el_active_toolbar = parent.querySelectorAll(`.${active_toolbar}`)
        el_active_toolbar.forEach((e) => {
            if (element.classList !== e.classList) {
                e.classList.remove(active_toolbar)
            }
        })
        element.classList.toggle(active_toolbar)
    }


    function handle_textAction(text) {
        let result = ''
        let text2_ar = text.split(/([.\n])([^. a-z]*)([ "]*)/gi)
        console.log(text2_ar);
        text2_ar.forEach(element => {
            //không phải rỗng và không phải Kí tự không phải chữ (phải là chữ)
            if (element !== '' && /\w/gi.test(element)) {
                let element_trim = element.trim()
                console.log(element_trim);
                let result_textStar_End = handle_textStar_End(element_trim)
                let text_acronyms = handle_text_acronyms(result_textStar_End)
                let result_textDownLine = handle_textDownLine(text_acronyms)
                result += result_textDownLine
            }
        })
        console.log(result);
        return result
    }
    function handle_textStar_End(text) {
        return text.replace(/(^[ "-]+)|([ "-]+$)/gim, '').trim()
    }
    function handle_text_acronyms(text) {
        let result = text.replace(/buyer/gim, 'người mua')
            .replace(/seller/gim, 'người bán')
            .replace(/đvvc|dvvc/gim, 'đơn vị vận chuyển')
            // .replace(/[<>]/gim, '')
            // .replace(/[<>]/gim, '')
            .replace(/<ordersn>/gim, 'XXordersnXX')
            .replace(/<EDT>/gim, 'XXedtXX')
            .replace(/<bạn\/bạn báo người mua>/gim, 'XXbạnXX XbáongườimuaX')
            .replace(/<bạn\/người mua>/gim, 'XXbạnXX XngườimuaX')
            .replace(/(liên hệ theo thông tin)|(theo thông tin)/gim, 'liên hệ theo thông tin XXXXX')

        return result.trim()
    }

    function handle_textDownLine(text) {
        let text_trim = text.trim()
        //ghi hoa chữ đầu
        let upperCase_first = text_trim.charAt(0).toUpperCase() + text_trim.slice(1)
        //xóa dấu chấm và khoảng cách đầu và cuối
        let star_end_dot = upperCase_first.replace(/(^[. ]+)|([. ]+$)/gim, '').trim()
        return star_end_dot + '.\n\n'
    }

    function handle_click_stopPropagation(array_elements) {
        array_elements.forEach(element => {
            element.onclick = (e) => {
                e.stopPropagation()
            }
        });
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
    time_toolBar()
    function time_toolBar(params) {
        setInterval(() => {
            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
            let am = h >= 12 ? "PM" : "AM"

            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;


            el_time_hours2.innerHTML = h;
            el_time_minutes2.innerHTML = m;
            el_time_second2.innerHTML = s;
            // el_ampm.innerHTML = am

            //đúng 6h sáng wrap up
            // if (am === 'AM') {
            //     if (h == 06 && m == 00 && s == 00) {
            //         chat_wrap()
            //     }
            //     // console.log(h+':',m+':',s);
            // }


        }, 1000);
    }
}