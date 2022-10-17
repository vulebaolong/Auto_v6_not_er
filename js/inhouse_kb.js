let html_inhouse_kb = /*html*/ `
<div class="inhouse_kb none">
        <div class="inhouse_kb_container">
            <div class="inhouse_kb_left">
                <div class="inhouse_kb_nav">
                    <ul>
                        <li inhouse_id="1" class="inhouse_kb_active">HLHG</li>
                        <li inhouse_id="2">Sai-TT</li>
                        <li inhouse_id="3">THHT</li>
                        <li inhouse_id="4">Seller</li>
                        <li inhouse_id="5">Shopee Xu</li>
                        <li inhouse_id="6">Digital product</li>
                        <li inhouse_id="7">Splayed</li>
                    </ul>
                </div>
                <div class="inhouse_kb_nav_chil">
                    <div inhouse_id="1" class="navChil_item show_in_block">
                        <form>
                            <fieldset>
                                <legend> Đơn hàng <span class="strong">chưa</span> xác nhận </legend>
                                <div kb_id="2222" class="navChil_btn">Đợi phẩn bổ</div>
                                <div kb_id="2327" class="navChil_btn">CXN by Seller</div>
                                <div kb_id="2333" class="navChil_btn">CXN by Shoppe/tag SBS</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend> Đơn hàng <span class="strong">đã</span> xác nhận </legend>
                                <div kb_id="3240" class="navChil_btn">Gửi bưu cục</div>
                                <div kb_id="3244" class="navChil_btn"><=20h Arrange Pickup Time</div>
                                <div kb_id="3258" class="navChil_btn">>20h Arrange Pickup Time</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend>Đơn hàng <span class="strong">đang giao</span></legend>
                                <div kb_id="3408" class="navChil_btn"><span class="strong strong_mini">1</span> Hối trả góp => Auto hối giao
                                    <div class="tool_tip tool_tip_right" style="width: 105px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 hoi_giao_3408" style="font-size: 12px;">Hối giao</div>
                                        </fieldset>   
                                    </div>
                                </div>
                                <div kb_id="3409" class="navChil_btn"><span class="strong strong_mini">2</span> Dừng hành trình >=3 ngày
                                    <div class="tool_tip tool_tip_right" style="width: 105px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 ba_ngay" style="font-size: 12px;">>=3 ngày</div>
                                        </fieldset>   
                                    </div>
                                </div>
                                <div kb_id="3411" class="navChil_btn"><span class="strong strong_mini">3</span> Đến quận huyện
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 quan_huyen" style="font-size: 12px;">quận huyện</div>
                                        </fieldset>   
                                    </div>
                                </div>
                                <div kb_id="3823" class="navChil_btn"><span class="strong strong_mini">4</span> < EDT, Buyer liên hệ 3 lần </div>
                                <div kb_id="3413" class="navChil_btn"><span class="strong strong_mini">4</span> < EDT, buyer liên hệ lớn hơn 3 lần </div>
                                <div kb_id="3603" class="navChil_btn"><span class="strong strong_mini">4</span> EDT - EDT+3 
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                            <fieldset style="padding: 5px;">
                                                <legend>buyer</legend>
                                                <div class="strong btn-14 b_dukien" style="font-size: 12px;">Dự kiến</div>
                                                <div class="strong btn-14 b_quadukien" style="font-size: 12px;">Quá dự kiến</div>
                                            </fieldset>   
                                            <fieldset style="padding: 5px;">
                                                <legend>seller</legend>
                                                <div class="strong btn-14 s_dukien" style="font-size: 12px;">Dự kiến</div>
                                                <div class="strong btn-14 s_quadukien" style="font-size: 12px;">Quá dự kiến</div>
                                            </fieldset> 
                                    </div>
                                </div>
                                <div kb_id="3621" class="navChil_btn"><span class="strong strong_mini">4</span> Quá EDT+3 
                                    <div class="tool_tip tool_tip_bottom" style="width: 105px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 qua_edt3" style="font-size: 12px;">> EDT+3</div>
                                        </fieldset>   
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend> Đơn hàng <span class="strong"> CB chưa về Việt Nam </span></legend>
                                <div kb_id="3592" class="navChil_btn">Đơn CB chưa về VN</div>
                                <div kb_id="3591" class="navChil_btn">Dừng hành trình >=20 ngày
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 haimuoi_ngay" style="font-size: 12px;">>=20 ngày</div>
                                        </fieldset>   
                                    </div>
                                </div>
                                <div kb_id="3598" class="navChil_btn">CB tự vận chuyển</div>                                
                            </fieldset>
                        </form> 
                        <form>
                            <fieldset>
                                <legend> Đơn hàng <span class="strong">CB đã về Việt Nam </span></legend>
                                <div kb_id="3414" class="navChil_btn">Đã quá leadtime
                                    <div class="tool_tip tool_tip_right" style="width: 120px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 qua_leadtime" style="font-size: 12px;">Quá leadtime</div>
                                        </fieldset>   
                                    </div>
                                </div>
                                <div kb_id="3582" class="navChil_btn">Chưa quá leadtime
                                    <div class="tool_tip tool_tip_bottom" style="width: 125px;">  
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 chua_leadtime" style="font-size: 12px;">chưa leadtime</div>
                                        </fieldset> 
                                    </div>
                                </div>
                            </fieldset>
                        </form>   
                        <form>
                            <fieldset>
                                <legend> Hối lấy đơn Reverse <span class="strong">THHT </span></legend>
                                <div kb_id="3578" class="navChil_btn">Chưa quá 20h Pick Up Date</div>
                                <div kb_id="3579" class="navChil_btn"><= 3 Pick Up Date => <span class='strong strong_mini'>Hối lấy</span>
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">  
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 be3_thht" style="font-size: 12px;">THHT <=3</div>
                                        </fieldset> 
                                    </div>
                                </div>
                                <div kb_id="3580" class="navChil_btn">> 3 Pick Up Date => <span class='strong strong_mini'>mang ra bưu cục</span>
                                    <div class="tool_tip tool_tip_top" style="width: 110px;">  
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 lon3_thht" style="font-size: 12px;">THHT >3</div>
                                        </fieldset> 
                                    </div>
                                </div>
                            </fieldset>
                        </form>                      
                    </div>
                    <div inhouse_id="2" class="navChil_item">
                        <form>
                            <fieldset>
                                <legend><span class="strong">Chưa</span> lấy hàng</legend>
                                <div kb_id="2970" class="navChil_btn">Seller khiếu nại 3PL
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">  
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 kn_3pl" style="font-size: 12px;">KN 3PL</div>
                                        </fieldset> 
                                    </div>                                                                                  
                                </div>
                                <div kb_id="2972" class="navChil_btn"><span class="strong strong_mini">Đã lấy</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">chưa</span> cập nhật
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 buucuc" style="font-size: 12px;">bưu cục</div>
                                            <div class="strong btn-14 shipper" style="font-size: 12px;">shipper</div>
                                        </fieldset>               
                                    </div>
                                </div>
                                <div kb_id="2971" class="navChil_btn"><span class="strong strong_mini">Đã lấy</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">đã</span> cập nhật => đợi 24h
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 doi_24h_2971" style="font-size: 12px;">Đợi 24h</div>
                                            <div class="strong btn-14 qua_24h_2971" style="font-size: 12px;">Quá 24h <br> chuyển khiếu nại 3PL</div>
                                        </fieldset>               
                                    </div>
                                </div>                                
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend><span class="strong">Delivering</span></legend>
                                <div kb_id="2974" class="navChil_btn">< 3 ca (cách nhau 4 tiếng)<br><span class="strong strong_mini">Đang giao</span>
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 dang_giao_2974" style="font-size: 12px;">Đang giao</div>
                                        </fieldset>               
                                    </div>
                                </div>
                                <div kb_id="2976" class="navChil_btn">- Đủ 3 ca hoặc(cách nhau 4 tiếng)<br>- Khách gay gắt khiếu nại 3PL<br><span class="strong strong_mini">=>Khiếu nại</span>
                                     <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 khieu_nai_2976" style="font-size: 12px;">Khiếu nại</div>
                                        </fieldset>               
                                    </div> 
                                </div>
                                <div kb_id="2981" class="navChil_btn"><span class="strong strong_mini">Đã giao</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">chưa</span> cập nhật
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 khieu_nai_2981" style="font-size: 12px;">Khiếu nại</div>
                                        </fieldset>               
                                     </div>
                                </div>
                                <div kb_id="2979" class="navChil_btn"><span class="strong strong_mini">Đã giao</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">đã</span> cập nhật => đợi 24h
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 doi_24h_2979" style="font-size: 12px;">Đợi 24h</div>
                                            <div class="strong btn-14 qua_24h_2979" style="font-size: 12px;">Quá 24h <br> chuyển khiếu nại 3PL</div>
                                        </fieldset>               
                                    </div>
                                </div>
                                <div kb_id="2987" class="navChil_btn"><span class="strong strong_mini">Thất lạc</span> nhưng đang giao <br><span class="strong strong_mini">=>khiếu nại</span>
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 thatlac_2987" style="font-size: 12px;">khiếu nại</div>
                                        </fieldset>               
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend><span class="strong">Delivered</span></legend>
                                <div kb_id="3415" class="navChil_btn"><span class="strong strong_mini">Chưa giao</span> nhưng cập nhật giao thành công
                                    <div class="tool_tip tool_tip_top" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 chuagiao_3415" style="font-size: 12px;">Khiếu nại</div>
                                        </fieldset>               
                                    </div>  
                                </div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend><span class="strong">Return Initiated</span></legend>
                                <div kb_id="3418" class="navChil_btn"><span class="strong strong_mini">Hoàn</span> Shipper không gọi
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 hoan_3418" style="font-size: 12px;">hoàn</div>
                                        </fieldset>               
                                    </div>  
                                </div>
                                <div kb_id="3422" class="navChil_btn"><span class="strong strong_mini">Đã hoàn</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">chưa</span> cập nhật
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 dahoan_3422" style="font-size: 12px;">khiếu nại</div>
                                        </fieldset>               
                                    </div>  
                                </div>
                                <div kb_id="3421" class="navChil_btn"><span class="strong strong_mini">Đã hoàn</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">đã</span> cập nhật => đợi 24h
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 dahoan_3421" style="font-size: 12px;">Đợi 24h</div>
                                            <div class="strong btn-14 qua_24h_3421" style="font-size: 12px;">Quá 24h <br> chuyển khiếu nại 3PL</div>
                                        </fieldset>               
                                    </div>  
                                </div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend><span class="strong">Returned</span></legend>
                                <div kb_id="3426" class="navChil_btn">Chưa nhận nhưng Returned<br><span class="strong strong_mini">CÒN hạn 7 ngày</span> => khiếu nại
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 khieunai_3426" style="font-size: 12px;">khiếu nại</div>
                                        </fieldset>               
                                    </div>  
                                </div>
                                <div kb_id="3427" class="navChil_btn">Chưa nhận nhưng Returned<br><span class="strong strong_mini">QÚA hạn 7 ngày</span> => từ chối
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>b/s</legend>
                                            <div class="strong btn-14 tuchoi_3427" style="font-size: 12px;">từ chối</div>
                                        </fieldset>               
                                    </div>  
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div inhouse_id="3" class="navChil_item">
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                    </div>
                    <div inhouse_id="4" class="navChil_item">
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend>Sắp xếp chuyển hàng:</legend>
                                <div class="navChil_btn inhouse_nav_active">Đợi phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                                <div class="navChil_btn">Đã phẩn bổ</div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div class="inhouse_kb_right">
                <div class="inhouse_article_detail">
                </div>
            </div>
        </div>
    </div>
`;

function inhouse_kb() {
    let el_inhouse_kb_nav_chil = document.querySelector('.inhouse_kb_nav_chil');

    let el_inhouse_btn = document.querySelector('.inhouse_btn');
    let el_inhouse_kb = document.querySelector('.inhouse_kb');
    let el_inhouse_kb_container = document.querySelector('.inhouse_kb_container');

    let el_inhouse_kb_nav_btn = document.querySelectorAll('.inhouse_kb_nav > ul li');
    click_active(el_inhouse_kb_nav_btn, 'inhouse_kb_active', el_inhouse_kb_nav_chil);

    click_btn(Array.from(el_inhouse_kb_nav_chil.children));

    el_inhouse_btn.onclick = (e) => {
        e.stopPropagation();
        el_inhouse_kb.classList.remove('none');
    };

    el_inhouse_kb.onclick = (e) => {
        el_inhouse_kb.classList.add('none');
    };
    el_inhouse_kb_container.onclick = (e) => {
        e.stopPropagation();
    };
}

function click_active(element_ar, element_active = 'active', el_inhouse_kb_nav_chil) {
    element_ar.forEach((element) => {
        // console.log(element);
        element.onclick = (e) => {
            let element_current = e.target;
            let parent_element = e.target.parentElement;
            let element_active_prev = parent_element.querySelector('.' + element_active);

            element_active_prev.classList.remove(element_active);
            element_current.classList.add(element_active);

            let element_current_id = e.target.attributes.inhouse_id.value;
            console.log(e.target.attributes.inhouse_id.value);

            click_link(element_current_id, 'show_in_block', el_inhouse_kb_nav_chil);
        };
    });
}

function click_link(nav_item_id, element_active = 'show_in_block', el_inhouse_kb_nav_chil) {
    let el_inhouse_kb_nav_chil_content = Array.from(el_inhouse_kb_nav_chil.children);
    let navChil_item_prev = el_inhouse_kb_nav_chil.querySelector('.' + element_active);

    if (navChil_item_prev !== null) {
        navChil_item_prev.classList.remove(element_active);
    }

    el_inhouse_kb_nav_chil_content.forEach((navChil_item) => {
        // console.log(navChil_item);
        let navChil_item_id = navChil_item.attributes.inhouse_id.value;
        if (navChil_item_id === nav_item_id) {
            navChil_item.classList.add(element_active);
        }
    });

    // console.log(el_inhouse_kb_nav_chil);
}

function click_btn(el_inhouse_kb_nav_chil) {
    let el_inhouse_article_detail = document.querySelector('.inhouse_article_detail');
    el_inhouse_kb_nav_chil.forEach((element) => {
        Array.from(element.children).forEach((el_navChil_item) => {
            Array.from(el_navChil_item.children[0].children).forEach((navChil_btn) => {
                click_fetch(navChil_btn, el_inhouse_article_detail);
            });
        });
    });
}

function click_fetch(navChil_btn, el_inhouse_article_detail) {
    navChil_btn.onclick = (e) => {
        console.log(el_inhouse_article_detail);
        let kb_id = e.target.attributes.kb_id;
        if (kb_id !== undefined) {
            let kb_id_value = e.target.attributes.kb_id.value;
            // https://cs.shopee.vn/api/inhouse/cms/kb/mobile/v1/article?id=6121
            fetch(`https://cs.shopee.vn/api/inhouse/cms/kb/mobile/v1/article?id=${kb_id_value}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let content = JSON.parse(data.content);
                    console.log(content);
                    for (const content_item of content) {
                        console.log(content_item);
                    }

                    let html_kb = `
                    <h2 class="title">${data.article_title}</h2>
                    <div class="section_list">
                        ${content
                            .map((section_item, i, ar) => {
                                return `
                            <div class="section_item">
                                <div class="section_title">
                                    ${section_item.sectionTitle}
                                </div>
                                <div class="section_content ${ar.length === 1 ? '' : 'none'}">
                                    ${section_item.sectionContent}
                                </div>
                            </div>
                            `;
                                // ${section_item.sectionContent}
                            })
                            .join('')}
                        
                    </div>
                    `;
                    el_inhouse_article_detail.innerHTML = '';
                    el_inhouse_article_detail.insertAdjacentHTML('afterbegin', html_kb);
                    let el_section_item = el_inhouse_article_detail.querySelectorAll('.section_item');
                    console.log(el_section_item);
                    el_section_item.forEach((element) => {
                        let el_title = element.children[0];
                        let el_content = element.children[1];
                        el_title.onclick = (e) => {
                            console.log(el_title);
                            el_content.classList.toggle('none');
                        };
                    });
                });
        }
    };
}


function macro_coppy(params) {
    // Trong EDT
    let el_b_dukien = document.querySelector('.b_dukien')
    let el_b_quadukien = document.querySelector('.b_quadukien')
    let el_s_dukien = document.querySelector('.s_dukien')
    let el_s_quadukien = document.querySelector('.s_quadukien')
    click_marp_coppy(el_b_dukien, 'Shopee rất tiếc khi đã đến ngày giao dự kiến mà đơn hàng vẫn chưa được giao đến bạn.\nShopee kiểm tra thấy đơn hàng của bạn đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã đến ngày giao hàng dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX')
    click_marp_coppy(el_b_quadukien, 'Shopee rất tiếc khi đã quá thời gian giao hàng dự kiến mà đơn hàng vẫn chưa được giao đến bạn.\nShopee kiểm tra thấy đơn hàng của bạn đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã quá thời gian giao dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX.')
    click_marp_coppy(el_s_dukien, 'Shopee rất tiếc khi đã đến ngày giao dự kiến mà đơn hàng vẫn chưa được giao đến cho người mua.\nShopee kiểm tra thấy đơn hàng của bạn và người mua đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã đến ngày giao hàng dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn kêu người mua chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn cũng như người mua có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX')
    click_marp_coppy(el_s_quadukien,'Shopee rất tiếc khi đã quá thời gian giao hàng dự kiến mà đơn hàng vẫn chưa được giao đến cho người mua.\nShopee kiểm tra thấy đơn hàng của bạn và người mua đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã quá thời gian giao dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn kêu người mua chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn cũng như người mua có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX.')

    // >=3 ngày
    let el_ba_ngay = document.querySelector('.ba_ngay')
    let el_hoi_giao_3408 = document.querySelector('.hoi_giao_3408')
    let el_quan_huyen = document.querySelector('.quan_huyen')
    let el_qua_edt3 = document.querySelector('.qua_edt3')
    let el_haimuoi_ngay = document.querySelector('.haimuoi_ngay')
    let el_qua_leadtime = document.querySelector('.qua_leadtime')
    let el_chua_leadtime = document.querySelector('.chua_leadtime')
    let el_be3_thht = document.querySelector('.be3_thht')
    let el_lon3_thht = document.querySelector('.lon3_thht')
    let el_kn_3pl = document.querySelector('.kn_3pl')
    let el_buucuc = document.querySelector('.buucuc')
    let el_shipper = document.querySelector('.shipper')
    let el_doi_24h = document.querySelector('.doi_24h_2971')
    let el_qua_24h_2971 = document.querySelector('.qua_24h_2971')
    let el_dang_giao_2974 = document.querySelector('.dang_giao_2974')
    let el_khieu_nai_2976 = document.querySelector('.khieu_nai_2976')
    let el_khieu_nai_2981 = document.querySelector('.khieu_nai_2981')
    let el_doi_24h_2979 = document.querySelector('.doi_24h_2979')
    let el_qua_24h_2979 = document.querySelector('.qua_24h_2979')
    let el_thatlac_2987 = document.querySelector('.thatlac_2987')
    let el_chuagiao_3415 = document.querySelector('.chuagiao_3415')
    let el_hoan_3418 = document.querySelector('.hoan_3418')
    let el_dahoan_3422 = document.querySelector('.dahoan_3422')
    let el_dahoan_3421 = document.querySelector('.dahoan_3421')
    let el_qua_24h_3421 = document.querySelector('.qua_24h_3421')
    let el_khieunai_3426 = document.querySelector('.khieunai_3426')
    let el_tuchoi_3427 = document.querySelector('.tuchoi_3427')

    click_marp_coppy(el_ba_ngay, 'Đơn hàng hiện tại đang trong quá trình vận chuyển, tuy nhiên Shopee kiểm tra thấy đơn đang ở khu vực XXXXX từ lúc XXXXX và chưa thấy có cập nhật hành trình mới.\nBạn cho phép Shopee kiểm tra với đơn vị vận chuyển để đốc thúc giao hàng cho người mua và thúc đẩy giao hàng đến người mua trong 1-2 ngày làm việc tiếp theo nhé.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã dừng hành trình >=3 ngày. MVĐ: ')
    click_marp_coppy(el_hoi_giao_3408,'Dear Team,\n\nNhờ hỗ trợ hối giao đơn trả góp giá trị cao. MVĐ: ')
    click_marp_coppy(el_quan_huyen, 'Shopee kiểm tra thấy đơn đang ở khu vực quận huyện của người mua.\nShopee sẽ chuyển đơn vị vận chuyển hối giao để bạn sớm nhận được đơn hàng, thời gian xử lý là 1-2 ngày làm việc tiếp theo.\nThông thường đơn hàng đã tới quận/huyện của người mua sẽ được đơn vị vận chuyển sắp xếp giao hàng trong các ca giao sắp tới, bạn có thể chủ động theo dõi hành trình trên web đơn vị vận chuyển nhé.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển, bạn có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã đến quận/huyện của Buyer. MVĐ: ')
    click_marp_coppy(el_qua_edt3,'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì đã quá thời gian dự kiến mà vẫn chưa nhận được hàng.\nMình sẽ chuyển ngay thông tin đến đơn vị vận chuyển để hối thúc giao gấp đơn hàng này cho người mua, thời gian xử lý 1-2 ngày làm việc.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển , bạn có thể liên hệ theo thông tin XXXXX')
    click_marp_coppy(el_haimuoi_ngay, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì vẫn chưa nhận được hàng.\nDo đơn chưa có cập nhật trạng thái mới, chưa về đến Việt Nam, mình sẽ chuyển ngay thông tin đến bộ phận liênquan để kiểm tra thông tin đơn hàng này cho người mua, thời gian xử lý 3 đến 5 ngày làm việc (không tính thứ 7, chủ nhật và các ngày lễ).\nMong bạn thông cảm đợi thông tin từ Shopee ạ.\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn CB quá 20 ngày chưa về tới VN\nOrder SN: ')
    click_marp_coppy(el_qua_leadtime, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì chưa nhận được hàng.\nMình sẽ chuyển ngay thông tin đến đơn vị vận chuyển để hối thúc giao gấp đơn hàng này cho người mua, thời gian xử lý 1-2 ngày làm việc tiếp theo.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, người mua có thể liên hệ theo thông tin XXXXX và cung cấp mã vận đơn là XXXXX.\nNếu cần mua hàng gấp, lần sau người mua có thể cân nhắc lựa chọn đặt hàng tại các shop nội địa, đặc biệt là những shop có hỗ trợ vận chuyển hỏa tốc để nhận hàng nhanh chóng hơn\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn CB đã quá thời gian giao hàng có MVĐ: ')
    click_marp_coppy(el_chua_leadtime,'Đơn hàng đã được đơn vị vận chuyển tiếp nhận ở Việt Nam. Thời gian giao hàng dự kiến là XXXXX ngày làm việc.\nĐơn đang trên đường trung chuyển giữa các bưu cục để đến khu vực của người mua nên Shopee khó có thể can thiệp đốc thúc bưu cục giao hàng để giao ngay đơn hàng này.\nNgười mua có thể chủ động theo dõi hành trình đơn hàng bằng cách sử dụng mã vận đơn XXXXX để kiểm tra trên web của đơn vị vận chuyển.\nTrong trường hợp cần hàng gấp, người mua có thể liên hệ trực tiếp với đơn vị vận chuyển theo thông tin XXXXX.\nNếu cần mua hàng gấp, lần sau người mua có thể cân nhắc lựa chọn đặt hàng tại các shop nội địa, đặc biệt là những shop có hỗ trợ vận chuyển hỏa tốc để nhận hàng nhanh chóng hơn nhé.')
    click_marp_coppy(el_be3_thht,'Qua kiểm tra mình thấy đơn hàng của bạn trễ hạn lấy hàng rồi ạ.\nNên mình sẽ hối lấy cho đơn hàng của bạn ạ.\nShopee sẽ hối thúc đơn vị vận chuyển đến lấy hàng trong vòng 1-2 ngày làm việc tiếp theo để có thể nhanh chóng giao hàng.\nĐồng thời bạn lưu ý nếu quá 3 ngày kể từ ngày XXXXX đơn hàng chưa cập nhật lấy hàng thành công thì bạn đem kiện hàng ra bưu cục XXXXX gần nhất, xin bưu cục hoá đơn hoặc hình ảnh chứng mình bạn đã gửi tại bưu cục và cung cấp lại cho Shopee ạ.\n\nDanh Sách Bưu Cục J&T Express bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79397-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-J-T-Express\nDanh Sách Bưu Cục NinjaVan bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79395-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-NinjaVan\n\nVà quan trọng hơn nếu như quá ngày XXXXX này mà đơn hàng chưa cập nhật lấy hàng thành công. Để tránh khiếu nại hủy và không khiếu nại lại được nữa Shopee xin phép dự trù trước cho bạn về thời gian bấm lại khiếu nại.\nNếu khiếu nại hủy trước 7h thì bạn vui lòng bấm khiếu nại trước 7h cùng ngày\nNếu khiếu nại hủy sau 7h thì bạn vui lòng bấm khiếu nại trước 7h ngày hôm sau.')
    click_marp_coppy(el_lon3_thht,'Qua kiểm tra mình thấy hiện đã quá 3 ngày kể từ ngày XXXXX đơn hàng chưa cập nhật lấy hàng thành công. Để tránh khiếu nại bị hủy, bạn vui lòng chủ động mang gói hàng ra bưu cục gần nhất gửi hàng, Xin bưu cục hoá đơn và cung cấp lại cho Shopee ạ.\n\nDanh Sách Bưu Cục J&T Express bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79397-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-J-T-Express\nDanh Sách Bưu Cục NinjaVan bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79395-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-NinjaVan\n\nVà quan trọng hơn nếu như quá ngày XXXXX này mà đơn hàng chưa cập nhật lấy hàng thành công. Để tránh khiếu nại hủy và không khiếu nại lại được nữa Shopee xin phép dự trù trước cho bạn về thời gian bấm lại khiếu nại.\nNếu khiếu nại hủy trước 7h thì bạn vui lòng bấm khiếu nại trước 7h cùng ngày\nNếu khiếu nại hủy sau 7h thì bạn vui lòng bấm khiếu nại trước 7h ngày hôm sau.')
    click_marp_coppy(el_kn_3pl,'Dạ người bán giúp Shopee thông cảm chờ ca lấy hàng tiếp theo.\nĐồng thời, Shopee ghi nhận và chuyển thông tin đến đơn vị vận chuyển để xác minh trường hợp này, thời gian xử lý từ 3-5 ngày làm việc (không tính thứ 7, chủ nhật và các ngày lễ).\nNếu đơn hàng bị tính tỉ lệ giao hàng trễ hoặc tỉ lệ đơn hàng không thành công, Shop vui lòng liên hệ lại để Shopee tiếp tục hỗ trợ.\n\n\nĐể biết thêm cách liên hệ đơn vị vận chuyển Shopee bạn tham khảo đường dẫn sau: https://banhang.shopee.vn/edu/article/3134\n\n\nDear Team,\n\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper chưa liên hệ lấy nhưng cập nhật: Không lấy thành công / Hẹn lại ngày lấy / Người bán chưa cuẩn bị hàng\nMVĐ: ')
    click_marp_coppy(el_buucuc,'Dạ trường hợp này bạn giúp Shopee cung cấp biên nhận giao hàng (tin nhắn xác nhận, biên nhận có thông tin và chữ ký của shipper/ bưu cục) ạ.\n\nNếu chưa có những thông tin trên bạn cung cấp giúp Shopee nhưng thông tin sau:\n- Địa chỉ bưu cục mà người bán đã gửi hàng\n- Hình ảnh ngoại quan của gói hàng\n\nShopee đã tiếp nhận thông tin từ bạn. Shopee xin phép chuyển bộ phận liên quan để hỗ trợ bạn tốt nhất. Vì hiện bạn chưa cung cấp được biên nhận nên Shopee sẽ không hứa chắc đơn vị vận chuyển sẽ hỗ trợ. Thời gian xử lí từ 3 đến 5 ngày làm việc. Shopee sẽ cố gắng phản hồi đến bạn ngày khi có kết quả nhé.\n\nDear Team,\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper đã lấy hàng nhưng BE/ Portal chưa cập nhật Pickup Done\n- Web 3PL chưa cập nhật lấy thành công\nMVĐ: ')
    click_marp_coppy(el_shipper,'Dạ trường hợp này bạn giúp Shopee cung cấp biên nhận giao hàng (tin nhắn xác nhận, biên nhận có thông tin và chữ ký của shipper/ bưu cục) ạ.\n\nNếu chưa có những thông tin trên bạn cung cấp giúp Shopee nhưng thông tin sau:\n- Mô tả về shipper hoặc số điện thoại của shipper đến lấy hàng.\n- Hình ảnh/video thể hiện shipper đã đến lấy hàng của người bán có rõ mã đơn hàng/mã vận đơn.\n- Hình ảnh ngoại quan của gói hàng.\n\nShopee đã tiếp nhận thông tin từ bạn. Shopee xin phép chuyển bộ phận liên quan để hỗ trợ bạn tốt nhất. Vì hiện bạn chưa cung cấp được biên nhận nên Shopee sẽ không hứa chắc đơn vị vận chuyển sẽ hỗ trợ. Thời gian xử lí từ 3 đến 5 ngày làm việc. Shopee sẽ cố gắng phản hồi đến bạn ngày khi có kết quả nhé.\n\nDear Team,\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper đã lấy hàng nhưng BE/ Portal chưa cập nhật Pickup Done\n- Web 3PL chưa cập nhật lấy thành công\nMVĐ: ')
    click_marp_coppy(el_doi_24h,'Shopee kiểm tra thấy website của đơn vị vận chuyển đã cập nhật thông tin lấy hàng thành công vào ngày XXXXX\nNhờ người bán chờ thêm trong 24h để hệ thống đồng bộ và cập nhật trạng thái đúng ạ.\nTrong trường hợp không mong muốn là đơn bị hủy, nhờ người bán vui lòng liên hệ lại để Shopee được hỗ trợ xác minh với đơn vị vận chuyển và xử lý ạ.')
    click_marp_coppy(el_qua_24h_2971,'Shopee kiểm tra thấy website của đơn vị vận chuyển đã cập nhật thông tin lấy hàng thành công vào ngày XXXXX\nNhưng hiện quá 24h hệ thống Shopee chưa đồng bộ nên Shopee sẽ chuyển thông tin đến đơn vị vận chuyển và bộ phận liên quan để kiểm tra lại trạng thái đúng của đơn hàng này, thời gian xử lý 3-5 ngày làm việc.\n\n\nDear Team,\nNhờ hỗ trợ xác minh cập nhật đúng trạng thái:\n- Đã lấy hàng nhưng BE/ Portal chưa cập nhật\n- Web 3PL đã cập nhật giao thành công\n- Đã quá 24h kể từ khi nhận hàng\nMVĐ: ')
    click_marp_coppy(el_dang_giao_2974,'Shopee kiểm tra thấy đơn vị vận chuyển cập nhật thông tin giao không thành công vào lúc XXXXX\nĐơn hàng này vẫn còn ca giao theo quy trình, bạn thông cảm theo dõi đơn hàng và chờ shipper liên hệ giao trong ca tiếp theo.\nNếu shipper cập nhật sai trạng thái lần nữa, bạn vui lòng liên hệ lại ngay với Shopee để được hỗ trợ.')
    click_marp_coppy(el_khieu_nai_2976,'Dear Team,\n\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper chưa liên hệ giao nhưng cập nhật giao không thành công / Hẹn lại ngày giao / Không liên hệ được người mua\n- Đã đủ 3 ca giao\n- Khách gay gắt yêu cầu khiếu nại\nMVĐ: ')
    click_marp_coppy(el_khieu_nai_2981,'Dạ trường hợp này bạn giúp Shopee cung cấp hình ảnh kiện hàng thấy rõ mã vận đơn mà bạn đã nhận được ạ.\n\nDear Team,\nNhờ hỗ trợ xác minh khiếu nại:\n- Đã giao hàng nhưng BE/ Portal chưa cập nhật Delivery Done\n- Web 3PL chưa cập nhật giao thành công\nMVĐ: ')
    click_marp_coppy(el_doi_24h_2979,'Shopee kiểm tra thấy website của đơn vị vận chuyển đã cập nhật thông tin giao hàng thành công vào ngày XXXXX\nTrường hợp này người mua giúp Shopee chờ thêm trong vòng 24h tiếp theo để hệ thống đồng bộ và cập nhật trạng thái đúng ạ.\nNếu sau thời gian trên trạng thái đơn vẫn chưa được cập nhật, người mua vui lòng liên hệ lại để được hỗ trợ kiểm tra ạ.')
    click_marp_coppy(el_qua_24h_2979,'Shopee kiểm tra thấy website của ĐVVC đã cập nhật thông tin giao hàng thành công vào ngày XXXXX\nNhưng hiện quá 24h hệ thống Shopee chưa đồng bộ nên Shopee sẽ chuyển thông tin đến đơn vị vận chuyển và bộ phận liên quan để kiểm tra lại trạng thái đúng của đơn hàng này, thời gian xử lý 3-5 ngày làm việc.\n\nDear Team,\nNhờ hỗ trợ xác minh cập nhật đúng trạng thái:\n- Đã giao hàng nhưng BE/ Portal chưa cập nhật Delivery Done\n- Web 3PL đã cập nhật giao thành công\n- Đã quá 24h kể từ khi nhận hàng\nMVĐ: ')
    click_marp_coppy(el_thatlac_2987,'Dear Team,\n- Đơn hàng được báo thất lạc/ hoàn hàng nhưng hệ thống Shopee chưa ghi nhận thông tin\n- MVĐ: \nNhờ team hỗ trợ xác minh')
    click_marp_coppy(el_chuagiao_3415,'Dear Team,\n\nNhờ hỗ trợ xác minh khiếu nại:\n- Chưa giao hàng nhưng cập nhật Giao thành công\n- Khách không đồng ý với ePOD/ không có ePOD/ ePOD không hợp lệ (CS chọn và note đúng lý do)\nMVĐ: ')
    click_marp_coppy(el_hoan_3418, 'Shopee sẽ chuyển thông tin kiểm tra với phía đơn vị vận chuyển, thời gian xử lý là 3-5 ngày làm việc.\nĐơn hàng này đã được chuyển hoàn cho người bán nên rất tiếc hàng sẽ không thể tiếp tục giao.\nTrường hợp người mua bị tính tỉ lệ giao hàng không thành công dẫn đến không chọn hình thức thanh toán khi nhận hàng được, người mua vui lòng liên hệ lại Shopee để được hỗ trợ ạ.\n\n\nDear team,\n\nKhách khiếu nại shipper chưa liên hệ giao đủ 3 ca nhưng cập nhật chuyển hoàn\nMVĐ: \nNhờ team hỗ trợ xác minh')
    click_marp_coppy(el_dahoan_3422,'Dạ trường hợp này người bán giúp Shopee cung cấp hình ảnh gói hàng mà người bán nhận được thấy rõ mã vận đơn trên gói hàng ạ.\n\nVận chuyển >> Hoàn hàng >> Các vấn đề khác\n\nDear team,\n\nSeller khiếu nại đã nhận được hàng hoàn nhưng chưa cập nhật đã hoàn thành công\nMVĐ: \nNhờ team hỗ trợ xác minh')
    click_marp_coppy(el_dahoan_3421,'Trường hợp này người bán giúp Shopee chờ thêm trong vòng 24h tiếp theo để hệ thống đồng bộ và cập nhật trạng thái đúng ạ.\nNếu sau thời gian trên trạng thái đơn vẫn chưa được cập nhật, người mua vui lòng liên hệ lại để được hỗ trợ kiểm tra ạ.')
    click_marp_coppy(el_qua_24h_3421,'Shopee kiểm tra hiện quá 24h hệ thống Shopee chưa đồng bộ nên Shopee sẽ chuyển thông tin đến đơn vị vận chuyển và bộ phận liên quan để kiểm tra lại trạng thái đúng của đơn hàng này, thời gian xử lý 3-5 ngày làm việc.\n\n\nDear Team,\n\nNhờ hỗ trợ xác minh cập nhật đúng trạng thái:\n- Shipper đã hoàn hàng nhưng BE/ Portal chưa cập nhật Delivery Fail\n- Web 3PL đã cập nhật hoàn thành công\nMVĐ:')
    click_marp_coppy(el_khieunai_3426,'Dear team,\n\nSeller khiếu nại chưa nhận được hàng hoàn nhưng cập nhật đã hoàn thành công\nMVĐ: \nNhờ team hỗ trợ xác minh')
    click_marp_coppy(el_tuchoi_3427,'Do đã quá thời hạn khiếu nại nên Shopee rất tiếc chưa hỗ trợ được, mong khách thông cảm.\nShopee có gửi thông báo đến người bán mỗi khi đơn hàng được cập nhật trả thành công, trong đó có thông tin cần phải khiếu nại trong vòng 24h. Mong bạn lưu ý thông tin này và liên hệ sớm hơn với Shopee cho những đơn hàng sau để tránh những phát sinh không đáng có.')
}

function click_marp_coppy(params, info) {
    // console.log(params);
    params.onclick = () => {
        navigator.clipboard.writeText(info)
    }
}

