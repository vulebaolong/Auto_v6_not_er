
button_long()
function button_long(params) {
    let buttons = document.querySelectorAll(".button_long")
    console.log(buttons);
    buttons.forEach((button) => {
        button.onclick = (e) => {
            e.stopPropagation()
            let button_menu = e.target.children[0]
            let button_menu_parent = e.target.parentElement
            let button_menu_show = button_menu_parent.querySelector('.button_long > .button_long_menu.button_show')
            if (button_menu !== undefined) {
                button_menu.classList.toggle('button_show')                
            }
            if (button_menu_show !== null) {
                button_menu_show.classList.remove('button_show')
            }
        }
    })
}