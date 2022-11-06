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
  let result = 'open_tab'
  sendResponse({
    result,
  })

  let links = [
    {
      link: 'https://docs.google.com/spreadsheets/d/1kRPSdw0e8_D04yMZTXrulJzwaKLlLAsn/edit#gid=1896230946',
      pinned: true,
      group: false
    },
    {
      link: 'https://cs.shopee.vn/portal/inhouse/knowledge-base-client/',
      pinned: true,
      group: false
    },
    {
      link: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSev5YWTqeZpC2gTX-HAHLv8nKqiWAIGa16uLGKHFpbBE9EPKQ/formResponse',
      pinned: true,
      group: false
    },
    {
      link: 'https://cs.shopee.vn/portal/info/search',
      pinned: false,
      group: false
    },
    {
      link: 'https://www.google.com/search?q=d%E1%BB%8Bch',
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
    }
    // {
    //   link: 'https://docs.google.com/spreadsheets/d/1rFvyU9Rc5GbnsvnkOLD-Kul8t4WK4EYLdTaJssNoxkE/edit#gid=1002091066',
    //   pinned: false,
    //   group: ['FRAUD', 'red']
    // },
    // {
    //   link: 'https://docs.google.com/spreadsheets/d/1rFvyU9Rc5GbnsvnkOLD-Kul8t4WK4EYLdTaJssNoxkE/edit#gid=1002091066',
    //   pinned: false,
    //   group: ['FRAUD', 'red']
    // },
    // {
    //   link: 'https://admin.shopee.vn/return/',
    //   pinned: false,
    //   group: ['RR', 'green']
    // },
    // {
    //   link: 'https://admin.shopee.vn/return/',
    //   pinned: false,
    //   group: ['RR', 'green']
    // },
    // {
    //   link: 'https://cs.shopee.vn/portal/info/search',
    //   pinned: false,
    //   group: false
    // },
    // {
    //   link: 'https://admin.shopee.vn/return/',
    //   pinned: false,
    //   group: ['RR', 'green']
    // },
    // {
    //   link: 'https://admin.shopee.vn/return/official_shop/',
    //   pinned: false,
    //   group: ['RR', 'green']
    // },
    // {
    //   link: 'https://docs.google.com/spreadsheets/d/1rFvyU9Rc5GbnsvnkOLD-Kul8t4WK4EYLdTaJssNoxkE/edit#gid=1002091066',
    //   pinned: false,
    //   group: ['Fraud', 'green']
    // },

  ]

  for (let index = 0; index < links.length; index++) {
    const element = links[index];
    // console.log(element);
    await text(element, index)
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






}
let groups = []

function text(tab_info, index) {
  let group = tab_info.group
  let group_name = group[0]
  let group_color = group[1]
  let link = tab_info.link
  let pinned = tab_info.pinned

  return new Promise((resolve, reject) => {

    let isName = groups.find((e) => {
      return e.group_name == group[0]
    })



    if (isName !== undefined) {
      let groupId = isName.group_id
      console.log('isName', isName);
      // let groupId = isName.group_name

      create_tab(link, pinned)
        .then((tabIds) => {
          // console.log('tabid', tabIds);
          return add_group(tabIds, groupId)
        })
        .then(() => {
          console.log(groupId);
          console.group(index, 'có => không thêm')
          console.log('isName', groups)
          console.groupEnd()
          isName = undefined
          resolve()
        })

    } else {

      if (group_name !== undefined) {

        create_tab(link, pinned)
          .then((tabid) => {
            console.log('tabid', tabid);
            return create_group(tabid)
          })
          .then((groupId) => {
            console.log('groupId', groupId);
            groups = [...groups,
            {
              group_name,
              group_id: groupId
            }
            ]
            console.group(index, 'tên không phải là undefine=> thêm')
            console.log('groups', groups);
            console.groupEnd()
            return set_name(groupId, group_name, group_color)
          })
          .then((res_groupId) => {
            console.log('res_groupId', res_groupId);
            isName = undefined
            resolve()
          })
      } else {
        console.log(index, 'không có');
        console.log(group_name);
        create_tab(link, pinned)
          .then((tabid) => {
            console.log('tabid', tabid);
            isName = undefined
            resolve()
          })

      }

    }




    // setTimeout(() => {
    //   if (isName !== undefined) {
    //     let groupId = isName.group_id
    //     console.log('isName', isName);
    //     // let groupId = isName.group_name

    //     create_tab(link)
    //       .then((tabIds) => {
    //         // console.log('tabid', tabIds);
    //         return add_group(tabIds, groupId)
    //       })
    //       .then(() => {
    //         console.log(groupId);
    //         console.group(index, 'có => không thêm')
    //         console.log('isName', groups)
    //         console.groupEnd()
    //         isName = undefined
    //         resolve()
    //       })

    //   } else {
    //     console.log(index, 'không có');
    //     if (group_name !== undefined) {

    //       create_tab(link)
    //         .then((tabid) => {
    //           console.log('tabid', tabid);
    //           return create_group(tabid)
    //         })
    //         .then((groupId) => {
    //           console.log('groupId', groupId);
    //           groups = [...groups,
    //           {
    //             group_name,
    //             group_id: groupId
    //           }
    //           ]
    //           console.group(index, 'tên không phải là undefine=> thêm')
    //           console.log('groups', groups);
    //           console.groupEnd()
    //           return set_name(groupId, group_name, group_color)
    //         })
    //         .then((res_groupId) => {
    //           console.log('res_groupId', res_groupId);
    //           isName = undefined
    //           resolve()
    //         })
    //     } else {
    //       isName = undefined
    //       resolve()
    //     }

    //   }
    // }, 200);
    // setTimeout(() => {
    //   if (isName !== undefined) {

    //     console.group('có => không thêm')
    //     console.log('isName', groups)
    //     console.groupEnd()
    //     resolve()
    //   } else {
    //     console.log('không có');
    //     if (group[0] !== undefined) {


    //       let createProperties = {
    //         url: link,
    //         active: false,
    //       }

    //       chrome.tabs.create(createProperties, (e) => {
    //         let tab_id = e.id
    //         console.log('tab_id', tab_id);
    //         let object = { tabIds: tab_id }

    //         chrome.tabs.group(object, (e2) => {
    //           let groupId = e2
    //           console.log('groupId: ', groupId);

    //             chrome.tabGroups.update(groupId, { collapsed: true, title: group[0], color: group[1] }, (e) => {

    //               groups.push(
    //                 {
    //                   group_name: group[0],
    //                   group_id: groupId
    //                 }
    //               )
    //               console.group('tên không phải là undefine=> thêm')
    //               console.log('groups', groups);
    //               console.groupEnd()
    //               isName = undefined
    //               resolve()
    //             });

    //         })


    //       })




    //     }
    //     resolve()
    //   }
    // }, 200);

  })
}


function action_tabs(link, group_name, group_color) {
  return new Promise((resolve, reject) => {
    create_tab(link, pinned)
      .then((tabid) => {
        console.log('tabid', tabid);
        return create_group(tabid)
      })
      .then((groupId) => {
        console.log('groupId', groupId);
        groups.push(
          {
            group_name,
            group_id: groupId
          }
        )
        console.group('tên không phải là undefine=> thêm')
        console.log('groups', groups);
        console.groupEnd()
        return set_name(groupId, group_name, group_color)
      })
      .then((TabGroup) => {
        console.log('TabGroup', TabGroup);
        resolve(TabGroup)
      })
  })
}

function create_tab(link, pinned) {
  return new Promise((resolve, reject) => {
    let createProperties = {
      url: link,
      active: false,
      pinned
    }
    chrome.tabs.create(createProperties, (e) => {
      resolve(e.id)
    })
  })
}

function add_group(tabIds, groupId) {
  return new Promise((resolve, reject) => {
    let object = {
      tabIds,
      groupId
    }

    chrome.tabs.group(object, (res_groupId) => {
      resolve(res_groupId)
    })
  })
}

function create_group(tabIds) {
  return new Promise((resolve, reject) => {
    let object = { tabIds }
    chrome.tabs.group(object, (groupId) => {
      resolve(groupId)
    })
  })
}

function set_name(groupId, group_name, group_color) {
  let updateProperties = {
    collapsed: true, title: group_name, color: group_color
  }
  return new Promise((resolve, reject) => {
    chrome.tabGroups.update(groupId, updateProperties, (TabGroup) => {
      resolve(TabGroup)
    })
  })
}



