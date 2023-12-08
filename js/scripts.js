// 기반 함수
function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}

// 드롭다운 펑션
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

// 이동 함수?
function goIndex(btn, index_id){
    alert("인덱스로 이동")
}

// 패럴랙스 스크롤
function classToggle_byScroll () {
  console.log("스크롤")
  let elementsWithClass = document.querySelectorAll('.parallexable');
  elementsWithClass.forEach(function(element){
    let div_up = window.scrollY + element.getBoundingClientRect().top
    let div_down = window.scrollY + element.getBoundingClientRect().bottom
    let startRatio = 40
    let offset = (div_down-div_up)/100*startRatio
    let window_bottom = window.scrollY + window.innerHeight
    //console.log(div_up, div_down, offset)
    if (div_up + offset > window_bottom && !element.classList.contains('parallex-down')){
      // 투명해짐
      console.log("투명해짐",div_up, div_down, offset)
      element.classList.add('parallex-down')
    }
    else if (div_up + offset < window_bottom && element.classList.contains('parallex-down')){
      // 불러옴
      console.log("불러옴", div_up , div_down, offset)
      element.classList.remove('parallex-down')
    }
  }
  )
}

// 스크롤 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', classToggle_byScroll)
window.addEventListener('scroll', throttle(classToggle_byScroll, 50))

/* ------ 사이드 바 ------ */ 
/*
let isPress = false,   // 마우스를 눌렀을 때
    prevPosX = 0,      // 이전에 위치한 X값
    prevPosY = 0;      // 이전에 위치한 Y값
    
let target = document.querySelector(".sidemenu");
console.log(target)


function sideNavDrag_click (sideNav) {
  console.log("눌렀다!");
  prevPosX = sideNav.clientX;
  prevPosY = sideNav.clientY;

  isPress = true;
}
function sideNavDrag_move (sideNav) {
  if (!isPress) {
    return;
  }
  const posX = prevPosX - e.clientX; 
  const posY = prevPosY - e.clientY; 
  
  prevPosX = e.clientX; 
  prevPosY = e.clientY; 
  
  sideNav.style.left = ($target.offsetLeft - posX) + "px";
  sideNav.style.top = ($target.offsetTop - posY) + "px";
}
function end() {
  isPress = false;
}

// 드래그 구현에 필요한 이벤트
target.addEventListener('mousedown', sideNavDrag_click);
target.addEventListener('mouseup', end);

// 요소의 상위 요소 (임시로 window)
window.addEventListener = ('mousemove' , sideNavDrag_move);
*/