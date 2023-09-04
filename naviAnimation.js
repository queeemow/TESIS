//navi
const nav = document.getElementById("nav")
let sticky = nav.offsetTop
window.onscroll = function () { StickNav() }

function StickNav() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky')
    }
    else {
        nav.classList.remove('sticky')
    }
}


//Animations for navi
const header = document.getElementById("header")
const mainNaviLine = document.getElementById("mainLine")
const orderNaviLine = document.getElementById("makeOrderLine")
const aboutNaviLine = document.getElementById("aboutLine")
const serviceLine = document.getElementById("serviceLine")
header.addEventListener("mousemove", function (e) {
    let mainLX = mainNaviLine.getBoundingClientRect().x
    let differenceM = Math.abs(mainLX - e.pageX)
    let luftM = 80 - Math.abs(mainLX - e.pageX)
    let colorChange = 44 + e.pageX/30

   
    if (differenceM < 50) {
        mainNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline; height: " + luftM + "px")
    }
    else {
        mainNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    }

    let orderLX = orderNaviLine.getBoundingClientRect().x
    let differenceO = Math.abs(orderLX - e.pageX)
    let luftO = 80 - Math.abs(orderLX - e.pageX)
    if (differenceO < 50) {
        orderNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline; height: " + luftO + "px")
    }
    else {
        orderNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    }

    let aboutLX = aboutNaviLine.getBoundingClientRect().x
    let differenceA = Math.abs(aboutLX - e.pageX)
    let luftA = 80 - Math.abs(aboutLX - e.pageX)
    if (differenceA < 50) {
        aboutNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline; height: " + luftA + "px")
    }
    else {
        aboutNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    }

    let serviceLX = serviceLine.getBoundingClientRect().x
    let differenceS = Math.abs(serviceLX - e.pageX)
    let luftS = 80 - Math.abs(serviceLX - e.pageX)
    if (differenceS < 50) {
        serviceLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline; height: " + luftS + "px")
    }
    else {
        serviceLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    }
})
header.addEventListener("mouseleave", function(e) {
    aboutNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    orderNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    mainNaviLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")
    serviceLine.setAttribute("style", "border-radius: 1px;width: 2px; background-color: white; display: inline;height: 30px;")

})

const indexOrderBtn = document.getElementById("indexOrderBtn")
indexOrderBtn.addEventListener("click", function() {
    window.location.href = "./order.html"
})

//Animations for gifs on index page

const firstGif = document.getElementById("firstGif")
const secondGif = document.getElementById("secondGif")
const thirdGif = document.getElementById("thirdGif")

