const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds);
    });
};

const clickTabEmail = function (tabs) {
    const tab = Array.from(tabs).find((element) => {
        return element.children[0].children[0].textContent === 'Email' ? true : false;
    });
    tab.children[0].children[0].click();
};

const addValueTitle = function (emails) {
    const inputEL = emails[0].children[0].children[2].getElementsByTagName('input')[0];
    inputEL.value = 'SHOPEE.VN - Phản hồi thông tin về ';
    inputEL.dispatchEvent(new Event('change', { bubbles: true }));
    inputEL.dispatchEvent(new Event('blur', { bubbles: true }));
    console.log(inputEL.value);
};

const addValueTextBox = function (emails, messMail) {
    const textBox = emails[0].getElementsByTagName('iframe')[0].contentDocument.children[0].children[1];
    console.log(textBox);
    textBox.innerHTML = '';
    textBox.innerHTML = messMail;
};

const getClipBroad = async function () {
    return await navigator.clipboard.readText().then((clipText) => clipText);
};

const handleFaqArr = function name(textCoppy) {
    const faqText = textCoppy.split('http')[0];
    const faqLink = `http${textCoppy.split('http')[1]}`;
    const link = `<a style="color: #ee4d2d;" title="tại đây" href="${faqLink}" data-mce-href="${faqLink}" data-mce-style="color: #ee4d2d;">tại đây</a>`
    return [faqText, link];
};

const messMail = function (userName,faqArr) {
    return `
    <div>
        Thân chào bạn ${userName},
        <br />
        &nbsp;
        <br />
        Mình hiểu những bất tiện mà bạn gặp phải khi XXXXX. Mình là Bảo Long xin
        phép được hỗ trợ và phản hồi như sau:
        <br />
        &nbsp;
        <br />
        Shopee hiểu rằng bạn đã có một trải nghiệm chưa được tốt trên Shopee. Shopee
        cảm ơn những đóng góp ý kiến và chia sẻ để giúp Shopee cải thiện hơn chất
        lượng dịch vụ. Shopee sẽ luôn cố gắng cải thiện để hỗ trợ bạn tốt nhất có
        thể. Rất mong bạn đừng giận Shopee, thông cảm và bỏ qua sự bất tiện này.
        Shopee hi vọng bạn sẽ tiếp tục lựa chọn Shopee để đồng hành cùng bạn và có
        những trải nghiệm tuyệt vời hơn!
        <br />
        ${faqArr[0]} ${faqArr[1]}
        <br />
        &nbsp;
        <br />
        Trong trường hợp vấn đề của bạn chưa được xử lý xong, bạn đừng ngại phản hồi
        qua email hoặc chat ngay với Shopee để Shopee tiếp tục hỗ trợ bạn chu đáo
        hơn.
        <br />
        Chân thành cám ơn bạn đã liên hệ đến Shopee. Chúc bạn những điều tốt đẹp
        nhất.
        <br />
        Trân trọng.
        <br />&nbsp;<br />
        Vũ Lê Bảo Long | Bộ phận hỗ trợ khách hàng | Shopee Việt Nam
    </div>
    `;
};

async function gmail() {
    let workstationCurrent = fun_workstation_current();
    // console.log(workstationCurrent);
    const tabs = workstationCurrent.getElementsByClassName('shopee-react-tabs-nav shopee-react-tabs-nav-animated');
    const emails = workstationCurrent.getElementsByClassName('email___2TFsY');
    console.log(emails);
    const textCoppy = await getClipBroad();
    const faqArr = handleFaqArr(textCoppy);
    console.log(faqArr);
    // const userName1 = workstationCurrent.getElementsByClassName('icon_text___3GzZ-');
    // console.log(userName1[0].textContent);
    // const userName2 = workstationCurrent.getElementsByClassName('shopee-react-input__input');
    // console.log(userName2[2].value);

    const userName =
        workstationCurrent.getElementsByClassName('icon_text___3GzZ-')[0]?.textContent ??
        workstationCurrent.getElementsByClassName('shopee-react-input__input')[2].value;
    console.log(userName);
    clickTabEmail(tabs);

    wait(200)
        .then(() => {
            addValueTitle(emails);
            return wait(200);
        })
        .then(() => {
            addValueTextBox(emails, messMail(userName,faqArr));
        })
}
