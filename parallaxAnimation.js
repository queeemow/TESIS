const parallax4 = document.getElementById("parallax4")
const parallax3 = document.getElementById("parallax3")
const parallax5 = document.getElementById("parallax5")
const parallax2 = document.getElementById("parallax2")
const parallax6 = document.getElementById("parallax6")
const parallax7 = document.getElementById("parallax7")
const slogan = document.getElementById("slogan")
const thirtyImg = document.getElementById("thirtyImg")
const thirtyYears = document.getElementById("thirtyYears")

const checklist = document.getElementById("checklist")
const route = document.getElementById("route")
const flightmode = document.getElementById("flightmode")


let scrollTop
let colorChanger
let blurCoef
const sloganWidth = slogan.clientWidth


document.addEventListener("scroll", function () {

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    colorChanger = 1 - scrollTop / 400 < 0.5 ? 0.5 : 1 - scrollTop / 400
    labelColor = scrollTop / 100 - 0.6
    blurCoef = scrollTop / 10 > 10 ? 10 : scrollTop / 10
    slogan.backgroundColor = "rgba(27, 44, 130, .8)"
    header.style.backgroundColor = "rgba(27, 44, 130," + colorChanger + ")"
    header.style.backdropFilter = "blur(" + blurCoef + "px)"
    slogan.style.backgroundColor = "rgba(27, 44, 130," + + ")"
    slogan.marginTop = 430 - scrollTop / 9 + "px"
    parallax4.style.marginTop = 600 - scrollTop / 5 + "px"
    parallax3.style.marginTop = 100 - scrollTop / 30 + "px"
    parallax5.style.marginTop = 500 - scrollTop / 9 + "px"
    // thirtyYears.style.marginTop = 330 - scrollTop/9 +  "px"
    // thirtyImg.style.marginTop = 250 - scrollTop/9 +  "px"
    parallax2.style.marginTop = 800 - scrollTop / 30 + "px"
    parallax6.style.marginTop = 1400 - scrollTop / 12 + "px"
    parallax7.style.marginTop = 1800 - scrollTop / 30 + "px"
    body.style.marginTop = scrollTop / 1.5 + "px"
    console.log(scrollTop)
    checklist.style.backgroundColor = `rgba(0, 0, 0, ${(scrollTop - 1600) / 1200 > 0.25 ? 0.25 : (scrollTop - 1600) / 1200})`
    route.style.backgroundColor = `rgba(0, 0, 0, ${(scrollTop - 1800) / 1200 > 0.25 ? 0.25 : (scrollTop - 1800) / 1200})`
    flightmode.style.backgroundColor = `rgba(0, 0, 0, ${(scrollTop - 2100) / 1200 > 0.25 ? 0.25 : (scrollTop - 2100) / 1200})`

    // services.style.marginLeft = scrollTop == 1400 ? 100 - scrollTop/50 + "%" : 100 + "%"
})

document.addEventListener("mousemove", function (e) {
    parallax4.style.marginLeft = -e.pageX / 30 + "px"
    parallax3.style.marginLeft = -e.pageX / 100 + "px"
    parallax5.style.marginLeft = 500 - e.pageX / 45 + "px"
    // thirtyYears.style.marginLeft = 650 - e.pageX/20+ "px"
    // thirtyImg.style.marginLeft = 250 - e.pageX/20+ "px"
    // thirtyYears.style.marginTop = 330 - e.pageY/20+ "px"
    // thirtyImg.style.marginTop = 250 - e.pageY/20+ "px"
    slogan.marginLeft = 150 - e.pageX / 20 + "px"
    parallax2.style.marginLeft = -e.pageX / 80 + "px"
    parallax6.style.left = 100 - e.pageX / 40 + "px"
    parallax7.style.left = -30 - e.pageX / 100 + "px"
})


//уменьшение прокрутки

const body = document.querySelector("body")
console.log(body)


//о компании прокрутка бортов

const boardsImg = document.getElementById("boardsImg")
const chevR = document.getElementById("chevRigth")
const chevL = document.getElementById("chevLeft")
let imgsWidth = boardsImg.offsetWidth
chevR.addEventListener("click", slide)
chevL.addEventListener("click", slide)

function slide(e) {
    let imgsWidth = boardsImg.offsetWidth
    e.target.id === 'chevLeft' ? scroll(-imgsWidth) : scroll(imgsWidth);
}

function scroll(val) {
    boardsImg.scrollBy({
        left: val,
        behavior: 'smooth'
    });
}
