let htmlTeamplate_work = `
<div class="Auto_saleforce none">
        <button type="button" class="btn_Edit">Edit</button>
        <button type="button" class="btn_LDP">
            LDP
            <div class="btn_LDP_wrap none">
                <div type="button" class="btn_LDP_TDHTGH">TDHT_GH</div>
                <div type="button" class="btn_LDP_HoiGiao">H_Giao</div>
                <div type="button" class="btn_LDP_HoiLay">H_Lay</div>
                <div type="button" class="btn_LDP_CCHT">Chat_CHT</div>            
            </div>
        </button>
        <button type="button" class="btn_Macro">
            Marcro
            <div class="btn_Macro_wrap none">
                <div type="button" class="btn_Macro_Dearteam">Dear Team</div>
                <div type="button" class="btn_Macro_Dearteam">??????</div>
            </div>
        </button>
        <button type="button" class="btn_Erorr">
            Erorr
            <div class="btn_Erorr_wrap none">
                <div type="button" class="btn_Erorr_1">Erorr 1</div>
                <div type="button" class="btn_Erorr_2">Erorr 2</div>                
                <div type="button" class="btn_Erorr_3">Erorr 3</div>                
            </div>
        </button>
        <button type="button" class="btn_Word_ID">ID: ?</button>
        <button type="button" class="btn_Test2">Test2</button>
        <button type="button" class="btn_Test3">Test3</button>
        <button type="button" class="btn_ResetLocal">RSL</button>
        <label class="LB_Pro">Pro: ?</label>
        <label class="wrap_time">
            <label class="LB_time_m">00</label>:<label class="LB_time_s">00</label>        
        </label>            
        <label class="Time_current">00:00:00</label>
        <label class="Time_current_chat">00:00:00</label>
        
    </div>      
</div>
`


let html_Nav_left = `
<div class="nav_left">
<div class="btn_ldp button_long_hover">
    LDP
    <div class="menu_ldp button_long_menu lv_first">
        <div class="btn_ldp_edit button_long_hover">Edit</div>
        <div class="btn_ldp_dtht button_long_hover">TDHT</div>
        <div class="btn_ldp_hg button_long_hover">HG</div>
        <div class="btn_ldp_hl button_long_hover">HL</div>
        <div class="btn_ldp_ccht button_long_hover">CCHT</div>
    </div>
</div>
<div class="btn_macro button_long ">
    Macro
    <div class="menu_macro button_long_menu lv_first">
        <div class="item_dvvc button_long">DVVC
            <div class="menu_dvvc button_long_menu lv_next">
                <div class="item_spx button_long button_action">SPX</div>
                <div class="item_njv button_long button_action">NJV</div>
                <div class="item_bet button_long button_action">BEST</div>
                <div class="item_jt button_long button_action">J&T</div>
                <div class="item_ghtk button_long button_action">GHTK</div>
                <div class="item_ghn button_long button_action">GHN</div>
                <div class="item_vnp button_long button_action">VNP</div>
                <div class="item_vtp button_long button_action">VTP</div>
                <div class="item_bedeli button_long button_action">beDeli</div>
                <div class="item_brab button_long button_action">Grab</div>
                <div class="item_spxi button_long button_action">SPXI</div>
                <div class="item_cb button_long button_action">CB</div>
            </div>
        </div>
        <div class="item_ht button_long">Hoàn tiền
            <div class="menu_ht button_long_menu lv_next">
                <div class="item_tks button_long">TK-S
                    <div class="menu_tks button_long_menu lv_next">
                        <div class="item_tks_huy button_long button_action">Hủy</div>
                        <div class="item_tks_hoan button_long button_action">Hoàn</div>
                        <div class="item_tks_thht button_long button_action">THHT</div>
                    </div>
                </div>
                <div class="item_cc button_long">CC
                    <div class="menu_cc button_long_menu lv_next">
                        <div class="item_cc_huy button_long button_action">Hủy</div>
                        <div class="item_cc_hoan button_long button_action">Hoàn</div>
                        <div class="item_cc_thht button_long button_action">THHT</div>
                    </div>
                </div>
                <div class="item_spay button_long">S-Pay
                    <div class="menu_spay button_long_menu lv_next">
                        <div class="item_spay_huy button_long button_action">Hủy</div>
                        <div class="item_spay_hoan button_long button_action">Hoàn</div>
                        <div class="item_spay_thht button_long button_action">THHT</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item_cnl button_long">CNLog
            <div class="menu_cnl button_long_menu lv_next">
                <div class="item_cnl_hg button_long">Hối Giao
                    <div class="menu_cnl_hg button_long_menu lv_next">
                        <div class="item_cnl_hg_3 button_long button_action">>=3</div>
                        <div class="item_cnl_hg_qh button_long button_action">Đến QH</div>
                    </div>
                </div>
                <div class="item__cnl_stt button_long">STT
                    <div class="menu_cnl_stt button_long_menu lv_next">
                        <div class="item_cnl_stt_dg button_long button_action">Đang giao</div>
                        <div class="item_cnl_stt_hoan button_long button_action">Hoàn</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="btn_kb button_long inhouse_btn">
    KB
</div>
<div class="btn_system button_long">
    System
    <div class="menu_system button_long_menu lv_first">
        <div class="item_system_id button_long button_action">ID</div>
        <div class="item_system_chat button_long button_action">Chat</div>
    </div>
</div>
<div class="btn_test button_long">TEST</div>
</div>
`

let html_toggle_switch = `
    <label class="toggle_switch">
        <input class="on_off_audio" type="checkbox" checked="true">
        <span></span>
    </label>
`

let htmlsearch_LDP = `
        <div class="search_container">
            <div class="search_box">                
                <div class="search_button">                          
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" Placeholder="Tìm kiếm L3" class="search_input"/>                
            </div>
            <div class="search_result_box">
                                
            </div>
        </div>  
`

let htmlONOFF = `
    <button type="button" class="btn_ONOFF"></button>
`

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

//HTML tool gắn trong word
let html_Nav_right = `
    <div class="nav_right">
       
    </div>
`
// - Đơn quá EDT+3(ngoại trừ đơn CB)<br>
// - Đơn cập nhật sai trạng thái do lỗi 3PL<br>
// - Lỗi thái độ của CS
//HTML ở bên trang tool
let htmlTeamplate_tool = `
    <div class="Auto_saleforce_tool">
        <button type="button" class="btn_tool_ID">ID: ?</button>
    </div>
`

let html_time_lock = `
<div class="container_time">
    <div class="clock_time" >
        <div class="clock_circle" style="--clr:#ff2972;">
            <div class="dots hr_dot"></div>
            <svg>
                <circle cx="26" cy="26" r="26"></circle>
                <circle cx="26" cy="26" r="26" id="hh"></circle>
            </svg>
            <div class="clock_hours">00</div>
        </div>
        <div class="clock_circle" style="--clr:#fee800;">
            <div class="dots min_dot"></div>
            <svg>
                <circle cx="26" cy="26" r="26"></circle>
                <circle cx="26" cy="26" r="26" id="mm"></circle>
            </svg>
            <div class="clock_minutes">00</div>
        </div>
        <div class="clock_circle" style="--clr:#04fc43;">
            <div class="dots sec_dot"></div>
            <svg>
                <circle cx="26" cy="26" r="26"></circle>
                <circle cx="26" cy="26" r="26" id="ss"></circle>
            </svg>
            <div class="clock_seconds">00</div>
        </div>
        
    </div>
 </div>
`

let html_time_time = `
    <div class="container_time_time" draggable="true">        
        <div class="time_hour"></div>:
        <div class="time_minutes"></div>:
        <div class="time_second"></div>
    </div>
`

let html_inhouse_kb = `
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
                                <div kb_id="2976" class="navChil_btn"><span class="strong strong_mini">Đã giao</span> nhưng chưa cập nhật<br>3PL <span class="strong strong_mini">đã</span> cập nhật => đợi 24h
                                    <div class="tool_tip tool_tip_right" style="width: 110px;">                                        
                                        <fieldset style="padding: 5px;">
                                            <legend>s</legend>
                                            <div class="strong btn-14 doi_24h_2976" style="font-size: 12px;">Đợi 24h</div>
                                            <div class="strong btn-14 qua_24h_2976" style="font-size: 12px;">Quá 24h <br> chuyển khiếu nại 3PL</div>
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
`



// lắng nghe keybroad
//document.addEventListener("keydown", function (event) {console.log(event)}, false)

window.onload = function () {


    var S_order = document.URL.toString().search('cs.shopee.vn/portal/info/')
    var S_work = document.URL.toString().search('shopeecs.lightning.force.com/')
    var S_inhouse = document.URL.toString().search('cs.shopee.vn/portal/inhouse/')



    var S_Tool_Recovery = document.URL.toString().search('https://docs.google.com/spreadsheets/d/1I0l-pwRHc3AFTRkK_dVZtN2qJ7rPjqm_o5sg-Isg7h4/')
    console.log(
        'S_order: ', S_order,
        'S_work: ', S_work,
        'S_Tool_Recovery: ', S_Tool_Recovery
    )



    //word
    if (S_inhouse != -1 && S_order == -1) {

        var copy_Pro

        const body = document.querySelector('body')
        const HTML = document.querySelector('HTML')
        body.insertAdjacentHTML("afterend",
            htmlTeamplate_work +=
            html_Nav_right +=
            html_Nav_left +=
            htmlONOFF +=
            html_time_time +=
            html_inhouse_kb
        );

        Get_Word_ID()
        //ONOFF=======================================================================
        var ONOFF = document.querySelector('.btn_ONOFF')
        ONOFF.onclick = () => {
            //var e1 = document.querySelector('.Auto_saleforce')
            var e2 = document.querySelector('.Auto_saleforce_Order_Info')
            var e3 = document.querySelector('.nav_right')
            var e4 = document.querySelector('.nav_left')
            var e5 = document.querySelector('.search_container')
            var e6 = document.querySelector('.container_time')
            var e7 = document.querySelector('.toggle_switch')
            //e1.classList.toggle("none")
            e2 !== null ? e2.classList.toggle("none") :
                e3.classList.toggle("none")
            e4.classList.toggle("none")
            e5.classList.toggle("none")
            e6.classList.toggle("none")
            e7.classList.toggle("none")

            Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {

                console.log(Object.keys(e.attributes).length);
                if (Object.keys(e.attributes).length === 2) {
                    console.log(e);
                    console.log(e.children[0].children[0].children[0]);
                    console.log(e.children[0].children[0].children[0].children.length);
                    if (e.children[0].children[0].children[0].children.length === 3) {
                        e.children[0].children[0].children[0].children[2].classList.toggle("none")
                    }
                }

            });

        }
        //=======================================================================


        //RIÊNG SEARCH ======================================================================


        Get_el_main_container(document.querySelector('#root'), 1)
            .then((e1) => {
                console.log(e1);
                return Get_el_main_container(e1, 2)
            })
            .then((e2) => {
                console.log(e2[0]);
                console.log(e2[1]);
                e2[0].style.overflow = "inherit"
                e2[0].lastElementChild.insertAdjacentHTML("afterend", htmlsearch_LDP + html_time_lock + html_toggle_switch)
                START_Search()
                time_clock()

                var el_on_off_audio = document.querySelector('.on_off_audio')
                el_on_off_audio.onclick = (e) => {
                    if (e.altKey) {
                        var audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
                        audio_request.play();
                        console.log('chơi nhạc');
                    }
                }

                return Get_el_main_container(e2[1], 3)
            })



        //Đồng hồ
        dragElement(document.querySelector('.container_time_time'))


        //RIÊNG SEARCH ======================================================================



        //=======================================================================

        var wrapperLDP = null


        //UPDATE===========================================================================
        //menu cấp 1
        var el_item_ldp = document.querySelector('.btn_ldp')
        var el_menu_ldp = Array.from(document.querySelector('.menu_ldp').children)
        if (el_menu_ldp !== null) {
            el_menu_ldp.forEach((e) => {
                console.log(e);
                switch (e.classList[0]) {
                    case 'btn_ldp_edit':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            edit(e)
                        }
                        keyalt_click(e, 'Backquote')
                        break

                    case 'btn_ldp_dtht':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            console.log(123);
                            TDHTGH()
                        }
                        keyalt_click(e, 'Digit1')
                        break

                    case 'btn_ldp_hg':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            HoiGiao()
                        }
                        keyalt_click(e, 'Digit2')
                        break

                    case 'btn_ldp_hl':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            HoiLay()
                        }
                        keyalt_click(e, 'Digit3')
                        break;

                    case 'btn_ldp_ccht':
                        e.onclick = (event) => {
                            event.stopPropagation()
                            CCHT()
                        }
                        keyalt_click(e, 'Digit0')
                        break;

                    default:
                        console.log('Item_word: không có ', e)
                        break
                }
            });
        } else {
            console.log('Không tìm thấy el_LDP_box')
        }
        el_item_ldp.onclick = (e) => {
            e.stopPropagation()
            // select(el_item_ldp)
        }

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

        var el_item_test = document.querySelector('.btn_test')
        el_item_test.onclick = (ev) => {
            let el_ldp = document.getElementById('62')
            console.log(el_ldp);
            el_ldp.focus()

            document.execCommand('insertText', false, `Khiếu nại điểm phạt LSR`);

            let munu = document.querySelector('.cs-cascader-menus')
            munu.children[0].children[0].click()


        }

        inhouse_kb()
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

            // console.log(el_inhouse_kb_nav_chil);
        }

        function click_btn(el_inhouse_kb_nav_chil) {
            let el_inhouse_article_detail = document.querySelector('.inhouse_article_detail')
            el_inhouse_kb_nav_chil.forEach(element => {
                Array.from(element.children).forEach(el_navChil_item => {
                    Array.from(el_navChil_item.children[0].children).forEach((navChil_btn) => {
                        click_fetch(navChil_btn, el_inhouse_article_detail)

                    })
                });
            });
        }

        function click_fetch(navChil_btn, el_inhouse_article_detail) {
            navChil_btn.onclick = (e) => {
                console.log(el_inhouse_article_detail);
                let kb_id = e.target.attributes.kb_id
                if (kb_id !== undefined) {
                    let kb_id_value = e.target.attributes.kb_id.value
                    // https://cs.shopee.vn/api/inhouse/cms/kb/mobile/v1/article?id=6121
                    fetch(`https://cs.shopee.vn/api/inhouse/cms/kb/mobile/v1/article?id=${kb_id_value}`)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data)
                            let content = JSON.parse(data.content)
                            console.log(content)
                            for (const content_item of content) {
                                console.log(content_item);
                            }


                            let html_kb = `
                            <h2 class="title">${data.article_title}</h2>
                            <div class="section_list">
                                ${content.map((section_item, i, ar) => {
                                return (`
                                    <div class="section_item">
                                        <div class="section_title">
                                            ${section_item.sectionTitle}
                                        </div>
                                        <div class="section_content ${ar.length === 1 ? '' : 'none'}">
                                            ${section_item.sectionContent}
                                        </div>
                                    </div>
                                    `)
                                // ${section_item.sectionContent}
                            }).join('')}
                                
                            </div>
                            `
                            el_inhouse_article_detail.innerHTML = ''
                            el_inhouse_article_detail.insertAdjacentHTML('afterbegin', html_kb)
                            let el_section_item = el_inhouse_article_detail.querySelectorAll('.section_item')
                            console.log(el_section_item);
                            el_section_item.forEach(element => {
                                let el_title = element.children[0]
                                let el_content = element.children[1]
                                el_title.onclick = (e) => {
                                    console.log(el_title);
                                    el_content.classList.toggle('none')
                                }
                            });
                        });
                }
            }
        }
        macro_coppy()


        // lắng nghe phím bấm
        document.addEventListener("keydown", function (event) {
            //xem đang nhấn phím gì
            // console.log(event);


            if (event.altKey && event.code === 'KeyQ') {
                add_mes_chat_end()
            }
            if (event.altKey && event.code === 'KeyW') {
                add_count_chat()
            }
            if (event.altKey && event.code === 'KeyP') {
                chat_wrap()
            }
            if (event.altKey && event.code === 'KeyT') {
                if (document.querySelector('.on_off_audio').checked) {
                    var audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
                    audio_request.play();
                    console.log('chơi nhạc');
                }
            }
            if (event.altKey && event.code === 'KeyA') {
                let el_inhouse_kb = document.querySelector('.inhouse_kb')
                el_inhouse_kb.classList.toggle('none')
            }

        }, false)

        function add_mes_chat_end(params) {
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {

                //console.log(Object.keys(e.attributes).length);
                if (Object.keys(e.attributes).length === 2) {
                    console.log(e);
                    var id = e.attributes.id.value.substr(44, 11)
                    var id_case = e.attributes.id.value.slice(-19)
                    console.log(id_case)

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
                    `
                    var chat = e.querySelector('.cs_inhouse_chat___1w4Y4')
                    var chat_box = chat.querySelector('.chat_box___3_Qef')
                    var chat_textarea = chat_box.querySelector('textarea')
                    var chat_bottom_menu = chat_box.querySelector('.bottom_menu___1Y9jH')
                    var chat_top_menu = chat_box.querySelector('.top_menu___wEUk3')



                    if (id === 'agentchat?s') {
                        console.log('chat');
                        if (chat.children.length === 1) {
                            chat.children[0].insertAdjacentHTML("afterend", html_mes_chat);
                            var mes_chat = chat.querySelector(`[id="${id_case}"]`)
                            console.log(mes_chat);
                            var el_mes_chat_textarea = mes_chat.querySelector('.mes_chat_textarea')
                            var el_mes_chat_buttons1 = mes_chat.querySelector('.mes_chat_buttons1')
                            var el_mes_chat_buttons2 = mes_chat.querySelector('.mes_chat_buttons2')
                            var el_mes_chat_buttons3 = mes_chat.querySelector('.mes_chat_buttons3')



                            el_mes_chat_buttons1.onclick = (e) => {
                                // console.log('chat_box',chat_box)
                                // console.log('chat_textarea',chat_textarea)
                                // console.log('chat_bottom_menu',chat_bottom_menu)
                                // console.log('chat_top_menu',chat_top_menu)

                                // console.log('el_mes_chat_textarea',el_mes_chat_textarea)
                                // console.log('el_mes_chat_buttons1',el_mes_chat_buttons1)
                                // console.log('el_mes_chat_buttons2',el_mes_chat_buttons2)
                                e.stopPropagation()
                                if (chat_box.children.length === 4) {
                                    if (el_mes_chat_textarea.value.trim() !== '') {
                                        fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee hi vọng bạn hài lòng với sự hỗ trợ của Shopee và sẽ cố gắng cải thiện chất lượng dịch vụ tốt nhất. Bạn giúp Shopee dành chút thời gian đánh giá hài lòng cho cuộc trò chuyện giúp mình nhé!')
                                            // .then(() => {
                                            //     return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Nếu cần hỗ trợ thêm những vấn đề khác bạn hãy chia sẻ nhé, mình luôn sẵn sàng hỗ trợ bạn ạ.')
                                            // })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], `${el_mes_chat_textarea.value}`)
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee mong rằng phần giải đáp trên phần nào giải đáp được thắc mắc của bạn.')
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee xin phép đươc kết thúc cuộc trò chuyện này ạ.')
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Chúc bạn thật nhiều sức khỏe và thành công.')
                                            })

                                            .then(() => {
                                                return fun_mes_chat(1, chat_textarea, chat_bottom_menu.children[1], 'Chúc bạn thật nhiều sức khỏe và thành công.', chat_top_menu.children[1])
                                            })
                                    }
                                }
                            }

                            el_mes_chat_buttons2.onclick = (e) => {
                                e.stopPropagation()
                                if (chat_box.children.length === 4) {
                                    if (el_mes_chat_textarea.value.trim() !== '') {
                                        fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Vì chưa nhận được phản hồi từ bạn nên mình xin phép kết thúc cuộc trò chuyện tại đây và sẽ hỗ trợ bạn trong các lần liên hệ tới.')
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], `${el_mes_chat_textarea.value}`)
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee hi vọng bạn hài lòng với sự hỗ trợ của Shopee và sẽ cố gắng cải thiện chất lượng dịch vụ tốt nhất. Bạn giúp Shopee dành chút thời gian đánh giá hài lòng cho cuộc trò chuyện giúp mình nhé!')
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee mong rằng phần giải đáp trên phần nào giải đáp được thắc mắc của bạn.')
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee xin phép đươc kết thúc cuộc trò chuyện này ạ.')
                                            })
                                            .then(() => {
                                                return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Chúc bạn thật nhiều sức khỏe và thành công.')
                                            })

                                            .then(() => {
                                                return fun_mes_chat(1, chat_textarea, chat_bottom_menu.children[1], 'Chúc bạn thật nhiều sức khỏe và thành công.', chat_top_menu.children[1])
                                            })

                                    }
                                }
                            }

                            el_mes_chat_buttons3.onclick = (e) => {
                                e.stopPropagation()
                                fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Vì chưa nhận được phản hồi từ bạn nên mình xin phép kết thúc cuộc trò chuyện tại đây và sẽ hỗ trợ bạn trong các lần liên hệ tới. ')
                                    .then(() => {
                                        return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], `Để được xử lý nhanh chóng, vui lòng mô tả chi tiết tại shopee.vn/tro-giup, Shopee sẽ phản hồi qua email và thông báo trên ứng dụng cho bạn nhé. Cảm ơn bạn đã liên hệ.`)
                                    })
                                    .then(() => {
                                        return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Một vài câu hỏi thường gặp, bạn có thể tham khảo thông tin tại: https://help.shopee.vn/s/')
                                    })
                                    .then(() => {
                                        return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee mong rằng phần giải đáp trên phần nào giải đáp được thắc mắc của bạn.')
                                    })
                                    .then(() => {
                                        return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Shopee xin phép đươc kết thúc cuộc trò chuyện này ạ.')
                                    })
                                    .then(() => {
                                        return fun_mes_chat(0, chat_textarea, chat_bottom_menu.children[1], 'Chúc bạn thật nhiều sức khỏe và thành công.')
                                    })

                                    .then(() => {
                                        return fun_mes_chat(1, chat_textarea, chat_bottom_menu.children[1], 'Chúc bạn thật nhiều sức khỏe và thành công.', chat_top_menu.children[1])
                                    })
                            }
                        } else {
                            chat.querySelector(`[id="${id_case}"]`).classList.toggle('none')
                        }

                    }
                }
            })
        }
        function fun_mes_chat(flag, chat_textarea, chat_bottom_menu, mes_chat, chat_top_menu) {
            return new Promise((resolve, reject) => {
                if (flag === 0) {
                    chat_textarea.focus();
                    document.execCommand('insertText', false, `${mes_chat}`);
                    eventFire(chat_bottom_menu, 'click')

                    setTimeout(() => {
                        resolve()
                    }, 70);

                }

                if (flag === 1) {
                    chat_top_menu.click()
                }
            })
        }
        interval_time_chat = []
        function add_count_chat(params) {
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {

                //console.log(Object.keys(e.attributes).length);
                if (Object.keys(e.attributes).length === 2) {
                    console.log(e);
                    var id = e.attributes.id.value.substr(44, 11)
                    var id_case = e.attributes.id.value.slice(-19)
                    console.log(id_case)

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
                    `
                    var chat = e.querySelector('.cs_inhouse_chat___1w4Y4')
                    var chat_box = chat.querySelector('.chat_box___3_Qef')
                    var chat_message_box = chat.querySelector('.chat_message_box___2bQjT')
                    var chat_textarea = chat_box.querySelector('textarea')
                    var chat_bottom_menu = chat_box.querySelector('.bottom_menu___1Y9jH')
                    var chat_top_menu = chat_box.querySelector('.top_menu___wEUk3')



                    if (id === 'agentchat?s') {
                        console.log('chat');
                        var chat_last = chat_message_box.children[0].children[0].children[0].children[0].children[0].children[0].lastElementChild
                        console.log(chat_last.children[0].children[0].children[0].children.length);

                        var previous = chat_last.previousElementSibling

                        console.log(chat_message_box.children[0].children[0].children[0].children[0].children[0].children[0]);

                        console.log(chat_last.children[0].children[0].children[0]);


                        var today = new Date();

                        var time_chat_last = chat_last.children[0].children[0].children[0].children[1].innerHTML
                        var time_chat_last_day = time_chat_last.slice(0, 2).trim()
                        var time_chat_last_mont = time_chat_last.slice(9, 10).trim()
                        var time_chat_last_time = time_chat_last.slice(12).trim()
                        console.group('thời gian chát cuối');
                        console.log(time_chat_last.length);
                        console.log(time_chat_last);
                        console.log('ngày: ', Number(time_chat_last_day));
                        console.log('tháng: ', Number(time_chat_last_mont));
                        console.log('năm: ', today.getFullYear());
                        console.log('thời gian: ', time_chat_last_time);
                        console.groupEnd();

                        var number_time_chat = Date.parse(`${today.getFullYear().toString()} ${time_chat_last_mont} ${time_chat_last_day} ${time_chat_last_time} GMT+0700`);
                        console.log(interval_time_chat[0]);
                        if (interval_time_chat[0] === undefined) {
                            var myInterval = setInterval(() => {
                                var today = new Date();
                                var number_time_current = Date.parse(today)
                                console.group('thời gian miliseconds');
                                console.log('number_time_chat: ', number_time_chat);
                                console.log('number_time_current: ', number_time_current);
                                console.groupEnd();

                                var remaining = number_time_current - number_time_chat
                                var days = remaining / 86400000
                                console.group('khoảng thời gian chạy được');
                                console.log('miliseconds', remaining)
                                console.log('days', Math.floor(days))
                                console.log('hours', Math.floor((remaining % 86400000) / 3600000))
                                console.log('minutes', Math.floor(((remaining % 86400000) % 3600000) / 60000))
                                console.log('seconds', Math.floor((((remaining % 86400000) % 3600000) % 60000) / 1000))
                                if (remaining > 120000) {
                                    console.log('lớn hơn 2 phút');
                                }
                                console.groupEnd();

                            }, 1000);
                            interval_time_chat.push(myInterval)
                            console.log(myInterval);
                            console.log(interval_time_chat);
                        } else {
                            interval_time_chat.forEach((e) => {
                                clearInterval(e)
                                console.log('ClearInterval: ', e)
                                interval_time_chat.pop()
                            })
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
            })
        }

        //================================================================
        function chat_wrap() {
            var inhouse_layout = document.querySelector('#inhouse-layout')
            var inhouse_layout_item = inhouse_layout.children[0].children[0].children[0].children[2].children[3]
            var inhouse_layout_item_Offline = inhouse_layout_item.children[0].children[0].children[0]

            chat_wrap_Reading(inhouse_layout_item_Offline, 1)
                .then((e) => {
                    console.log(e);
                    return chat_wrap_Reading(e, 2)
                })
                .then((e) => {
                    console.log(e);
                    e.click()
                    inhouse_layout_item_Offline.click()
                })


            console.log(inhouse_layout_item);



        }
        function chat_wrap_Reading(params, Request) {
            return new Promise(function (resolve, reject) {


                const observerOptions = {
                    childList: true,
                    attributes: true,
                }

                const observer = new MutationObserver(callback)

                var targetNodes
                if (Request === 1) {
                    targetNodes = params.parentElement.parentElement
                }
                if (Request === 2) {
                    var class_name_online = params.parentElement.parentElement.children[1].children[0].className
                    console.log(class_name_online);
                    if (class_name_online !== '') {
                        console.log('đang chọn online1');
                        targetNodes = params.parentElement.parentElement.children[1]
                        console.log(targetNodes);
                    } else {
                        console.log('không ở online1');
                        targetNodes = params.parentElement.parentElement.children[1].children[0].children[0]
                        console.log(targetNodes);
                    }


                }

                observer.observe(targetNodes, observerOptions)

                function callback(mutations) {

                    console.log('mutations: ', mutations);
                    console.log('mutations: ', mutations[0].target);
                    var classname = mutations[0].target.children[0].className
                    console.log(classname);
                    if (Request === 1) {
                        var result = mutations[0].target.children[1].children[0].children[1]
                        observer.disconnect()
                        resolve(result)
                    }

                    if (Request === 2) {
                        if (classname !== '') {
                            var result = mutations[0].target.children[2]
                            console.log('result', result);
                        } else {
                            var result = mutations[0].target.children[0].children[0].children[2]
                            console.log('result', result);
                        }
                        console.log('tìm thấy');

                        observer.disconnect()
                        resolve(result)
                    }

                }

                params ? params.click() : reject('Không tìm thấy params: ' + params)
            })
        }

        //======================================================

        //Hàm search============================
        function START_Search(params) {
            var el_search_button = document.querySelector('.search_button')
            // var el_search_box = document.querySelector('.search_box')
            var el_search_input = document.querySelector('.search_input')
            var el_search_result_box = document.querySelector('.search_result_box')
            var el_search_container = document.querySelector('.search_container')

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
                var e1_length = e1.path.length - 3
                e1.path.forEach((e2, i) => {
                    if (i < e1_length) {
                        var el_item = Array.from(e2.classList).includes('search_result_item')
                        if (el_item) {
                            console.log(e2);
                            var L1 = e2.children[0].children[0].innerText
                            var L2 = e2.children[1].children[0].innerText
                            var L3 = e2.children[2].children[0].innerText
                            selectLDP(L1,L2,L3)
                        }
                    }
                });
            }

            el_search_button.onclick = (e) => {
                e.stopPropagation()
                el_search_input.classList.toggle('search_input_after')
                el_search_result_box.classList.toggle('search_result_box_after')
            }

            el_search_input.onkeyup = (e) => {
                processChanges(e)
            }
        }
        function search_LDP(e) {
            var value_input = e.target.value.trim();
            var L3_search = data_LDP.filter((value) => {
                return value.L3.toLocaleUpperCase().includes(value_input.toLocaleUpperCase())
            })
            var el_search_result_box = document.querySelector('.search_result_box')

            var el_search_result_item = ``

            console.log(L3_search)
            L3_search.forEach(e1 => {
                console.log(e1)
                var background = ''
                switch (e1.L1) {
                    case 'Vận chuyển':
                        background = 'background: #FFD966;'
                        break;

                    case 'Thanh toán':
                        background = 'background: #A4C2F4;'
                        break;

                    case 'Tài khoản & Gian lận':
                        background = 'background: #6AA84F'
                        break;

                    case 'Trả hàng & Hoàn tiền':
                        background = 'background: #26a69a'
                        break;

                    case 'Marketing':
                        background = 'background: #CCA677'
                        break;

                    case 'BD':
                        background = 'background: #A19FCC'
                        break;

                    case 'Trang người bán & Sao quả tạ':
                        background = 'background: #068899'
                        break;

                    case 'Sản phẩm và pháp lý':
                        background = 'background: #63D297'
                        break;

                    case 'ShopeePay':
                        background = 'background: #A4C2F4'
                        break;

                    case 'Digital product':
                        background = 'background: #FFD966'
                        break;

                    case 'Câu hỏi chung':
                        background = 'background: #9FC5E8'
                        break;

                    case 'Câu hỏi khác':
                        background = 'background: #EA9999'
                        break;

                    case 'ShopeeFood':
                        background = 'background: #EA9999'
                        break;

                    case 'Bảo hiểm':
                        background = 'background: #26A69A'
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
                `
            })
            el_search_result_box.innerHTML = el_search_result_item
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


        //===========================================================================================



        //=======================================================================
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {



                var flag = false
                var id_case

                var workstation
                Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {

                    console.log(Object.keys(e.attributes).length);
                    if (Object.keys(e.attributes).length === 2) {

                        var id = e.attributes.id.value.substr(44, 11)
                        id_case = e.attributes.id.value.slice(-19)
                        console.log('id: ', id)
                        console.log('id_case: ', id_case)
                        if (id === 'case-detail') {
                            console.log('thông tin');
                            workstation = e.children[0].children[0].children[0]
                            workstation.parentElement.nextElementSibling.style.width = "calc(100% - 350px)"
                        }

                        if (id === 'agentchat?s') {
                            console.log('chat');
                            workstation = e.children[0]
                        }

                        if (id === 'case/create') {
                            console.log('create');
                            workstation = e.children[0].children[0].children[0]
                        }
                        console.log('workstation: ', workstation);

                    }

                });

                Array.from(workstation.children).forEach(e => {
                    if (e.classList[0] === 'Auto_saleforce_Order_Info') {
                        //console.log(e.classList);
                        flag = true;
                    }
                });

                var HTML_Info = `
                    <div class="Info">
                        <div class="Info_left">
                            <div><label>${request.Tab_Order_SN}</Label></div>
                            <div><label>${fun_MVD(request.Tab_Order_MVD)}</Label></div>
                            <div><label>${fun_EDT(request.Tab_Order_EDT)}</Label></div>
                            ${fun_DVVC(request.Tab_Order_DVVC)}
                            ${fun_KDVVC(request.Tab_Order_KDVVC)}
                            ${fun_status_EDT(request.Tab_Order_EDT, request.Tab_Order_APT)}
                            ${fun_button_HLHG(request.Tab_Order_EDT, request.Tab_Order_DVVC)}
                        </div>
                        <div class="Info_right">
                            <label>${request.Tab_Order_UID[0]}</Label>
                            <label>${request.Tab_Order_UID[1]}</Label>
                        </div>                        
                    </div>                             
                `
                var HTML_String_Payment = fun_payment(request.Tab_Order_PM)

                //==============================================================================
                var HTML_String_LT = `
                <div class="timeline-container">                    
                        ${request.Tab_Order_LT}
                </div>                
                `
                var HTML_String_LT_popup = `
                <div class="logistic_traking_popup none">
                    ${HTML_String_LT}
                </div>
                `
                //==============================================================================
                var HTML_orderinfo = `
                    <div class="Auto_saleforce_Order_Info" id_case="${id_case}">      
                        <div id="${request.Tab_Order_SN}" class="change_start">
                            
                            <div class="Order_Info">
                                ${HTML_Info}
                                ${HTML_String_Payment}
                                ${HTML_String_LT}
                                ${HTML_String_LT_popup}
                            </div>
                            <div class="control_box">
                                <div class="control1">1</div>
                                <div class="control2">2</div>
                                <div class="control3">3</div>
                                <div class="control4">4</div>
                                <div class="control5">5</div>
                            </div>
                            <div class="on_of_Order_Info">ĐH: ${request.Tab_Order_SN}</div>
                        </div>
                    </div>
                `

                var HTML_orderinfo_item = `
                    <div id="${request.Tab_Order_SN}" class="change_start">                        
                        <div class="Order_Info none">
                            ${HTML_Info}
                            ${HTML_String_Payment}
                            ${HTML_String_LT}                            
                            ${HTML_String_LT_popup}
                        </div>
                        <div class="control_box">
                            <div class="control1">1</div>
                            <div class="control2">2</div>
                            <div class="control3">3</div>
                            <div class="control4">4</div>
                            <div class="control5">5</div>   
                        </div>
                        <div class="on_of_Order_Info">ĐH: ${request.Tab_Order_SN}</div>
                    </div>   
                `

                if (flag) {
                    console.log('đã có')
                    var Element_Auto_saleforce_Order_Info = workstation.querySelector('.Auto_saleforce_Order_Info')
                    console.log(Element_Auto_saleforce_Order_Info.children)

                    var id_current = []
                    Array.from(Element_Auto_saleforce_Order_Info.children).forEach((e) => {
                        id_current.push(e.attributes.id.value)
                    })
                    console.log('id_current', id_current)

                    if (id_current.includes(request.Tab_Order_SN)) {
                        console.log('đã thêm ĐH: ', request.Tab_Order_SN);
                    } else {
                        console.log('Chưa thêm đơn hàng', request.Tab_Order_SN)
                        Element_Auto_saleforce_Order_Info.lastElementChild.insertAdjacentHTML("afterend", HTML_orderinfo_item)

                        var Order_Info_DH = workstation.querySelector(`[id="${request.Tab_Order_SN}"]`)
                        console.log(Order_Info_DH)
                        console.log(Order_Info_DH.children[1])

                        //on_off Đơn hàng
                        Order_Info_DH.children[2].onclick = (e) => {
                            e.stopPropagation()
                            console.log(request.Tab_Order_SN)
                            console.log(e.target.previousElementSibling);
                            if (e.altKey) {

                                var none = Array.from(Order_Info_DH.children[0].classList).some((e) => { return e === 'none' })
                                if (none) { Order_Info_DH.children[0].classList.remove("none") }

                                console.log(Order_Info_DH.parentElement.children);
                                Array.from(Order_Info_DH.parentElement.children).forEach((e) => {
                                    console.log(e.attributes.id.value);
                                    if (e.attributes.id.value !== request.Tab_Order_SN) {
                                        console.log(e);
                                        e.children[0].classList.add("none")
                                    }
                                })
                            } else {
                                Order_Info_DH.children[0].classList.toggle("none")
                            }
                        }

                        //coppy EDT
                        Order_Info_DH.children[0].children[0].onclick = (e) => {
                            e.stopPropagation()
                            Copy_Order_Info_DH(request.Tab_Order_EDT, request.Tab_Order_SN, request.Tab_Order_APT)
                        }

                        //button 1
                        Order_Info_DH.children[1].children[0].onclick = (e) => {
                            note_case(request.Tab_Order_SN, request.Tab_Order_MVD, request.Tab_Order_DVVC)
                        }

                        //button 2
                        Order_Info_DH.children[1].children[1].onclick = (e) => {
                            console.log(request.Tab_Order_SN);
                            navigator.clipboard.writeText(request.Tab_Order_SN + ' / ' + request.Tab_Order_MVD)
                        }

                        //mở rộng logistic tracking
                        Order_Info_DH.children[0].children[2].onclick = (e) => {
                            e.stopPropagation()
                            if (e.altKey) {
                                console.log('đang bấm alt');
                                console.log(Order_Info_DH);
                                console.log(Order_Info_DH.querySelector('.logistic_traking_popup'));
                                Order_Info_DH.querySelector('.logistic_traking_popup').classList.toggle("none")
                                console.log(Order_Info_DH.querySelector('.logistic_traking_popup'));
                            }
                        }

                        // tắt logistic tracking
                        Order_Info_DH.children[0].querySelector('.logistic_traking_popup').onclick = (e) => {
                            e.stopPropagation()
                            Order_Info_DH.querySelector('.logistic_traking_popup').classList.toggle("none")
                            console.log(123123);
                        }

                        Order_Info_DH.children[0].querySelector('.logistic_traking_popup').children[0].onclick = (e) => {
                            e.stopPropagation()
                            console.log(456456);
                        }

                        document.addEventListener("keydown", function (event) {
                            //xem đang nhấn phím gì
                            // console.log(event);

                            if (event.code === 'Escape') {
                                Order_Info_DH.querySelector('.logistic_traking_popup').classList.add("none")
                            }
                        }, false)

                    }

                } else {
                    console.log('chưa có');
                    workstation.lastElementChild.insertAdjacentHTML("afterend", HTML_orderinfo)
                    var Order_Info_DH = workstation.querySelector(`[id="${request.Tab_Order_SN}"]`)

                    console.log(Order_Info_DH)
                    console.log(Order_Info_DH.children[0].children[0])
                    console.log(Order_Info_DH.children[0].children[2])

                    //on_off Đơn hàng
                    Order_Info_DH.children[2].onclick = (e) => {
                        e.stopPropagation()
                        console.log(request.Tab_Order_SN)
                        console.log(e.target.previousElementSibling);
                        if (e.altKey) {
                            console.log(Order_Info_DH.children[0].classList);
                            var none = Array.from(Order_Info_DH.children[0].classList).some((e) => { return e === 'none' })
                            if (none) { Order_Info_DH.children[0].classList.remove("none") }

                            console.log(Order_Info_DH.parentElement.children);
                            Array.from(Order_Info_DH.parentElement.children).forEach((e) => {
                                console.log(e.attributes.id.value);
                                if (e.attributes.id.value !== request.Tab_Order_SN) {
                                    console.log(e);
                                    e.children[0].classList.add("none")
                                }
                            })
                        } else {
                            Order_Info_DH.children[0].classList.toggle("none")
                        }
                    }

                    //coppy EDT
                    Order_Info_DH.children[0].children[0].onclick = (e) => {
                        e.stopPropagation()
                        Copy_Order_Info_DH(request.Tab_Order_EDT, request.Tab_Order_SN, request.Tab_Order_APT)
                    }

                    //button 1
                    Order_Info_DH.children[1].children[0].onclick = (e) => {
                        note_case(request.Tab_Order_SN, request.Tab_Order_MVD, request.Tab_Order_DVVC)
                    }

                    //button 2
                    Order_Info_DH.children[1].children[1].onclick = (e) => {
                        console.log(request.Tab_Order_SN);
                        navigator.clipboard.writeText(request.Tab_Order_SN + ' / ' + request.Tab_Order_MVD)
                    }

                    //mở rộng logistic tracking
                    Order_Info_DH.children[0].children[2].onclick = (e) => {
                        e.stopPropagation()
                        if (e.altKey) {
                            console.log('đang bấm alt');
                            Order_Info_DH.querySelector('.logistic_traking_popup').classList.toggle("none")
                            console.log(Order_Info_DH.querySelector('.logistic_traking_popup'));
                        }
                    }

                    // tắt logistic tracking
                    Order_Info_DH.children[0].querySelector('.logistic_traking_popup').onclick = (e) => {
                        e.stopPropagation()
                        Order_Info_DH.querySelector('.logistic_traking_popup').classList.toggle("none")
                        console.log(123123);
                    }

                    Order_Info_DH.children[0].querySelector('.logistic_traking_popup').children[0].onclick = (e) => {
                        e.stopPropagation()
                        console.log(456456);
                    }

                    document.addEventListener("keydown", function (event) {
                        //xem đang nhấn phím gì
                        // console.log(event);

                        if (event.code === 'Escape') {
                            Order_Info_DH.querySelector('.logistic_traking_popup').classList.add("none")
                        }
                    }, false)
                }

                //=================================================================================================
                var Order_Info_DH = workstation.querySelector(`[id="${request.Tab_Order_SN}"]`)
                // fade2(Order_Info_DH)
                changeColor(Order_Info_DH)
                //=================================================================================================


                console.group('Lắng nghe từ extension')
                console.log('Tab_Order_SN: ', request.Tab_Order_SN)
                console.log('Tab_Order_MVD: ', request.Tab_Order_MVD)
                console.log('Tab_Order_EDT: ', request.Tab_Order_EDT)
                console.log('Tab_Order_DVVC: ', request.Tab_Order_DVVC)
                console.log('Tab_Order_KDVVC: ', request.Tab_Order_KDVVC)
                //console.log('Tab_Order_status_EDT: ', request.Tab_Order_status_EDT)
                console.log('Tab_Order_APT: ', request.Tab_Order_APT)
                console.log('Tab_Order_LT: ', request.Tab_Order_LT)
                console.log('Tab_Order_PM: ', request.Tab_Order_PM)
                console.log('Tab_Order_UID: ', request.Tab_Order_UID)
                console.groupEnd()
                sendResponse({
                    Tab_work_1: request.Tab_Order_MVD,
                    Tab_work_2: 'Word đã nhận'
                })

            }
        )
        function edit(b) {
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {
                console.log(Object.keys(e.attributes).length);
                if (Object.keys(e.attributes).length === 2) {


                    var id = e.attributes.id.value.substr(44, 11)
                    console.log('id: ', id)

                    if (id === 'case-detail') {
                        console.log('thông tin');
                        var status = e.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[0].children[0].children[2].children[0]
                        console.log(status);
                        eventFire(status, 'click')
                    }

                    if (id === 'agentchat?s') {
                        console.log('chat');
                        var status = e.children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[0].children[2]
                        console.log(status);
                        eventFire(status, 'click')
                    }

                }
            })
        }

        function TDHTGH() {
            selectLDP('Vận chuyển','Đang chờ giao','[Trước EDT] Theo dõi hành trình giao hàng')
        }

        function HoiGiao() {
            selectLDP('Vận chuyển','Đang chờ giao','[Sau EDT] Hối giao')
        }

        function HoiLay() {
            selectLDP('Vận chuyển','Lấy hàng/ Gửi hàng','Hối lấy hàng')
        }

        function CCHT() {
            selectLDP('Câu hỏi khác','Câu hỏi khác','Chat chưa hoàn tất')
        }

        function Dearteam(params) {
            wrapperLDP = document.querySelector('div[class="split-right"] > section[class="tabContent active oneConsoleTab"] > * > * > section[class="tabContent active oneConsoleTab"] > * > div[class="windowViewMode-maximized active lafPageHost"] > div > * > * > *').children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0]
            var edit_Enabled
            var edit_Enabled2

            if (wrapperLDP) {
                edit_Enabled2 = wrapperLDP.children[1].children[0].children[0].children[1].children[0].querySelector('section').children[0]
                edit_Enabled = wrapperLDP.parentElement
            } else {
                return console.log('Không tìm thấy wrapperLDP')
            }

            if (edit_Enabled2.classList[1] === 'hideEl') {
                var User_id = wrapperLDP.children[1].children[0].children[0].children[1].children[0].querySelector('section').children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[7].children[1].children[0].children[0].querySelector('div').children[1].value
                var Order_SN = wrapperLDP.children[1].children[0].children[0].children[1].children[0].querySelector('section').children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[8].children[1].children[0].children[0].querySelector('div').children[1].value.split(/(?:,| )+/)
                var MVD_id = wrapperLDP.children[1].children[0].children[0].children[1].children[0].querySelector('section').children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[9].children[1].children[0].children[0].querySelector('div').children[1].value.split(/(?:,| )+/)

                console.log('User_id: ', User_id);
                console.log('Order_SN: ', Order_SN.length);
                console.log('MVD_id: ', MVD_id);
            } else {
                console.log('Chưa bật edit');
            }
            if (User_id === undefined) { User_id = '' }
            if (Order_SN === undefined) { Order_SN = '' }
            if (Order_SN.length > 1) { Order_SN = '' }
            if (MVD_id === undefined) { MVD_id = '' }
            if (MVD_id.length > 1) { MVD_id = '' }


            navigator.clipboard.writeText(
                `Dear Team\n\nUserID: ${User_id} \nĐH/MVĐ: ${Order_SN} / ${MVD_id} \n\nTKS Team`
            )
        }



        function note_case(SN, MVD, DVVC) {
            var Item_L1
            var Item_L2
            var Item_L3
            var Item_L4
            var Item_dvvc
            var id
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {
                console.log(Object.keys(e.attributes).length);
                if (Object.keys(e.attributes).length === 2) {
                    console.log(e);
                    id = e.attributes.id.value.substr(44, 11)

                    if (id === 'case-detail') {
                        console.log('thông tin');
                        var list_item_Order_Details_thongtin = e.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children
                        var list_item_Order_Details_logistics_thongtin = e.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[0].children[1].children[0].children[3].children[1].children[0].children
                        console.log(list_item_Order_Details_thongtin);
                        Item_L1 = Find_Item(list_item_Order_Details_thongtin, 'Order SN').children[1].children[0].children[0].children[0].children[0]
                        Item_L2 = Find_Item(list_item_Order_Details_thongtin, 'More Order SN').children[1].children[0].children[0].children[0]
                        Item_L3 = Find_Item(list_item_Order_Details_thongtin, 'Shipping ID').children[1].children[0].children[0].children[0].children[0]
                        Item_L4 = Find_Item(list_item_Order_Details_thongtin, 'More Shipping ID').children[1].children[0].children[0].children[0]
                        Item_dvvc = Find_Item(list_item_Order_Details_logistics_thongtin, '3PL').children[1].children[0].children[0].children[0]
                        //console.log(Item_L1, Item_L2, Item_L3, Item_L4, list_item_Order_Details_thongtin, list_item_Order_Details_logistics_thongtin,Item_dvvc);
                    }

                    if (id === 'agentchat?s') {
                        var list_item_Order_Details_chat = e.children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[1].children[0].children[0].children[0].children[1].children[1].children[0].children
                        var list_item_Order_Details_logistics_chat = e.children[0].children[0].children[0].children[0].children[2].children[0].children[1].children[1].children[0].children[0].children[0].children[3].children[1].children[0].children
                        //Find_Item_chat(list_item_Order_Details_chat, 'Order SN')
                        Item_L1 = Find_Item_chat(list_item_Order_Details_chat, 'Order SN').children[1].children[0].children[0].children[0].children[0]
                        Item_L2 = Find_Item_chat(list_item_Order_Details_chat, 'More Order SN').children[1].children[0].children[0].children[0]
                        Item_L3 = Find_Item_chat(list_item_Order_Details_chat, 'Shipping ID').children[1].children[0].children[0].children[0].children[0]
                        Item_L4 = Find_Item_chat(list_item_Order_Details_chat, 'More Shipping ID').children[1].children[0].children[0].children[0]
                        Item_dvvc = Find_Item_chat(list_item_Order_Details_logistics_chat, '3PL').children[1].children[0].children[0].children[0]
                        //console.log(Item_dvvc.children[0].children[0].children.length);
                        //console.log(Item_L1, Item_L2, Item_L3, Item_L4, list_item_Order_Details_chat, list_item_Order_Details_logistics_chat, Item_dvvc);
                    }

                    if (id === 'case/create') {
                        console.log('tạo case')
                        var list_item_Order_Details_create = e.children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[1].children[0].children
                        var list_item_Order_Details_logistics_create = e.children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[3].children[1].children[0].children
                        Item_L1 = Find_Item(list_item_Order_Details_create, 'Order SN').children[1].children[0].children[0].children[0].children[0]
                        Item_L2 = Find_Item(list_item_Order_Details_create, 'More Order SN').children[1].children[0].children[0].children[0]
                        Item_L3 = Find_Item(list_item_Order_Details_create, 'Shipping ID').children[1].children[0].children[0].children[0].children[0]
                        Item_L4 = Find_Item(list_item_Order_Details_create, 'More Shipping ID').children[1].children[0].children[0].children[0]
                        Item_dvvc = Find_Item(list_item_Order_Details_logistics_create, '3PL').children[1].children[0].children[0].children[0]
                        //console.log(Item_L1, Item_L2, Item_L3, Item_L4, list_item_Order_Details_create,Item_dvvc);
                    }

                    //thêm order_sn
                    var order_sn = Item_L1
                    var order_sn_value = Item_L1.value
                    var more_order_sn = Item_L2
                    var more_order_sn_value = Item_L2.innerHTML
                    console.log(find_value_order_details(order_sn_value, more_order_sn_value, SN));
                    if (order_sn_value === '' && !find_value_order_details(order_sn_value, more_order_sn_value, SN)) {
                        order_sn.value = SN
                        order_sn.dispatchEvent(new Event("change", { bubbles: true }));
                        order_sn.dispatchEvent(new Event("blur", { bubbles: true }));
                    } else {
                        if (more_order_sn_value === '' && !find_value_order_details(order_sn_value, more_order_sn_value, SN)) {
                            more_order_sn.focus();
                            document.execCommand('insertText', false, `${SN}`);
                        } else {
                            if (!find_value_order_details(order_sn_value, more_order_sn_value, SN)) {
                                more_order_sn.focus();
                                document.execCommand('insertText', false, `${'\n' + SN}`);
                            }
                        }
                    }


                    //thêm MVD
                    var shipping_id = Item_L3
                    var shipping_id_value = Item_L3.value
                    var more_shipping_id = Item_L4
                    var more_shipping_id_value = Item_L4.value
                    if (shipping_id_value === '' && !find_value_order_details(shipping_id_value, more_shipping_id_value, MVD)) {
                        shipping_id.value = MVD
                        shipping_id.dispatchEvent(new Event("change", { bubbles: true }));
                        shipping_id.dispatchEvent(new Event("blur", { bubbles: true }));
                    } else {
                        if (more_shipping_id_value === '' && !find_value_order_details(shipping_id_value, more_shipping_id_value, MVD)) {
                            more_shipping_id.focus();
                            document.execCommand('insertText', false, `${MVD}`);
                        } else {
                            if (!find_value_order_details(shipping_id_value, more_shipping_id_value, MVD)) {
                                more_shipping_id.focus();
                                document.execCommand('insertText', false, `${'\n' + MVD}`);
                            }
                        }
                    }


                    //click chọn dvvc
                    if (Item_dvvc.children[0].children[0].children.length === 0) {
                        var result_DVVC
                        switch (DVVC) {
                            case 'Ninja Van':
                                result_DVVC = 'Ninjavan'
                                break;

                            case 'Giao Hàng Nhanh':
                                result_DVVC = 'GHN'
                                break;

                            case 'Shopee Xpress':
                                result_DVVC = 'Shopee Xpress'
                                break;

                            case 'BEST Express':
                                result_DVVC = 'Best Express'
                                break;

                            case 'J&T Express':
                                result_DVVC = 'J&T'
                                break;

                            case 'VNPost Tiết Kiệm':
                                result_DVVC = 'VN Post'
                                break;

                            case 'VNPost Nhanh':
                                result_DVVC = 'VN Post'
                                break;

                            case 'Giao Hàng Tiết Kiệm':
                                result_DVVC = 'GHTK'
                                break;

                            case 'Viettel Post':
                                result_DVVC = 'Viettel'
                                break;

                            default:
                                result_DVVC = 'chưa cài: '
                                break;
                        }
                        console.log(result_DVVC, DVVC);
                        if (result_DVVC !== 'chưa cài: ') {
                            elementReading(Item_dvvc, result_DVVC)
                                .then((e) => {
                                    e.click()
                                })
                        }
                    }


                }
            });
        }

        function find_value_order_details(value_order_sn, value_more_order_sn, order_sn_current) {

            var value_before = []
            if (value_order_sn !== '') {
                value_before.push(value_order_sn.trim())
            }
            if (value_more_order_sn !== '') {
                var tam = value_more_order_sn.trim().split('\n')
                value_before.push(...tam)
            }
            console.log(value_before);
            // console.log(value_before.includes(order_sn_current));
            return value_before.includes(order_sn_current)
        }

        function Get_Word_ID(params) {
            if (params === undefined) {
                params = document.querySelector('.item_system_id ')
            }
            var objValue = { value: "Gửi đi tin nhắn để lấy TabID_work" }

            chrome.runtime.sendMessage(objValue, (e) => {
                var tabID = e.Work_ID
                console.group('Nhận phản hồi từ tin nhắn gửi đi: ', objValue)
                console.log('Kết quả: ', e.result);
                console.log('Work_ID: ', tabID)
                console.groupEnd()
                params.innerHTML = `ID: ${tabID}`

                localStorage.setItem('tabID', tabID)
                console.log(tabID);
            })

            console.group('Gửi đi')
            console.log('gửi đi: ', objValue)
            console.groupEnd()



            // Array.from(document.querySelector('#workstation').children[0].attributes).forEach(e => {
            //     console.log(e);

            // })



        }

        function Test2(params) {


        }



        function eventFire(el, etype) {
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            } else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        }
        function Get_Pro(col) {
            return new Promise((resolve, reject) => {
                const sheetID = '1c9NcTNaUfwOHFTw52cjDKLK3JQ0UVxj4hAS9elBPYM4'
                const sheetName = 'PRO'
                const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?&sheet=${sheetName}`


                var row = []
                var col_ID


                fetch(url)
                    .then(res => res.text())
                    .then(rep => {
                        const data = JSON.parse(rep.substr(47).slice(0, -2))
                        // console.log(data);
                        // console.log(data.table.cols);
                        // console.log(data.table.rows);

                        var obj_cols = data.table.cols
                        for (var prop_cols in obj_cols) {
                            var obj2_cols = obj_cols[prop_cols]
                            // console.group(prop_cols)
                            // console.log('obj_cols.' + prop_cols + '=' + obj_cols[prop_cols])
                            // console.log('ID: ', obj2_cols.id);
                            // console.log('value: ', obj2_cols.label);
                            // console.groupEnd()
                            if (obj2_cols.id === col) {
                                row = [...row, obj2_cols.label.trim()]
                                //console.log(row)

                                col_ID = prop_cols
                                //console.log('col_ID: ', col_ID);
                            }
                        }

                        var obj_rows = data.table.rows
                        for (var prop_rows in obj_rows) {
                            if (obj_rows[prop_rows].c[col_ID] !== null) {
                                //console.log('prop_rows.' + prop_rows + '=' + obj_rows[prop_rows])   
                                //console.log('nè: ', obj_rows[prop_rows].c[col_ID].v)
                                row = [...row, obj_rows[prop_rows].c[col_ID].v.trim()]
                            }
                        }
                        resolve(row)
                    })
            })
        }

        var Pro = 0


        function ResetLocal(params) {
            localStorage.setItem('local_pro', 0)
            Pro = parseInt(localStorage.getItem('local_pro'))
            var myDate1 = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
            document.querySelector('.LB_Pro').innerHTML = 'Pro: ' + Pro
        }

        function Copy_Order_Info_DH(Coppy_EDT, Coppy_SN, Coppy_APT, id_case) {
            if (Coppy_EDT) {
                navigator.clipboard.writeText(Coppy_SN + ' - ' + Coppy_EDT)
                console.group('funtion Copy_Auto_saleforce_Order_Info()')
                //console.log('id_case: ', id_case)
                console.log('coppy', Coppy_SN + ' - ' + Coppy_EDT);
                console.log('Coppy_SN: ', Coppy_SN)
                console.log('Coppy_EDT: ', Coppy_EDT)
                console.log('Coppy_APT: ', Coppy_APT)
                console.groupEnd()
            }

            if (Coppy_EDT === undefined) {
                //navigator.clipboard.writeText(Coppy_SN + '\n\n' + Coppy_APT)
                navigator.clipboard.writeText(Coppy_SN + ' - ' + Coppy_APT)
                console.group('funtion Copy_Auto_saleforce_Order_Info()')
                //console.log('id_case: ', id_case)
                console.log('coppy', Coppy_SN + ' - ' + Coppy_APT);
                console.log('Coppy_SN: ', Coppy_SN)
                console.log('Coppy_EDT: ', Coppy_EDT)
                console.log('Coppy_APT: ', Coppy_APT)
                console.groupEnd()
            }
        }



        function time_clock(params) {
            setInterval(() => {
                let el_hours = document.querySelector('.clock_hours')
                let el_minutes = document.querySelector('.clock_minutes')
                let el_seconds = document.querySelector('.clock_seconds')
                let el_time_hours = document.querySelector('.time_hour')
                let el_time_minutes = document.querySelector('.time_minutes')
                let el_time_second = document.querySelector('.time_second')

                // let el_ampm = document.querySelector('.ampm')

                let hh = document.querySelector('#hh')
                let mm = document.querySelector('#mm')
                let ss = document.querySelector('#ss')

                let hr_dot = document.querySelector('.hr_dot')
                let min_dot = document.querySelector('.min_dot')
                let sec_dot = document.querySelector('.sec_dot')

                let h = new Date().getHours()
                let m = new Date().getMinutes()
                let s = new Date().getSeconds()
                // let am = h >= 12 ? "PM" : "AM"

                h = (h < 10) ? "0" + h : h
                m = (m < 10) ? "0" + m : m
                s = (s < 10) ? "0" + s : s

                el_hours.innerHTML = h + "<br><span>hh</span>"
                el_minutes.innerHTML = m + "<br><span>mm</span>"
                el_seconds.innerHTML = s + "<br><span>ss</span>"
                el_time_hours.innerHTML = h
                el_time_minutes.innerHTML = m
                el_time_second.innerHTML = s
                // el_ampm.innerHTML = am

                hh.style.strokeDashoffset = 165 - (165 * h) / 24
                mm.style.strokeDashoffset = 165 - (165 * m) / 60
                ss.style.strokeDashoffset = 165 - (165 * s) / 60

                hr_dot.style.transform = `rotate(${h * 15}deg)`
                min_dot.style.transform = `rotate(${m * 6}deg)`
                sec_dot.style.transform = `rotate(${s * 6}deg)`
            }, 1000);
        }
        //Cẩm nang log======================================================
        function fun_payment(Tab_Order_PM) {
            var HTML_String_Payment
            var HTML_String_Payment_Method
            var HTML_String_Payment_Price

            var Price = parseInt(Tab_Order_PM[3].slice(1).split('.').join(''))
            //console.log('Price: ', Price);

            switch (Tab_Order_PM[0]) {
                case 'Trả góp Cybersource':
                    HTML_String_Payment_Method = `
                            <label class="Payment_method color__red">
                                Payment Method: 
                                <label class="Payment_method_value">${Tab_Order_PM[0]}</label>
                            </label>
                            <label class="Payment_channel">
                                Payment Channel: 
                                <label class="Payment_channel_value">${Tab_Order_PM[1]}</label>
                            </label>
                            <label style="font-weight: 500;font-size: 15px;">LOG-HLHG-PUD-01</label>    
                    `
                    break;

                default: HTML_String_Payment_Method = `
                        <label class="Payment_method">
                            Payment Method: 
                            <label class="Payment_method_value">${Tab_Order_PM[0]}</label>
                        </label>
                        <label class="Payment_channel">
                            Payment Channel: 
                            <label class="Payment_channel_value">${Tab_Order_PM[1]}</label>
                        </label>
                `
                    break;
            }

            if (Price < 500000) {
                HTML_String_Payment_Price = `
                <label class="Payment_Price" >
                    Grand Total: 
                    <label class="Payment_channel_value">${Tab_Order_PM[3]}</label>
                </label>
                `
            }
            if (Price >= 500000 && Price < 1000000) {
                HTML_String_Payment_Price = `
                <label class="Payment_Price" style="background-color:yellow; color:black; border-radius: 5px;">
                    Grand Total: 
                    <label class="Payment_channel_value">${Tab_Order_PM[3]}</label>
                </label>
                `
            }
            if (Price >= 1000000) {
                // HTML_String_Payment_Price = `
                // <label class="Payment_Price color__red" style="background-color:red; color:white; border-radius: 5px;>
                //     Grand Total: 
                //     <label class="Payment_channel_value">${Tab_Order_PM[3]}</label>
                // </label>
                // `
                HTML_String_Payment_Price = `
                <div>
                    <label class="Payment_Price color__red">
                        Grand Total: 
                        <label class="Payment_channel_value">${Tab_Order_PM[3]}</label>
                    </label>
                </div>
                `
            }
            //console.log(HTML_String_Payment_Price)

            HTML_String_Payment = `
            <div class="Payment">
                <div class="Payment_wrap">
                    ${HTML_String_Payment_Method}
                    ${HTML_String_Payment_Price}
                </div>  
            </div>
            `


            return HTML_String_Payment
        }

        function fun_MVD(Tab_Order_MVD) {
            if (Tab_Order_MVD === '-') {
                return 'Không có MVĐ'
            }
            return Tab_Order_MVD
        }

        function fun_status_EDT(Delivery_Time, Tab_Order_APT) {

            var Tab_Order_status_EDT = fun_Calculator_EDT(Delivery_Time)
            var HTML_String_status_EDT

            if (Tab_Order_status_EDT === 1) {
                HTML_String_status_EDT = `
                <div>
                    <label class="color__blue">Theo dõi hành trình</Label>
                </div>
                `
            }
            if (Tab_Order_status_EDT === 2) {
                HTML_String_status_EDT = `
                <div>
                    <label class="color__green">Hối giao > KHÔNG Chuyển</Label>
                </div>
                `
            }
            if (Tab_Order_status_EDT === 3) {
                HTML_String_status_EDT = `
                <div>
                    <label class="color__red">Chuyển Hối giao/quá EDT+3</Label> 
                </div>
                `
            }
            if (Tab_Order_status_EDT === 4) {
                HTML_String_status_EDT = `
                <div>
                    <label class="color__yelow"">Trong EDT</Label>
                </div>                  
                `
            }

            if (HTML_String_status_EDT === undefined) {
                HTML_String_status_EDT = `
                ${fun_APT(Tab_Order_APT)}
                `
            }
            return HTML_String_status_EDT
        }

        function fun_button_HLHG(Delivery_Time, Tab_Order_DVVC) {
            var HTML_button_HLHG
            var Tab_Order_status_EDT = fun_Calculator_EDT(Delivery_Time)
            var Tab_Order_DVVC_result = Tab_Order_DVVC.search("Standard Express")

            // if (Tab_Order_status_EDT === 2 && Tab_Order_DVVC_result === -1) {
            //     HTML_button_HLHG = `
            //     <div style="display: flex; display: flex; text-align: center;">
            //         <button class="sauedt1" style="flex-basis: 50%;" >Hối lần 1</button>
            //         <button class="sauedt2" style="flex-basis: 50%;" >Hối lần 2 trở lên</button>
            //     </div>
            //     `
            // }

            // if (Tab_Order_status_EDT === 3 && Tab_Order_DVVC_result === -1) {
            //     HTML_button_HLHG = `
            //     <div style="display: flex; display: flex; text-align: center;">
            //         <button class="sauedt3" style="flex-basis: 50%;" >Hối lần 1</button>
            //         <button class="sauedt4" style="flex-basis: 50%;" >Hối lần 2 trở lên</button>
            //     </div>  
            //     `
            // }

            if (HTML_button_HLHG === undefined) {
                return ''
            }

            return HTML_button_HLHG
        }

        function fun_DVVC(Tab_Order_DVVC) {
            var HTML_String_DVVC
            switch (Tab_Order_DVVC) {
                case '':
                    HTML_String_DVVC = `<div><label style="background-color:red; color:white;">${Tab_Order_DVVC}</Label></div>`

                    break;

                default:
                    HTML_String_DVVC = `<div><label>${Tab_Order_DVVC}</Label></div>`
                    break;
            }
            return HTML_String_DVVC
        }

        function fun_KDVVC(Tab_Order_KDVVC) {
            var HTML_String_KDVVC
            var String_DVVC = Tab_Order_KDVVC.slice(0, Tab_Order_KDVVC.search("Integrated")).trim()
            console.log(typeof String_DVVC, String_DVVC);
            if (String_DVVC === 'Standard Express') {
                HTML_String_KDVVC = `<div><label style="color: rgb(240 0 0);background: rgb(253 224 224);border: 1px solid rgb(250 173 173);border-radius: 5px;">${String_DVVC}</Label></div>`
                console.log(HTML_String_KDVVC);

            } else {
                HTML_String_KDVVC = `<div><label>Kênh: ${String_DVVC}</Label></div>`
                console.log(HTML_String_KDVVC);


            }
            console.log(HTML_String_KDVVC);

            return HTML_String_KDVVC
        }

        function fun_EDT(Tab_Order_EDT) {
            console.log('đây nè: ', Tab_Order_EDT);
            if (Tab_Order_EDT === undefined) {
                return 'Không có EDT'
            } else {
                return Tab_Order_EDT.substr(17, 11)
            }

        }

        function fun_APT(Tab_Order_APT) {
            var APT = `
            <div><label>${Tab_Order_APT}</Label></div>
            <div style="display: flex; display: flex; text-align: center;">
                <button class="APT1" style="flex-basis: 33%;" >Bưu cục</button>
                <button class="APT2" style="flex-basis: 33%;" >< 20h</button>
                <button class="APT3" style="flex-basis: 33%;" >>= 20h</button>
            </div>              
            `
            return APT
        }

        function fun_Calculator_EDT(Delivery_Time) {
            if (Delivery_Time) {
                var time_time = Delivery_Time.substr(10, 17)
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
        //============================================================   

        function Get_Orderof_tool(params) {

            console.log(document.querySelector('.Auto_saleforce_Order_Info'))
            console.log(document.querySelector('.Input_tool_id').value)



        }

        function selectLDP(Request_L1, Request_L2, Request_L3) {
            let Request_LDP = `${Request_L1} / ${Request_L2} / ${Request_L3}`
            console.log(Request_LDP);
            let workstation_current = fun_workstation_current()

            let el_ldp = workstation_current.querySelector("input[id='62']")
            el_ldp.focus()
            document.execCommand('insertText', false, Request_L3);

            let el_menu_ldps = document.querySelectorAll('.cs-cascader-menus')
            let el_menu_ldp = selectLDP_find_menu(el_menu_ldps)

            var str = el_menu_ldp.parentElement.innerHTML;
            navigator.clipboard.writeText(str)


            console.log(el_menu_ldp.children[0].children);
            Array.from(el_menu_ldp.children[0].children).forEach(element => {     
                if (Request_LDP === element.children[0].innerText) {
                    element.children[0].click()
                }
            });

        }

        function selectLDP_find_menu(el_menu_ldps) {
            let el_menu_ldp
            el_menu_ldps.forEach(element => {
                if (!Array.from(element.parentElement.parentElement.classList).includes('cs-select-dropdown-hidden')) {
                    el_menu_ldp = element
                }
            });
            return el_menu_ldp
        }

        function fun_workstation_current(params) {
            let el_workstation_current
            Array.from(document.querySelector('#workstation').children[0].children).forEach(e => {
                console.log(Object.keys(e.attributes).length);
                if (Object.keys(e.attributes).length === 2) {
                    console.log(e);

                    el_workstation_current = e

                }

            });
            return el_workstation_current
        }

        function elementReading(params, Request, time) {
            return new Promise(function (resolve, reject) {
                console.log(params, Request, time);

                params ? params.click() : reject('Không tìm thấy params: ' + params)
                switch (time) {
                    case 1:
                        console.log('lần 1');
                        console.log(Request);

                        var observerOptions = {
                            childList: true,
                            attributes: true,
                            characterData: true,
                            subtree: true,
                            attributeOldValue: true,
                            characterDataOldValue: true
                        }

                        var observer = new MutationObserver(callback)
                        var targetNodes = body
                        observer.observe(targetNodes, observerOptions)
                        function callback(mutations) {

                            console.log('mutations: ', mutations);
                            console.log('mutations: ', mutations[2].target);

                            var ele_result = mutations[2].target.children[0].children[1].children[0].children[0].children[0].children
                            console.log(ele_result);
                            console.log(observer);
                            observer.disconnect()
                            console.log(observer);

                            console.log(Request);
                            Array.from(ele_result).forEach(element => {
                                if (element.textContent === Request) {
                                    console.log('element.textContent: ', element.textContent);
                                    console.log(element);
                                    resolve(element)
                                }
                            });
                        }
                        break;

                    case 2:
                        console.log('lần 2');
                        console.log(Request);

                        console.log(params.parentElement.nextSibling);

                        Array.from(params.parentElement.nextSibling.children).forEach(element => {
                            if (element.textContent === Request) {
                                console.log('element.textContent: ', element.textContent);
                                console.log(element);
                                resolve(element)
                            }
                        });
                        break;

                    case 3:
                        console.log('lần 3');
                        console.log(Request);
                        console.log(params.parentElement.parentElement);
                        console.log(params.parentElement.parentElement.children.length);
                        if (params.parentElement.parentElement.children.length === 2) {
                            var observerOptions3 = {
                                childList: true,
                                attributes: true,
                                characterData: true,
                                subtree: true,
                                attributeOldValue: true,
                                characterDataOldValue: true

                            }

                            var observer3 = new MutationObserver(callback3)
                            var targetNodes3 = params.parentElement.parentElement
                            observer3.observe(targetNodes3, observerOptions3)
                            function callback3(mutations) {

                                console.log('mutations: ', mutations);
                                console.log('mutations: ', mutations[0].addedNodes[0]);

                                observer3.disconnect()
                                // var ele_result = mutations[2].target.children[0].children[1].children[0].children[0].children[0].children
                                // console.log(ele_result);


                                // console.log(Request);
                                // Array.from(ele_result).forEach(element => {
                                //     if (element.textContent === Request) {
                                //         console.log('element.textContent: ', element.textContent);
                                //         console.log(element);
                                //         resolve(element)
                                //     }
                                // });
                            }
                        }

                        if (params.parentElement.parentElement.children.length === 3) {

                            Array.from(params.parentElement.nextSibling.children).forEach(element => {
                                if (element.textContent === Request) {
                                    console.log('element.textContent: ', element.textContent);
                                    console.log(element);
                                    resolve(element)
                                }
                            });
                        }

                    default:
                        console.log(Request);
                        console.log(params.parentElement.children);
                        console.log(params.parentElement.children.length);

                        switch (params.parentElement.children.length) {

                            case 2:
                                console.log('Trường hợp đã load dữ liệu => click nhanh hơn')
                                var ele_result = params.nextSibling.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children
                                Array.from(ele_result).forEach(element => {
                                    if (element.textContent === Request) {
                                        console.log('element.textContent: ', element.textContent);
                                        resolve(element)
                                    }
                                });
                                resolve()
                                break;

                            case 1:
                                console.log('Trường hợp chưa load dữ liệu => chạy event MutationObserver')

                                const observerOptions = {
                                    childList: true,
                                }

                                const observer = new MutationObserver(callback)

                                const targetNodes = params.parentElement
                                observer.observe(targetNodes, observerOptions)

                                function callback(mutations) {

                                    console.log('mutations: ', mutations);
                                    console.log('mutations: ', mutations[0].target);

                                    var ele_result = mutations[0].target.children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children
                                    //console.log('nè 1', ele_result);

                                    observer.disconnect()
                                    Array.from(ele_result).forEach(element => {
                                        if (element.textContent === Request) {
                                            //console.log('element.textContent: ', element.textContent);
                                            //console.log('element: ', element.parentElement.children);
                                            resolve(element)
                                        }
                                    });
                                }
                                break;



                            default:
                                break;
                        }
                        break;
                }
            })
        }

        function Find_Item(params, item) {
            var result
            console.log(params, item);
            Array.from(params).forEach((e) => {
                if (e.children.length === 2) {
                    console.log(e.children[0].textContent);
                    if (e.children[0].textContent === item) {
                        result = e
                    }
                }

            })
            console.log('lấy ra được', result);
            return result
        }

        function Find_Item_chat(params, item) {
            var result
            console.log('đầu tiên:', item);
            Array.from(params).forEach((e, i) => {
                console.log('thứ tự', i);
                console.log('length', e.children.length);
                if (e.children.length === 2) {
                    if (e.children[0].textContent === item || e.children[0].textContent === '*' + item) {
                        console.log('label có 1 phần tử và bằng', e.children[0].textContent, item);
                        result = e
                    }

                }
                // if (e.children.length === 2) {
                //     console.log('label length',e.children[0].children.length);     
                //     console.log('label', e.children[0]);               
                //     console.log('textContent',e.children[0].textContent);
                //     if (e.children[0].children.length <= 1) {
                //         console.log('label có 1 phần tử',e.children[0],e.children[0].textContent);
                //         if (e.children[0].textContent === item || e.children[0].textContent === '*'+item) {
                //             console.log('label có 1 phần tử và bằng',e.children[0].textContent,item);
                //             result = e
                //         }
                //     }
                //     if (e.children[0].children.length === 2) {
                //         console.log('label có 2 phần tử',e.children[0]);
                //         console.log('nè nè: ',e.children[0].children[1].innerText,item);
                //         if (e.children[0].children[1].innerText === item || e.children[0].children[1].innerText === '*'+item) {
                //             console.log('label có 1 phần tử và bằng',e.children[0].children[1].innerText,item);
                //             result = e
                //         }
                //     }

                // }

            })
            console.log('lấy ra được', result);
            return result
        }

        function Get_el_main_container(params, flag) {
            return new Promise(function (resolve, reject) {
                const observerOptions = {
                    childList: true,
                }

                const observer = new MutationObserver(callback)

                const targetNodes = params
                observer.observe(targetNodes, observerOptions)
                function callback(mutations) {


                    if (flag === 1) {
                        console.log('mutations: ', mutations);
                        console.log('mutations: ', mutations[0].target);
                        var el_main_container = mutations[0].target.children[0].children[0].children[1]
                        observer.disconnect()
                        if (el_main_container.classList[0] === 'main-container') {

                            resolve(el_main_container)
                        }
                    }
                    if (flag === 2) {
                        console.log('mutations: ', mutations);
                        console.log('mutations: ', mutations[0].target);
                        console.log('mutations: ', mutations[0].target.children[0]);
                        observer.disconnect()
                        resolve([
                            mutations[0].target.children[0].children[0].children[0],
                            mutations[0].target.children[1]
                        ])
                    }
                    if (flag === 3) {
                        console.log('mutations: ', mutations);
                        console.log('mutations: ', mutations[0].target);
                        if (mutations[0].target.children[0].classList[0] === 'flexible-tabs___kjiTt') {
                            var casee = mutations[0].target.children[0].children[0].children[0].children[0].children[0].children[1].children[0].innerText
                            console.log('thêm case: ', casee);
                            console.log(mutations[0].addedNodes[0].children[0].children[0].children[0]);
                            console.log(mutations[0].addedNodes[0].children[0].children[0].children[0].classList);
                            var reslut = Array.from(mutations[0].addedNodes[0].children[0].children[0].children[0].classList).some((e) => {
                                return e === 'new-status___3T8Lw'
                            })
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
                                    var audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
                                    audio_request.play();
                                    console.log('chơi nhạc');
                                }
                                console.log('chat mới');
                            } else {
                                console.log('không phải chat mới');
                            }
                            chat_new_nav(mutations[0].target.children[0].children[0].children[0])
                        }
                    }
                }
            })
        }

        function chat_new_nav(params) {
            return new Promise(function (resolve, reject) {
                const observerOptions = {
                    childList: true,
                }

                const observer = new MutationObserver(callback)

                const targetNodes = params
                observer.observe(targetNodes, observerOptions)
                function callback(mutations) {
                    //console.log('mutations: ', mutations);
                    //console.log('mutations: ', mutations[0].target);
                    if (mutations[0].addedNodes.length > 0) {
                        var casee = mutations[0].addedNodes[0].children[0].children[1].children[0].innerText
                        console.log(mutations[0].addedNodes[0]);
                        console.log(mutations[0].addedNodes[0].style.background);
                        console.log('thêm case: ', casee);
                        console.log(mutations[0].addedNodes[0].classList);
                        var reslut = Array.from(mutations[0].addedNodes[0].classList).some((e) => {
                            return e === 'new-status___3T8Lw'
                        })
                        if (reslut) {
                            console.log('chat mới');
                            if (document.querySelector('.on_off_audio').checked) {
                                var audio_request = new Audio(chrome.runtime.getURL("audio/request.mp3"));
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

            })
        }

        function select(params, elementAdd) {
            var menu = params.children[1].classList[0]
            //console.log(menu);
            //console.log(params);
            //console.log(params.parentElement.children);
            Array.from(params.parentElement.children).forEach((e) => {

                if (Array.from(e.children[1].classList).includes(menu) === false) {
                    //console.log(e);
                    //console.log(e.children[1]);
                    e.children[1].classList.remove('select')
                }
            })
        }

        function key_one(e, key) {
            document.addEventListener("keydown", function (event) {

                if (event.code === key) {
                    e.click()
                }

            }, false)
        }

        function keyalt_click(e, key) {

            document.addEventListener("keydown", function (event) {
                //xem đang nhấn phím gì
                //console.log(event);
                if (event.altKey && event.code === key) {
                    e.click()
                }

            }, false)
        }

        function keyalt2(e, key1, key2) {

            document.addEventListener("keydown", function (event) {

                if (event.altKey && event.code === key1 && event.code === key2) {
                    e.click()
                }
            }, false)
        }

        var timer_countdown
        function countdown(h, m, s, elements, callback) {
            function calculate() {
                if (h < 0 || m < 0 || s <= 0) {
                    clearInterval(timer_countdown);
                    timer_countdown = undefined
                    h = 0
                    m = 0
                    s = 0
                    // console.group('hết giờ')
                    // console.log('h', h);
                    // console.log('m', m);
                    // console.log('s', s);
                    // console.log('timer_countdown: ', timer_countdown);
                    // console.log('hết giờ');
                    // console.groupEnd()
                    for (let index = 0; index < elements.length; index++) {
                        elements[index].innerHTML = ('00').slice(-2)
                    }
                    if (typeof (callback) === 'function') {
                        console.log(123);
                        callback()
                    }
                    return false;
                }
                // /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
                // // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
                // //  - giảm số phút xuống 1 đơn vị
                // //  - thiết lập số giây lại 59
                if (s === -1) {
                    m -= 1;
                    s = 59;
                }

                // // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
                // //  - giảm số giờ xuống 1 đơn vị
                // //  - thiết lập số phút lại 59
                if (m === -1) {
                    h -= 1;
                    m = 59;
                }

                // /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/

                data = [s, m, h]
                for (let index = 0; index < elements.length; index++) {
                    elements[index].innerHTML = ('00' + data[index]).slice(-2)
                    //console.log(elements[index]);           
                }

                // console.group('action')
                // console.log('h', h);
                // console.log('m', m);
                // console.log('s', s);
                // console.log('timer_countdown: ', timer_countdown);
                // console.groupEnd()
            }
            if (!timer_countdown) {
                s - 1
                timer_countdown = setInterval(function () {
                    s--;
                    calculate();
                }, 1000);
            } else {

                console.log(timer_countdown);
                return
            }
        }

        function random_element_color(e) {
            var x = Math.floor(Math.random() * 256);
            var y = 100 + Math.floor(Math.random() * 256);
            var z = 50 + Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            e.style.background = bgColor;
            //e.style.backgroundColor = bgColor;
        }

        function changeColor(element) {

            if (!Array.from(element.classList).includes('change_start')) {
                element.classList.add('change_start')
            }
            setTimeout(() => {
                element.classList.remove('change_start')
            }, 2000);
        }

        var timers_fade = []
        function fade(element, startcolor, endcolor, time_elapsed, style) {
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
                if (style === 'border') {
                    element.style.borderColor = 'rgb(' + currentcolor.toString() + ')'
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
                    if (style === 'border') {
                        currentcolor = [255, 255, 255]
                    }

                }
            }, time_elapsed);
            timers_fade.push(timer)
            console.log(timers_fade)
        }

        function fade2(params) {
            fade(params, [255, 255, 255], [255, 0, 0], 10, 'border');

            console.log(timers_fade)
            setTimeout(() => {
                timers_fade.forEach((e) => {
                    clearInterval(e)
                    console.log('ClearInterval: ', e)
                    params.style.borderColor = 'rgb(241, 241, 241)'
                })

                console.log('Trước khi xoá: ', timers_fade)
                timers_fade = []
                console.log('Sau khi xoá: ', timers_fade)
            }, 1000)
        }

        function findElement_text(element, text) {
            const elementSpan = wrapperLDP.querySelectorAll(element)
            var result
            elementSpan.forEach((e) => {
                if (e.innerText === text && e.classList.value === '') {
                    result = e
                }
            })
            return result
        }

        function findElemen_text_finish(element, selectorParent, selectorChild) {
            while (element.parentElement) {
                //console.log('cha',element.parentElement);
                //tìm element cha
                if (element.parentElement.className === selectorParent) { // tìm element cha có bằng selectorParent
                    var elementSibling = element.parentElement.nextElementSibling // tìm ra element cha gắn element kế cận
                    //console.log('kế bên',elementSibling);
                    while (elementSibling.childNodes) {
                        //console.log('kế bên con',elementSibling.childNodes);
                        //tìm element con
                        if (elementSibling.childNodes[0].className === selectorChild) { // tìm element con có bằng selectorChild
                            //console.log('con',elementSibling.childNodes[0]);
                            return elementSibling.childNodes[0]
                        }
                        elementSibling = elementSibling.childNodes[0]
                        // nếu không bằng selectorChild thì thằng con hiện tại gắn vào elementSibling và trở lên vòng while tìm có con không
                    }
                }
                element = element.parentElement

                // nếu không bằng selectorParent thì thằng cha hiện tại gắn vào element và trở lên vòng while tìm có cha không
            }
        }

        function onClassChange(element, callback) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'attributes' &&
                        mutation.attributeName === 'class'
                    ) {
                        callback(mutation.target);
                    }
                });
            });
            observer.observe(element, { attributes: true });
            return observer.disconnect;
        }

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
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
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    }




}



const data_LDP = [
    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về phí vận chuyển',
        Explain: 'Thắc mắc chung về cước phí vận chuyển khi mua hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về cách gửi hàng',
        Explain: 'KH hỏi chung về các hình thức gửi hàng cho vận chuyển, seller hỏi về việc ẩn thông tin người mua khi xác nhận đơn/in phiếu gửi hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Khu vực không hỗ trợ giao hàng',
        Explain: 'Địa chỉ của buyer không nằm trong khu vực hỗ trợ giao hàng của DVVC',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Bật/tắt kênh vận chuyển',
        Explain: 'Seller yêu cầu bật/ tắt kênh vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về chương trình miễn phí vận chuyển',
        Explain: 'Thắc mắc chung về chính sách miễn phí vận chuyển.',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Yêu cầu gắn/ gỡ tag miễn phí vận chuyển',
        Explain: 'Yêu cầu gắn/ gỡ tag miễn phí vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Bật tính năng thanh toán COD',
        Explain: 'Hướng dẫn bật/tắt tính năng thanh toán COD',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung khác về vận chuyển',
        Explain: '- Khách liên hệ kiểm tra thông tin về vận chuyển của đơn hàng nhưng chưa cung cấp/ CS không kiểm tra được mã đơn hàng cụ thể để hỗ trợ (Riêng kênh Chat thì CS chọn LDP Chat chưa hoàn tất) <br/> - Câu hỏi chung khác về vận chuyển mà chưa có LDP cụ thể <br/> - Câu hỏi chung về đồng kiểm <br/> Ví dụ: Các vấn đề về Auto call, KH liên hệ hỏi ĐVVC có còn hỗ trợ ở khu vực của tôi không',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Câu hỏi chung về phương thức vận chuyển',
        Explain: 'Seller/Buyer hỏi các thông tin chung về Phương thức vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Seller yêu cầu thay đổi phương thức vận chuyển',
        Explain: 'Seller muốn đổi sang một phương thức vận chuyển khác cho đơn hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Buyer không thể lựa chọn đơn vị vận chuyển',
        Explain: 'Buyer khiếu nại về việc không chọn được ĐVVC cụ thể như trước đây',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Phí vận chuyển cao hơn khi chọn phương thức vận chuyển',
        Explain: 'Buyer khiếu nại về việc phí vận chuyển khi chọn phương thức vận chuyển cao hơn khi chọn ĐVVC cụ thể trước đây',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Lỗi hệ thống liên quan đến phương thức vận chuyển',
        Explain: 'Lỗi hệ thống như: không chọn được phương thức vận chuyển, màn hình trắng, ....',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Phương thức vận chuyển',
        L3: 'Các khiếu nại khác',
        Explain: 'Các khiếu nại khác ngoài các LDP đã có ở trên của nhóm Phương thức vận chuyển (masking)',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Yêu cầu hủy đơn',
        Explain: 'Buyer/ seller yêu cầu huỷ đơn hàng <br/> Seller nghi ngờ buyer boom nhờ hủy đơn',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Seller muốn từ chối yêu cầu hủy đơn',
        Explain: 'Hướng dẫn seller từ chối yêu cầu hủy đơn của buyer',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Buyer rút yêu cầu hủy đơn',
        Explain: 'Hướng dẫn seller từ chối yêu cầu hủy đơn của buyer',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Seller không thể chấp nhận yêu cầu hủy đơn',
        Explain: 'Seller không thể nhấn đồng ý yêu cầu hủy đơn của buyer vì lỗi hệ thống hoặc do seller đã giao hàng cho vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Thắc mắc lý do đơn hàng bị hủy',
        Explain: 'Thắc mắc về lý do hủy đơn',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Seller đã gửi hàng nhưng đơn hủy trên hệ thống',
        Explain: 'Seller đã gửi hàng cho 3PL nhưng hệ thống cấp nhật hủy do pickup failed',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hủy đơn hàng',
        L3: 'Đơn hàng hủy trước khi giao cho vận chuyển',
        Explain: 'Đơn hàng hủy trước khi Seller đã giao hàng cho vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Thay đổi chi tiết đơn hàng',
        L3: 'Yêu cầu thay đổi DVVC',
        Explain: 'KH muốn thay đổi đơn vị vận chuyển trên đơn hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Thay đổi chi tiết đơn hàng',
        L3: 'Thay đổi thông tin người nhận/ phương thức thanh toán',
        Explain: 'Yêu cầu thay đổi phương thức thanh toán, số điện thoại, địa chỉ lấy hàng/ nhận hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Không thể xác nhận đơn hàng',
        Explain: 'Không thể xác nhận đơn hàng: <br/>- Seller nhấn xác nhận nhưng báo lỗi (ĐH chưa có trạng thái Request Created)<br/>- Không thể in phiếu gửi hàng (AWB) <br/>- không thể xác nhận đơn do bị Pending bởi Fraud (hiển thị Đang được kiểm tra bởi Shopee)',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Không hiển thị mã vận đơn/ mã vận đơn bị trùng',
        Explain: 'Không hiển thị/ trùng mã vận đơn sau khi seller xác nhận, lỗi MVD (ĐH đã có trạng thái Request Created)',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Kiểm tra trạng thái lấy hàng',
        Explain: 'Đơn chưa Pickup Done còn trong thời hạn lấy hàng (Cả đơn bình thường và đơn THHT): <br/> - Seller liên hệ theo dõi hành trình lấy hàng khi chưa quá hạn lấy <br/> - Buyer liên hệ hỏi thông tin hành trình/ hối giao đơn hàng',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Hối lấy hàng',
        Explain: 'Đơn chưa Pickup Done quá thời hạn lấy hàng (Cả đơn bình thường và đơn THHT) => CS chuyển phiếu hối lấy: <br/> - Seller hối lấy hàng <br/> - Buyer liên hệ hỏi thông tin hành trình/ hối giao đơn hàng',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Shipper không đến/ lấy hàng trễ',
        Explain: 'Seller khiếu nại Shipper không đến lấy hàng + cập nhật sai thông tin không đến nhưng cập nhật hẹn lại ngày lấy/Seller không nghe máy mà CS cần chuyển 3PL KN',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Khiếu nại thái độ shipper',
        Explain: 'Seller khiếu nại thái độ Shipper/ Đơn Reverse, Buyer khiếu nại thái độ Shipper',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Seller đã gửi hàng nhưng chưa cập nhật trạng thái',
        Explain: 'Seller đã giao hàng cho shipper/gửi hàng tại bưu cục nhưng chưa được cập nhật trạng thái trên đơn hàng',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Yêu cầu lấy hàng lại',
        Explain: 'Seller yêu cầu Shipper qua lấy hàng lại do lấy lần 1, lần 2 không thành công (Ko khiếu nại Shipper cập nhật sai)',
    },
    {
        L1: 'Vận chuyển',
        L2: 'Lấy hàng/ Gửi hàng',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác về việc gửi hàng không có lý do cụ thể <br/> - Đơn hàng quá cân không thể gửi hàng, Bưu cục đóng cửa không thể gửi hàng, 3PL từ chối lấy hàng... <br/> - Đơn trên hệ thống chưa Pickup Done nhưng thực tế 3PL báo đơn bị hủy',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Shipper chưa lấy hàng nhưng đã cập nhật lấy thành công',
        Explain: 'Seller chưa giao hàng cho vận chuyển nhưng hệ thống cập nhật lấy thành công',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: '[Trước EDT] Theo dõi hành trình giao hàng',
        Explain: '- Khách liên hệ theo dõi hành trình ĐH/ Hối giao trước và trong EDT (Cả đơn Local và CB) <br/>KH liên hệ khiếu nại sai trạng thái ca giao: <br/> + Shipper không đến giao hàng nhưng cập nhật buyer hẹn lại ngày giao <br/>   + Buyer không nghe máy <br/>   + Buyer không có nhà... nhưng còn ca giao trong hạn EDT và KH không khiếu nại vận chuyển. <br/> - Nếu khách khiếu nại vận chuyển thì chọn Shipper không đến giao hàng <br/> - Nếu cần chuyển phiếu hối giao thì chọn [Sau EDT] Hối giao',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: '[Sau EDT] Hối giao',
        Explain: '- Theo dõi hành trình ĐH/ Hối giao sau EDT (Cả đơn Local và CB) <br/>KH liên hệ khiếu nại sai trạng thái ca giao:  <br/> + Shipper không đến giao hàng nhưng cập nhật buyer hẹn lại ngày giao <br/> + Buyer không nghe máy <br/> + Buyer không có nhà... quá EDT nhưng còn ca giao và KH không khiếu nại vận chuyển. <br/> - Nếu khách khiếu nại vận chuyển thì chọn Shipper không đến giao hàng <br/> - TH CS cần chuyển phiếu hối giao',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Yêu cầu giao hàng lại',
        Explain: 'Yêu cầu giao hàng lại do: <br/> Có hẹn với shipper dời ngày giao mà chưa thấy giao, hoặc cập nhật trạng thái chuyển hoàn nhưng KH yêu cầu giao tiếp.',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Shipper không đến giao hàng',
        Explain: 'Chọn khi cần chuyển 3PL khiếu nại: Shipper hẹn nhưng không đến giao hàng cho buyer, Shipper cập nhật sai thông tin: Không đến giao hàng nhưng cập nhật buyer hẹn lại ngày giao/ Buyer không nghe máy...',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Bưu cục đóng cửa',
        Explain: 'buyer liên hệ hỏi địa chỉ bưu cục nhận hàng nhưng ra đó bưu cục đóng cửa',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Đã giao hàng nhưng chưa cập nhật trạng thái',
        Explain: '- Đơn hàng đã giao thành công nhưng chưa cập nhật trạng thái <br/> - Buyer đã nhận được hàng nhưng đơn bị hủy trên hệ thống',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đang chờ giao',
        L3: 'Các vấn đề vận chuyển khác',
        Explain: '- Các vấn đề khác về giao hàng không có lý do phiếu cụ thể: đồng kiểm, xin thông tin shipper, khiếu nại thái độ shipper, hỏi MVĐ <br/> - Đơn trên hệ thống đang trong hành trình giao nhưng thực tế 3PL báo đã hủy đơn <br/> - Đơn cập nhật Lost <br/> Đơn bắt giữ: <br/> + Buyer liên hệ: Theo dõi hành trình/ hối giao <br/> + Seller liên hệ: Các vấn đề vận chuyển khác',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Yêu cầu bằng chứng đã giao hàng',
        Explain: 'KH yêu cầu 3PL cung cấp bằng chứng đã giao hàng thành công',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Shipper thu sai tiền',
        Explain: 'Shipper thu sai tiền',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Chưa nhận hàng nhưng cập nhật giao hàng thành công',
        Explain: '- ĐH chưa Completed, KH khiếu nại chưa nhận hàng nhưng đơn cập nhật giao hàng thành công <br/> - Nếu đơn đã Completed (quá hạn khiếu nại): CS chọn Khiếu nại sau khi hết hạn Shopee đảm bảo',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Không thể nhấn "Đã nhận hàng"',
        Explain: 'ĐH đã giao thành công, cập nhật Delivery done nhưng buyer không thể nhấn Đã nhận hàng do lỗi hệ thống',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Các vấn đề về hoàn phí vận chuyển',
        Explain: 'Các vấn đề về hoàn phí vận chuyển',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Yêu cầu hoàn tiền mặt',
        Explain: 'Sử dụng trong các trường hợp lỗi 3pl thu dư tiền hoặc đền bù cho KH và khách muốn nhận tiền mặt thay vì qua số dư TK Shopee',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Khiếu nại thái độ shipper, nhân viên bưu cục',
        Explain: 'Khiếu nại thái độ shipper, nhân viên bưu cục, Shipper không đeo khẩu trang',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Đã nhận hàng',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến giao hàng không có lý do phiếu cụ thể như Seller khiếu nại bưu tá cho buyer đồng kiểm, các vấn đề về hối lắp đặt',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Kiểm tra trạng thái trả hàng',
        Explain: '- Seller liên hệ kiểm tra hành trình trả hàng (chưa quá hạn hoàn hàng) <br/> - Buyer liên hệ hối giao nhưng hệ thống ghi nhận chuyển hoàn <br/> - Khách khiếu nại không nhận được liên hệ giao nhưng đơn bị chuyển hoàn, CS tư vấn nhưng không chuyển khiếu nại 3PL, nếu chuyển khiếu nại thì chọn Shipper không đến giao hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Hối chuyển hoàn',
        Explain: 'Seller hối chuyển hoàn hàng (đã quá hạn hoàn hàng)',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Đơn hoàn thành công nhưng seller chưa nhận được hàng',
        Explain: 'Trạng thái hoàn thành công nhưng seller chưa nhận được hàng trả về/ nhận sai/ thiếu hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hoàn hàng',
        L3: 'Các vấn đề khác',
        Explain: '- Seller đã nhận được hàng hoàn nhưng hệ thống chậm/ chưa cập nhật trạng thái <br/> - Các vấn đề khác về khiếu nại hàng hoàn chưa có LDP cụ thể',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hỏng hàng/ mất hàng',
        L3: 'Khiếu nại hỏng hàng',
        Explain: 'Seller khiếu nại hàng hoàn bị hư hỏng/bể vỡ',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hỏng hàng/ mất hàng',
        L3: 'Khiếu nại mất hàng',
        Explain: 'Khiếu nại mất hàng',
    },

    {
        L1: 'Vận chuyển',
        L2: 'Hỏng hàng/ mất hàng',
        L3: 'Kiểm tra trạng thái đơn mất hàng/ hỏng hàng',
        Explain: 'Seller kiểm tra kết quả xử lý khiếu nại hàng hư hỏng/bể vỡ của 3PL đến đâu rồi',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về hình thức thanh toán',
        Explain: 'Câu hỏi chung về các hình thức thanh toán trên Shopee',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về trả góp',
        Explain: 'Thắc mắc về hình thức thanh toán trả góp: làm thế nào để mua hàng trả góp, thời gian chuyển đổi hình thức, ngân hàng hỗ trợ, sản phẩm hỗ trợ, thắc mắc về phí xử lý khi mua trả góp,...',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Yêu cầu xuất hóa đơn GTGT',
        Explain: 'KH yêu cầu xuất hóa đơn đỏ cho các giao dịch trên Shopee',
    },

    {
        L1: 'Thanh toán',
        L2: 'Câu hỏi chung',
        L3: 'Sai thông tin hóa đơn GTGT',
        Explain: 'Nhận hóa đơn đỏ sai thông tin: sai số tiền, địa chỉ, mã số thuế,....',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'Thêm/ thay đổi TKNH',
        Explain: 'Hướng dẫn Thêm/thay đổi thông tin TKNH',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'Thêm/ thay đổi thẻ tín dụng',
        Explain: 'Hướng dẫn Thêm/thay đổi thông tin thẻ tín dụng',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'TKNH bị từ chối',
        Explain: 'Không thể thêm TKNH, TKNH bị từ chối do: <br/> - lỗi Fraud <br/> - phát sinh từ ngân hàng phát hành thẻ <br/> - sau khi LRT bị hủy do Wrong BA <br/> - hệ thống từ chối để KH cập nhật lại chi nhánh ngân hàng (Agribank/ngân hàng nước ngoài),... ',
    },

    {
        L1: 'Thanh toán',
        L2: 'Tài khoản & bảo mật',
        L3: 'Thời gian xác minh TKNH lâu',
        Explain: 'KH phàn nàn về thời gian xác minh TKNH khi rút tiền',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Hướng dẫn thanh toán đơn hàng',
        Explain: 'Hướng dẫn thanh toán đơn hàng trên Shopee',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy',
        Explain: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy, đơn đã thanh toán bị hủy KH chưa nhận được tiền hoàn (hình thức CC, iBanking) <br/> - Nếu thanh toán bằng ShopeePay thì chọn L1 là ShopeePay <br/> - Nếu thanh toán bằng Số dư TK Shopee thì chọn Thắc mắc về tiền hàng/ hoàn tiền qua ví',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Chuyển khoản dư/ thiếu/ trừ tiền 2 lần/ sai thông tin',
        Explain: '- KH thanh toán dư / thiếu số tiền trên đơn hàng (sử dụng cho hình thức bank tranfer) <br/> - KH bị trừ tiền 2 lần cho 1 đơn hàng (các hình thức thanh toán còn lại: CC, IBanking,...)',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
        Explain: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Không thể cung cấp biên lai/ bằng chứng thanh toán',
        Explain: 'KH không thể tải biên lai chuyển tiền, sau khi đã chuyển khoản thành công  bằng Bank tranfer',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Mất/ không cung cấp được biên lai/ bằng chứng thanh toán',
        Explain: 'KH không thể tải biên lai chuyển tiền, sau khi đã chuyển khoản thành công  bằng Bank tranfer',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Lỗi hệ thống khác liên quan đến việc thanh toán: <br/> - lỗi màn hình trắng <br/> - lỗi ngay tại bước thanh toán đơn hàng <br/> - ...',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Thanh toán không thành công/ bị từ chối',
        Explain: 'Thanh toán không thành công/ bị từ chối (sau khi nhập mã OTP)',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thanh toán',
        L3: 'Không thể chọn hình thức thanh toán',
        Explain: 'KH không thể sử dụng phương thức thanh toán do: <br/> -  không được whitelist hoặc do sản phẩm không hỗ trợ (VD: seller tắt PTTT, đơn CB không thể thanh toán bằng số dư TK Shopee) <br/> - KH đang bị COD Black list',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Thắc mắc về tiền hàng/ hoàn tiền qua ví',
        Explain: '- Câu hỏi chung về quy trình hoàn tiền/ thêm tiền vào Số dư TK Shopee <br/> - Đơn hàng thanh toán bằng Số dư TK Shopee nhưng trạng thái là chưa thanh toán/hủy hoặc đơn bị hủy nhưng chưa nhận được tiền hoàn <br/> - Seller chưa nhận được tiền hàng do bị tạm hoãn để Fraud kiểm tra (tính năng Pending Escrow)',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Lỗi hệ thống về số dư ví ',
        Explain: 'Các vấn đề lỗi liên quan đến việc đơn hàng hoàn tất nhưng tiền hàng thanh toán không đúng, cần kiểm tra với PMT',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Đơn hàng hoàn tất nhưng tiền chưa cộng vào ví',
        Explain: 'Đơn hàng hoàn tất (trạng thái Completed) nhưng chưa chuyển trạng thái Escrow/Escrow Paid để thanh toán tiền cho seller.',
    },

    {
        L1: 'Thanh toán',
        L2: 'Thêm tiền vào ví',
        L3: 'Doanh thu bị sai do chênh lệch cân nặng',
        Explain: 'Seller thắc mắc số tiền thanh toán cho đơn hàng không đúng, lệch cước do có chênh lệch cân nặng kiện hàng',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Hướng dẫn cách rút tiền',
        Explain: 'Hướng dẫn thao tác rút tiền (chưa có Withdrawal ID trên hệ thống), thay đổi mã PIN <br/> User muốn hủy lệnh rút tiền đã tạo',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Lệnh rút tiền bị hủy do sai TKNH',
        Explain: 'Lệnh rút tiền bị hủy do sai thông tin TKNH',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Lệnh rút tiền bị hủy do tài khoản có dấu hiệu bất thường',
        Explain: 'Lệnh rút tiền bị hủy do TK có dấu hiệu bất thường',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Lệnh rút tiền bị hủy bởi hệ thống',
        Explain: 'Lệnh rút tiền bị hủy bởi hệ thống do: có lỗi phát sinh, trước đó user yêu cầu hủy lệnh rút tiền, các trường hợp lệnh rút tiền bị hủy chưa rõ nguyên nhân,...',
    },

    {
        L1: 'Thanh toán',
        L2: 'Rút tiền',
        L3: 'Chưa nhận được tiền',
        Explain: 'KH thực hiện lệnh rút tiền (đã có Withdrawal ID trên hệ thống) nhưng chưa nhận được tiền vào TKNH',
    },

    {
        L1: 'Thanh toán',
        L2: 'Phí thanh toán',
        L3: 'Thắc mắc về phí bán hàng trên Shopee',
        Explain: 'Seller hỏi thông tin chung về các loại phí khi bán hàng trên Shopee (phí thanh toán), trường hợp seller hỏi doanh thu của đơn hàng cụ thể thì chọn. <br/> Các vấn đề về doanh thu <br/> Feedback về mức phí hiện tại',
    },

    {
        L1: 'Thanh toán',
        L2: 'Phí thanh toán',
        L3: 'Trừ sai phí thanh toán',
        Explain: 'Seller khiếu nại trừ sai số tiền phí thanh toán trên đơn hàng',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn tạo tài khoản',
        Explain: 'Hướng dẫn cách tạo TK Shopee hoặc KH tạo không được nhờ kiểm tra.',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Không thể đăng nhập',
        Explain: 'Buyer/Seller báo không thể đăng nhập vào tài khoản Shopee, ngoại trừ các trường hợp không thể đăng nhập do bị khóa tài khoản.',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn cài đặt thông báo',
        Explain: 'Buyer/Seller muốn cài đặt/không muốn nhận thông báo từ ứng dụng Shopee',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn tắt thông báo qua email',
        Explain: 'Buyer/Seller không muốn nhận thông báo của Shopee qua Email',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn thay đổi ngôn ngữ',
        Explain: 'Buyer/Seller muốn thay đổi ngôn ngữ trên ứng dụng Shopee',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Chat',
        Explain: 'Hướng dẫn buyer sử dụng tính năng Chat ngay cho Shop hoặc hướng dẫn Buyer/Seller tính năng Trò chuyện với Shopee để chat với nhân viên hỗ trợ, Buyer liên hệ yêu cầu xóa/chặn tin nhắn spam từ Shopee/Seller',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Câu hỏi chung',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến Tài khoản và Bảo mật, Buyer liên hệ bị khóa tính năng bình luận trên livestream',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Yêu cầu tạo tài khoản trên số điện thoại đã được đăng ký',
        Explain: 'Yêu cầu tạo tài khoản/thêm/thay đổi trên số điện thoại đã được đăng ký => CS không dùng. <br/> CS sử dụng LDP : Thêm/ thay đổi SDT',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thay đổi username',
        Explain: 'Yêu cầu thay đổi username',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thêm/ thay đổi mail',
        Explain: 'Thêm/ thay đổi mail',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thêm/ thay đổi SDT',
        Explain: 'Thêm/ thay đổi SDT',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thay đổi mật khẩu',
        Explain: 'Thay đổi mật khẩu',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Thay đổi thiết lập shop',
        Explain: 'Thay đổi địa chỉ/thiết lập cơ bản/thông tin tài khoản',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Liên kết/ hủy liên kết mạng xã hội',
        Explain: 'Buyer hỏi về cách liên kết/hủy liên kết mạng xã hội',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Xóa tài khoản',
        Explain: 'Buyer/Seller muốn xóa tài khoản Shopee, xóa tài khoản tự động, thắc mắc SP gửi thông báo về việc sẽ xóa TK tự động',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Yêu cầu mở lại TK (Không Fraud)',
        Explain: 'User thắc mắc lý do hoặc yêu cầu mở lại tài khoản bị Banned/ Frozen KHÔNG liên quan đến Fraud (QC,Dispute,SOS)',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Mất điện thoại',
        Explain: 'Buyer/Seller báo mất điện thoại nhờ Shopee hỗ trợ',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Tài khoản',
        L3: 'Mất thẻ tín dụng',
        Explain: 'Buyer/Seller báo mất thẻ tín dụng nhờ Shopee hỗ trợ',
    },
    //===================================================================================
    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Mất thẻ tín dụng',
        Explain: 'Buyer/Seller báo mất thẻ tín dụng nhờ Shopee hỗ trợ',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Tài khoản bị ban/ frozen',
        Explain: 'KH liên hệ về vấn đề tài khoản khóa do Fraud được CS hỗ trợ chuyển frozen để rút tiền, theo dõi đơn hàng,..',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Tài khoản bị ban/frozen cần Fraud xem xét (To Appeal)',
        Explain: 'Dùng cho các trường hợp sau:<br/> + Tài khoản bị ban/frozen cần Fraud kiểm tra lại quyết định khóa tài khoản. <br/> + Case To Appeal.',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Tài khoản bị ban/ frozen (No Appeal)',
        Explain: 'Dùng cho các trường hợp tài khoản bị đóng băng/khóa tài khoản do abuse Freeship, voucher, emulator... có tag No Appeal',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'TKNH bị khóa',
        Explain: 'Thắc mắc TKNH bị khóa',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Khóa thiết bị',
        Explain: 'Buyer/Seller báo mất thẻ tín dụng nhờ Shopee hỗ trợ',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Thẻ CC bị khóa',
        Explain: 'Thắc mắc thẻ CC bị khóa',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Không thể rút tiền',
        Explain: 'Buyer/Seller thắc mắc không thể thực hiện rút tiền được, Chặn rút tiền do Fraud /Payment',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Không thể thanh toán do TK có dấu hiệu bất thường ',
        Explain: 'Không thể thanh toán do TK có dấu hiệu bất thường',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng voucher',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về sử dụng voucher <br/> không sử dụng được voucher do liên kết TK khác (bao gồm các loại voucher dành cho người dùng mới)',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Giới hạn lượt miễn phí vận chuyển',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về giới hạn sử dụng mã miễn phí vận chuyển',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Không nhận được xu',
        Explain: 'User báo không nhận được xu vì vấn đề tài khoản gian lận',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng xu',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về giới hạn sử dụng xu',
    },
    //==================================
    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Normal account - ATO reported',
        Explain: 'Only Fraud Team use',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Account appeal - ATO prevention',
        Explain: 'CS sử dụng đối với quy trình ATO',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Các trường hợp lừa đảo',
        Explain: '- User báo về các trường hợp lừa đảo như: nhận được cuộc gọi lừa đảo, tri ân khách hàng <br/> - User thắc mắc lý do ban tài khoản vì lạm dụng chính sách THHT',
    },

    {
        L1: 'Tài khoản & Gian lận',
        L2: 'Lừa đảo',
        L3: 'Tố cáo lừa đảo/hack',
        Explain: 'User tố cáo lừa đảo, báo tài khoản bị hack <br/> User nhờ hủy lệnh rút tiền đã tạo do tài khoản bị hack, bị người khác tạo LRT',
    },
    //===========================
    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn trả hàng/ hoàn tiền',
        Explain: '- Hướng dẫn bấm khiếu nại cả đơn hàng hoặc hủy khiếu nại <br/> - Các hướng dẫn chung bao gồm trường hợp Buyer đã nhấn khiếu nại, đang chờ Seller phản hồi liên hệ CS nhờ hướng dẫn',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn buyer/ seller thương lượng về số tiền hoàn',
        Explain: 'Hướng dẫn thay đổi/ cách nhập số tiền hoàn cho phương thức Hoàn Tiền Ngay',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Khiếu nại 1 phần đơn hàng',
        Explain: 'Hướng dẫn thao tác nhấn khiếu nại cho trường hợp buyer chỉ muốn hoàn tiền/THHT một hoặc một số sản phẩm trong đơn hàng',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn gửi trả hàng',
        Explain: 'Hướng dẫn buyer thao tác chọn hình thức trả hàng, cung cấp địa chỉ trả hàng của seller/kho Shopee, hướng dẫn đóng gói hàng trả, các vấn đề liên quan về việc chưa lấy hàng trả thành công',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn Seller phản hồi yêu cầu Trả hàng & Hoàn tiền',
        Explain: 'Hướng dẫn Seller xử lý yêu cầu THHT của Buyer, Hướng dẫn seller phản hồi KN sau Processing',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi khác về Trả hàng & Hoàn tiền',
        Explain: 'Câu hỏi khác liên quan đến Trả hàng & Hoàn tiền, thắc mắc về chính sách THHT',
    },
    //=========================
    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Buyer muốn đổi hàng',
        Explain: 'Sản phẩm không phát sinh vấn đề khiếu nại nhưng buyer có nhu cầu đổi hàng do không phù hợp nhu cầu, đổi ý',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Theo dõi hành trình',
        Explain: 'Theo dõi trạng thái vận chuyển của hàng hoàn trả khi Buyer đã trả hàng thành công',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Seller chưa nhận được hàng hoàn trả',
        Explain: 'Seller báo chưa nhận được hàng hoàn trả <br/> Seller từ chối nhận/địa chỉ sai./số điện thoại nhận hàng sai.., buyer thu COD',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Yêu cầu cung cấp hóa đơn trả hàng',
        Explain: '- Hướng dẫn buyer cung cấp hóa đơn trả hàng (áp dụng cho trường hợp buyer chọn hình thức trả hàng Tự sắp xếp, các trường hợp Dispute yêu cầu Buyer tự gửi hàng) <br/> - Buyer không được input thông tin trả hàng lên hệ thống do lỗi hệ thống nên CS hướng dẫn cung cấp hóa đơn <br/> *Buyer có tạo lệnh thu hộ COD nhưng chưa bị từ chối, CS HD hủy lệnh',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Khiếu nại bị hủy do buyer không trả hàng đúng hạn',
        Explain: 'Khiếu nại bị hủy do buyer không trả hàng đúng hạn',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Buyer trả hàng đúng hạn nhưng khiếu nại bị huỷ',
        Explain: 'Buyer đã trả hàng đúng hạn nhưng khiếu nại bị hủy do lỗi 3PL cập nhật sai trạng thái hoặc hệ thống cập nhật sai (áp dụng cho cả trường hợp khiêu nại chưa cập nhật hủy)',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hành trình trả hàng',
        L3: 'Khiếu nại hàng trả về hư hỏng',
        Explain: 'Khiếu nại hàng trả về hư hỏng',
    },
    //=======================================
    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Kiểm tra trạng thái hoàn tiền',
        Explain: 'Đơn hàng phát sinh khiếu nại THHT đã được chấp nhận hoàn tiền: Buyer liên hệ thắc mắc thời gian hoàn tiền, khi nào được hoàn tiền. Trường hợp Seller liên hệ, CS chọn nhánh Thanh toán/Thêm tiền vào ví',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn vào số dư TK Shopee',
        Explain: '- Đơn thanh toán COD phát sinh khiếu nại THHT đã được chấp nhận hoàn tiền nhưng buyer báo chưa nhận được tiền hoàn vào Số dư TK Shopee trong 24h <br/> - Đơn khiếu nại được Dispute xử lý offline hoàn tiền vào Số dư TK Shopee nhưng buyer báo chưa nhận được tiền hoàn vào Số dư TK Shopee trong thời gian 3-5 ngày làm việc ',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn vào TKNH',
        Explain: 'Buyer thắc mắc vẫn chưa nhận được tiền hoàn vào TKNH',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn vào thẻ tín dụng',
        Explain: 'Không nhận được tiền hoàn vào thẻ tín dụng',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không được hoàn xu',
        Explain: 'Thắc mắc không được hoàn xu cho đơn THHT, thắc mắc không được hoàn xu phí trả hàng',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Không được hoàn voucher',
        Explain: 'Thắc mắc không được hoàn voucher cho đơn THHT',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Yêu cầu hoàn tiền vào TKNH',
        Explain: 'Buyer yêu cầu hoàn tiền vào TKNN cho đơn THHT được chấp nhận hoàn tiền',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Hoàn tiền',
        L3: 'Sai số tiền hoàn',
        Explain: 'Buyer thắc mắc/khiếu nại hoàn sai số tiền cho đơn khiếu nại THHT',
    },
    //========================
    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Trạng thái xử lý khiếu nại',
        Explain: 'Buyer thắc mắc/khiếu nại hoàn sai số tiền cho đơn khiếu nại THHT',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Sai số tiền hoàn',
        Explain: 'KH hỏi trạng thái xử lý khiếu nại đến đâu rồi <br/> Seller Mall thắc mắc đơn hàng xử lý KN khi chưa có kết quả cuối cùng cho các trạng thái THHT',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Trạng thái vận chuyển của đơn trả hàng hoàn tiền',
        Explain: 'Xác minh với 3PL về trạng thái vận chuyển của đơn trả hàng hoàn tiền',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Không đồng ý với kết quả xử lý khiếu nại',
        Explain: '- Không đồng ý với kết quả xử lý khiếu nại, yêu cầu xử lý lại <br/> - Mistake DP cần xử offline',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Yêu cầu thêm bằng chứng',
        Explain: 'Dispute yêu cầu cung cấp thêm bằng chứng',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Khiếu nại',
        L3: 'Tiếp nhận bằng chứng',
        Explain: 'KH cung cấp bằng chứng khiếu nại',
    },
    //==============================
    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Case Offline',
        L3: 'Khiếu nại trong hạn THHT nhưng đã bấm Complete',
        Explain: '- Còn trong hạn đảm bảo (3 ngày/7 ngày) nhưng buyer đã bấm Complete. <br/> - Đơn hàng Buyer dùng voucher còn 0đ không thể nhấn THHT (vẫn còn hạn 3 ngày/7 ngày). <br/> - Lỗi hệ thống không thể nhấn khiếu nại (vẫn còn hạn 3 ngày/7 ngày).',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Case Offline',
        L3: 'Khiếu nại sau khi hết hạn Shopee đảm bảo',
        Explain: '- Buyer Khiếu nại nhưng đơn đã quá hạn Shopee đảm bảo. <br/> - Quá hạn phản hồi dẫn đến hệ thống auto cronjob theo logic 2-6-2. <br/> - Tiếp nhận xử lý offline cho các trường hợp đơn lừa đảo, đơn cancellation, case crisis, fake. <br/> - Các trường hợp không nhấn được khiếu nại do đơn 0đ, lỗi hệ thống... nhưng quá hạn 3 ngày/7 ngày.',
    },

    {
        L1: 'Trả hàng & Hoàn tiền',
        L2: 'Case Offline',
        L3: 'Khiếu nại ngoài quy trình',
        Explain: 'Thắc mắc khi nào hoàn tiền cho người mua/ thanh toán tiền cho người bán trên đơn hàng đã tiếp nhận khiếu nại offline.',
    },
    //================================
    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Thắc mắc các cuộc thi do Shopee tổ chức',
        Explain: 'Thắc mắc thể lệ các chương trình do Shopee tổ chức: bình chọn người bán,... <br/> Thắc mắc kết quả hoặc chưa nhận được quà Mini game Fanpage',
    },

    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Tài trợ/ Hợp tác cùng Shopee',
        Explain: 'KH liên hệ hợp tác trợ giá/ marketing, các chương trình liên quan đến tài trợ/hợp tác của Shopee,....',
    },

    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Góp ý về người mua',
        Explain: 'Góp ý của Người bán về Người mua: Người mua thô lỗ',
    },

    {
        L1: 'Marketing',
        L2: 'Câu hỏi chung',
        L3: 'Thắc mắc về thể lệ/ tính năng quảng cáo',
        Explain: 'Câu hỏi chung về thể lệ hoặc tính năng liên quan đến quảng cáo',
    },
    //=====================
    {
        L1: 'Marketing',
        L2: 'Chương trình khuyến mãi',
        L3: 'Thắc mắc về thể lệ',
        Explain: 'Thắc mắc thể lệ của chương trình khuyến mãi, cách mua gói Siêu voucher, các chương trình trong campaign, các chương trình ưu đãi của ngân hàng...',
    },

    {
        L1: 'Marketing',
        L2: 'Chương trình khuyến mãi',
        L3: 'Lỗi hệ thống liên quan đến chương trình khuyến mãi',
        Explain: 'Lỗi hệ thống từ các chương trình khuyến mãi',
    },

    {
        L1: 'Marketing',
        L2: 'Chương trình khuyến mãi',
        L3: 'Góp ý về chương trình khuyến mãi',
        Explain: 'Góp ý về hoạt động, cách thức, thể lệ,.. liên quan đến chương trình khuyến mãi',
    },
    //==================
    {
        L1: 'Marketing',
        L2: 'Games',
        L3: 'Câu hỏi chung về game',
        Explain: 'Câu hỏi chung liên quan đến các Game trên Shopee',
    },

    {
        L1: 'Marketing',
        L2: 'Games',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến Game trên Shopee',
    },

    {
        L1: 'Marketing',
        L2: 'Games',
        L3: 'Không nhận được quà',
        Explain: 'User phản ánh thắng giải nhưng chưa nhận được quà từ Game trên Shopee, đã nhận đượcc nhưng không biết cách kiểm tra',
    },
    //================
    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Thắc mắc về thể lệ ',
        Explain: 'Sử dụng cho các trường hợp KH chưa claim voucher: chỉ thắc mắc về điều kiện sử dụng/T&C các chương trình khuyến mãi/mã giảm giá, cách claim mã giảm giá / FSV, không thể claim voucher do không nằm trong nhóm người dùng được chọn',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Hướng dẫn sử dụng voucher',
        Explain: 'Sử dụng trường hợp đã claim thành công, voucher có sẵn trong ví: Hướng dẫn sử dụng voucher, logic hoàn voucher nếu đơn hủy/THHT, chưa nhận được e voucher (ko phải DP). Không sử dụng được FSV do chưa đạt giá trị đơn tối thiểu, shop bị SQT',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Không thể sử dụng voucher',
        Explain: 'Không thể sử dụng voucher/CTKM  do hết lượt/hết hạn. Nếu bị giới hạn do Fraud CS chọn theo nhánh Fraud -> Gian Lận -> Giới hạn sử dụng voucher',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Không được hoàn voucher',
        Explain: 'Thắc mắc không được hoàn voucher cho đơn hủy theo logic của Shopee (đơn hủy do lỗi buyer, check trên nhiều đơn)',
    },

    {
        L1: 'Marketing',
        L2: 'Voucher/Promo',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến voucher/ promotion, quá 48h nhưng buyer chưa nhận được voucher hoàn về (CS chuyển Voucher team)',
    },
    //=====================
    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Câu hỏi chung về Paid Ads',
        Explain: 'Paid Ads là gì? <br/> CTKM là gì?',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Làm thế để sử dụng PA/CTKM',
        Explain: 'Làm thế để sử dụng PA/CTKM',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Hướng dẫn nạp tiền',
        Explain: 'Hướng dẫn nạp tiền Paid Ads',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Chưa được cộng tiền vào ví paid ads sau khi đã nạp',
        Explain: 'Chưa được cộng tiền vào ví Paid Ads sau khi đã nạp',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Chưa được cộng tiền khi tham gia chương trình SP',
        Explain: 'Chưa được cộng tiền khi tham gia chương trình campaign',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Từ khóa không được cập nhật',
        Explain: 'Từ khóa không được cập nhật',
    },

    {
        L1: 'Marketing',
        L2: 'Paid Ads/ Chương trình khuyến mãi của tôi',
        L3: 'Dữ liệu quảng cáo không được cập nhật',
        Explain: 'Dữ liệu quảng cáo không được cập nhật',
    },
    //========    

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Chương trình Shopee xu',
        Explain: 'Câu hỏi chung về Shopee Xu',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Chưa nhận/ chưa được hoàn xu',
        Explain: 'Chưa nhận được Xu, chưa được hoàn Xu',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Nhận sai số xu',
        Explain: 'Nhận sai số Shopee Xu',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee xu',
        L3: 'Hạn sử dụng',
        Explain: 'Kiểm tra hạn sử dụng Xu',
    },
    //============
    {
        L1: 'Marketing',
        L2: 'Shopee Loyalty',
        L3: 'Shopee Reward là gì?',
        Explain: 'Shopee reward là gì?',
    },

    {
        L1: 'Marketing',
        L2: 'Shopee Loyalty',
        L3: 'Thắc mắc/ khiếu nại về Shopee reward',
        Explain: 'Thắc mắc/ khiếu nại về Shopee reward: chưa nhận được voucher sinh nhật, thăng hạng, không sử dụng được...',
    },

    {
        L1: 'Marketing',
        L2: 'Tiếp thị liên kết',
        L3: 'Câu hỏi chung về Tiếp thị liên kết',
        Explain: 'User thắc mắc về cách tham gia chương trình tiếp thị liên kết, hoa hồng..',
    },

    {
        L1: 'Marketing',
        L2: 'Tiếp thị liên kết',
        L3: 'Các vấn đề về Tiếp thị liên kết',
        Explain: 'User không thể đăng ký chương trình, đăng ký nhưng chưa có ai liên hệ hỗ trợ, chưa nhận được hoa hồng...',
    },
    //=======================
    {
        L1: 'BD',
        L2: 'Câu hỏi chung',
        L3: 'Góp ý về người bán',
        Explain: 'Buyer góp ý/phản hồi về Seller ',
    },

    {
        L1: 'BD',
        L2: 'SIP',
        L3: 'Câu hỏi chung về shop CB/ SIP',
        Explain: 'Only CBCS',
    },
    //===========================
    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Các vấn đề về chương trình dành cho seller',
        Explain: 'Seller thắc mắc về các chương trình dành cho Seller <br/> Công cụ marketing “Quảng cáo tiếp thị liên kết”, công cụ Marketing Solution',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Khiếu nại chương trình bị sai T&C, bị lỗi',
        Explain: 'Các vấn về lỗi do BD ',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Yêu cầu hủy chương trình đang tham gia',
        Explain: 'Yêu cầu hủy chương trình đang tham gia',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Góp ý, phàn nàn về nhân viên ngành hàng',
        Explain: 'Góp ý, phàn nàn về nhân viên ngành hàng <br/> Seller liên hệ hỏi thông tin nhân viên ngành hàng',
    },

    {
        L1: 'BD',
        L2: 'Chương trình khuyến mãi',
        L3: 'Thắc mắc về thông báo/ thư mời tham gia chương trình của Shopee',
        Explain: 'Thắc mắc về thông báo/ thư mời tham gia chương trình của Shopee',
    },

    {
        L1: 'BD',
        L2: 'Seller Voucher',
        L3: 'Câu hỏi chung',
        Explain: 'Câu hỏi chung về Seller voucher <br/> * Chỉ chọn khi seller liên hệ về voucher được tạo bởi Shopee',
    },

    {
        L1: 'BD',
        L2: 'Seller Voucher',
        L3: 'Khiếu nại về Seller Voucher',
        Explain: 'Các vấn đề liên quan đến Seller voucher như: cách tạo, không sử dụng được seller voucher, <br/> Seller không tạo nhưng bị tính phí <br/> * Chỉ chọn khi seller liên hệ về voucher được tạo bởi Shopee',
    },
    //==========================
    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu thêm quyền lợi của gói FS Xtra',
        Explain: 'Seller góp ý thêm quyền lợi của gói FS Extra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Thắc mắc về thể lệ',
        Explain: 'Buyer/ Seller thắc mắc về thể lệ của chương trình FS Extra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Thắc mắc về phí FS Xtra',
        Explain: 'Các thắc mắc về việc tính phí/ trừ tiền FSX',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến FS Extra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu tham gia',
        Explain: 'Seller hỏi về cách đăng ký gói FS Xtra, đã đăng ký nhưng chưa được kích hoạt',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu hủy gói',
        Explain: 'Seller hỏi về cách hủy gói FS Xtra',
    },

    {
        L1: 'BD',
        L2: 'FS Xtra',
        L3: 'Yêu cầu gắn/gỡ tag',
        Explain: 'Seller đã đăng ký/hủy gói nhưng chưa được gắn/gỡ tag <br/> Các vấn đề về mất tag khi đang tham gia gói',
    },
    //===================
    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Thắc mắc về phí CCB - Voucher hoàn xu',
        Explain: 'Thắc mắc về phí voucher hoàn xu',
    },

    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Yêu cầu tham gia',
        Explain: 'Seller hỏi về cách đăng ký gói Voucher Hoàn xu, đã đăng ký nhưng chưa được kích hoạt',
    },

    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Yêu cầu hủy gói',
        Explain: 'Seller hỏi về cách hủy gói Voucher Hoàn xu',
    },

    {
        L1: 'BD',
        L2: 'CCB - Voucher hoàn xu',
        L3: 'Yêu cầu gắn/gỡ tag',
        Explain: 'Seller đã đăng ký/hủy gói nhưng chưa được gắn/gỡ tag <br/> Các vấn đề về mất tag khi đang tham gia gói',
    },
    //============
    {
        L1: 'BD',
        L2: 'Flash sale',
        L3: 'Đăng ký flash sale',
        Explain: 'Seller muốn đăng ký Flash Sale <br/> * Chỉ chọn khi seller liên hệ về chương trình Flashsale được tạo bởi Shopee',
    },

    {
        L1: 'BD',
        L2: 'Flash sale',
        L3: 'Các vấn đề về flash sale',
        Explain: 'Seller liên hệ về các vấn đề liên quan đến Flash Sale <br/> * Chỉ chọn khi seller liên hệ về chương trình Flashsale được tạo bởi Shopee',
    },

    {
        L1: 'BD',
        L2: 'Flash sale',
        L3: 'Các vấn đề về sản phẩm tham gia FS',
        Explain: 'Seller liên hệ về các vấn đề liên quan đến sản phẩm tham gia Flash Sale <br/> * Chỉ chọn khi seller liên hệ về chương trình Flashsale được tạo bởi Shopee',
    },
    //===============
    {
        L1: 'BD',
        L2: 'SBS',
        L3: 'Câu hỏi chung về shop SBS',
        Explain: 'SBS Only',
    },

    {
        L1: 'BD',
        L2: 'SBS',
        L3: 'Đăng ký flash sale',
        Explain: 'SBS Only',
    },
    //===============
    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Lỗi hệ thống',
        Explain: 'Lối hệ thống liên quan đến trang bán hàng',
    },

    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Các vấn đề về tính năng',
        Explain: 'Seller phản hồi/góp ý về các tính năng mới trong trang bán hàng',
    },

    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Seller muốn trở thành Shopee Mall',
        Explain: 'Seller muốn trở thành Shopee Mall',
    },

    {
        L1: 'BD',
        L2: 'Shopee Mall',
        L3: 'Thắc mắc phí phạt/ phí hoa hồng của Mall',
        Explain: 'SBS Only',
    },
    //======================
    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Hướng dẫn sử dụng',
        Explain: 'Hướng dẫn sử dụng Seller Center <br/> Các thông tin đến SYT, SYT+ (Tạm thời đến khi có Reason Code riêng cho SYT)',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về đơn hàng',
        Explain: 'Seller hỏi về việc xác nhận đơn hàng, cách kiểm tra tình trạng các đơn hàng',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về kênh vận chuyển',
        Explain: 'Seller thắc mắc hỏi cách thao tác bật/tắt kênh vận chuyển hoặc các issue liên quan đến việc cài đặt kênh vận chuyển trên Seller Center (Kênh người bán)',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Cách đăng bán sản phẩm',
        Explain: 'Seller hỏi về sản phẩm, cách đăng bán sản phẩm,... <br/> Seller bổ sung giấy tờ để đăng bán các sản phẩm kinh doanh có điều kiện',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về doanh thu',
        Explain: 'Seller hỏi về doanh thu của đơn hàng',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về marketing',
        Explain: 'Seller hỏi về các hoạt động/tính năng Marketing trên trang bán hàng như: tạo trò chơi, Shopee feed, Shopee Live, tạo chương trình khuyến mãi bằng các công cụ Marketing,... <br/> ** Chọn khi chương trình khuyến mãi do seller tự tạo, trường hợp do Shopee tạo chọn ở VN - L1 là BD',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về dữ liệu shop',
        Explain: 'Phân tích bán hàng, hoạt động bán hàng',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về thiết lập shop',
        Explain: 'Seller hỏi về các vấn đề thiết lập shop như: bật/tắt chế độ tạm nghỉ, tính năng trả giá,...',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Kênh người bán/ Shop của tôi',
        L3: 'Các vấn đề về shop chat',
        Explain: 'Buyer liên hệ báo không chat được với Shop như: gửi tin nhắn không được, bị Shop chặn, nhận cảnh báo từ khóa vi phạm tiêu chuẩn cộng đồng, các trường hợp chặn chat người dùng',
    },
    //===============
    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Câu hỏi chung',
        Explain: 'Câu hỏi chung về điểm phạt sao quả tạ',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Tỷ lệ đơn hàng không thành công',
        Explain: 'Seller hỏi về tỷ lệ đơn không thành công/yêu cầu loại đơn hàng khỏi tỷ lệ',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Tỷ lệ giao hàng trễ',
        Explain: 'Seller có đơn hàng bị tính tỷ lệ LSR/yêu cầu loại đơn khỏi tỷ lệ LSR',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Khiếu nại điểm phạt NFR',
        Explain: 'Seller khiếu nại điểm/yêu cầu loại điểm phạt đơn hàng không thành công <br/> ** Dành cho seller đã bị tính điểm phạt',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Sao quả tạ',
        L3: 'Khiếu nại điểm phạt LSR',
        Explain: 'Seller khiếu nại/yêu cầu loại điểm phạt đơn hàng giao trễ <br/> ** Dành cho seller đã bị tính điểm phạt',
    },

    {
        L1: 'Trang người bán & Sao quả tạ',
        L2: 'Tỉ lệ phản hồi chat',
        L3: 'Tỉ lệ phản hồi chat',
        Explain: 'Seller hỏi về tỷ lệ phản hồi chat',
    },
    //======================
    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Đăng sản phẩm trùng lặp',
        Explain: 'Seller đăng bán sản phẩm trùng lặp',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Đăng sản phẩm cấm',
        Explain: 'Seller thắc mắc sản phẩm bị khóa xóa, CS kiểm tra do Seller đăng sản phẩm cấm đã bị QC khóa, xóa',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Sản phẩm có chứa thông tin rác',
        Explain: 'Seller đăng bán sản phẩm có chứa thông tin rác',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Tăng giá bất hợp lý trước khuyến mãi',
        Explain: 'Seller thay đổi/tăng giá  trước khi diễn ra các chương trình khuyến mãi/campaign',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Sản phẩm chứa thông tin cá nhân',
        Explain: 'Seller đăng bán sản phẩm chứa thông tin cá nhân (thông tin liên hệ)',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Sản phẩm vi phạm',
        L3: 'Vi phạm nội dung Marketing',
        Explain: 'Seller sử dụng những công cụ marketing như: Shopee Feed, Shopee Live, tin nhắn quảng bá,... chứa nội dung vi phạm chính sách của Shopee',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Trạng thái sản phẩm',
        Explain: 'KH thắc mắc trạng thái SP đã được duyệt chưa hay đang ở trạng thái gì? Đăng SP thành công nhưng SP không hiển thị trên giao diện Shopee (TH tình trạng sp là Khóa / Xóa không chọn LDP này)',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Lỗi hệ thống liên quan đến đăng sản phẩm',
        Explain: 'Lỗi hệ thống liên quan đến việc đăng sản phẩm của Seller',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Tải sản phẩm hàng loạt',
        Explain: 'Seller đăng tải sản phẩm hàng loạt',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Sai ngành hàng',
        Explain: '-Seller đăng tải sản phẩm và chọn sai ngành hàng <br/> - Hướng dẫn chọn ngành hàng',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'xóa đánh giá/ xóa bình luận',
        Explain: 'Liên hệ để được hướng dẫn chỉnh sửa/ xóa đánh giá/xóa bình luận',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Tìm kiếm sản phẩm/ shop',
        Explain: 'Các vấn đề liên quan đến việc tìm kiếm sản phẩm và shop (Tìm kiếm sản phẩm không thấy (ko bao gồm sp bị ẩn bởi QC))',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Thắc mắc sản phẩm bị khóa/ xóa',
        Explain: 'Seller thắc mắc sản phẩm bị khóa/xóa',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Tố cáo sản phẩm',
        Explain: 'Seller muốn tố cáo sản phẩm shop khác',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Câu hỏi chung về sản phẩm',
        L3: 'Hàng giả/ hàng nhái',
        Explain: 'KH tố cáo sản phẩm hàng giả/nhái',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Seller khiếu nại vi phạm bản quyền hoặc sở hữu trí tuệ',
        Explain: 'Seller khiếu nại nhãn hiệu',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Yêu cầu từ cơ quan nhà nước',
        Explain: 'Yêu cầu/ liên hệ từ cục quản lý thị trường, bộ công thương, hội bảo vệ người tiêu dùng...',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Các vấn đề về bảo mật thông tin',
        Explain: 'Liên hệ về các vấn đề bảo mật thông tin của Shopee',
    },

    {
        L1: 'Sản phẩm và pháp lý',
        L2: 'Pháp lý',
        L3: 'Buyer khiếu nại đến cục, cơ quan',
        Explain: 'Các trường hợp KH muốn kiện lên cục cạnh tranh, bảo vệ người tiêu dùng...',
    },
    //=========================
    {
        L1: 'ShopeePay',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về ví ShopeePay',
        Explain: 'Câu hỏi chung về Ví ShopeePay, muốn liên kết/hủy liên kết Ví ShopeePay',
    },

    {
        L1: 'ShopeePay',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về offline payment',
        Explain: 'Câu hỏi chung về thanh toán Offline.',
    },
    //============================
    {
        L1: 'ShopeePay',
        L2: 'Hướng dẫn tạo/ KYC ví ShopeePay',
        L3: 'Hướng dẫn tạo/ KYC ví ShopeePay',
        Explain: 'Hướng dẫn Buyer KYC ví ShopeePay, hỏi thời gian KYC trong bao lâu, buyer nhờ hỗ trợ KYC',
    },

    {
        L1: 'ShopeePay',
        L2: 'Hướng dẫn tạo/ KYC ví ShopeePay',
        L3: 'Trạng thái KYC',
        Explain: 'Buyer thắc mắc tài khoản Ví ShopeePay đã được KYC thành công hay chưa',
    },

    {
        L1: 'ShopeePay',
        L2: 'Hướng dẫn tạo/ KYC ví ShopeePay',
        L3: 'Lỗi khi tạo tài khoản ví ShopeePay',
        Explain: 'Lỗi phát sinh dẫn đến tạo Ví AirPay không thành công',
    },

    {
        L1: 'ShopeePay',
        L2: 'Hướng dẫn tạo/ KYC ví ShopeePay',
        L3: 'Góp ý về quy trình KYC',
        Explain: 'Góp ý về quy trình KYC thẻ của Ví ShopeePay (thời gian xác minh lâu,...)',
    },
    //=========================
    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thay đổi thông tin tài khoản ví',
        Explain: 'Liên hệ thay đổi thông tin tài khoản Ví ShopeePay, xóa thông tin trên tài khoản ShopeePay cũ để đăng ký tài khoản ShopeePay mới',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thay đổi mật khẩu đặt lệnh',
        Explain: 'KH quên mật khẩu đặt lệnh và hỏi cách lấy lại mật khẩu',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Ví bị lock/ frozen',
        Explain: 'Tài khoản Ví bị lock do quên mật khẩu đặt lệnh hoặc Frozen do vi phạm',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'TKNH bị từ chối',
        Explain: '- Không thể thêm TKNH <br/> - lỗi khi liên kết TKNH với ShopeePay <br/> - bị từ chối do lỗi Fraud <br/> - hoặc phát sinh từ ngân hàng phát hành thẻ ',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thời gian xác minh TKNH lâu',
        Explain: 'KH phàn nàn về thời gian xác minh TKNH khi rút tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Ví bị hack',
        Explain: 'Ví bị hack',
    },

    {
        L1: 'ShopeePay',
        L2: 'Tài khoản & Bảo mật',
        L3: 'Thay đổi/ thêm TKNH',
        Explain: 'Thay đổi/ thêm TKNH, buyer hỏi cách liên kết TKNH x ShopeePay',
    },
    //===============
    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Không hiển thị số dư sau khi nạp tiền',
        Explain: 'Không hiển thị số dư sau khi nạp tiền, giao dịch nạp tiền ví ShopeePay đang xử lý và buyer chưa nhận được tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Lỗi không thể nạp tiền',
        Explain: 'Lỗi không thể nạp tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Nạp sai số tiền',
        Explain: 'Nạp sai số tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Nạp tiền sai tài khoản',
        Explain: 'Nạp tiền sai tài khoản',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Hướng dẫn nạp tiền',
        Explain: 'Hướng dẫn nạp tiền',
    },

    {
        L1: 'ShopeePay',
        L2: 'Nạp tiền',
        L3: 'Các vấn đề khác',
        Explain: 'Các vấn đề khác liên quan đến nạp tiền, chuyển tiền sang ví ShopeePay khác như: chuyển tiền nhưng chưa nhận được, hủy giao dịch,...',
    },

    {
        L1: 'ShopeePay',
        L2: 'Transfer',
        L3: 'Các vấn đề về QR code',
        Explain: 'Các vấn đề về QR code',
    },
    //===============
    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Hướng dẫn thanh toán đơn hàng',
        Explain: 'Hướng dẫn thanh toán đơn hàng trên Shopee',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Các vấn đề về hoàn tiền',
        Explain: 'Đơn hàng hủy quá 24h nhưng chưa nhận được tiền hoàn về ví ShopeePay',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy',
        Explain: 'Đã thanh toán nhưng trạng thái đơn là chưa thanh toán/ hủy hoặc bị hủy nhưng chưa nhận được tiền hoàn (còn trong hạn hoàn tiền 24h)',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Chuyển khoản dư/ thiếu/ trừ tiền 2 lần',
        Explain: 'Thanh toán dư/ thiếu/ thanh toán 2 lần/ sai thông tin thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
        Explain: 'Không nhận mã xác minh/ mã sai/ mã hết hạn',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Không thể cung cấp biên lai/ bằng chứng thanh toán',
        Explain: 'Không thể cung cấp biên lai/ bằng chứng thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Mất/ không cung cấp được biên lai/ bằng chứng thanh toán',
        Explain: 'Mất/ không cung cấp được biên lai/ bằng chứng thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Hóa đơn thanh toán không hợp lệ',
        Explain: 'Hóa đơn thanh toán không hợp lệ',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Sai số tiền thanh toán',
        Explain: 'Sai số tiền thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Các vấn đề về e-voucher',
        Explain: 'Các vấn đề về e-voucher offline payment',
    },

    {
        L1: 'ShopeePay',
        L2: 'Thanh toán',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Lỗi hệ thống liên quan đến thanh toán',
    },

    {
        L1: 'ShopeePay',
        L2: 'Rút tiền',
        L3: 'Hướng dẫn rút tiền từ ví ShopeePay',
        Explain: 'Hướng dẫn rút tiền từ ví ShopeePay, rút tiền từ ShopeePay về TKNH nhưng chưa nhận được',
    },

    {
        L1: 'ShopeePay',
        L2: 'Gian lận',
        L3: 'Không nhận được tiền hoàn từ ví ShopeePay.',
        Explain: 'Không nhận được tiền hoàn vào ví ShopeePay: các trường hợp ví ShopeePay bị lock, frozen, hệ thống sẽ hoàn tiền vào số dư TK Shopee',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Digital Product',
        Explain: 'Hướng dẫn sử dụng Digital Product',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Kiểm tra trạng thái đơn hàng',
        Explain: 'Kiểm tra trạng thái đơn hàng',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Thắc mắc về thông tin sản phẩm',
        Explain: 'Thắc mắc về thông tin của các sản phẩm thuộc DP',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Voucher',
        Explain: 'Hướng dẫn sử dụng Voucher trên đơn DP',
    },

    {
        L1: 'Digital product',
        L2: 'Câu hỏi chung',
        L3: 'Góp ý về đối tác/ hệ thống/ dịch vụ',
        Explain: 'Góp ý về đối tác/ hệ thống/ dịch vụ',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Hướng dẫn thanh toán',
        Explain: 'Hướng dẫn thanh toán, cấn trừ bảo lưu ( vé máy bay), cách quyên góp',
    },

    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Hóa đơn',
        Explain: 'Hóa đơn, yêu cầu xuất hóa đơn VAT',
    },

    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Phí dịch vụ',
        Explain: 'Thắc mắc về phí dịch vụ, phí giao dịch (thanh toán hóa đơn nước)',
    },

    {
        L1: 'Digital product',
        L2: 'Thanh toán',
        L3: 'Góp ý về giới hạn thanh toán',
        Explain: 'Góp ý về giới hạn hạn mức thanh toán',
    },
    //===========================================
    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Đã thanh toán nhưng chưa nhận được sản phẩm',
        Explain: 'Đã thanh toán nhưng chưa nhận được voucher/ dịch vụ, trạng thái Fulfilment Pending...(payment success)',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Không thể sử dụng voucher/ dịch vụ',
        Explain: 'Không thể sử dụng sản phẩm voucher/ dịch vụ đã mua, thẻ điện thoại/data mua thành công nhưng sử dụng/nạp báo lỗi',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Voucher/ dịch vụ khác mô tả',
        Explain: 'Voucher/ dịch vụ khác mô tả',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Yêu cầu gửi lại voucher/ mã code',
        Explain: 'Yêu cầu gửi lại voucher/ mã code',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Đơn hàng đã hoàn thành nhưng chưa nhận được voucher/ mã code',
        Explain: 'Trạng thái Fulfillment Success nhưng chưa nhận được voucher/ mã code',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Thay đổi thông tin đơn hàng',
        Explain: 'Thay đổi thông tin đơn hàng, mua thêm hành lý, thay đổi thời gian bay (TVLK)',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Yêu cầu hủy đơn',
        Explain: 'Buyer/ seller yêu cầu huỷ đơn hàng',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Đơn hàng bị hủy theo logic trên hệ thống',
        Explain: 'Đơn hàng bị hủy theo logic trên hệ thống: hết hàng, quá hạn thanh toán..',
    },

    {
        L1: 'Digital product',
        L2: 'Nhận mã và sử dụng mã',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Lỗi hệ thống khác',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Không thể thanh toán do TK có dấu hiệu bất thường',
        Explain: 'Không thể thanh toán do TK có dấu hiệu bất thường, hết hạn mức giao dịch đơn DP',
    },

    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng voucher',
        Explain: 'User hỏi về giới hạn hoặc nhận được cảnh báo khi sử dụng voucher DP (voucher trồng cây,...) do có tài khoản liên kết <br/> CS kiểm tra Voucher Type trên Portal nếu không phải DP thì cần chọn L1 Fraud hoặc Marketing',
    },

    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Không nhận được xu',
        Explain: 'User báo không nhận được xu vì vấn đề tài khoản gian lận',
    },

    {
        L1: 'Digital product',
        L2: 'Gian lận',
        L3: 'Giới hạn sử dụng xu',
        Explain: 'User hỏi về giới hạn/nhận được cảnh báo về giới hạn sử dụng xu',
    },
    //===============
    {
        L1: 'Digital product',
        L2: 'Hoàn tiền',
        L3: 'Trạng thái hoàn tiền',
        Explain: 'Thắc mắc về trạng thái, số tiền hoàn, trừ tiền 2 lần',
    },

    {
        L1: 'Digital product',
        L2: 'Hoàn tiền',
        L3: 'Không nhận được tiền hoàn',
        Explain: 'Không nhận được tiền hoàn đơn fail',
    },

    {
        L1: 'Digital product',
        L2: 'Hoàn tiền',
        L3: 'Buyer yêu cầu hoàn tiền',
        Explain: 'Chưa có giải thích',
    },
    //===============
    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Lỗi App',
        Explain: 'App/Web xảy ra sự cố lỗi mà KH phản ánh,',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về app',
        Explain: 'Phàn nàn về App/web chậm/lag,..<br/> Góp ý để cải thiện chất lượng App/Web tốt hơn',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về tính năng',
        Explain: 'KH yêu cầu nên bổ sung thêm 1 số tính năng, tích hợp ứng dụng khác,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Các lỗi khác',
        Explain: 'Lỗi hệ thống khác',
    },
    //===============
    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Shopee đảm bảo',
        Explain: 'Chính sách Shopee đảm bảo là gì? Các thắc mắc liên quan đến Shopee đảm bảo <br/> Yêu cầu bảo hành sản phẩm',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Các vấn đề chính sách/ quy định của Shopee',
        Explain: 'KH hỏi về chính sách mua/bán trên Shopee. <br/> Các vấn đề về tuyển dụng của Shopee,',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Hướng dẫn mua hàng',
        Explain: 'Hỏi cách đặt hàng, thông tin của đơn hàng: về sản phẩm, quà tặng đi kèm',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Câu hỏi chung về Shopee',
        L3: 'Hướng dẫn bán hàng',
        Explain: 'Hướng dẫn seller Việt Nam/CB cách bán hàng',
    },
    //===============
    {
        L1: 'Câu hỏi chung',
        L2: 'OTP',
        L3: 'Không nhận được sms OTP',
        Explain: 'Không nhận được sms OTP khi thanh toán, đăng kí, đăng nhập,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'OTP',
        L3: 'Không nhận được voice OTP',
        Explain: 'Không nhận được voice OTP khi thanh toán, đăng kí, đăng nhập,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'OTP',
        L3: 'Các vấn đề khác',
        Explain: 'OTP bị sai không đăng nhập được, OTP gửi spam liên tục không ngừng,...',
    },

    {
        L1: 'Câu hỏi chung',
        L2: 'Agent complaint',
        L3: 'Sử dụng từ thô tục với CS',
        Explain: 'KH dùng từ ngữ thô tục, phản cảm với CS khi hỗ trợ <br/> KH chỉ khiếu nại nhân viên và không có issue gì',
    },
    //===============
    {
        L1: 'Câu hỏi khác',
        L2: 'Câu hỏi khác',
        L3: 'Thư rác',
        Explain: 'Các vấn đề không liên quan đến Shopee, spam mail, không đồng ý kết quả từ Shopee (fl theo KB [KB][SOP] - Xử Lý Phiếu Backlog Và các trường hợp Spam Cases).',
    },

    {
        L1: 'Câu hỏi khác',
        L2: 'Câu hỏi khác',
        L3: 'Cuộc gọi bị mất kết nối',
        Explain: 'Cuộc gọi bị mất kết nối, không tín hiệu,...',
    },

    {
        L1: 'Câu hỏi khác',
        L2: 'Câu hỏi khác',
        L3: 'Chat chưa hoàn tất',
        Explain: '1. CS Live Chat: Khi KH không cung cấp thông tin cần hỗ trợ hoặc cung cấp nhưng ko đủ thông tin để chọn được L3 reason code (không cần chọn theo nội dung KH chat vs Bot, cs không thể chọn lý do phiếu Level 3/ Reason do: <br/> - KH không cung cấp thông tin hoặc thiếu thông tin để cs kiểm tra và biết vấn đề kh gặp là gì <br/> - Hoàn toàn ko có vấn đề cần hỗ trợ (chào Shopee, hi, kiểm tra giúp mình, hỗ trợ mình...out chat) <br/> - Khách liên hệ kiểm tra thông tin về vận chuyển của đơn hàng nhưng khách out chat khi chưa cung cấp/ CS không kiểm tra được mã đơn hàng cụ thể <br/> - KH chat tiếng anh và agent ko hiểu vấn đề kh gặp là gì <br/> Chat chưa hoàn tất nhưng đã có đầy đủ vấn đề và CS có thể xử lý được -> Chọn theo lý do phiếu đúng. <br/> 2 CCS: khi bắt đầu thì chọn Chat chưa hoàn tất cho đến khi có vấn đề cụ thể thì chọn lại Reason code phù hợp.',
    },
    //===============
    {
        L1: 'ShopeeFood',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn sử dụng Voucher',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn đặt hàng',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đăng ký',
        L3: 'Hướng dẫn bán hàng với ShopeeFood',
        Explain: 'Hướng dẫn bán hàng, liên kết tài khoản ShopeeFood với Shopee <br/> Thay đổi thông tin tài khoản ShopeeFood <br/> Muốn trở thành tài xế ShopeFood',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Tài khoản và bảo mật',
        L3: 'Yêu cầu dừng hợp tác',
        Explain: 'Merchant muốn ngừng hợp tác với ShopeeFood hoặc buyer muốn hủy liên kết ShopeeFood x Shopee',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Yêu cầu về đơn hàng',
        L3: 'Đổi món',
        Explain: 'Thay đổi thông tin đơn hàng',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Thanh toán',
        L3: 'Không thể thanh toán COD',
        Explain: 'Đơn ShopeeFood trên Shopee không thể chọn thanh toán bằng tiền mặt,...',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Giao hàng',
        L3: 'Kiểm tra trạng thái giao hàng',
        Explain: 'Đơn ShopeeFood đang giao - Buyer thắc mắc khi nào nhận được hàng',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Giao hàng',
        L3: 'Khu vực không hỗ trợ giao hàng',
        Explain: 'Shipper ShopeeFood từ chối đơn vì khu vực không hỗ trợ giao',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Giao hàng',
        L3: 'Thay đổi thông tin giao hàng',
        Explain: 'KH liên hệ về việc thay đổi thông tin đơn ShopeeFood như: giờ giao, địa chỉ, SĐT...trên đơn hàng đang diễn ra',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đã nhận hàng',
        L3: 'Món ăn khác với mô tả',
        Explain: 'Món ăn ShopeeFood khác mô tả, không giống thông tin, thiếu thành phần nguyên liệu',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đã nhận hàng',
        L3: 'Phàn nàn về chất lượng món',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Đã nhận hàng',
        L3: 'Giao hàng trễ',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Kiểm tra trạng thái hoàn tiền',
        Explain: 'Buyer liên hệ thắc mắc thời gian hoàn tiền, khi nào được hoàn tiền...',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Không nhận được tiền hoàn',
        Explain: 'Buyer chưa nhận được tiền hoàn cho đơn hàng ShopeeFood bị hủy, bị trừ tiền 2 lần',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Sai số tiền hoàn',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Yêu cầu hủy đơn',
        Explain: 'Buyer yêu cầu hủy đơn hàng, hướng dẫn hủy đơn ShopeeFood',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Đơn hàng hủy theo Logic hệ thống',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Hoàn tiền/ Hủy đơn hàng',
        L3: 'Hết món',
        Explain: 'Đơn ShopeeFood quán hết món không đặt được, Quán từ chối đơn, Shipper đến quán hết món nhờ hủy đơn,...',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Góp ý về tính năng/ lỗi',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Góp ý về người mua',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Đề nghị cải thiện tính năng',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Phản hồi về Shipper',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Góp ý chung/ vấn đề kỹ thuật',
        L3: 'Phản hồi về cửa hàng, nhà hàng',
        Explain: 'chưa có giải thích',
    },

    {
        L1: 'ShopeeFood',
        L2: 'Marketing & BD_FD',
        L3: 'Cửa hàng đóng cửa',
        Explain: 'chưa có giải thích',
    },

    //==============================
    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Câu hỏi chung về sản phẩm',
        Explain: 'Thắc mắc về sản phẩm bảo hiểm, T&C, thông tin chung về bảo hiểm,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn thanh toán',
        Explain: 'Buyer hỏi cách mua bảo hiểm, các hình thức thanh toán có hỗ trợ mua bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Các vấn đề về bán bảo hiểm',
        Explain: 'Sản phẩm của seller không bán kèm được bảo hiểm (trường hợp chưa xác định được nguyên nhân) <br/> ** Nếu do thiết lập sai phân loại hàng chọn Sản phẩm & Pháp lý > Câu hỏi chung về sản phẩm > Sai ngành hàng',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Chính sách/quy định của bảo hiểm',
        Explain: 'Sản phẩm của seller không bán kèm được bảo hiểm do là đồ đã qua sử dụng, Seller hỏi điều kiện để sản phẩm của shop có thể bán kèm bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn kích hoạt',
        Explain: 'Buyer hỏi cách kích hoạt bảo hiểm, các thắc mắc khi kích hoạt bảo hiểm (thông tin cần gửi cho bảo hiểm để kích hoạt, bảo hiểm sẽ gửi SMS/Email kích hoạt qua đâu,...)',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Câu hỏi chung',
        L3: 'Hướng dẫn bồi thường',
        Explain: 'Buyer hỏi cách yêu cầu bồi thường bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Không thể kích hoạt',
        Explain: '- Buyer kích hoạt bảo hiểm rơi vỡ màn hình bị từ chối do màn hình thiết bị không hợp lệ,... <br/> - Buyer kích hoạt bảo hiểm bị lỗi ',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Không nhận được SMS/Email kích hoạt',
        Explain: 'Đơn hàng Completed nhưng buyer không nhận được SMS/Email hướng dẫn kích hoạt bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Kiểm tra trạng thái kích hoạt',
        Explain: 'Buyer nhờ kiểm tra trạng thái kích hoạt, đã gửi thông tin kích hoạt nhưng chưa nhận được SMS/Email xác nhận từ bảo hiểm',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Kiểm tra trạng thái bồi thường',
        Explain: 'Buyer nhờ kiểm tra trạng thái yêu cầu bồi thường bảo hiểm, lý do yêu cầu bồi thường bị từ chối, đã yêu cầu bồi thường nhưng chưa được bảo hiểm phản hồi',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Không nhận được tiền bồi thường',
        Explain: 'Buyer đã yêu cầu bồi thường thành công nhưng chưa nhận được tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Sai số tiền bồi thường',
        Explain: 'Buyer đã nhận được tiền bồi thường nhưng khiếu nại nhận sai/thiếu tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Kích hoạt & Bồi thường',
        L3: 'Sản phẩm khác mô tả',
        Explain: 'Buyer phản ánh chính sách bảo hiểm khác với T&C',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Yêu cầu hủy bảo hiểm',
        Explain: 'Buyer chỉ muốn hủy bảo hiểm, KHÔNG có khiếu nại về sản phẩm chính đã mua <br/> ** Trường hợp có khiếu nại về sản phẩm chính chọn L1 Trả hàng/hoàn tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Hết hạn Shopee đảm bảo',
        Explain: 'Buyer chỉ muốn hủy bảo hiểm nhưng liên hệ sau hạn khiếu nại',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Kiểm tra trạng thái hoàn tiền',
        Explain: 'Buyer đã được chấp nhận hủy bảo hiểm và hỏi thời gian nhận được tiền hoàn, tiền sẽ hoàn về đâu,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Không nhận được tiền hoàn',
        Explain: 'Buyer đã được chấp nhận hủy bảo hiểm nhưng quá thời gian chưa nhận được tiền hoàn',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Sai số tiền hoàn',
        Explain: 'Buyer đã được hủy bảo hiểm và nhận được tiền nhưng có khiếu nại nhận sai/thiếu tiền',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Hoàn tiền/Hủy đơn hàng',
        L3: 'Khiếu nại kết quả xử lý',
        Explain: 'Không đồng ý với kết quả L2 xử lý trường hợp buyer yêu cầu hủy bảo hiểm do: không thỏa điều kiện hủy bảo hiểm,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về tính năng/lỗi',
        Explain: 'Buyer góp ý về tính năng: tự động chọn mua Bảo hiểm thiết bị di động và Bảo hiểm thiết bị điện tử,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Góp ý về chính sách/đối tác',
        Explain: 'Buyer góp ý về chính sách bồi thường của công ty bảo hiểm: hạn mức, thời gian yêu cầu bồi thường, thời gian xử lý yêu cầu bồi thường,...',
    },

    {
        L1: 'Bảo hiểm',
        L2: 'Góp ý/ lỗi hệ thống',
        L3: 'Lỗi hệ thống liên quan đến thanh toán',
        Explain: 'Các lỗi phát sinh liên quan đến hệ thống, App/Web xảy ra sự cố mà khách hàng phản ánh,...',
    },




]



