function macro_coppy(params) {
    // Trong EDT
    let el_b_dukien = document.querySelector('.b_dukien')
    let el_b_quadukien = document.querySelector('.b_quadukien')
    let el_s_dukien = document.querySelector('.s_dukien')
    let el_s_quadukien = document.querySelector('.s_quadukien')
    // click_marp_coppy(el_b_dukien, 'Shopee rất tiếc khi đã đến ngày giao dự kiến mà đơn hàng vẫn chưa được giao đến bạn.\nShopee kiểm tra thấy đơn hàng của bạn đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã đến ngày giao hàng dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX')
    click_macro_coppy(el_b_dukien, 'macro_coppy_buyerdukien')

    // click_marp_coppy(el_b_quadukien, 'Shopee rất tiếc khi đã quá thời gian giao hàng dự kiến mà đơn hàng vẫn chưa được giao đến bạn.\nShopee kiểm tra thấy đơn hàng của bạn đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã quá thời gian giao dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX.')
    click_macro_coppy(el_b_quadukien, 'macro_coppy_buyerquadukien')

    // click_marp_coppy(el_s_dukien, 'Shopee rất tiếc khi đã đến ngày giao dự kiến mà đơn hàng vẫn chưa được giao đến cho người mua.\nShopee kiểm tra thấy đơn hàng của bạn và người mua đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã đến ngày giao hàng dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn kêu người mua chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn cũng như người mua có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX')
    click_macro_coppy(el_s_dukien, 'macro_coppy_sellerdukien')

    // click_marp_coppy(el_s_quadukien, 'Shopee rất tiếc khi đã quá thời gian giao hàng dự kiến mà đơn hàng vẫn chưa được giao đến cho người mua.\nShopee kiểm tra thấy đơn hàng của bạn và người mua đang được vận chuyển giữa các kho trung chuyển. Việc hối giao gấp khi đơn hàng ở các kho này có tỉ lệ thành công rất thấp.\nTuy nhiên do hiện tại đã quá thời gian giao dự kiến, Shopee sẽ chuyển thông tin đốc thúc để đơn vị vận chuyển tăng tốc giao đơn hàng này, bạn kêu người mua chú ý điện thoại để nhận hàng nhé.\nTrong trường hợp cần hàng gấp, bạn cũng như người mua có thể liên hệ trực tiếp với đơn vị vận chuyển XXXXX.')
    click_macro_coppy(el_s_quadukien, 'macro_coppy_sellerquadukien')


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

    click_macro_coppy(el_ba_ngay, 'macro_coppy_3ngay')
    click_macro_coppy(el_hoi_giao_3408, 'macro_coppy_hoigiaotragop')
    click_macro_coppy(el_quan_huyen, 'macro_coppy_hoigiaoquanhuyen')
    click_macro_coppy(el_qua_edt3, 'macro_coppy_quaedt3')
    click_macro_coppy(el_haimuoi_ngay, 'macro_coppy_cb20ngay')
    click_macro_coppy(el_qua_leadtime, 'macro_coppy_cbqualeadtime')
    click_macro_coppy(el_chua_leadtime, 'macro_coppy_cbchuaqualeadtime')
    click_macro_coppy(el_be3_thht, 'macro_coppy_thhtbe3')
    click_macro_coppy(el_lon3_thht, 'macro_coppy_thhtlon3')
    click_macro_coppy(el_kn_3pl, 'macro_coppy_sellerkn3pl')
    click_macro_coppy(el_buucuc, 'macro_coppy_dalaychuacapnhatbuucuc')
    click_macro_coppy(el_shipper, 'macro_coppy_dalaychuacapnhatshipper')
    click_macro_coppy(el_doi_24h, 'macro_coppy_dalaychuacapnhatdoi24h')
    click_macro_coppy(el_qua_24h_2971, 'macro_coppy_dalaychuacapnhatqua24h')
    click_macro_coppy(el_dang_giao_2974, 'macro_coppy_sttdangiao')
    click_macro_coppy(el_khieu_nai_2976, 'macro_coppy_sttdangiaokhieunai')
    click_macro_coppy(el_khieu_nai_2981, 'macro_coppy_dagiaochuacapnhat3plchuacapnhat')
    click_macro_coppy(el_doi_24h_2979, 'macro_coppy_dagiaochuacapnhat3pldacapnhat24h')
    click_macro_coppy(el_qua_24h_2979, 'macro_coppy_dagiaochuacapnhat3pldacapnhatqua24h')
    click_macro_coppy(el_thatlac_2987, 'macro_coppy_dangiaothatlac')
    click_macro_coppy(el_chuagiao_3415, 'macro_coppy_chuagiaocapnhatgiaothanhcong')
    click_macro_coppy(el_hoan_3418, 'macro_coppy_shipperkhonggoihoan')
    click_macro_coppy(el_dahoan_3422, 'macro_coppy_dahoanchuacapnhat')
    click_macro_coppy(el_dahoan_3421, 'macro_coppy_dahoanchuacapnhatdoi24h')
    click_macro_coppy(el_qua_24h_3421, 'macro_coppy_dahoanchuacapnhatqua24h')
    click_macro_coppy(el_khieunai_3426, 'macro_coppy_chuanhanreturnedbe7ngay')
    click_macro_coppy(el_tuchoi_3427, 'macro_coppy_chuanhanreturnedlon7ngay')
    
    // click_marp_coppy(el_ba_ngay, 'Đơn hàng hiện tại đang trong quá trình vận chuyển, tuy nhiên Shopee kiểm tra thấy đơn đang ở khu vực XXXXX từ lúc XXXXX và chưa thấy có cập nhật hành trình mới.\nBạn cho phép Shopee kiểm tra với đơn vị vận chuyển để đốc thúc giao hàng cho người mua và thúc đẩy giao hàng đến người mua trong 1-2 ngày làm việc tiếp theo nhé.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã dừng hành trình >=3 ngày. MVĐ: ')
    // click_marp_coppy(el_hoi_giao_3408, 'Dear Team,\n\nNhờ hỗ trợ hối giao đơn trả góp giá trị cao. MVĐ: ')
    // click_marp_coppy(el_quan_huyen, 'Shopee kiểm tra thấy đơn đang ở khu vực quận huyện của người mua.\nShopee sẽ chuyển đơn vị vận chuyển hối giao để bạn sớm nhận được đơn hàng, thời gian xử lý là 1-2 ngày làm việc tiếp theo.\nThông thường đơn hàng đã tới quận/huyện của người mua sẽ được đơn vị vận chuyển sắp xếp giao hàng trong các ca giao sắp tới, bạn có thể chủ động theo dõi hành trình trên web đơn vị vận chuyển nhé.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển, bạn có thể liên hệ theo thông tin XXXXX\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn đã đến quận/huyện của Buyer. MVĐ: ')
    // click_marp_coppy(el_qua_edt3, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì đã quá thời gian dự kiến mà vẫn chưa nhận được hàng.\nMình sẽ chuyển ngay thông tin đến đơn vị vận chuyển để hối thúc giao gấp đơn hàng này cho người mua, thời gian xử lý 1-2 ngày làm việc.\nTrường hợp bạn cần liên hệ với đơn vị vận chuyển , bạn có thể liên hệ theo thông tin XXXXX')
    // click_marp_coppy(el_haimuoi_ngay, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì vẫn chưa nhận được hàng.\nDo đơn chưa có cập nhật trạng thái mới, chưa về đến Việt Nam, mình sẽ chuyển ngay thông tin đến bộ phận liênquan để kiểm tra thông tin đơn hàng này cho người mua, thời gian xử lý 3 đến 5 ngày làm việc (không tính thứ 7, chủ nhật và các ngày lễ).\nMong bạn thông cảm đợi thông tin từ Shopee ạ.\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn CB quá 20 ngày chưa về tới VN\nOrder SN: ')
    // click_marp_coppy(el_qua_leadtime, 'Shopee hiểu việc người mua đang nóng lòng chờ nhận hàng và rất tiếc khi để người mua phải liên hệ vì chưa nhận được hàng.\nMình sẽ chuyển ngay thông tin đến đơn vị vận chuyển để hối thúc giao gấp đơn hàng này cho người mua, thời gian xử lý 1-2 ngày làm việc tiếp theo.\nTrường hợp người mua cần liên hệ với đơn vị vận chuyển, người mua có thể liên hệ theo thông tin XXXXX và cung cấp mã vận đơn là XXXXX.\nNếu cần mua hàng gấp, lần sau người mua có thể cân nhắc lựa chọn đặt hàng tại các shop nội địa, đặc biệt là những shop có hỗ trợ vận chuyển hỏa tốc để nhận hàng nhanh chóng hơn\n\n\nDear Team,\n\nNhờ hỗ trợ hối giao đơn CB đã quá thời gian giao hàng có MVĐ: ')
    // click_marp_coppy(el_chua_leadtime, 'Đơn hàng đã được đơn vị vận chuyển tiếp nhận ở Việt Nam. Thời gian giao hàng dự kiến là XXXXX ngày làm việc.\nĐơn đang trên đường trung chuyển giữa các bưu cục để đến khu vực của người mua nên Shopee khó có thể can thiệp đốc thúc bưu cục giao hàng để giao ngay đơn hàng này.\nNgười mua có thể chủ động theo dõi hành trình đơn hàng bằng cách sử dụng mã vận đơn XXXXX để kiểm tra trên web của đơn vị vận chuyển.\nTrong trường hợp cần hàng gấp, người mua có thể liên hệ trực tiếp với đơn vị vận chuyển theo thông tin XXXXX.\nNếu cần mua hàng gấp, lần sau người mua có thể cân nhắc lựa chọn đặt hàng tại các shop nội địa, đặc biệt là những shop có hỗ trợ vận chuyển hỏa tốc để nhận hàng nhanh chóng hơn nhé.')
    // click_marp_coppy(el_be3_thht, 'Qua kiểm tra mình thấy đơn hàng của bạn trễ hạn lấy hàng rồi ạ.\nNên mình sẽ hối lấy cho đơn hàng của bạn ạ.\nShopee sẽ hối thúc đơn vị vận chuyển đến lấy hàng trong vòng 1-2 ngày làm việc tiếp theo để có thể nhanh chóng giao hàng.\nĐồng thời bạn lưu ý nếu quá 3 ngày kể từ ngày XXXXX đơn hàng chưa cập nhật lấy hàng thành công thì bạn đem kiện hàng ra bưu cục XXXXX gần nhất, xin bưu cục hoá đơn hoặc hình ảnh chứng mình bạn đã gửi tại bưu cục và cung cấp lại cho Shopee ạ.\n\nDanh Sách Bưu Cục J&T Express bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79397-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-J-T-Express\nDanh Sách Bưu Cục NinjaVan bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79395-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-NinjaVan\n\nVà quan trọng hơn nếu như quá ngày XXXXX này mà đơn hàng chưa cập nhật lấy hàng thành công. Để tránh khiếu nại hủy và không khiếu nại lại được nữa Shopee xin phép dự trù trước cho bạn về thời gian bấm lại khiếu nại.\nNếu khiếu nại hủy trước 7h thì bạn vui lòng bấm khiếu nại trước 7h cùng ngày\nNếu khiếu nại hủy sau 7h thì bạn vui lòng bấm khiếu nại trước 7h ngày hôm sau.')
    // click_marp_coppy(el_lon3_thht, 'Qua kiểm tra mình thấy hiện đã quá 3 ngày kể từ ngày XXXXX đơn hàng chưa cập nhật lấy hàng thành công. Để tránh khiếu nại bị hủy, bạn vui lòng chủ động mang gói hàng ra bưu cục gần nhất gửi hàng, Xin bưu cục hoá đơn và cung cấp lại cho Shopee ạ.\n\nDanh Sách Bưu Cục J&T Express bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79397-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-J-T-Express\nDanh Sách Bưu Cục NinjaVan bạn tham khảo đường dẫn sau: https://help.shopee.vn/portal/article/79395-Danh-S%C3%A1ch-B%C6%B0u-C%E1%BB%A5c-NinjaVan\n\nVà quan trọng hơn nếu như quá ngày XXXXX này mà đơn hàng chưa cập nhật lấy hàng thành công. Để tránh khiếu nại hủy và không khiếu nại lại được nữa Shopee xin phép dự trù trước cho bạn về thời gian bấm lại khiếu nại.\nNếu khiếu nại hủy trước 7h thì bạn vui lòng bấm khiếu nại trước 7h cùng ngày\nNếu khiếu nại hủy sau 7h thì bạn vui lòng bấm khiếu nại trước 7h ngày hôm sau.')
    // click_marp_coppy(el_kn_3pl, 'Dạ người bán giúp Shopee thông cảm chờ ca lấy hàng tiếp theo.\nĐồng thời, Shopee ghi nhận và chuyển thông tin đến đơn vị vận chuyển để xác minh trường hợp này, thời gian xử lý từ 3-5 ngày làm việc (không tính thứ 7, chủ nhật và các ngày lễ).\nNếu đơn hàng bị tính tỉ lệ giao hàng trễ hoặc tỉ lệ đơn hàng không thành công, Shop vui lòng liên hệ lại để Shopee tiếp tục hỗ trợ.\n\n\nĐể biết thêm cách liên hệ đơn vị vận chuyển Shopee bạn tham khảo đường dẫn sau: https://banhang.shopee.vn/edu/article/3134\n\n\nDear Team,\n\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper chưa liên hệ lấy nhưng cập nhật: Không lấy thành công / Hẹn lại ngày lấy / Người bán chưa cuẩn bị hàng\nMVĐ: ')
    // click_marp_coppy(el_buucuc, 'Dạ trường hợp này bạn giúp Shopee cung cấp biên nhận giao hàng (tin nhắn xác nhận, biên nhận có thông tin và chữ ký của shipper/ bưu cục) ạ.\n\nNếu chưa có những thông tin trên bạn cung cấp giúp Shopee nhưng thông tin sau:\n- Địa chỉ bưu cục mà người bán đã gửi hàng\n- Hình ảnh ngoại quan của gói hàng\n\nShopee đã tiếp nhận thông tin từ bạn. Shopee xin phép chuyển bộ phận liên quan để hỗ trợ bạn tốt nhất. Vì hiện bạn chưa cung cấp được biên nhận nên Shopee sẽ không hứa chắc đơn vị vận chuyển sẽ hỗ trợ. Thời gian xử lí từ 3 đến 5 ngày làm việc. Shopee sẽ cố gắng phản hồi đến bạn ngày khi có kết quả nhé.\n\nDear Team,\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper đã lấy hàng nhưng BE/ Portal chưa cập nhật Pickup Done\n- Web 3PL chưa cập nhật lấy thành công\nMVĐ: ')
    // click_marp_coppy(el_shipper, 'Dạ trường hợp này bạn giúp Shopee cung cấp biên nhận giao hàng (tin nhắn xác nhận, biên nhận có thông tin và chữ ký của shipper/ bưu cục) ạ.\n\nNếu chưa có những thông tin trên bạn cung cấp giúp Shopee nhưng thông tin sau:\n- Mô tả về shipper hoặc số điện thoại của shipper đến lấy hàng.\n- Hình ảnh/video thể hiện shipper đã đến lấy hàng của người bán có rõ mã đơn hàng/mã vận đơn.\n- Hình ảnh ngoại quan của gói hàng.\n\nShopee đã tiếp nhận thông tin từ bạn. Shopee xin phép chuyển bộ phận liên quan để hỗ trợ bạn tốt nhất. Vì hiện bạn chưa cung cấp được biên nhận nên Shopee sẽ không hứa chắc đơn vị vận chuyển sẽ hỗ trợ. Thời gian xử lí từ 3 đến 5 ngày làm việc. Shopee sẽ cố gắng phản hồi đến bạn ngày khi có kết quả nhé.\n\nDear Team,\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper đã lấy hàng nhưng BE/ Portal chưa cập nhật Pickup Done\n- Web 3PL chưa cập nhật lấy thành công\nMVĐ: ')
    // click_marp_coppy(el_doi_24h, 'Shopee kiểm tra thấy website của đơn vị vận chuyển đã cập nhật thông tin lấy hàng thành công vào ngày XXXXX\nNhờ người bán chờ thêm trong 24h để hệ thống đồng bộ và cập nhật trạng thái đúng ạ.\nTrong trường hợp không mong muốn là đơn bị hủy, nhờ người bán vui lòng liên hệ lại để Shopee được hỗ trợ xác minh với đơn vị vận chuyển và xử lý ạ.')
    // click_marp_coppy(el_qua_24h_2971, 'Shopee kiểm tra thấy website của đơn vị vận chuyển đã cập nhật thông tin lấy hàng thành công vào ngày XXXXX\nNhưng hiện quá 24h hệ thống Shopee chưa đồng bộ nên Shopee sẽ chuyển thông tin đến đơn vị vận chuyển và bộ phận liên quan để kiểm tra lại trạng thái đúng của đơn hàng này, thời gian xử lý 3-5 ngày làm việc.\n\n\nDear Team,\nNhờ hỗ trợ xác minh cập nhật đúng trạng thái:\n- Đã lấy hàng nhưng BE/ Portal chưa cập nhật\n- Web 3PL đã cập nhật giao thành công\n- Đã quá 24h kể từ khi nhận hàng\nMVĐ: ')
    // click_marp_coppy(el_dang_giao_2974, 'Shopee kiểm tra thấy đơn vị vận chuyển cập nhật thông tin giao không thành công vào lúc XXXXX\nĐơn hàng này vẫn còn ca giao theo quy trình, bạn thông cảm theo dõi đơn hàng và chờ shipper liên hệ giao trong ca tiếp theo.\nNếu shipper cập nhật sai trạng thái lần nữa, bạn vui lòng liên hệ lại ngay với Shopee để được hỗ trợ.')
    // click_marp_coppy(el_khieu_nai_2976, 'Dear Team,\n\nNhờ hỗ trợ xác minh khiếu nại:\n- Shipper chưa liên hệ giao nhưng cập nhật giao không thành công / Hẹn lại ngày giao / Không liên hệ được người mua\n- Đã đủ 3 ca giao\n- Khách gay gắt yêu cầu khiếu nại\nMVĐ: ')
    // click_marp_coppy(el_khieu_nai_2981, 'Dạ trường hợp này bạn giúp Shopee cung cấp hình ảnh kiện hàng thấy rõ mã vận đơn mà bạn đã nhận được ạ.\n\nDear Team,\nNhờ hỗ trợ xác minh khiếu nại:\n- Đã giao hàng nhưng BE/ Portal chưa cập nhật Delivery Done\n- Web 3PL chưa cập nhật giao thành công\nMVĐ: ')
    // click_marp_coppy(el_doi_24h_2979, 'Shopee kiểm tra thấy website của đơn vị vận chuyển đã cập nhật thông tin giao hàng thành công vào ngày XXXXX\nTrường hợp này người mua giúp Shopee chờ thêm trong vòng 24h tiếp theo để hệ thống đồng bộ và cập nhật trạng thái đúng ạ.\nNếu sau thời gian trên trạng thái đơn vẫn chưa được cập nhật, người mua vui lòng liên hệ lại để được hỗ trợ kiểm tra ạ.')
    // click_marp_coppy(el_qua_24h_2979, 'Shopee kiểm tra thấy website của ĐVVC đã cập nhật thông tin giao hàng thành công vào ngày XXXXX\nNhưng hiện quá 24h hệ thống Shopee chưa đồng bộ nên Shopee sẽ chuyển thông tin đến đơn vị vận chuyển và bộ phận liên quan để kiểm tra lại trạng thái đúng của đơn hàng này, thời gian xử lý 3-5 ngày làm việc.\n\nDear Team,\nNhờ hỗ trợ xác minh cập nhật đúng trạng thái:\n- Đã giao hàng nhưng BE/ Portal chưa cập nhật Delivery Done\n- Web 3PL đã cập nhật giao thành công\n- Đã quá 24h kể từ khi nhận hàng\nMVĐ: ')
    // click_marp_coppy(el_thatlac_2987, 'Dear Team,\n- Đơn hàng được báo thất lạc/ hoàn hàng nhưng hệ thống Shopee chưa ghi nhận thông tin\n- MVĐ: \nNhờ team hỗ trợ xác minh')
    // click_marp_coppy(el_chuagiao_3415, 'Dear Team,\n\nNhờ hỗ trợ xác minh khiếu nại:\n- Chưa giao hàng nhưng cập nhật Giao thành công\n- Khách không đồng ý với ePOD/ không có ePOD/ ePOD không hợp lệ (CS chọn và note đúng lý do)\nMVĐ: ')
    // click_marp_coppy(el_hoan_3418, 'Shopee sẽ chuyển thông tin kiểm tra với phía đơn vị vận chuyển, thời gian xử lý là 3-5 ngày làm việc.\nĐơn hàng này đã được chuyển hoàn cho người bán nên rất tiếc hàng sẽ không thể tiếp tục giao.\nTrường hợp người mua bị tính tỉ lệ giao hàng không thành công dẫn đến không chọn hình thức thanh toán khi nhận hàng được, người mua vui lòng liên hệ lại Shopee để được hỗ trợ ạ.\n\n\nDear team,\n\nKhách khiếu nại shipper chưa liên hệ giao đủ 3 ca nhưng cập nhật chuyển hoàn\nMVĐ: \nNhờ team hỗ trợ xác minh')
    // click_marp_coppy(el_dahoan_3422, 'Dạ trường hợp này người bán giúp Shopee cung cấp hình ảnh gói hàng mà người bán nhận được thấy rõ mã vận đơn trên gói hàng ạ.\n\nVận chuyển >> Hoàn hàng >> Các vấn đề khác\n\nDear team,\n\nSeller khiếu nại đã nhận được hàng hoàn nhưng chưa cập nhật đã hoàn thành công\nMVĐ: \nNhờ team hỗ trợ xác minh')
    // click_marp_coppy(el_dahoan_3421, 'Trường hợp này người bán giúp Shopee chờ thêm trong vòng 24h tiếp theo để hệ thống đồng bộ và cập nhật trạng thái đúng ạ.\nNếu sau thời gian trên trạng thái đơn vẫn chưa được cập nhật, người mua vui lòng liên hệ lại để được hỗ trợ kiểm tra ạ.')
    // click_marp_coppy(el_qua_24h_3421, 'Shopee kiểm tra hiện quá 24h hệ thống Shopee chưa đồng bộ nên Shopee sẽ chuyển thông tin đến đơn vị vận chuyển và bộ phận liên quan để kiểm tra lại trạng thái đúng của đơn hàng này, thời gian xử lý 3-5 ngày làm việc.\n\n\nDear Team,\n\nNhờ hỗ trợ xác minh cập nhật đúng trạng thái:\n- Shipper đã hoàn hàng nhưng BE/ Portal chưa cập nhật Delivery Fail\n- Web 3PL đã cập nhật hoàn thành công\nMVĐ:')
    // click_marp_coppy(el_khieunai_3426, 'Dear team,\n\nSeller khiếu nại chưa nhận được hàng hoàn nhưng cập nhật đã hoàn thành công\nMVĐ: \nNhờ team hỗ trợ xác minh')
    // click_marp_coppy(el_tuchoi_3427, 'Do đã quá thời hạn khiếu nại nên Shopee rất tiếc chưa hỗ trợ được, mong khách thông cảm.\nShopee có gửi thông báo đến người bán mỗi khi đơn hàng được cập nhật trả thành công, trong đó có thông tin cần phải khiếu nại trong vòng 24h. Mong bạn lưu ý thông tin này và liên hệ sớm hơn với Shopee cho những đơn hàng sau để tránh những phát sinh không đáng có.')
}

function click_marp_coppy(params, info) {
    console.log(params);
    params.onclick = () => {
        navigator.clipboard.writeText(info)
    }
}
function click_macro_coppy(element, name_file) {
    // console.log(element);
    element.onclick = () => {
        const path = chrome.runtime.getURL(`macro_coppy/${name_file}.txt`);
        fetch(path)
            .then(response => response.text())
            .then(data => {
                console.log(name_file,data);
                navigator.clipboard.writeText(data)
            })
    }
}

function get_macro_coppy(params) {
    const path = chrome.runtime.getURL('macro_coppy/macro_coppy_3ngay.txt');
    fetch(path)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            navigator.clipboard.writeText(data)
        })
}

