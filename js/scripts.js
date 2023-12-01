function dropdown_close(btn) { 
    
    let dropdown = btn.parentElement.parentElement.getElementsByClassName("dropdown-contents")[0]
    let scrollHeight = dropdown.scrollHeight
    console.log("셋업 전"+scrollHeight)
    dropdown.setAttribute("style", "height:"+ scrollHeight + "px")

    var doClose = function(btn, dropdown) {
        console.log('닫기')
        btn.classList.remove("dropdown-active")
        btn.setAttribute("onClick", "dropdown_open(this)")
        dropdown.setAttribute("style", "height: 0px")
    }

    setTimeout(() => doClose(btn, dropdown), 1)
}


function dropdown_open(btn){
    btn.disabled = true;
    let dropdownComponents = btn.parentElement.parentElement.getElementsByClassName("dropdown-contents")[0]
    let scrollHeight = dropdownComponents.scrollHeight
    btn.classList.add("dropdown-active")
    btn.setAttribute("onClick", "dropdown_close(this)")
    dropdownComponents.setAttribute("style", "height:"+ scrollHeight + "px")
    setTimeout(() => {dropdownComponents.setAttribute("style", "height:auto"); btn.disabled = false;}, 1000)
}

function goIndex(btn){
    alert("인덱스로 이동")
}