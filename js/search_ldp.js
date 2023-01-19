function start_search() {
    var el_search_button = document.querySelector('.search_button');
    // var el_search_box = document.querySelector('.search_box')
    var el_search_input = document.querySelector('.search_input');
    var el_search_result_box = document.querySelector('.search_result_box');
    var el_search_container = document.querySelector('.search_container');


    el_search_container.onclick = (e1) => {
        
        let parent = e1.target.parentElement.parentElement
        // let isParent = Array.from(parent.classList).includes('search_result_item')
        let isParent = [...parent.classList].includes('search_result_item')
        if (isParent) {
            console.dir(parent);
            console.dir(parent.children);
            console.dir([...parent.children].map((e) => e.textContent.trim()));
            const Ln = [...parent.children].map((e) => e.textContent.trim())
            console.log(Ln[0],Ln[1],Ln[2]);
            selectLDP(Ln[0],Ln[1],Ln[2]);
        }
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