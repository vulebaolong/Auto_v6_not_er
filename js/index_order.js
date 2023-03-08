{
    let htmlTeamplate_order = `
    <div class="Auto_saleforce_order">
        <input type="text"  class="Input_word_id" value="ID">
        <button type="button" class="btn_Order_GET">GET</button>
        <button type="button" class="btn_Order_Test">Test</button>
        <button type="button" class="Start_color">Start Color</button>        
        <button type="button" class="Stop_color">top Color</button>   
        <label class="Time">00:00:00</label>
        <label class="MVD"></label>
    </div>
    `

    var order = document.URL.toString().search('cs.shopee.vn/portal/info/')
    console.log(order);
    if (order != -1) {


        const wrapper = document.querySelector('body')
        if (wrapper !== null) {
            wrapper.insertAdjacentHTML("afterend", htmlTeamplate_order);

        } else {
            console.log('Không tìm thấy wrapper');
        }

        const element_Order = Array.from(document.querySelector('.Auto_saleforce_order').children)
        if (element_Order !== null) {
            element_Order.forEach((e) => {

                switch (e.classList[0]) {
                    case 'btn_Order_GET':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            Get_Order()
                        }
                        key_one(e, 'F2')
                        break;

                    case 'Input_word_id':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            e.select()
                        }
                        break;

                    case 'btn_Order_Test':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            Order_Test()
                        }
                    default:
                        console.log('Không được: ', e)
                        break;
                }
            })
        }


        var timers = []
        const element_Btn_Start_color = document.querySelector('.Start_color')
        element_Btn_Start_color.onclick = () => {
            fade1(element_Btn_Start_color, [255, 255, 255], [255, 0, 0], 10, 'backgroundcolor');
            fade1(element_Btn_Start_color, [0, 0, 0], [255, 255, 255], 10, 'color');
        }


        function fade1(element, startcolor, endcolor, time_elapsed, style) {
            var steps = 50
            var red_change = (startcolor[0] - endcolor[0]) / steps
            var green_change = (startcolor[1] - endcolor[1]) / steps
            var blue_change = (startcolor[2] - endcolor[2]) / steps
            var currentcolor = startcolor;
            var stepcount = 0;
            var timer = setInterval(function () {
                currentcolor[0] = parseInt(currentcolor[0] - red_change)
                currentcolor[1] = parseInt(currentcolor[1] - green_change)
                currentcolor[2] = parseInt(currentcolor[2] - blue_change)

                if (style === 'backgroundcolor') {
                    element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')'
                }
                if (style === 'color') {
                    element.style.color = 'rgb(' + currentcolor.toString() + ')'
                }
                stepcount += 1;
                if (stepcount >= steps) {
                    stepcount = 0
                    if (style === 'backgroundcolor') {
                        currentcolor = [255, 255, 255]
                    }
                    if (style === 'color') {
                        currentcolor = [0, 0, 0]
                    }

                }
            }, time_elapsed);
            timers.push(timer)
            console.log(timers)
        }




        const element_Btn_Stop_color = document.querySelector('.Stop_color')
        element_Btn_Stop_color.onclick = () => {
            var currentSelection = window.getSelection()

            console.log(currentSelection)
            // timers.forEach((e) => {
            //     clearInterval(e)
            //     console.log('Clear: ', e);
            // })
            // timers = []
        }
        //=======================================================================

        function Get_Order(params) {
            var order = Array.from(document.querySelector('main').children[0].children)
            var card_with_headerss = get_card_with_headers(order)



            //Lấy MVĐ
            var MVD = Get_MVD(card_with_headerss)

            //lấy EDT
            var Delivery_Time = Get_EDT(card_with_headerss)

            //Lấy SN ĐH
            var SN_DH = Get_SN_DH(card_with_headerss)

            //Lấy DVVC 
            var DVVC = Get_DVVC(card_with_headerss)

            //lấy kênh vận chuyển
            var KDVVC = Get_KDVVC(card_with_headerss)

            //lấy APT (arange pickup time)
            var APT = Get_APT(card_with_headerss)

            //láy peyment
            var PM = Get_PM(card_with_headerss)

            //lấy user id buyer/seller
            var UID = Get_UID(card_with_headerss)

            var Word_ID = localStorage.getItem('tabID')
            document.querySelector('.Input_word_id').value = Word_ID
            console.log(Word_ID);

            var LT = Get_LT(card_with_headerss)
            console.log(LT);


            //==============================
            //gửi tin nhắn đến extention
            var Messenger = {
                Tab_Order_MVD: MVD,
                Tab_Order_EDT: Delivery_Time,
                Tab_Order_SN: SN_DH,
                Tab_Order_DVVC: DVVC,
                Tab_Order_KDVVC: KDVVC,
                //Tab_Order_status_EDT: status_EDT,
                Tab_Order_Word_ID: Word_ID,
                Tab_Order_APT: APT,
                Tab_Order_PM: PM,
                Tab_Order_UID: UID,
                Tab_Order_LT: LT
            }
            //console.log(Messenger);



            // Messenger = {
            //     ...Messenger,
            //     Tab_Order_LT: LT
            // }

            chrome.runtime.sendMessage(Messenger, (e) => {
                console.group('Nhận phản hồi từ tin nhắn gửi đi: ', Messenger)
                console.log('Kết quả: ', e.result);
                console.log('Nhận Phản hồi từ extention: ', e.Tab_Order_MVD)
                console.log('Word_ID:', e.Work_ID);
                console.groupEnd()
            })
            console.group('Gửi đi')
            console.log('gửi đi: ', Messenger)
            console.groupEnd()
            // .then(function (data) {
            //     Messenger = {
            //         ...Messenger,
            //         Tab_Order_LT: data
            //     }

            //     chrome.runtime.sendMessage(Messenger, (e) => {
            //         console.group('Nhận phản hồi từ tin nhắn gửi đi: ', Messenger)
            //         console.log('Kết quả: ', e.result);
            //         console.log('Nhận Phản hồi từ extention: ', e.Tab_Order_MVD)
            //         console.log('Word_ID:', e.Work_ID);
            //         console.groupEnd()
            //     })
            //     console.group('Gửi đi')
            //     console.log('gửi đi: ', Messenger)
            //     console.groupEnd()
            // })

        }

        function get_card_with_headers(order) {
            var result = []
            order.forEach((e) => {
                if (e.classList.value === '') {
                    if (e.attributes[0] === undefined || e.attributes[0].value === '') {
                        if (e.children[0].classList.value === 'order-detail-container') {
                            var card_with_headers = Array.from(e.children[0].children[1].children)
                            card_with_headers.forEach((e) => {
                                result.push(e)
                            })
                        } else {
                            console.log('chưa chọn tab ORDER');
                        }
                    }
                }
            })
            return result
            console.log(result);
        }

        function Calculator_EDT(Delivery_Time) {
            if (Delivery_Time) {
                var time_time = Delivery_Time.substr(10, 17)
                document.querySelector('.MVD').innerHTML = time_time
                var hours = time_time.substr(0, 6)
                var days = time_time.substr(7, 2)
                var monts = time_time.substr(10, 2)
                var years = time_time.substr(13, 4)
                console.log('Giờ: ', hours)
                console.log('Tháng: ', monts)
                console.log('Ngày: ', days)
                console.log('Năm: ', years)

                var nows = new Date()
                var Time_EDT = Date.parse(monts + '-' + days + '-' + years)
                //var Time_EDT = Date.parse('02-26-2022')
                var Time_nows = Date.parse((nows.getMonth() + 1) + '-' + nows.getDate() + '-' + nows.getFullYear())

                console.log('Time_EDT: ', Time_EDT)
                console.log('Time_nows: ', Time_nows)


                if (Time_nows > Time_EDT) {
                    var remaining = Time_nows - Time_EDT

                    console.log('Hối giao: ', remaining)
                    //status_EDT = 2
                    var days = remaining / 86400000
                    console.log('days', Math.floor(days))
                    console.log('hours', Math.floor((remaining % 86400000) / 3600000))
                    console.log('minutes', Math.floor(((remaining % 86400000) % 3600000) / 60000))
                    console.log('seconds', Math.floor((((remaining % 86400000) % 3600000) % 60000) / 1000))
                    if (remaining > 259200000) {
                        console.log('log hối giao')
                        //status_EDT = 3
                        return 3
                    }
                    return 2
                }
                if (Time_nows < Time_EDT) {
                    console.log('Theo dõi hành trình giao hàng')
                    //status_EDT = 1
                    return 1
                }

                if (Time_nows === Time_EDT) {
                    console.log('Trong EDT')
                    //status_EDT = 4
                    return 4
                }
            }
        }

        function key_one(e, key) {
            document.addEventListener("keypress", function (event) {

                if (event.code === key) {
                    e.click()
                }

            }, false)
        }

        function Order_Test(params) {
            //var Word_ID = document.querySelector('.Input_word_id').value

            var order = Array.from(document.querySelector('main').children[0].children)
            var card_with_headerss = get_card_with_headers(order)
            var PM = Get_PM(card_with_headerss)
            console.log('nè: ', PM);






        }

        function elementReading(params, item) {
            return new Promise(function (resolve, reject) {
                //console.log(params);
                params ? params.click() : reject('Không tìm thấy params: ' + params)
                const targetNodes = document.body.childNodes
                const observerOptions = {
                    attributes: true,
                    attributeOldValue: true,
                }
                const observer = new MutationObserver(callback)
                targetNodes.forEach(e => {
                    observer.observe(e, observerOptions);
                })
                function callback(mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.attributeName === 'class' && mutation.oldValue === 'select-options popupTargetContainer uiPopupTarget uiMenuList uiMenuList--default uiMenuList--left uiMenuList--short visible') {
                            observer.disconnect()
                            //console.log(mutation)
                            var TrangThai = mutation.target.children[0].children[0].children
                            //console.log('tìm thấy', TrangThai);
                            Array.from(TrangThai).forEach(e => {
                                if (e.children[0].title === item) {
                                    //console.log(e.children[0]);
                                    resolve(e.children[0])
                                }
                            })
                        }
                    });
                }
            })
        }
        function mapDOM(element, json) {
            var treeObject = {};

            // If string convert to document Node
            if (typeof element === "string") {
                if (window.DOMParser) {
                    parser = new DOMParser();
                    docNode = parser.parseFromString(element, "text/xml");
                } else // Microsoft strikes again
                {
                    docNode = new ActiveXObject("Microsoft.XMLDOM");
                    docNode.async = false;
                    docNode.loadXML(element);
                }
                element = docNode.firstChild;
            }

            //Recursively loop through DOM elements and assign properties to object
            function treeHTML(element, object) {
                object["type"] = element.nodeName;
                var nodeList = element.childNodes;
                if (nodeList != null) {
                    if (nodeList.length) {
                        object["content"] = [];
                        for (var i = 0; i < nodeList.length; i++) {
                            if (nodeList[i].nodeType == 3) {
                                object["content"].push(nodeList[i].nodeValue);
                            } else {
                                object["content"].push({});
                                treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
                            }
                        }
                    }
                }
                if (element.attributes != null) {
                    if (element.attributes.length) {
                        object["attributes"] = {};
                        for (var i = 0; i < element.attributes.length; i++) {
                            object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                        }
                    }
                }
            }
            treeHTML(element, treeObject);

            return (json) ? JSON.stringify(treeObject) : treeObject;
        }
        //==============================
        function Get_MVD(card_with_headerss) {
            var MVD
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'logistic-info') {
                    var content_logistic_info = e.children[1].children[0].children[0].children[1].children[0].children
                    // Array.from(content_logistic_info).forEach(e => {
                    //     Array.from(e.children).forEach(e => {
                    //         if (e.innerText === 'Shipping Tracking Number:') {
                    //             MVD = e.nextElementSibling.innerText
                    //             //console.log(MVD)
                    //         }
                    //     })
                    // });
                    console.log(e.children[1].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[4].innerText);

                    MVD = e.children[1].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[4].innerText
                    console.log(MVD);
                }
            })
            return MVD
        }
        function Get_EDT(card_with_headerss) {
            var Delivery_Time

            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'timeline') {

                    var content_timeline = Array.from(e.children[0].children[1].children[0].children[0].children[0].children)
                    console.log('content_timeline', content_timeline);
                    content_timeline.forEach((e) => {

                        var status_order = e.children[2].children[0].children[0].children[0].children[0].innerText
                        console.log('status_order', status_order)
                        if (status_order === 'Estimated Delivery Time') {
                            Delivery_Time = e.children[2].children[2].innerText
                            //console.log(typeof Delivery_Time, Delivery_Time);
                        }

                    })
                }
            })
            console.log('Delivery_Time: ', Delivery_Time);
            return Delivery_Time
        }
        function Get_SN_DH(card_with_headerss) {
            var SN_DH
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'general-info') {
                    content_general_info = e.children[1].children[0].children[0].children[0].children[0].children[0].children
                    //console.log(content_general_info)
                    Array.from(content_general_info).forEach(e => {
                        Array.from(e.children).forEach(e => {
                            if (e.innerText === 'SN đơn hàng:') {
                                SN_DH = getDirectInnerText(e.nextElementSibling).trim()
                                //console.log(SN_DH.trim())
                            }
                        })
                    })

                }
            })
            return SN_DH
        }
        function Get_DVVC(card_with_headerss) {
            var DVVC
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'logistic-info') {
                    console.log(e.children[1].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[3].innerText);

                    DVVC = e.children[1].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[3].innerText

                    console.log(DVVC);
                }
            })
            return DVVC
        }
        function Get_KDVVC(card_with_headerss) {
            var KDVVC
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'logistic-info') {
                    console.log(e.children[1].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[2].innerText);

                    KDVVC = e.children[1].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[2].innerText

                    console.log(KDVVC);
                }
            })
            return KDVVC
        }
        function Get_APT(card_with_headerss) {
            var APT
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'logistic-info') {
                    var content_APT_info1 = e.children[1].children[0].children[0].children[1].children[0].children[0].children[0]
                    var content_APT_info2 = e.children[1].children[0].children[0].children[1].children[0].children[0].children[1]

                    APT = getDirectInnerText(content_APT_info1)
                    APT += getDirectInnerText(content_APT_info2)

                }
            })
            return APT
        }
        function Get_PM(card_with_headerss) {
            var Get_PM = []
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'payment-info') {
                    //console.log('nè: ',e.children[0].children[1].children[0].children[0].children[1].children[13].children[1].children[0].innerHTML.trim());
                    console.log(e.children[0].children[1].children[0].children[1].children[0].children[1]);

                    Get_PM[0] = e.children[0].children[1].children[0].children[1].children[0].children[1].children[13].children[0].children[0].innerHTML.trim()
                    Get_PM[1] = e.children[0].children[1].children[0].children[1].children[0].children[1].children[13].children[1].children[0].innerHTML.trim()
                    Get_PM[2] = e.children[0].children[1].children[0].children[1].children[0].children[1].children[11].children[0].innerHTML.trim()
                    Get_PM[3] = e.children[0].children[1].children[0].children[1].children[0].children[1].children[11].children[1].innerText.trim()

                }
            });

            console.log('Get_PM', Get_PM)
            return Get_PM
        }
        function Get_LT(card_with_headerss) {
            let result
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'logistic-info') {
                    console.log(e.children[1].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0]);
                    //console.log(e.children[1].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].outerHTML);
                    text = e.children[1].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].outerHTML

                }

            });
            result = strong_text_LT(text)
            console.log(typeof result, result);
            return result
        }
        function Get_UID(card_with_headerss) {
            console.log(card_with_headerss)
            var Get_UID = []
            card_with_headerss.forEach((e) => {
                if (e.attributes.id.value === 'buyer-seller-info') {
                    console.log();
                    //buyer
                    Get_UID[0] = e.children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[2].children[1].innerText
                    Get_UID[1] = e.children[1].children[0].children[0].children[1].children[0].children[0].children[1].children[0].children[0].children[1].innerText.trim()
                    //seller
                    Get_UID[2] = e.children[1].children[0].children[0].children[1].children[1].children[0].children[1].children[0].children[1].children[1].innerText

                }
            });
            return Get_UID
        }

        function getDirectInnerText(element) {
            var childNodes = element.childNodes;
            result = '';

            for (var i = 0; i < childNodes.length; i++) {
                if (childNodes[i].nodeType == 3) {
                    result += childNodes[i].data;
                }
            }

            return result;
        }

        function strong_text_LT(text) {
            let stylee = 'padding: 2px;border-radius: 5px;'
            let result1 = text.replace(/(RETURNED)/gi, `<span style='background-color: #c92a2a;color: #fff;${stylee}'>RETURNED</span>`);
            let result2 = result1.replace(/(Trả hàng thành công)/g, `<span style='background-color: #c92a2a;color: #fff;${stylee}'>Trả hàng thành công</span>`);

            let result3 = result2.replace(/(RETURN_INITIATED)/g, `<span style='background-color: #e67700;color: #fff;${stylee}'>RETURN_INITIATED</span>`);
            let result4 = result3.replace(/(Return)/g, `<span style='background-color: #e67700;color:#fff;${stylee}'>Return</span>`);

            let result5 = result4.replace(/(DELIVERED)/g, `<span style='background-color: #2b8a3e;color: #fff;${stylee}'>DELIVERED</span>`);
            let result6 = result5.replace(/(Giao hàng thành công)/g, `<span style='background-color: #2b8a3e;color: #fff;${stylee}'>Giao hàng thành công</span>`);



            return result6
        }
    }
}