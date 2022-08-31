// background.js
var data1;
let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log(chrome.storage.sync);
// });

chrome.identity.getProfileUserInfo((info) => {
  console.log(info);
  console.log(info.email)
})



chrome.runtime.onMessage.addListener(
  async function (request, sender, sendResponse) {

    //console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension")


    if (sender.tab.url.toString().search('cs.shopee.vn/portal/info/') != -1) {
      console.group('Lắng nghe từ Order')
      console.log('Shipping Tracking Number: ', request.Tab_Order_MVD)
      console.log('SN_ĐH: ', request.Tab_Order_SN)
      console.log('EDT: ', request.Tab_Order_EDT)
      console.log('DVVC: ', request.Tab_Order_DVVC)
      console.log('status_EDT: ', request.Tab_Order_status_EDT)
      console.log('Word_ID: ', request.Tab_Order_Word_ID)
      console.log('Order_ID: ', sender.tab.id)
      console.log('Tab_Order_APT: ', request.Tab_Order_APT)
      console.log('Tab_Order_LT: ', request.Tab_Order_LT)
      console.log('Tab_Order_UID: ', request.Tab_Order_UID)
      console.groupEnd()

      var Work_ID = Number(request.Tab_Order_Word_ID)

      var result
      if (request.Tab_Order_MVD) {
        result = 'Extention đã lấy được Shipping Tracking'
      } else {
        result = 'Extention chưa lấy được Shipping Tracking'
      }

      sendResponse({
        Tab_Order_MVD: request.Tab_Order_MVD,
        result,
        Work_ID
      })

      var Mess_Shipping_Tracking = {
        Tab_Order_MVD: request.Tab_Order_MVD,
        Tab_Order_EDT: request.Tab_Order_EDT,
        Tab_Order_SN: request.Tab_Order_SN,
        Tab_Order_DVVC: request.Tab_Order_DVVC,
        Tab_Order_status_EDT: request.Tab_Order_status_EDT,
        Tab_Order_APT: request.Tab_Order_APT,
        Tab_Order_PM: request.Tab_Order_PM,
        Tab_Order_LT: request.Tab_Order_LT,
        Tab_Order_UID: request.Tab_Order_UID,
      }


      if (Work_ID) {
        console.log('Work_ID: ', Work_ID)
        chrome.tabs.sendMessage(Work_ID, Mess_Shipping_Tracking, (e) => {
          console.group('Nhận phản hồi từ tin nhắn gửi đi: ', Mess_Shipping_Tracking)

          console.groupEnd()
        })
      }

      // if (Work_ID) {

      //   })
      // } else {
      //   console.log('Không có Work_ID: ', Work_ID)
      // }
    }

    if (sender.tab.url.toString().search('shopeecs.lightning.force.com/') != -1) {
      var Work_ID = sender.tab.id
      console.group('Lắng nghe từ Word')
      console.log('Tin nhắn từ Word', request.value);
      console.log('Work_ID: ', Work_ID)
      console.groupEnd()

      var result
      if (Work_ID) {
        result = 'Extention đã lấy được Work_ID'
      } else {
        result = 'Extention chưa lấy được Work_ID'
      }

      sendResponse({
        Work_ID,
        result
      })

    }

    if (sender.tab.url.toString().search('cs.shopee.vn/portal/inhouse/') != -1) {
      var Work_ID = sender.tab.id
      console.group('Lắng nghe từ Word')
      console.log('Tin nhắn từ Word', request.value);
      console.log('Work_ID: ', Work_ID)
      console.groupEnd()

      var result
      if (Work_ID) {
        result = 'Extention đã lấy được Work_ID'
      } else {
        result = 'Extention chưa lấy được Work_ID'
      }

      sendResponse({
        Work_ID,
        result
      })

    }

    if (sender.tab.url.toString().search('docs.google.com/spreadsheets/') != -1) {
      var tool_ID = sender.tab.id
      console.group('Lắng nghe từ Tool')
      console.log('Tin nhắn từ Tool', request.value);
      console.log('Tool_ID: ', tool_ID)
      console.groupEnd()

      var result
      if (tool_ID) {
        result = 'Extention đã lấy được Tool_ID'
      } else {
        result = 'Extention chưa lấy được Tool_ID'
      }

      sendResponse({
        tool_ID,
        result
      })

    }


  }

)





