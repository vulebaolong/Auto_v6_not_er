function preventChatTimeOut(params) {
    let workstation_El = document.querySelector('#workstation')
    listen_workstation(workstation_El.children[0])
        .then((e) => {
            console.log(e);

        })
}

function listen_workstation(params) {
    return new Promise(function (resolve, reject) {


        const observerOptions = {
            // characterData: true,
            // attributes: true,
            subtree: true,
            childList: true,
        };

        const observer = new MutationObserver(callback);

        const targetNodes = params;
        observer.observe(targetNodes, observerOptions);
        function callback(mutations) {

            let name = mutations[0].target.className
            if (name === "ReactVirtualized__Grid__innerScrollContainer") {
                // console.log('mutations: ', mutations);
                // console.log('mutations_target: ', mutations[0].target);
                // console.log('mutations_target: ', mutations[0].target.children);
                let ar_chat = Array.from(mutations[0].target.children)
                ar_chat.forEach(element => {

                    let value_chat = element.textContent
                    let position = value_chat.search(/Cuộc trò chuyện sẽ kết thúc sau 1 phút do không tương tác. Vui lòng gửi tin nhắn tiếp theo nếu bạn muốn tiếp tục cuộc trò chuyện./);
                    // let position = value_chat.search(/Chúc bạn thật nhiều sức khỏe và thành công./);
                    if (position !== -1) {
                        console.log(element);
                        console.log(element.textContent);
                    }
                });

            }
        }
    });
}