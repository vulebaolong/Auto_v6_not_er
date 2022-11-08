
button_long()
function button_long(params) {
    let buttons = document.querySelectorAll(".button_long")
    buttons.forEach((button) => {

        button.onclick = (e) => {
            if (Array.from(button.classList).includes('button_action')) {
                let button_parrent = button.parentElement
                let i = 0
                while (i < 10) {
                    button_parrent = button_parrent.parentElement
                    if (Array.from(button_parrent.classList).includes('lv_first')) {
                        button_parrent.classList.remove('button_show')
                        break
                    }
                    i++
                }
            }
            e.stopPropagation()
            coppy_button(e.target)
            let button_menu = e.target.children[0]
            let button_menu_parent = e.target.parentElement
            let button_menu_show = button_menu_parent.querySelectorAll('.button_long > .button_long_menu.button_show')
            if (button_menu !== undefined) {
                button_menu.classList.toggle('button_show')
            }
            if (button_menu_show !== null) {
                button_menu_show.forEach(element => {
                    element.classList.remove('button_show')
                });
            }
        }
    })


}
function coppy_button(params) {
    let classlist = Array.from(params.classList)
    switch (classlist[0]) {
        case 'item_spx':
            navigator.clipboard.writeText(
                'Shopee Xpress:' + '\n'
                + 'Website: https://spx.vn/' + '\n'
                + 'Liên hệ email: https://help.shopee.vn/portal/webform/4d8d2e07487345cf9a9881fde841079c?' + '\n'
                + 'Thời gian làm việc: T2 - CN (9h-18h)'
            )
            break;
        case 'item_njv':
            navigator.clipboard.writeText(
                'Ninja Van:' + '\n'
                + 'Website: https://www.ninjavan.co/vi-vn/tracking' + '\n'
                + 'Email: support_vn@ninjavan.co' + '\n'
                + 'Hotline: 1900 886 877' + '\n'
                + 'Thời gian làm việc: T2 - T7 (8h - 20h), CN (8h - 17h)'
            )
            break;
        case 'item_bet':
            navigator.clipboard.writeText(
                'Best Express:' + '\n'
                + 'Website: https://best-inc.vn/ ' + '\n'
                + 'Email: cskh@best-inc.com' + '\n'
                + 'Hotline: 1900 1031' + '\n'
                + 'Thời gian làm việc: T2 - T6 (7h30 - 19h), T7 - CN (8h - 17h)'

            )
            break;
        case 'item_jt':
            navigator.clipboard.writeText(
                'J&T Express:' + '\n'
                + 'Website: https://jtexpress.vn/' + '\n'
                + 'Email: cskh@jtexpress.vn' + '\n'
                + 'Hotline: 1900 1088' + '\n'
                + 'Thời gian làm việc: T2 - CN (8h - 21h)'
            )
            break;
        case 'item_ghtk':
            navigator.clipboard.writeText(
                'Giao Hàng Tiết Kiệm :' + '\n'
                + 'Website: https://giaohangtietkiem.vn/' + '\n'
                + 'Email: cskh@ghtk.vn ' + '\n'
                + 'Chat: sos.ghtk.vn' + '\n'
                + 'Thời gian làm việc: T2 - T7 (8h - 20h), CN (8h - 18h)'
            )
            break;
        case 'item_ghn':
            navigator.clipboard.writeText(
                'Giao Hàng Nhanh:' + '\n'
                + 'Website: https://ghn.vn/' + '\n'
                + 'Email: cskh@ghn.vn' + '\n'
                + 'Hotline: 1900 636677' + '\n'
                + 'Thời gian làm việc: T2 - CN (8h30 - 21h)'
            )
            break;
        case 'item_vnp':
            navigator.clipboard.writeText(
                'VNPost Nhanh/VNPost Tiết Kiệm:' + '\n'
                + 'Website: www.vnpost.vn' + '\n'
                + 'Email: vanphong@vnpost.vn' + '\n'
                + 'Hotline: 1900 54 54 81' + '\n'
                + 'Thời gian làm việc: T2 - CN (7h - 21h)'
            )
            break;
        case 'item_vtp':
            navigator.clipboard.writeText(
                'Viettel Post:' + '\n'
                + 'Website: https://viettelpost.com.vn/' + '\n'
                + 'Email: support@viettelpost.com.vn' + '\n'
                + 'Hotline: 1900 8095 ' + '\n'
                + 'Thời gian làm việc: T2 - CN (7h - 20h)'
            )
            break;
        case 'item_bedeli':
            navigator.clipboard.writeText(
                'beDelivery:' + '\n'
                + 'Vui lòng tra cứu thông tin vận chuyển ngay trên Ứng dụng Shopee' + '\n'
                + 'Website: https://be.com.vn/' + '\n'
                + 'Hotline: 1900232345' + '\n'
                + 'Thời gian làm việc: 24/7)'
            )
            break;
        case 'item_brab':
            navigator.clipboard.writeText(
                'GrabExpress:' + '\n'
                + 'Vui lòng tra cứu thông tin vận chuyển ngay trên Ứng dụng Shopee' + '\n'
                + 'Website: https://www.grab.com/vn/express/' + '\n'
                + 'Hotline: 0902349633' + '\n'
                + 'Thời gian làm việc: T2 - CN (6h - 22h)'
            )
            break;
        case 'item_spxi':
            navigator.clipboard.writeText(
                'Shopee Xpress Instant:' + '\n'
                + 'Vui lòng tra cứu thông tin vận chuyển ngay trên Ứng dụng Shopee' + '\n'
                + 'Hotline:19002042' + '\n'
                + 'Thời gian làm việc: T2 - CN (8h - 20h)'
            )
            break;
        case 'item_cb':
            navigator.clipboard.writeText(
                'Standard Express:' + '\n'
                + 'Xem chi tiết cách Liên Hệ Đơn Vị Vận Chuyển Standard Express: https://help.shopee.vn/s/article/lien-he-don-vi-van-chuyen-standard-express'
            )
            break;
        case 'item_tks_huy':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán khi nhận hàng, ngay khi đơn hàng cập nhật hủy trên hệ thống và không có khiếu nại gì thêm.\nShopee sẽ làm lệnh hoàn tiền về số dư TK Shopee cho bạn. Thời gian bạn nhận được thanh toán về số dư TK Shopee trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).')
            break;
        case 'item_tks_hoan':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán khi nhận hàng, ngay khi đơn hàng hoàn thành công trên hệ thống và đơn hàng cập nhật huỷ.\nShopee sẽ làm lệnh hoàn tiền về số dư TK Shopee cho bạn. Thời gian bạn nhận được thanh toán về số dư TK Shopee trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).')
            break;
        case 'item_tks_thht':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán khi nhận hàng, ngay khi đơn hàng trả hàng hoàn tiền thành công về người bán và không có khiếu nại gì thêm.\nShopee sẽ làm lệnh hoàn tiền về số dư TK Shopee cho bạn. Thời gian bạn nhận được thanh toán về số dư TK Shopee trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).')
            break;
        case 'item_cc_huy':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng thẻ tín dụng, ngay khi đơn hàng hủy thành công trên hệ thống, Shopee sẽ làm lệnh hoàn tiền về thẻ tín dụng.\nThời gian bạn nhận được thanh toán về thẻ dự kiến trong vòng 7 - 14 ngày làm việc (Không tính thứ 7, chủ nhật và ngày lễ) tiếp theo, tùy theo tốc độ xử lý của Ngân hàng phát hành.')
            break;
        case 'item_cc_hoan':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng thẻ tín dụng, ngay khi đơn hàng hoàn thành công về cho người bán và đơn hàng cập nhật huỷ. Shopee sẽ làm lệnh hoàn tiền về thẻ tín dụng.\nThời gian bạn nhận được thanh toán về thẻ dự kiến trong vòng 7 - 14 ngày làm việc (Không tính thứ 7, chủ nhật và ngày lễ) tiếp theo, tùy theo tốc độ xử lý của Ngân hàng phát hành.')
            break;
        case 'item_cc_thht':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng thẻ tín dụng, ngay khi đơn hàng hoàn thành công về cho người bán và không có khiếu nại gì thêm Shopee sẽ làm lệnh hoàn tiền về thẻ tín dụng.\nThời gian bạn nhận được thanh toán về thẻ dự kiến trong vòng 7 - 14 ngày làm việc (Không tính thứ 7, chủ nhật và ngày lễ) tiếp theo, tùy theo tốc độ xử lý của Ngân hàng phát hành.')
            break;
        case 'item_spay_huy':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng ví Shopee Pay, ngay khi đơn hàng hủy thành công trên hệ thống, Shopee sẽ làm lệnh hoàn tiền về ví Shopee Pay.\nThời gian bạn nhận được thanh toán về ví Shopee Pay trong vòng 24h (Không tính thứ 7, chủ nhật và ngày lễ).')
            break;
        case 'item_spay_hoan':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng ví Shopee Pay, ngay khi đơn hàng hoàn thành công về người bán và cập nhật hủy trên hệ thống, Shopee sẽ làm lệnh hoàn tiền về ví Shopee Pay.\nThời gian bạn nhận được thanh toán về ví Shopee Pay trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).')
            break;
        case 'item_spay_thht':
            navigator.clipboard.writeText('Theo như quy định của Shopee, đối với các đơn hàng thanh toán trước bằng ví Shopee Pay, ngay khi đơn hàng trả hàng hoàn tiền thành công trên hệ thống và không có khiếu nại gì thêm, Shopee sẽ làm lệnh hoàn tiền về ví Shopee Pay.\nThời gian bạn nhận được thanh toán về ví Shopee Pay trong vòng 24h làm việc (Không tính thứ 7, chủ nhật và ngày lễ).')
            break;
        case 'item_cnl_hg_3':
            navigator.clipboard.writeText('Đơn hàng hiện tại đang trong quá trình vận chuyển, tuy nhiên Shopee kiểm tra thấy đơn đang ở khu vực XXXXX từ lúc XXXXX và chưa thấy có cập nhật hành trình mới.\nBạn cho phép Shopee kiểm tra với đơn vị vận chuyển để đốc thúc giao hàng cho người mua và thúc đẩy giao hàng đến người mua trong 1-2 ngày làm việc tiếp theo nhé.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã dừng hành trình >=3 ngày. MVĐ: ')
            break;
        case 'item_cnl_hg_qh':
            navigator.clipboard.writeText('Shopee kiểm tra thấy đơn đang ở khu vực quận huyện của người mua.\nShopee sẽ chuyển đơn vị vận chuyển hối giao để bạn sớm nhận được đơn hàng, thời gian xử lý là 1-2 ngày làm việc tiếp theo.\nThông thường đơn hàng đã tới quận/huyện của người mua sẽ được đơn vị vận chuyển sắp xếp giao hàng trong các ca giao sắp tới, bạn có thể chủ động theo dõi hành trình trên web đơn vị vận chuyển nhé.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển, bạn có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã đến quận/huyện của Buyer. MVĐ: ')
            break;
        case 'item_cnl_stt_dg':
            navigator.clipboard.writeText('Shopee kiểm tra thấy đơn vị vận chuyển cập nhật thông tin giao không thành công vào lúc XXXXX\nĐơn hàng này vẫn còn ca giao theo quy trình, bạn thông cảm theo dõi đơn hàng và chờ shipper liên hệ giao trong ca tiếp theo.\nNếu shipper cập nhật sai trạng thái lần nữa, bạn vui lòng liên hệ lại ngay với Shopee để được hỗ trợ')
            break;
        case 'item_cnl_stt_hoan':
            navigator.clipboard.writeText('Shopee sẽ chuyển thông tin kiểm tra với phía đơn vị vận chuyển, thời gian xử lý là 3-5 ngày làm việc.\nĐơn hàng này đã được chuyển hoàn cho người bán nên rất tiếc hàng sẽ không thể tiếp tục giao.\nTrường hợp người mua bị tính tỉ lệ giao hàng không thành công dẫn đến không chọn hình thức thanh toán khi nhận hàng được, người mua vui lòng liên hệ lại Shopee để được hỗ trợ ạ.\n\n\nDear team,\n\nKhách khiếu nại shipper chưa liên hệ giao đủ 3 ca nhưng cập nhật chuyển hoàn\nMVĐ: \nNhờ team hỗ trợ xác minh')
            break;

        default:
            break;
    }
}

// inhouse_kb()
function inhouse_kb() {
    let el_inhouse_kb_nav_chil = document.querySelector('.inhouse_kb_nav_chil')


    let el_inhouse_btn = document.querySelector('.inhouse_btn')
    let el_inhouse_kb = document.querySelector('.inhouse_kb')
    let el_inhouse_kb_container = document.querySelector('.inhouse_kb_container')

    let el_inhouse_kb_nav_btn = document.querySelectorAll('.inhouse_kb_nav > ul li')
    click_active(el_inhouse_kb_nav_btn, 'inhouse_kb_active', el_inhouse_kb_nav_chil)

    click_btn(Array.from(el_inhouse_kb_nav_chil.children))

    el_inhouse_btn.onclick = (e) => {
        e.stopPropagation()
        el_inhouse_kb.classList.remove('none')
    }

    el_inhouse_kb.onclick = (e) => {
        el_inhouse_kb.classList.add('none')
    }
    el_inhouse_kb_container.onclick = (e) => {
        e.stopPropagation()
    }

}

function click_active(element_ar, element_active = 'active', el_inhouse_kb_nav_chil) {
    element_ar.forEach((element) => {
        console.log(element);
        element.onclick = (e) => {
            let element_current = e.target
            let parent_element = e.target.parentElement
            let element_active_prev = parent_element.querySelector('.' + element_active)

            element_active_prev.classList.remove(element_active)
            element_current.classList.add(element_active)


            let element_current_id = e.target.attributes.inhouse_id.value
            console.log(e.target.attributes.inhouse_id.value);

            click_link(element_current_id, 'show_in_block', el_inhouse_kb_nav_chil)
        }

    })
}

function click_link(nav_item_id, element_active = 'show_in_block', el_inhouse_kb_nav_chil) {
    let el_inhouse_kb_nav_chil_content = Array.from(el_inhouse_kb_nav_chil.children)
    let navChil_item_prev = el_inhouse_kb_nav_chil.querySelector('.' + element_active)

    if (navChil_item_prev !== null) {
        navChil_item_prev.classList.remove(element_active)
    }

    el_inhouse_kb_nav_chil_content.forEach(navChil_item => {
        // console.log(navChil_item);
        let navChil_item_id = navChil_item.attributes.inhouse_id.value
        if (navChil_item_id === nav_item_id) {
            navChil_item.classList.add(element_active)
        }
    });

    console.log(el_inhouse_kb_nav_chil);
}

function click_btn(el_inhouse_kb_nav_chil) {


    el_inhouse_kb_nav_chil.forEach(element => {
        Array.from(element.children).forEach(el_navChil_item => {
            Array.from(el_navChil_item.children[0].children).forEach((navChil_btn) => {
                click_fetch(navChil_btn)

            })
        });
    });
}

function click_fetch(navChil_btn) {
    navChil_btn.onclick = (e) => {
        let kb_id = e.target.attributes.kb_id
        if (kb_id !== undefined) {
            let kb_id_value = e.target.attributes.kb_id.value
            console.log(kb_id_value);
            // https://cs.shopee.vn/api/inhouse/cms/kb/mobile/v1/article?id=6121
            // fetch(`https://cs.shopee.vn/api/inhouse/cms/kb/mobile/v1/article?id=${kb_id_value}`)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         console.log(data)
            //         let content = JSON.parse(data.content)
            //         console.log(content)
            //         for (const content_item of content) {
            //             console.log(content_item);
            //         }

            //     });       
        }
    }
}

// macro_coppy()

function macro_coppy(params) {
    // Trong EDT
    let el_b_dukien = document.querySelector('.b_dukien')
    let el_b_quadukien = document.querySelector('.b_quadukien')
    let el_s_dukien = document.querySelector('.s_dukien')
    let el_s_quadukien = document.querySelector('.s_quadukien')
    click_marp_coppy(el_b_dukien, 'Shopee rất tiếc khi đã đến ngày giao dự kiến mà đơn hàng vẫn chưa được giao đến bạn.\nShopee kiểm tra thấy đơn hàng của bạn đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã đến ngày giao hàng dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX')
    click_marp_coppy(el_b_quadukien, 'Shopee rất tiếc khi đã quá thời gian giao hàng dự kiến mà đơn hàng vẫn chưa được giao đến bạn.\nShopee kiểm tra thấy đơn hàng của bạn đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã quá thời gian giao dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX.')
    click_marp_coppy(el_s_dukien, 'Shopee rất tiếc khi đã đến ngày giao dự kiến mà đơn hàng vẫn chưa được giao đến cho người mua.\nShopee kiểm tra thấy đơn hàng của bạn và người mua đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã đến ngày giao hàng dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn kêu người mua chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn cũng như người mua có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX')
    click_marp_coppy(el_s_quadukien, 'Shopee rất tiếc khi đã quá thời gian giao hàng dự kiến mà đơn hàng vẫn chưa được giao đến cho người mua.\nShopee kiểm tra thấy đơn hàng của bạn và người mua đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã quá thời gian giao dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn kêu người mua chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn cũng như người mua có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX.')

    // >=3 ngày
    let el_ba_ngay = document.querySelector('.ba_ngay')
    let el_quan_huyen = document.querySelector('.quan_huyen')
    let el_qua_edt3 = document.querySelector('.qua_edt3')
    let el_haimuoi_ngay = document.querySelector('.haimuoi_ngay')
    let el_qua_leadtime = document.querySelector('.qua_leadtime')
    let el_chua_leadtime = document.querySelector('.chua_leadtime')

    click_marp_coppy(el_ba_ngay, 'Shopee kiểm tra thấy đơn đang ở khu vực quận huyện của người mua.\nShopee sẽ chuyển đơn vị vận chuyển hối giao để bạn sớm nhận được đơn hàng, thời gian xử lý là 1-2 ngày làm việc tiếp theo.\nThông thường đơn hàng đã tới quận/huyện của người mua sẽ được đơn vị vận chuyển sắp xếp giao hàng trong các ca giao sắp tới, bạn có thể chủ động theo dõi hành trình trên web đơn vị vận chuyển nhé.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển, bạn có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã đến quận/huyện của Buyer. MVĐ: ')
    click_marp_coppy(el_quan_huyen, 'Shopee kiểm tra thấy đơn đang ở khu vực quận huyện của người mua.\nShopee sẽ chuyển đơn vị vận chuyển hối giao để bạn sớm nhận được đơn hàng, thời gian xử lý là 1-2 ngày làm việc tiếp theo.\nThông thường đơn hàng đã tới quận/huyện của người mua sẽ được đơn vị vận chuyển sắp xếp giao hàng trong các ca giao sắp tới, bạn có thể chủ động theo dõi hành trình trên web đơn vị vận chuyển nhé.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển, bạn có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã đến quận/huyện của Buyer. MVĐ: ')
    click_marp_coppy(el_qua_edt3, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì đã quá thời gian dự kiến mà vẫn chưa nhận được hàng.\nMình sẽ chuyển ngay thông tin đến đơn vị vận chuyển để hối thúc giao gấp đơn hàng này cho người mua, thời gian xử lý 1-2 ngày làm việc.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển , bạn có thể liên hệ theo thông tin XXXXX')
    click_marp_coppy(el_haimuoi_ngay, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì vẫn chưa nhận được hàng.\nDo đơn chưa có cập nhật trạng thái mới, chưa về đến Việt Nam, mình sẽ chuyển ngay thông tin đến bộ phận liên quan để kiểm tra thông tin đơn hàng này cho người mua, thời gian xử lý 3 đến 5 ngày làm việc (không tính thứ 7, chủ nhật và các ngày lễ).\nMong bạn thông cảm đợi thông tin từ Shopee ạ.\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn CB quá 20 ngày chưa về tới VN\nOrder SN: ')
    click_marp_coppy(el_qua_leadtime, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì chưa nhận được hàng.\nMình sẽ chuyển ngay thông tin đến đơn vị vận chuyển để hối thúc giao gấp đơn hàng này cho người mua, thời gian xử lý 1-2 ngày làm việc tiếp theo.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, người mua có thể liên hệ theo thông tin XXXXX và cung cấp mã vận đơn là XXXXX.\nNếu cần mua hàng gấp, lần sau người mua có thể cân nhắc lựa chọn đặt hàng tại các shop nội địa, đặc biệt là những shop có hỗ trợ vận chuyển hỏa tốc để nhận hàng nhanh chóng hơn\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn CB đã quá thời gian giao hàng có MVĐ: ')
    click_marp_coppy(el_chua_leadtime, 'Đơn hàng đã được đơn vị vận chuyển tiếp nhận ở Việt Nam. Thời gian giao hàng dự kiến là XXXXX ngày làm việc.\nĐơn đang trên đường trung chuyển giữa các bưu cục để đến khu vực của người mua nên Shopee khó có thể can thiệp đốc thúc bưu cục giao hàng để giao ngay đơn hàng này.\nNgười mua có thể chủ động theo dõi hành trình đơn hàng bằng cách sử dụng mã vận đơn XXXXX để kiểm tra trên web của đơn vị vận chuyển.\nTrong trường hợp cần hàng gấp, người mua có thể liên hệ trực tiếp với đơn vị vận chuyển theo thông tin XXXXX.\nNếu cần mua hàng gấp, lần sau người mua có thể cân nhắc lựa chọn đặt hàng tại các shop nội địa, đặc biệt là những shop có hỗ trợ vận chuyển hỏa tốc để nhận hàng nhanh chóng hơn nhé.')
}

function click_marp_coppy(params, info) {
    console.log(params);
    params.onclick = () => {
        navigator.clipboard.writeText(info)
    }
}



const body = document.querySelector('body');
run_drag2(body)
function run_drag2(body) {


    let el_toolbar_wraper = document.querySelector('.toolbar_wraper')
    let el_toolbar_left = document.querySelector('.toolbar_left')
    let el_toolbar_container = document.querySelector('.toolbar_container')
    let el_toolbar_container_content = document.querySelector('.toolbar_container_content')
    let el_toolbar_right_collapse = document.querySelector('.toolbar_right_collapse')
    let el_time_time = document.querySelector('.toolbar_wraper > .toolbar_left > .time_time')
    let el_toolbar_mid = document.querySelector('.toolbar_mid')
    let el_toolbar_mid_calendar = document.querySelector('.toolbar_mid_calendar')
    let el_toolbar_mid_setting = document.querySelector('.toolbar_mid_setting')
    let el_toolbar_mid_camera = document.querySelector('.toolbar_mid_camera')
    let el_toolbar_mid_calendar_content = document.querySelector('.toolbar_mid_calendar_content')
    let el_toolbar_mid_setting_content = document.querySelector('.toolbar_mid_setting_content')
    let el_toolbar_mid_calendar_input = document.querySelector('.toolbar_mid_calendar_input')
    let el_toolbar_mid_calendar_container = document.querySelector('.toolbar_mid_calendar_container')
    let el_toolbar_mid_change_text_container = document.querySelector('.toolbar_mid_change_text_container')
    let el_toolbar_mid_calendar_button = document.querySelector('.toolbar_mid_calendar_button')
    let el_toolbar_mid_calendar_date = document.querySelector('.toolbar_mid_calendar_date')
    let el_toolbar_mid_calendar_checkbox = document.querySelector('.toolbar_mid_calendar_checkbox')
    let el_toolbar_mid_calendar_result = document.querySelector('.toolbar_mid_calendar_result')
    let el_toolbar_mid_change_text = document.querySelector('.toolbar_mid_change_text')
    let el_toolbar_mid_change_text_content = document.querySelector('.toolbar_mid_change_text_content')
    let el_toolbar_mid_setting_text = document.querySelectorAll('.toolbar_mid_setting_text')
    let el_toolbar_mid_setting_btn = document.querySelectorAll('.toolbar_mid_setting_btn')


    // collaspe
    el_toolbar_right_collapse.onclick = (e) => {
        e.stopPropagation()

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
                el_toolbar_mid_calendar_container.style.cssText = `
            right: 0;
            left: unset;
            `
                el_toolbar_mid_change_text_container.style.cssText = `
            right: 0;
            left: unset;
            `
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
                el_toolbar_mid_calendar_container.style.cssText = `
            left: 0;
            right: unset;
            `
                el_toolbar_mid_change_text_container.style.cssText = `
            right: unset;
            left: 0;
            `
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

    // calender
    el_toolbar_mid_calendar.onclick = () => {
        toolBarActive(el_toolbar_mid_calendar, el_toolbar_mid, 'active_toolbar')
    }
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
    el_toolbar_mid_calendar_input.onclick = (e) => { el_toolbar_mid_calendar_input.select() }

    // camera
    el_toolbar_mid_camera.onclick = () => {
        toolBarActive(el_toolbar_mid_camera, el_toolbar_mid, 'active_toolbar')
        body.insertAdjacentHTML('afterend', html_screen);
        run_screen_shot(body)
    }

    // change_text
    el_toolbar_mid_change_text.onclick = () => {
        toolBarActive(el_toolbar_mid_change_text, el_toolbar_mid, 'active_toolbar')
    }

    // chat end
    el_toolbar_mid_setting.onclick = (e) => {
        toolBarActive(el_toolbar_mid_setting, el_toolbar_mid, 'active_toolbar')
        for (let index = 0; index < el_toolbar_mid_setting_text.length; index++) {
            fetch(`../click_chat_end/chat_end_${index+1}.txt`)
                .then(response => response.text())
                .then((texts_data) => {
                    el_toolbar_mid_setting_text[index].innerHTML = texts_data
                })
        }
    }
    

    array_elements = [
        el_toolbar_mid_setting_content,
        el_toolbar_mid_change_text_content,
        el_toolbar_mid_calendar_content,
    ]
    handle_click_stopPropagation(array_elements)

    let request = document.querySelector('.toolbar_mid_change_text_request > input')
    let request_text = document.getElementById('request_text')
    let result = document.querySelector('.toolbar_mid_change_text_result > input')
    let result_text = document.getElementById('result_text')
    let toolbar_mid_change_text_content_icon = document.querySelector('.toolbar_mid_change_text_content_icon')

    toolbar_mid_change_text_content_icon.onclick = () => {
        changeText(request.value.trim(), request_text.value, result.value.trim(), result_text)
    }
    // request_text.onkeyup = (e) => {
    //     changeText(request.value.trim(), request_text.value, result.value.trim(), result_text)
    // }

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


}

