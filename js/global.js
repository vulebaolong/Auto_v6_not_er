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
            console.log('ở đây');
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
                        edit();
                    };
                    break;

                case 'btn_ldp_dtht':
                    e.onclick = (event) => {
                        event.stopPropagation();
                        TDHTGH();
                    };
                    break;

                case 'btn_ldp_hg':
                    e.onclick = (event) => {
                        event.stopPropagation();
                        HoiGiao();
                    };
                    break;

                case 'btn_ldp_hl':
                    e.onclick = (event) => {
                        event.stopPropagation();
                        HoiLay();
                    };
                    break;

                case 'btn_ldp_ccht':
                    e.onclick = (event) => {
                        event.stopPropagation();
                        CCHT();
                    };
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
    let el_hours = document.querySelector('.clock_hours');
    let el_minutes = document.querySelector('.clock_minutes');
    let el_seconds = document.querySelector('.clock_seconds');

    let hh = document.querySelector('#hh');
    let mm = document.querySelector('#mm');
    let ss = document.querySelector('#ss');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');
    setInterval(() => {

        // let el_ampm = document.querySelector('.ampm')
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM"

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        el_hours.innerHTML = h + '<br><span>hh</span>';
        el_minutes.innerHTML = m + '<br><span>mm</span>';
        el_seconds.innerHTML = s + '<br><span>ss</span>';

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
                e.stopPropagation();
                const path = chrome.runtime.getURL('click_chat_end/chat_end_1.txt');
                fun_click_chat_end(path, chat_textarea, chat_bottom_menu.children[1], chat_top_menu.children[1], el_mes_chat_textarea)
                // if (chat_box.children.length === 4) {
                //     if (el_mes_chat_textarea.value.trim() !== '') {

                //     }
                // }
            };

            el_mes_chat_buttons2.onclick = (e) => {
                e.stopPropagation();
                const path = chrome.runtime.getURL('click_chat_end/chat_end_2.txt');
                fun_click_chat_end(path, chat_textarea, chat_bottom_menu.children[1], chat_top_menu.children[1], el_mes_chat_textarea)
                // if (chat_box.children.length === 4) {
                //     if (el_mes_chat_textarea.value.trim() !== '') {

                //     }
                // }
            };

            el_mes_chat_buttons3.onclick = (e) => {
                e.stopPropagation();
                const path = chrome.runtime.getURL('click_chat_end/chat_end_3.txt');
                fun_click_chat_end(path, chat_textarea, chat_bottom_menu.children[1], chat_top_menu.children[1], el_mes_chat_textarea)
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
function fun_click_chat_end(path, chat_textarea, chat_bottom_menu, chat_top_menu, el_mes_chat_textarea) {
    fetch(path)
        .then(response => response.text())
        .then(async (texts_data) => {
            let texts = texts_data.split("|")
            console.log(texts)
            let step = texts.length + 1
            let texts_length = texts.length
            for (let index = 0; index < step; index++) {
                if (index < texts_length) {
                    await fun_handle_click_chat_end(texts[index], chat_textarea, chat_bottom_menu, el_mes_chat_textarea)
                }
                if (index === texts_length) {
                    console.log('click kết thúc');
                    chat_top_menu.click();
                }
            }
        })
}
function fun_handle_click_chat_end(mess_chat, chat_textarea, chat_bottom_menu, el_mes_chat_textarea) {
    return new Promise((resolve, reject) => {
        let mess
        if (mess_chat.includes('*')) {
            mess = el_mes_chat_textarea.value
            // mess = `${el_mes_chat_textarea.value}`
            // console.log(mess);
        } else {
            mess = mess_chat
        }
        chat_textarea.focus();
        document.execCommand('insertText', false, `${mess}`);
        eventFire(chat_bottom_menu, 'click');

        console.log('gửi =>>>>', mess);
        setTimeout(() => {
            resolve()
        }, 70);
    })
}

//pause chat
function chat_wrap(params) {

    let el_right_section = document.querySelector('.right-section___2FA6h').children
    let item_section_status = el_right_section[4].children[0].children[0].children[0].children[1].children[0].innerText

    let item_section = el_right_section[4].children[0].children[0].children[0]
    if (item_section_status === "Busy") {
        console.log(item_section_status);
    }
    if (item_section_status === "Online") {

        //click lần 1 vào Online ở ngoài
        chat_wrap_Reading(item_section, 1)
            .then((e) => {
                console.log(e);
                // setTimeout(() => {
                //     e.click() 
                // }, 10000);
                // click lần 2 vào Busy bên tay trái
                return chat_wrap_Reading(e, 2)
            })
            .then((e) => {
                console.log(e);
                //click lần 3 vào wrapup bên tay phải
                e.click()
                //click lần 4 ra ngoài (Online ở ngoài)
                item_section.click()
            })
    }
    if (item_section_status === "Offline") {

        //click lần 1 vào Online ở ngoài
        chat_wrap_Reading(item_section, 1)
            .then((e) => {
                console.log(e);
                // setTimeout(() => {
                //     e.click() 
                // }, 10000);
                // click lần 2 vào Busy bên tay trái
                return chat_wrap_Reading(e, 2, item_section_status)
            })
            .then((e) => {
                console.log(e);
                //click lần 3 vào wrapup bên tay phải
                e.click()
                //click lần 4 ra ngoài (Online ở ngoài)
                item_section.click()
                console.log(el_right_section[3].children[0].children[0].children[0].children[1].children[0].innerText);
            })
    }
}
function chat_wrap_Reading(item_section, step, item_section_status) {
    return new Promise((resolve, reject) => {

        let targetNodes
        switch (step) {
            case 1:
                //bấm lần 1
                targetNodes = item_section.parentElement.parentElement
                break;
            case 2:
                //bấm lần 2
                switch (item_section_status) {
                    case 'Offline':
                        targetNodes = item_section.parentElement.parentElement.children[1].children[0].children[0]
                        break;

                    default:
                        targetNodes = item_section.parentElement.parentElement.children[1]
                        break;
                }

                break;
        }
        console.log(targetNodes, 'step: ', step);
        const observerOptions = {
            childList: true,
            attributes: true,
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNodes, observerOptions);
        function callback(mutations) {
            console.log('mutations: ', mutations, 'step: ', step);
            console.log('mutations: ', mutations[0].target, 'step: ', step);
            observer.disconnect();


            switch (step) {
                case 1:
                    //bấm lần 1
                    resolve(mutations[0].target.children[1].children[0].children[1]);
                    break;
                case 2:
                    //bấm lần 2
                    switch (item_section_status) {
                        case 'Offline':
                            resolve(mutations[0].target.children[2]);
                            break;

                        default:
                            resolve(mutations[0].target.children[0].children[0].children[2]);

                            break;
                    }
                    break;
            }

        }


        item_section.click()

    })
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
    let objValue = {
        flag: 'get_id',
        value: 'Gửi đi tin nhắn để lấy TabID_work'
    };

    chrome.runtime.sendMessage(objValue, (e) => {
        let tabID = e.Work_ID;
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

function Open_tab(params) {
    let objValue = {
        flag: 'open_tab',
        value: 'Gửi đi tin nhắn để open tab'
    };

    chrome.runtime.sendMessage(objValue, (e) => {

        console.group('Nhận phản hồi từ tin nhắn gửi đi: ', objValue);
        console.log('Kết quả: ', e.result);
        console.groupEnd();
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

//ẩn tất cả
function hideAll(element_name_ar) {
    element_name_ar.forEach(element_name => {
        switch (element_name) {
            case 'Auto_saleforce_Order_Info':
                elements_toggle(document.querySelectorAll(`.${element_name}`))
                break;

            case 'container_mes_chat':
                elements_toggle(document.querySelectorAll(`.${element_name}`))
                break;

            default:
                let element = document.querySelector(`.${element_name}`);
                element && element.classList.toggle('none');
                break;
        }
    });

    function elements_toggle(elements) {
        elements.forEach(element => {
            element && element.classList.toggle('none');
        });
    }
}

//lấy đoạn chữ bôi đen chuyển b/s
function logSelection(params) {
    let sel = ''
    sel = window.getSelection().toString()

    console.log(sel);
    console.log(sel.replace(/bạn/gi, "NGƯỜI MUA"));
}

function auto_pause_chat() {
    let array_time1 = [
        'input_pause11',
        'input_pause12',
        'input_pause13'
    ]
    let array_time2 = [
        'input_pause21',
        'input_pause22',
        'input_pause23'
    ]

    let result1 = array_time1.map((e) => {
        return document.querySelector(`.${e}`);
    })
    let result2 = array_time2.map((e) => {
        return document.querySelector(`.${e}`);
    })

    let el_chat_pause1 = document.querySelector('.chat_pause1')
    let el_chat_pause2 = document.querySelector('.chat_pause2')

    setInterval(() => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM"

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        if (el_chat_pause1.checked) {
            handle_time(result1, am, h, m, s)
        }
        if (el_chat_pause2.checked) {
            handle_time(result2, am, h, m, s)
        }
    }, 1000);
}
function handle_time(result, am, h, m, s) {
    let array_time_res = result.map((e) => {
        return e.value
    })
    // console.log(array_time_res);
    if (am === 'AM') {
        if (h == array_time_res[0] && m == array_time_res[1] && s == array_time_res[2]) {
            chat_wrap()
        }
    }
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