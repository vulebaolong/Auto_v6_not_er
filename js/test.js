
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

inhouse_kb()
function inhouse_kb() {
    let el_inhouse_kb_nav_chil = document.querySelector('.inhouse_kb_nav_chil')


    let el_inhouse_btn = document.querySelector('.inhouse_btn')
    let el_inhouse_kb = document.querySelector('.inhouse_kb')
    let el_inhouse_kb_container = document.querySelector('.inhouse_kb_container')

    let el_inhouse_kb_nav_btn = document.querySelectorAll('.inhouse_kb_nav > ul li')
    click_active(el_inhouse_kb_nav_btn,'inhouse_kb_active',el_inhouse_kb_nav_chil)
    
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

function click_active(element_ar, element_active = 'active',el_inhouse_kb_nav_chil) {
    element_ar.forEach( (element) => {
        console.log(element);
        element.onclick = (e) => {
            let element_current = e.target
            let parent_element = e.target.parentElement
            let element_active_prev = parent_element.querySelector('.'+element_active)
            
            element_active_prev.classList.remove(element_active)
            element_current.classList.add(element_active)

            
            let element_current_id =  e.target.attributes.inhouse_id.value
            console.log(e.target.attributes.inhouse_id.value);

            click_link(element_current_id, 'show_in_block',el_inhouse_kb_nav_chil)
        }

    })
}

function click_link(nav_item_id, element_active= 'show_in_block',el_inhouse_kb_nav_chil) {
    let el_inhouse_kb_nav_chil_content = Array.from(el_inhouse_kb_nav_chil.children)
    let navChil_item_prev = el_inhouse_kb_nav_chil.querySelector('.'+element_active)

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
            Array.from(el_navChil_item.children[0].children).forEach( (navChil_btn ) => {
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
