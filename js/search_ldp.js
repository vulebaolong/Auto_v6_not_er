function start_search() {
    var el_search_button = document.querySelector('.search_button');
    // var el_search_box = document.querySelector('.search_box')
    var el_search_input = document.querySelector('.search_input');
    var el_search_result_box = document.querySelector('.search_result_box');
    var el_search_container = document.querySelector('.search_container');

    // body.onclick = (e) => {
    //     var docu_toggle = Array.from(e.target.classList)
    //     var reslut_docu_toggle = docu_toggle.some(e => {
    //         console.log(e);
    //         return  e === 'search_container' ||
    //                 e === 'search_box' ||
    //                 e === 'search_button' ||
    //                 e === 'search_input' ||
    //                 e === 'search_result_box' ||
    //                 e === 'fa-magnifying-glass' ||
    //                 e === 'search_result_item' ||
    //                 e === 'search_result_L1' ||
    //                 e === 'search_result_L2' ||
    //                 e === 'search_result_L3' ||
    //                 e === 'search_result_Explain' ||
    //                 e === 'search_label_L1'
    //     })
    //     console.log(reslut_docu_toggle);
    //     if (reslut_docu_toggle === false) {
    //         el_search_input.classList.remove("search_input_after")
    //         el_search_result_box.classList.remove("search_result_box_after")
    //     }
    // }

    el_search_container.onclick = (e1) => {
        var e1_length = e1.path.length - 3;
        e1.path.forEach((e2, i) => {
            if (i < e1_length) {
                var el_item = Array.from(e2.classList).includes('search_result_item');
                if (el_item) {
                    console.log(e2);
                    var L1 = e2.children[0].children[0].innerText;
                    var L2 = e2.children[1].children[0].innerText;
                    var L3 = e2.children[2].children[0].innerText;
                    selectLDP(L1, L2, L3);
                }
            }
        });
    };

    el_search_button.onclick = (e) => {
        e.stopPropagation();
        el_search_input.classList.toggle('search_input_after');
        el_search_result_box.classList.toggle('search_result_box_after');
    };

    el_search_input.onkeyup = (e) => {
        processChanges(e);
    };
}
function search_LDP(e) {
    var value_input = e.target.value.trim();
    var L3_search = data_LDP.filter((value) => {
        return value.L3.toLocaleUpperCase().includes(value_input.toLocaleUpperCase());
    });
    var el_search_result_box = document.querySelector('.search_result_box');

    var el_search_result_item = ``;

    console.log(L3_search);
    L3_search.forEach((e1) => {
        console.log(e1);
        var background = '';
        switch (e1.L1) {
            case 'Vận chuyển':
                background = 'background: #FFD966;';
                break;

            case 'Thanh toán':
                background = 'background: #A4C2F4;';
                break;

            case 'Tài khoản & Gian lận':
                background = 'background: #6AA84F';
                break;

            case 'Trả hàng & Hoàn tiền':
                background = 'background: #26a69a';
                break;

            case 'Marketing':
                background = 'background: #CCA677';
                break;

            case 'BD':
                background = 'background: #A19FCC';
                break;

            case 'Trang người bán & Sao quả tạ':
                background = 'background: #068899';
                break;

            case 'Sản phẩm và pháp lý':
                background = 'background: #63D297';
                break;

            case 'ShopeePay':
                background = 'background: #A4C2F4';
                break;

            case 'Digital product':
                background = 'background: #FFD966';
                break;

            case 'Câu hỏi chung':
                background = 'background: #9FC5E8';
                break;

            case 'Câu hỏi khác':
                background = 'background: #EA9999';
                break;

            case 'ShopeeFood':
                background = 'background: #EA9999';
                break;

            case 'Bảo hiểm':
                background = 'background: #26A69A';
                break;

            default:
                break;
        }
        el_search_result_item += `
            <div class="search_result_item">
                <div class="search_result_L1" style="${background}">
                    <label class="search_label_L1">${e1.L1}</label>
                </div>
                <div class="search_result_L2">
                    <label class="search_label_L1">${e1.L2}</label>
                </div>
                <div class="search_result_L3">
                    <label class="search_label_L1">${e1.L3}</label>
                </div>
                <div class="search_result_Explain">
                    <label class="search_label_L1">${e1.Explain}</label>
                </div>
            </div>
        `;
    });
    el_search_result_box.innerHTML = el_search_result_item;
    console.log(el_search_result_item);
}
const processChanges = debounce((e) => search_LDP(e));
function debounce(func, delay = 300) {
    let timer;
    console.log('1');
    return (args) => {
        //console.log(args);

        clearTimeout(timer);
        timer = setTimeout(() => {
            func(args);
        }, delay);
    };
}