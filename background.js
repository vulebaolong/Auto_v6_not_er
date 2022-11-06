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
  function (request, sender, sendResponse) {

    //console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension")


    if (sender.tab.url.toString().search('cs.shopee.vn/portal/info/') != -1) {
      console.group('Lắng nghe từ Order')
      console.log('Shipping Tracking Number: ', request.Tab_Order_MVD)
      console.log('SN_ĐH: ', request.Tab_Order_SN)
      console.log('EDT: ', request.Tab_Order_EDT)
      console.log('DVVC: ', request.Tab_Order_DVVC)
      console.log('DVVC: ', request.Tab_Order_KDVVC)
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
        Tab_Order_KDVVC: request.Tab_Order_KDVVC,
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

    if (sender.tab.url.toString().search('cs.shopee.vn/portal/inhouse/') != -1) {
      console.group('Lắng nghe từ Word')
      console.log('Tin nhắn từ Word');
      console.log('value: ', request.value);
      console.log('flag: ', request.flag);
      console.groupEnd()
      if (request.flag === 'get_id') {
        get_id(request, sender, sendResponse)
      }
      if (request.flag === 'open_tab') {
        open_tab(request, sender, sendResponse)
      }
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

function get_id(request, sender, sendResponse) {
  let Work_ID = sender.tab.id
  console.group('chạy hàm get_id')
  console.log('Work_ID: ', Work_ID)
  console.groupEnd()

  let result
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

async function open_tab(request, sender, sendResponse) {
  console.group('chạy hàm open_tab')
  console.groupEnd()

  let links = [
    {
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSev5YWTqeZpC2gTX-HAHLv8nKqiWAIGa16uLGKHFpbBE9EPKQ/viewform',
      pinned: true,
      group: false
    },
    {
      link: 'https://cs.shopee.vn/portal/inhouse/knowledge-base-client',
      pinned: true,
      group: false
    },
    {
      link: 'https://docs.google.com/spreadsheets/d/1kRPSdw0e8_D04yMZTXrulJzwaKLlLAsn/edit#gid=1543826266',
      pinned: true,
      group: false
    },
    {
      link: 'https://cs.shopee.vn/portal/info/search',
      pinned: false,
      group: false
    },
    {
      link: 'https://admin.shopee.vn/return/',
      pinned: false,
      group: ['RR', 'green']
    },
    {
      link: 'https://admin.shopee.vn/return/official_shop/',
      pinned: false,
      group: ['RR', 'green']
    },
    {
      link: 'https://drive.google.com/file/d/1_RzQJRwGXuo-LCj0aerX9lOe14N7BpOC/view',
      pinned: false,
      group: ['RR', 'green']
    },
    {
      link: 'https://docs.google.com/spreadsheets/d/1TUmvcqidddJfXIdsIhNmX_J0DgnQg5NM/edit#gid=49164029',
      pinned: false,
      group: ['RR', 'green']
    },
    {
      link: 'https://banhang.shopee.vn/edu/article/10626',
      pinned: false,
      group: ['RR', 'green']
    },
    {
      link: 'https://docs.google.com/spreadsheets/d/1rFvyU9Rc5GbnsvnkOLD-Kul8t4WK4EYLdTaJssNoxkE/edit#gid=1002091066',
      pinned: false,
      group: ['Fraud', 'green']
    },

  ]

  for (let index = 0; index < links.length; index++) {
    const element = links[index];
    // console.log(element);
    await text(element)
  }





  // let createProperties = {
  //   url: "https://docs.google.com/spreadsheets/d/1kRPSdw0e8_D04yMZTXrulJzwaKLlLAsn/edit#gid=1896230946",
  //   pinned: true,
  //   active: false,
  //   openerTabId: 1
  // }

  // let id1
  // let id2
  // let id3

  // chrome.tabs.create({
  //   url: "https://docs.google.com/spreadsheets/d/1kRPSdw0e8_D04yMZTXrulJzwaKLlLAsn/edit#gid=1896230946",
  //   pinned: true,
  //   active: false,
  // }, (e) => {
  //   console.log(e.id)
  //   id3 = e.id
  // })

  // chrome.tabs.create({
  //   url: "https://docs.google.com/spreadsheets/d/1kRPSdw0e8_D04yMZTXrulJzwaKLlLAsn/edit#gid=1896230946",
  //   pinned: true,
  //   active: false,
  // }, (e) => {
  //   console.log(e.id)
  //   id1 = e.id
  // })

  // chrome.tabs.create({
  //   url: "https://docs.google.com/spreadsheets/d/1kRPSdw0e8_D04yMZTXrulJzwaKLlLAsn/edit#gid=1896230946",
  //   pinned: true,
  //   active: false,
  // }, (e) => {
  //   console.log(e.id);
  //   id2 = e.id
  //   let object = { tabIds: [id1, id2] }
  //   console.log(object);
  //   chrome.tabs.group(object, (params) => {
  //     console.log(params);

  //     chrome.tabs.group({ tabIds: id3, groupId:params }, (params2) => {
  //       console.log(params2);
  //       chrome.tabGroups.update(params2, { collapsed: true, title: "title", color: "blue" });
  //     })
  //   //   chrome.tabGroups.update(params, { collapsed: false, title: "title", color: "/blue" });
  //   })
  // })




  let result = 'open_tab'
  sendResponse({
    result
  })

}
var groups_names = []
let groups = [
  {
    group_name: 'Fraud',
    group_id: 9
  }
]

function text(tab_info) {
  let group = tab_info.group
  let link = tab_info.link
  let pinned = tab_info.pinned

  let option = {
    url: link,
    pinned,
    active: false,
  }


  return new Promise((resolve, reject) => {



    if (group) {
      console.log(groups_names.length);
      console.log(groups_names);
      // let isName = groups.find((e) => {
      //   console.log(e.group_name);
      //   // return e.group_name == group[0]
      // })

      let isName = groups_names.includes(group[0])
      console.log(isName);
      if (isName) {
        // chrome.tabs.create(option, (e) => {
        //   let object = { tabIds: e.id}
        //     //tạo group
        //     chrome.tabs.group(object, (params) => {
        //       chrome.tabGroups.update(params, { collapsed: true, title: group[0], color: group[1]});
        //     })
        // })
      } else {
        chrome.tabs.create(option, (e) => {
          let object = { tabIds: e.id }
          //tạo group
          chrome.tabs.group(object, (group_id) => {
            console.log('groupId: ', group_id);

            groups_names.push(group[0])

            console.log(groups_names.length);
            console.log(groups_names);
            chrome.tabGroups.update(group_id, { collapsed: true, title: group[0], color: group[1] });
          })
        })
      }






      resolve()
    } else {
      chrome.tabs.create(option, (e) => {
        resolve()
      })
    }





  })
}




