//lắng nghe thêm đồng hồ search ldp và lắng nghe chat mới
function Get_el_main_container(params, flag) {
    return new Promise(function (resolve, reject) {
        const observerOptions = {
            childList: true,
        };

        const observer = new MutationObserver(callback);

        const targetNodes = params;
        observer.observe(targetNodes, observerOptions);
        function callback(mutations) {
            if (flag === 1) {
                console.log('mutations: ', mutations);
                console.log('mutations: ', mutations[0].target);
                var el_main_container = mutations[0].target.children[0].children[0].children[1];
                observer.disconnect();
                if (el_main_container.classList[0] === 'main-container') {
                    resolve(el_main_container);
                }
            }
            if (flag === 2) {
                console.log('mutations: ', mutations);
                console.log('mutations: ', mutations[0].target);
                console.log('mutations: ', mutations[0].target.children[0]);
                observer.disconnect();
                resolve([
                    mutations[0].target.children[0].children[0].children[0],
                    mutations[0].target.children[1],
                ]);
            }
            if (flag === 3) {
                console.log('mutations: ', mutations);
                console.log('mutations: ', mutations[0].target);
                if (mutations[0].target.children[0].classList[0] === 'flexible-tabs___kjiTt') {
                    var casee =
                        mutations[0].target.children[0].children[0].children[0].children[0].children[0]
                            .children[1].children[0].innerText;
                    console.log('thêm case: ', casee);
                    console.log(mutations[0].addedNodes[0].children[0].children[0].children[0]);
                    console.log(mutations[0].addedNodes[0].children[0].children[0].children[0].classList);
                    var reslut = Array.from(
                        mutations[0].addedNodes[0].children[0].children[0].children[0].classList,
                    ).some((e) => {
                        return e === 'new-status___3T8Lw';
                    });
                    if (reslut) {
                        // var oldItems = JSON.parse(localStorage.getItem('case_chat_new')) || [];
                        // var newItem = casee
                        // oldItems.push(newItem);
                        // localStorage.setItem('case_chat_new', JSON.stringify(oldItems));
                        // var id_chats = JSON.parse(localStorage.getItem('case_chat_new'))
                        // var el_item_chat_count = document.querySelector('.item_chat_count')
                        // el_item_chat_count.children[0].innerHTML = `Chat: ${id_chats.length}`
                        // console.log('length:', id_chats.length);
                        // console.log('case_chat_new:', id_chats);

                        if (document.querySelector('.on_off_audio').checked) {
                            var audio_request = new Audio(chrome.runtime.getURL('audio/request.mp3'));
                            audio_request.play();
                            console.log('chơi nhạc');
                        }
                        console.log('chat mới');
                    } else {
                        console.log('không phải chat mới');
                    }
                    chat_new_nav(mutations[0].target.children[0].children[0].children[0]);
                }
            }
        }
    });
}
//lắng nghe chat mới
function chat_new_nav(params) {
    return new Promise(function (resolve, reject) {
        const observerOptions = {
            childList: true,
        };

        const observer = new MutationObserver(callback);

        const targetNodes = params;
        observer.observe(targetNodes, observerOptions);
        function callback(mutations) {
            //console.log('mutations: ', mutations);
            //console.log('mutations: ', mutations[0].target);
            if (mutations[0].addedNodes.length > 0) {
                var casee = mutations[0].addedNodes[0].children[0].children[1].children[0].innerText;
                console.log(mutations[0].addedNodes[0]);
                console.log(mutations[0].addedNodes[0].style.background);
                console.log('thêm case: ', casee);
                console.log(mutations[0].addedNodes[0].classList);
                var reslut = Array.from(mutations[0].addedNodes[0].classList).some((e) => {
                    return e === 'new-status___3T8Lw';
                });
                if (reslut) {
                    console.log('chat mới');
                    if (document.querySelector('.on_off_audio').checked) {
                        var audio_request = new Audio(chrome.runtime.getURL('audio/request.mp3'));
                        audio_request.play();
                        console.log('chơi nhạc');
                    }

                    // var oldItems = JSON.parse(localStorage.getItem('case_chat_new')) || [];
                    // var newItem = casee
                    // oldItems.push(newItem);
                    // localStorage.setItem('case_chat_new', JSON.stringify(oldItems));
                    // var id_chats = JSON.parse(localStorage.getItem('case_chat_new'))
                    // var el_item_chat_count = document.querySelector('.item_chat_count')
                    // el_item_chat_count.children[0].innerHTML = `Chat: ${id_chats.length}`
                    // console.log('length:', id_chats.length);
                    // console.log('case_chat_new:', id_chats);
                } else {
                    console.log('không phải chat mới');
                }
            }
        }
    });
}

// Buttun nav top left
function button_long(params) {
    let buttons = document.querySelectorAll('.button_long');
    buttons.forEach((button) => {
        button.onclick = (e) => {
            if (Array.from(button.classList).includes('button_action')) {
                let button_parrent = button.parentElement;
                let i = 0;
                while (i < 10) {
                    button_parrent = button_parrent.parentElement;
                    if (Array.from(button_parrent.classList).includes('lv_first')) {
                        button_parrent.classList.remove('button_show');
                        break;
                    }
                    i++;
                }
            }
            e.stopPropagation();
            coppy_button(e.target);
            let button_menu = e.target.children[0];
            let button_menu_parent = e.target.parentElement;
            let button_menu_show = button_menu_parent.querySelectorAll(
                '.button_long > .button_long_menu.button_show',
            );
            if (button_menu !== undefined) {
                button_menu.classList.toggle('button_show');
            }
            if (button_menu_show !== null) {
                button_menu_show.forEach((element) => {
                    element.classList.remove('button_show');
                });
            }
        };
    });
}
function coppy_button(params) {
    let classlist = Array.from(params.classList);
    switch (classlist[0]) {
        case 'item_spx':
            navigator.clipboard.writeText(
                'Shopee Xpress:' +
                '\n' +
                'Website: https://spx.vn/' +
                '\n' +
                'Liên hệ email: https://help.shopee.vn/portal/webform/4d8d2e07487345cf9a9881fde841079c?' +
                '\n' +
                'Thời gian làm việc: T2 - CN (9h-18h)',
            );
            break;
        case 'item_njv':
            navigator.clipboard.writeText(
                'Ninja Van:' +
                '\n' +
                'Website: https://www.ninjavan.co/vi-vn/tracking' +
                '\n' +
                'Email: support_vn@ninjavan.co' +
                '\n' +
                'Hotline: 1900 886 877' +
                '\n' +
                'Thời gian làm việc: T2 - T7 (8h - 20h), CN (8h - 17h)',
            );
            break;
        case 'item_bet':
            navigator.clipboard.writeText(
                'Best Express:' +
                '\n' +
                'Website: https://best-inc.vn/ ' +
                '\n' +
                'Email: cskh@best-inc.com' +
                '\n' +
                'Hotline: 1900 1031' +
                '\n' +
                'Thời gian làm việc: T2 - T6 (7h30 - 19h), T7 - CN (8h - 17h)',
            );
            break;
        case 'item_jt':
            navigator.clipboard.writeText(
                'J&T Express:' +
                '\n' +
                'Website: https://jtexpress.vn/' +
                '\n' +
                'Email: cskh@jtexpress.vn' +
                '\n' +
                'Hotline: 1900 1088' +
                '\n' +
                'Thời gian làm việc: T2 - CN (8h - 21h)',
            );
            break;
        case 'item_ghtk':
            navigator.clipboard.writeText(
                'Giao Hàng Tiết Kiệm :' +
                '\n' +
                'Website: https://giaohangtietkiem.vn/' +
                '\n' +
                'Email: cskh@ghtk.vn ' +
                '\n' +
                'Chat: sos.ghtk.vn' +
                '\n' +
                'Thời gian làm việc: T2 - T7 (8h - 20h), CN (8h - 18h)',
            );
            break;
        case 'item_ghn':
            navigator.clipboard.writeText(
                'Giao Hàng Nhanh:' +
                '\n' +
                'Website: https://ghn.vn/' +
                '\n' +
                'Email: cskh@ghn.vn' +
                '\n' +
                'Hotline: 1900 636677' +
                '\n' +
                'Thời gian làm việc: T2 - CN (8h30 - 21h)',
            );
            break;
        case 'item_vnp':
            navigator.clipboard.writeText(
                'VNPost Nhanh/VNPost Tiết Kiệm:' +
                '\n' +
                'Website: www.vnpost.vn' +
                '\n' +
                'Email: vanphong@vnpost.vn' +
                '\n' +
                'Hotline: 1900 54 54 81' +
                '\n' +
                'Thời gian làm việc: T2 - CN (7h - 21h)',
            );
            break;
        case 'item_vtp':
            navigator.clipboard.writeText(
                'Viettel Post:' +
                '\n' +
                'Website: https://viettelpost.com.vn/' +
                '\n' +
                'Email: support@viettelpost.com.vn' +
                '\n' +
                'Hotline: 1900 8095 ' +
                '\n' +
                'Thời gian làm việc: T2 - CN (7h - 20h)',
            );
            break;
        case 'item_bedeli':
            navigator.clipboard.writeText(
                'beDelivery:' +
                '\n' +
                'Vui lòng tra cứu thông tin vận chuyển ngay trên Ứng dụng Shopee' +
                '\n' +
                'Website: https://be.com.vn/' +
                '\n' +
                'Hotline: 1900232345' +
                '\n' +
                'Thời gian làm việc: 24/7)',
            );
            break;
        case 'item_brab':
            navigator.clipboard.writeText(
                'GrabExpress:' +
                '\n' +
                'Vui lòng tra cứu thông tin vận chuyển ngay trên Ứng dụng Shopee' +
                '\n' +
                'Website: https://www.grab.com/vn/express/' +
                '\n' +
                'Hotline: 0902349633' +
                '\n' +
                'Thời gian làm việc: T2 - CN (6h - 22h)',
            );
            break;
        case 'item_spxi':
            navigator.clipboard.writeText(
                'Shopee Xpress Instant:' +
                '\n' +
                'Vui lòng tra cứu thông tin vận chuyển ngay trên Ứng dụng Shopee' +
                '\n' +
                'Hotline:19002042' +
                '\n' +
                'Thời gian làm việc: T2 - CN (8h - 20h)',
            );
            break;
        case 'item_cb':
            navigator.clipboard.writeText(
                'Standard Express:' +
                '\n' +
                'Xem chi tiết cách Liên Hệ Đơn Vị Vận Chuyển Standard Express: https://help.shopee.vn/s/article/lien-he-don-vi-van-chuyen-standard-express',
            );
            break;
        case 'item_tks_huy':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán khi nhận hàng, ngay khi đơn hàng cập nhật hủy trên hệ thống và không có khiếu nại gì thêm.\nShopee sẽ làm lệnh hoàn tiền về số dư TK Shopee cho bạn. Thời gian bạn nhận được thanh toán về số dư TK Shopee trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).',
            );
            break;
        case 'item_tks_hoan':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán khi nhận hàng, ngay khi đơn hàng hoàn thành công trên hệ thống và đơn hàng cập nhật huỷ.\nShopee sẽ làm lệnh hoàn tiền về số dư TK Shopee cho bạn. Thời gian bạn nhận được thanh toán về số dư TK Shopee trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).',
            );
            break;
        case 'item_tks_thht':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán khi nhận hàng, ngay khi đơn hàng trả hàng hoàn tiền thành công về người bán và không có khiếu nại gì thêm.\nShopee sẽ làm lệnh hoàn tiền về số dư TK Shopee cho bạn. Thời gian bạn nhận được thanh toán về số dư TK Shopee trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).',
            );
            break;
        case 'item_cc_huy':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng thẻ tín dụng, ngay khi đơn hàng hủy thành công trên hệ thống, Shopee sẽ làm lệnh hoàn tiền về thẻ tín dụng.\nThời gian bạn nhận được thanh toán về thẻ dự kiến trong vòng 7 - 14 ngày làm việc (Không tính thứ 7, chủ nhật và ngày lễ) tiếp theo, tùy theo tốc độ xử lý của Ngân hàng phát hành.',
            );
            break;
        case 'item_cc_hoan':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng thẻ tín dụng, ngay khi đơn hàng hoàn thành công về cho người bán và đơn hàng cập nhật huỷ. Shopee sẽ làm lệnh hoàn tiền về thẻ tín dụng.\nThời gian bạn nhận được thanh toán về thẻ dự kiến trong vòng 7 - 14 ngày làm việc (Không tính thứ 7, chủ nhật và ngày lễ) tiếp theo, tùy theo tốc độ xử lý của Ngân hàng phát hành.',
            );
            break;
        case 'item_cc_thht':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng thẻ tín dụng, ngay khi đơn hàng hoàn thành công về cho người bán và không có khiếu nại gì thêm Shopee sẽ làm lệnh hoàn tiền về thẻ tín dụng.\nThời gian bạn nhận được thanh toán về thẻ dự kiến trong vòng 7 - 14 ngày làm việc (Không tính thứ 7, chủ nhật và ngày lễ) tiếp theo, tùy theo tốc độ xử lý của Ngân hàng phát hành.',
            );
            break;
        case 'item_spay_huy':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng ví Shopee Pay, ngay khi đơn hàng hủy thành công trên hệ thống, Shopee sẽ làm lệnh hoàn tiền về ví Shopee Pay.\nThời gian bạn nhận được thanh toán về ví Shopee Pay trong vòng 24h (Không tính thứ 7, chủ nhật và ngày lễ).',
            );
            break;
        case 'item_spay_hoan':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng ví Shopee Pay, ngay khi đơn hàng hoàn thành công về người bán và cập nhật hủy trên hệ thống, Shopee sẽ làm lệnh hoàn tiền về ví Shopee Pay.\nThời gian bạn nhận được thanh toán về ví Shopee Pay trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).',
            );
            break;
        case 'item_spay_thht':
            navigator.clipboard.writeText(
                'Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng ví Shopee Pay, ngay khi đơn hàng trả hàng hoàn tiền thành công trên hệ thống và không có khiếu nại gì thêm, Shopee sẽ làm lệnh hoàn tiền về ví Shopee Pay.\nThời gian bạn nhận được thanh toán về ví Shopee Pay trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).',
            );
            break;
        case 'item_cnl_hg_3':
            navigator.clipboard.writeText(
                'Đơn hàng hiện tại đang trong quá trình vận chuyển, tuy nhiên Shopee kiểm tra thấy đơn đang ở khu vực XXXXX từ lúc XXXXX và chưa thấy có cập nhật hành trình mới.\nBạn cho phép Shopee kiểm tra với đơn vị vận chuyển để đốc thúc giao hàng cho người mua và thúc đẩy giao hàng đến người mua trong 1-2 ngày làm việc tiếp theo nhé.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã dừng hành trình >=3 ngày. MVĐ: ',
            );
            break;
        case 'item_cnl_hg_qh':
            navigator.clipboard.writeText(
                'Shopee kiểm tra thấy đơn đang ở khu vực quận huyện của người mua.\nShopee sẽ chuyển đơn vị vận chuyển hối giao để bạn sớm nhận được đơn hàng, thời gian xử lý là 1-2 ngày làm việc tiếp theo.\nThông thường đơn hàng đã tới quận/huyện của người mua sẽ được đơn vị vận chuyển sắp xếp giao hàng trong các ca giao sắp tới, bạn có thể chủ động theo dõi hành trình trên web đơn vị vận chuyển nhé.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển, bạn có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã đến quận/huyện của Buyer. MVĐ: ',
            );
            break;
        case 'item_cnl_stt_dg':
            navigator.clipboard.writeText(
                'Shopee kiểm tra thấy đơn vị vận chuyển cập nhật thông tin giao không thành công vào lúc XXXXX\nĐơn hàng này vẫn còn ca giao theo quy trình, bạn thông cảm theo dõi đơn hàng và chờ shipper liên hệ giao trong ca tiếp theo.\nNếu shipper cập nhật sai trạng thái lần nữa, bạn vui lòng liên hệ lại ngay với Shopee để được hỗ trợ',
            );
            break;
        case 'item_cnl_stt_hoan':
            navigator.clipboard.writeText(
                'Shopee sẽ chuyển thông tin kiểm tra với phía đơn vị vận chuyển, thời gian xử lý là 3-5 ngày làm việc.\nĐơn hàng này đã được chuyển hoàn cho người bán nên rất tiếc hàng sẽ không thể tiếp tục giao.\nTrường hợp người mua bị tính tỉ lệ giao hàng không thành công dẫn đến không chọn hình thức thanh toán khi nhận hàng được, người mua vui lòng liên hệ lại Shopee để được hỗ trợ ạ.\n\n\nDear team,\n\nKhách khiếu nại shipper chưa liên hệ giao đủ 3 ca nhưng cập nhật chuyển hoàn\nMVĐ: \nNhờ team hỗ trợ xác minh',
            );
            break;

        default:
            break;
    }
}

// Search lý do phiếu
function selectLDP(Request_L1, Request_L2, Request_L3) {
    let Request_LDP = `${Request_L1} / ${Request_L2} / ${Request_L3}`;
    console.log(Request_LDP);
    let workstation_current = fun_workstation_current();

    let el_ldp = workstation_current.querySelector("input[id='62']");
    el_ldp.focus();
    document.execCommand('insertText', false, Request_L3);

    let el_menu_ldps = document.querySelectorAll('.cs-cascader-menus');
    let el_menu_ldp = selectLDP_find_menu(el_menu_ldps);

    var str = el_menu_ldp.parentElement.innerHTML;
    navigator.clipboard.writeText(str);

    console.log(el_menu_ldp.children[0].children);
    Array.from(el_menu_ldp.children[0].children).forEach((element) => {
        if (Request_LDP === element.children[0].innerText) {
            element.children[0].click();
        }
    });
}
function selectLDP_find_menu(el_menu_ldps) {
    let el_menu_ldp;
    el_menu_ldps.forEach((element) => {
        if (!Array.from(element.parentElement.parentElement.classList).includes('cs-select-dropdown-hidden')) {
            el_menu_ldp = element;
        }
    });
    return el_menu_ldp;
}
function fun_workstation_current() {
    let el_workstation_current;
    Array.from(document.querySelector('#workstation').children[0].children).forEach((e) => {
        console.log(Object.keys(e.attributes).length);
        if (Object.keys(e.attributes).length === 2) {
            console.log(e);

            el_workstation_current = e;
        }
    });
    return el_workstation_current;
}
function edit() {
    let e = fun_workstation_current()
    var id = e.attributes.id.value.substr(44, 11);
    console.log('id: ', id);

    if (id === 'case-detail') {
        console.log('thông tin');
        var status =
            e.children[0].children[0].children[0].children[0].children[0].children[0].children[2]
                .children[0].children[1].children[0].children[0].children[2].children[0];
        console.log(status);
        eventFire(status, 'click');
    }

    if (id === 'agentchat?s') {
        console.log('chat');
        var status =
            e.children[0].children[0].children[0].children[0].children[2].children[0].children[1]
                .children[0].children[2];
        console.log(status);
        eventFire(status, 'click');
    }
}
function TDHTGH() {
    selectLDP('Vận chuyển', 'Đang chờ giao', '[Trước EDT] Theo dõi hành trình giao hàng');
}
function HoiGiao() {
    selectLDP('Vận chuyển', 'Đang chờ giao', '[Sau EDT] Hối giao');
}
function HoiLay() {
    selectLDP('Vận chuyển', 'Lấy hàng/ Gửi hàng', 'Hối lấy hàng');
}
function CCHT() {
    selectLDP('Câu hỏi khác', 'Câu hỏi khác', 'Chat chưa hoàn tất');
}

//click button chọn LDP
function click_btn_ldp() {
    var el_menu_ldp = Array.from(document.querySelector('.menu_ldp').children);
        if (el_menu_ldp !== null) {
            el_menu_ldp.forEach((e) => {
                console.log(e);
                switch (e.classList[0]) {
                    case 'btn_ldp_edit':
                        e.onclick = (event) => {
                            event.stopPropagation();
                            edit(e);
                        };
                        keyalt_click(e, 'Backquote');
                        break;

                    case 'btn_ldp_dtht':
                        e.onclick = (event) => {
                            event.stopPropagation();
                            console.log(123);
                            TDHTGH();
                        };
                        keyalt_click(e, 'Digit1');
                        break;

                    case 'btn_ldp_hg':
                        e.onclick = (event) => {
                            event.stopPropagation();
                            HoiGiao();
                        };
                        keyalt_click(e, 'Digit2');
                        break;

                    case 'btn_ldp_hl':
                        e.onclick = (event) => {
                            event.stopPropagation();
                            HoiLay();
                        };
                        keyalt_click(e, 'Digit3');
                        break;

                    case 'btn_ldp_ccht':
                        e.onclick = (event) => {
                            event.stopPropagation();
                            CCHT();
                        };
                        keyalt_click(e, 'Digit0');
                        break;

                    default:
                        console.log('Item_word: không có ', e);
                        break;
                }
            });
        } else {
            console.log('Không tìm thấy el_LDP_box');
        }
        document.querySelector('.btn_ldp').onclick = (e) => {
            e.stopPropagation();
            // select(el_item_ldp)
        };
}

//đồng hồ bên tay trái
function time_clock(params) {
    setInterval(() => {
        let el_hours = document.querySelector('.clock_hours');
        let el_minutes = document.querySelector('.clock_minutes');
        let el_seconds = document.querySelector('.clock_seconds');
        let el_time_hours = document.querySelector('.time_hour');
        let el_time_minutes = document.querySelector('.time_minutes');
        let el_time_second = document.querySelector('.time_second');

        // let el_ampm = document.querySelector('.ampm')

        let hh = document.querySelector('#hh');
        let mm = document.querySelector('#mm');
        let ss = document.querySelector('#ss');

        let hr_dot = document.querySelector('.hr_dot');
        let min_dot = document.querySelector('.min_dot');
        let sec_dot = document.querySelector('.sec_dot');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        // let am = h >= 12 ? "PM" : "AM"

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        el_hours.innerHTML = h + '<br><span>hh</span>';
        el_minutes.innerHTML = m + '<br><span>mm</span>';
        el_seconds.innerHTML = s + '<br><span>ss</span>';
        el_time_hours.innerHTML = h;
        el_time_minutes.innerHTML = m;
        el_time_second.innerHTML = s;
        // el_ampm.innerHTML = am

        hh.style.strokeDashoffset = 165 - (165 * h) / 24;
        mm.style.strokeDashoffset = 165 - (165 * m) / 60;
        ss.style.strokeDashoffset = 165 - (165 * s) / 60;

        hr_dot.style.transform = `rotate(${h * 15}deg)`;
        min_dot.style.transform = `rotate(${m * 6}deg)`;
        sec_dot.style.transform = `rotate(${s * 6}deg)`;
    }, 1000);
}

// Kết thúc chat nhanh
function add_mes_chat_end() {
    let e = fun_workstation_current()
    console.log(e);
    var id = e.attributes.id.value.substr(44, 11);
    var id_case = e.attributes.id.value.slice(-19);
    console.log(id_case);

    let html_mes_chat = `
                <div class="container_mes_chat" id="${id_case}">
                    <div class="mes_chat">
                        <div class="mes_chat_buttons_menu">
                            <div class="mes_chat_buttons1">
                                <i class="fa-solid fa-paper-plane-top"></i>       
                            </div>
                            <div class="mes_chat_buttons2">
                                <i class="fa-solid fa-paper-plane-top"></i>          
                            </div>
                            <div class="mes_chat_buttons3">
                                <i class="fa-solid fa-paper-plane-top"></i>          
                            </div>
                        </div>            
                        <textarea name="" id="" cols="30" rows="10" class="mes_chat_textarea"></textarea>
                    </div>
                </div>
            `;
    var chat = e.querySelector('.cs_inhouse_chat___1w4Y4');
    var chat_box = chat.querySelector('.chat_box___3_Qef');
    var chat_textarea = chat_box.querySelector('textarea');
    var chat_bottom_menu = chat_box.querySelector('.bottom_menu___1Y9jH');
    var chat_top_menu = chat_box.querySelector('.top_menu___wEUk3');

    if (id === 'agentchat?s') {
        console.log('chat');
        if (chat.children.length === 1) {
            chat.children[0].insertAdjacentHTML('afterend', html_mes_chat);
            var mes_chat = chat.querySelector(`[id="${id_case}"]`);
            console.log(mes_chat);
            var el_mes_chat_textarea = mes_chat.querySelector('.mes_chat_textarea');
            var el_mes_chat_buttons1 = mes_chat.querySelector('.mes_chat_buttons1');
            var el_mes_chat_buttons2 = mes_chat.querySelector('.mes_chat_buttons2');
            var el_mes_chat_buttons3 = mes_chat.querySelector('.mes_chat_buttons3');

            el_mes_chat_buttons1.onclick = (e) => {
                // console.log('chat_box',chat_box)
                // console.log('chat_textarea',chat_textarea)
                // console.log('chat_bottom_menu',chat_bottom_menu)
                // console.log('chat_top_menu',chat_top_menu)

                // console.log('el_mes_chat_textarea',el_mes_chat_textarea)
                // console.log('el_mes_chat_buttons1',el_mes_chat_buttons1)
                // console.log('el_mes_chat_buttons2',el_mes_chat_buttons2)
                e.stopPropagation();
                if (chat_box.children.length === 4) {
                    if (el_mes_chat_textarea.value.trim() !== '') {
                        fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Shopee hi vọng bạn hài lòng với sự hỗ trợ của Shopee và sẽ cố gắng cải thiện chất lượng dịch vụ tốt nhất. Bạn giúp Shopee dành chút thời gian đánh giá hài lòng cho cuộc trò chuyện giúp mình nhé!',
                        )
                            // .then(() => {
                            //     return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Nếu cần hỗ trợ thêm những vấn đề khác bạn hãy chia sẻ nhé, mình luôn sẵn sàng hỗ trợ bạn ạ.')
                            // })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    `${el_mes_chat_textarea.value}`,
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Shopee mong rằng phần giải đáp trên phần nào giải đáp được thắc mắc của bạn.',
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Shopee xin phép đươc kết thúc cuộc trò chuyện này ạ.',
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Chúc bạn thật nhiều sức khỏe và thành công.',
                                );
                            })

                            .then(() => {
                                return fun_mes_chat(
                                    1,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Chúc bạn thật nhiều sức khỏe và thành công.',
                                    chat_top_menu.children[1],
                                );
                            });
                    }
                }
            };

            el_mes_chat_buttons2.onclick = (e) => {
                e.stopPropagation();
                if (chat_box.children.length === 4) {
                    if (el_mes_chat_textarea.value.trim() !== '') {
                        fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Vì chưa nhận được phản hồi từ bạn nên mình xin phép kết thúc cuộc trò chuyện tại đây và sẽ hỗ trợ bạn trong các lần liên hệ tới.',
                        )
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    `${el_mes_chat_textarea.value}`,
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Shopee hi vọng bạn hài lòng với sự hỗ trợ của Shopee và sẽ cố gắng cải thiện chất lượng dịch vụ tốt nhất. Bạn giúp Shopee dành chút thời gian đánh giá hài lòng cho cuộc trò chuyện giúp mình nhé!',
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Shopee mong rằng phần giải đáp trên phần nào giải đáp được thắc mắc của bạn.',
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Shopee xin phép đươc kết thúc cuộc trò chuyện này ạ.',
                                );
                            })
                            .then(() => {
                                return fun_mes_chat(
                                    0,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Chúc bạn thật nhiều sức khỏe và thành công.',
                                );
                            })

                            .then(() => {
                                return fun_mes_chat(
                                    1,
                                    chat_textarea,
                                    chat_bottom_menu.children[1],
                                    'Chúc bạn thật nhiều sức khỏe và thành công.',
                                    chat_top_menu.children[1],
                                );
                            });
                    }
                }
            };

            el_mes_chat_buttons3.onclick = (e) => {
                e.stopPropagation();
                fun_mes_chat(
                    0,
                    chat_textarea,
                    chat_bottom_menu.children[1],
                    'Vì chưa nhận được phản hồi từ bạn nên mình xin phép kết thúc cuộc trò chuyện tại đây và sẽ hỗ trợ bạn trong các lần liên hệ tới. ',
                )
                    .then(() => {
                        return fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            `Để được xử lý nhanh chóng, vui lòng mô tả chi tiết tại shopee.vn/tro-giup, Shopee sẽ phản hồi qua email và thông báo trên ứng dụng cho bạn nhé. Cảm ơn bạn đã liên hệ.`,
                        );
                    })
                    .then(() => {
                        return fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Một vài câu hỏi thường gặp, bạn có thể tham khảo thông tin tại: https://help.shopee.vn/s/',
                        );
                    })
                    .then(() => {
                        return fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Shopee mong rằng phần giải đáp trên phần nào giải đáp được thắc mắc của bạn.',
                        );
                    })
                    .then(() => {
                        return fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Shopee xin phép đươc kết thúc cuộc trò chuyện này ạ.',
                        );
                    })
                    .then(() => {
                        return fun_mes_chat(
                            0,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Chúc bạn thật nhiều sức khỏe và thành công.',
                        );
                    })

                    .then(() => {
                        return fun_mes_chat(
                            1,
                            chat_textarea,
                            chat_bottom_menu.children[1],
                            'Chúc bạn thật nhiều sức khỏe và thành công.',
                            chat_top_menu.children[1],
                        );
                    });
            };
        } else {
            chat.querySelector(`[id="${id_case}"]`).classList.toggle('none');
        }
    }
}
function fun_mes_chat(flag, chat_textarea, chat_bottom_menu, mes_chat, chat_top_menu) {
    return new Promise((resolve, reject) => {
        if (flag === 0) {
            chat_textarea.focus();
            document.execCommand('insertText', false, `${mes_chat}`);
            eventFire(chat_bottom_menu, 'click');

            setTimeout(() => {
                resolve();
            }, 70);
        }

        if (flag === 1) {
            chat_top_menu.click();
        }
    });
}

// Pause chat
function chat_wrap() {
    var inhouse_layout = document.querySelector('#inhouse-layout');
    var inhouse_layout_item = inhouse_layout.children[0].children[0].children[0].children[2].children[3];
    var inhouse_layout_item_Offline = inhouse_layout_item.children[0].children[0].children[0];

    chat_wrap_Reading(inhouse_layout_item_Offline, 1)
        .then((e) => {
            console.log(e);
            return chat_wrap_Reading(e, 2);
        })
        .then((e) => {
            console.log(e);
            e.click();
            inhouse_layout_item_Offline.click();
        });

    console.log(inhouse_layout_item);
}
function chat_wrap_Reading(params, Request) {
    return new Promise(function (resolve, reject) {
        const observerOptions = {
            childList: true,
            attributes: true,
        };

        const observer = new MutationObserver(callback);

        var targetNodes;
        if (Request === 1) {
            targetNodes = params.parentElement.parentElement;
        }
        if (Request === 2) {
            var class_name_online = params.parentElement.parentElement.children[1].children[0].className;
            console.log(class_name_online);
            if (class_name_online !== '') {
                console.log('đang chọn online1');
                targetNodes = params.parentElement.parentElement.children[1];
                console.log(targetNodes);
            } else {
                console.log('không ở online1');
                targetNodes = params.parentElement.parentElement.children[1].children[0].children[0];
                console.log(targetNodes);
            }
        }

        observer.observe(targetNodes, observerOptions);

        function callback(mutations) {
            console.log('mutations: ', mutations);
            console.log('mutations: ', mutations[0].target);
            var classname = mutations[0].target.children[0].className;
            console.log(classname);
            if (Request === 1) {
                var result = mutations[0].target.children[1].children[0].children[1];
                observer.disconnect();
                resolve(result);
            }

            if (Request === 2) {
                if (classname !== '') {
                    var result = mutations[0].target.children[2];
                    console.log('result', result);
                } else {
                    var result = mutations[0].target.children[0].children[0].children[2];
                    console.log('result', result);
                }
                console.log('tìm thấy');

                observer.disconnect();
                resolve(result);
            }
        }

        params ? params.click() : reject('Không tìm thấy params: ' + params);
    });
}

// Đếm số giây chat còn lại
interval_time_chat = [];
function add_count_chat(params) {
    let e = fun_workstation_current()
    console.log(e);
    var id = e.attributes.id.value.substr(44, 11);
    var id_case = e.attributes.id.value.slice(-19);
    console.log(id_case);

    let html_time_count = `
            <div class="time_count" 
                style="
                    position: absolute;
                    bottom: -2;                    
                    left: -51px;
                    font-size: 14px;
                    color: red;
            ">
            20
            </div>
            `;
    var chat = e.querySelector('.cs_inhouse_chat___1w4Y4');
    var chat_box = chat.querySelector('.chat_box___3_Qef');
    var chat_message_box = chat.querySelector('.chat_message_box___2bQjT');
    var chat_textarea = chat_box.querySelector('textarea');
    var chat_bottom_menu = chat_box.querySelector('.bottom_menu___1Y9jH');
    var chat_top_menu = chat_box.querySelector('.top_menu___wEUk3');

    if (id === 'agentchat?s') {
        console.log('chat');
        var chat_last =
            chat_message_box.children[0].children[0].children[0].children[0].children[0].children[0]
                .lastElementChild;
        console.log(chat_last.children[0].children[0].children[0].children.length);

        var previous = chat_last.previousElementSibling;

        console.log(
            chat_message_box.children[0].children[0].children[0].children[0].children[0].children[0],
        );

        console.log(chat_last.children[0].children[0].children[0]);

        var today = new Date();

        var time_chat_last = chat_last.children[0].children[0].children[0].children[1].innerHTML;
        var time_chat_last_day = time_chat_last.slice(0, 2).trim();
        var time_chat_last_mont = time_chat_last.slice(9, 10).trim();
        var time_chat_last_time = time_chat_last.slice(12).trim();
        console.group('thời gian chát cuối');
        console.log(time_chat_last.length);
        console.log(time_chat_last);
        console.log('ngày: ', Number(time_chat_last_day));
        console.log('tháng: ', Number(time_chat_last_mont));
        console.log('năm: ', today.getFullYear());
        console.log('thời gian: ', time_chat_last_time);
        console.groupEnd();

        var number_time_chat = Date.parse(
            `${today
                .getFullYear()
                .toString()} ${time_chat_last_mont} ${time_chat_last_day} ${time_chat_last_time} GMT+0700`,
        );
        console.log(interval_time_chat[0]);
        if (interval_time_chat[0] === undefined) {
            var myInterval = setInterval(() => {
                var today = new Date();
                var number_time_current = Date.parse(today);
                console.group('thời gian miliseconds');
                console.log('number_time_chat: ', number_time_chat);
                console.log('number_time_current: ', number_time_current);
                console.groupEnd();

                var remaining = number_time_current - number_time_chat;
                var days = remaining / 86400000;
                console.group('khoảng thời gian chạy được');
                console.log('miliseconds', remaining);
                console.log('days', Math.floor(days));
                console.log('hours', Math.floor((remaining % 86400000) / 3600000));
                console.log('minutes', Math.floor(((remaining % 86400000) % 3600000) / 60000));
                console.log('seconds', Math.floor((((remaining % 86400000) % 3600000) % 60000) / 1000));
                if (remaining > 120000) {
                    console.log('lớn hơn 2 phút');
                }
                console.groupEnd();
            }, 1000);
            interval_time_chat.push(myInterval);
            console.log(myInterval);
            console.log(interval_time_chat);
        } else {
            interval_time_chat.forEach((e) => {
                clearInterval(e);
                console.log('ClearInterval: ', e);
                interval_time_chat.pop();
            });
        }

        // var Interval_tiemcount_chat = setInterval(() => {
        //     var time_count_s = previous.children[0].children[0].children[0].children[1].querySelector('.time_count').innerHTML
        //     time_count_s - 1

        //     previous.children[0].children[0].children[0].children[1].querySelector('.time_count').innerHTML = time_count_s - 1

        //     console.log(typeof time_count_s, time_count_s);
        //     if (time_count_s === '1') {
        //         clearInterval(Interval_tiemcount_chat);
        //     }
        // }, 1000);
    }
}

// lấy ID web
function Get_Word_ID(params) {
    if (params === undefined) {
        params = document.querySelector('.item_system_id ');
    }
    var objValue = { value: 'Gửi đi tin nhắn để lấy TabID_work' };

    chrome.runtime.sendMessage(objValue, (e) => {
        var tabID = e.Work_ID;
        console.group('Nhận phản hồi từ tin nhắn gửi đi: ', objValue);
        console.log('Kết quả: ', e.result);
        console.log('Work_ID: ', tabID);
        console.groupEnd();
        params.innerHTML = `ID: ${tabID}`;

        localStorage.setItem('tabID', tabID);
        console.log(tabID);
    });

    console.group('Gửi đi');
    console.log('gửi đi: ', objValue);
    console.groupEnd();
}

// Hàm click
function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

//thay đổi màu của border
function changeColor(element) {
    if (!Array.from(element.classList).includes('change_start')) {
        element.classList.add('change_start');
    }
    setTimeout(() => {
        element.classList.remove('change_start');
    }, 2000);
}

//click với phim alt
function keyalt_click(e, key) {
    document.addEventListener(
        'keydown',
        function (event) {
            //xem đang nhấn phím gì
            //console.log(event);
            if (event.altKey && event.code === key) {
                e.click();
            }
        },
        false,
    );
}

// lưu trữ
function Get_Pro(col) {
    return new Promise((resolve, reject) => {
        const sheetID = '1c9NcTNaUfwOHFTw52cjDKLK3JQ0UVxj4hAS9elBPYM4';
        const sheetName = 'PRO';
        const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?&sheet=${sheetName}`;

        var row = [];
        var col_ID;

        fetch(url)
            .then((res) => res.text())
            .then((rep) => {
                const data = JSON.parse(rep.substr(47).slice(0, -2));
                // console.log(data);
                // console.log(data.table.cols);
                // console.log(data.table.rows);

                var obj_cols = data.table.cols;
                for (var prop_cols in obj_cols) {
                    var obj2_cols = obj_cols[prop_cols];
                    // console.group(prop_cols)
                    // console.log('obj_cols.' + prop_cols + '=' + obj_cols[prop_cols])
                    // console.log('ID: ', obj2_cols.id);
                    // console.log('value: ', obj2_cols.label);
                    // console.groupEnd()
                    if (obj2_cols.id === col) {
                        row = [...row, obj2_cols.label.trim()];
                        //console.log(row)

                        col_ID = prop_cols;
                        //console.log('col_ID: ', col_ID);
                    }
                }

                var obj_rows = data.table.rows;
                for (var prop_rows in obj_rows) {
                    if (obj_rows[prop_rows].c[col_ID] !== null) {
                        //console.log('prop_rows.' + prop_rows + '=' + obj_rows[prop_rows])
                        //console.log('nè: ', obj_rows[prop_rows].c[col_ID].v)
                        row = [...row, obj_rows[prop_rows].c[col_ID].v.trim()];
                    }
                }
                resolve(row);
            });
    });
}
var Pro = 0;
function ResetLocal(params) {
    localStorage.setItem('local_pro', 0);
    Pro = parseInt(localStorage.getItem('local_pro'));
    var myDate1 = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
    document.querySelector('.LB_Pro').innerHTML = 'Pro: ' + Pro;
}