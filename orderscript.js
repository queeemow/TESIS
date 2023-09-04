//order
const resultHolder = document.querySelector(".resultHolder")
const btn = document.getElementById('btn')
const numOfUnits = document.getElementById("numberOfUnits")
const cargotype = document.getElementById('cargotype')
const weight = document.getElementById('totalWeight')
const volume = document.getElementById("totalVolume")
const dest = document.getElementById('dest')
const listCities = document.getElementById("listCities")


const cities = {
    'Анапа': [81, 79, 77, 75, 73, 100], 'Сочи': [81, 79, 77, 75, 73, 100], 'Архангельск': [65, 63, 61, 59, 57, 68], 'Челябинск': [80, 78, 76, 74, 72, 98], 'Москва': [73, 71, 69, 67, 65, 84], 'Москва': [73, 71, 69, 67, 65, 84], 'Благовещенск': [159, 157, 155, 153, 151, 260], 'Астрахань': [134, 132, 130, 128, 126, 209], 'Магадан': [300, 298, 296, 294, 292, 547], 'Н. Новгород': [104, 102, 100, 98, 96, 147], 'Грозный': [133, 131, 129, 127, 125, 207], 'Хабаровск': [181, 179, 177, 175, 173, 304], 'Нальчик': [96, 94, 92, 90, 88, 131], 'Нижневартовск ': [171, 169, 167, 165, 163, 284], 'Владикавказ': [128, 126, 124, 122, 120, 196], 'Петрп.-Камчат.': [242, 240, 238, 236, 234, 429], 'Южно-Сахал. ': [265, 263, 261, 259, 257, 476], 'Апатиты': [67, 65, 63, 61, 59, 72], 'Киров': [121, 119, 117, 115, 113, 182], 'Горно-Алтайск': [195, 193, 191, 189, 187, 333], 'Калининград': [76, 74, 72, 70, 68, 90], 'Красноярск ': [87, 85, 83, 81, 79, 113], 'Краснодар ': [70, 68, 66, 64, 62, 78], 'Самара ': [68, 66, 64, 62, 60, 74], 'Казань': [68, 66, 64, 62, 60, 74], 'Мурманск': [70, 68, 66, 64, 62, 78], 'Мин.воды ': [69, 67, 65, 63, 61, 76], 'Омск': [99, 97, 95, 93, 91, 137], 'Новосибирск': [87, 85, 83, 81, 79, 113], 'Пермь': [71, 69, 67, 65, 63, 80], 'Оренбург ': [74, 72, 70, 68, 66, 86], 'Ростов-на-Дону ': [65, 63, 61, 59, 57, 68], 'Сыктывкар ': [79, 77, 75, 73, 71, 96], 'Сургут ': [92, 90, 88, 86, 84, 123], 'Симферополь': [65, 63, 61, 59, 57, 68], 'Екатеринбург ': [67, 65, 63, 61, 59, 72], 'Тюмень': [86, 84, 82, 80, 78, 111], 'Иркутск': [124, 122, 120, 118, 116, 188], 'Уфа': [70, 68, 66, 64, 62, 78], 'Магадан ': [250, 248, 246, 244, 242, 445], 'Н. Новгород ': [77, 75, 73, 71, 69, 92], 'Нижневартовск ': [81, 79, 77, 75, 73, 100], 'Анапа': [98, 96, 94, 92, 90, 135], 'Абакан': [138, 136, 134, 132, 130, 217], 'Сочи': [122, 120, 118, 116, 114, 184], 'Архангельск': [107, 105, 103, 101, 99, 153], 'Астрахань ': [95, 93, 91, 89, 87, 129], 'Челябинск ': [106, 104, 102, 100, 98, 151], 'Грозный': [83, 81, 79, 77, 75, 105], 'Саратов': [134, 132, 130, 128, 126, 209], 'Ханты-Мансийск': [158, 156, 154, 152, 150, 258], 'Чита': [155, 153, 151, 149, 147, 251], 'Ярославль': [121, 119, 117, 115, 113, 182], 'Магас': [127, 125, 123, 121, 119, 194], 'Ижевск': [144, 142, 140, 138, 136, 229], 'Иркутск': [209, 207, 205, 203, 201, 362], 'Кемерово': [235, 233, 231, 229, 227, 415], 'Калининград': [156, 154, 152, 150, 148, 253], 'Хабаровск ': [112, 110, 108, 106, 104, 164], 'Красноярск ': [151, 149, 147, 145, 143, 243], 'Краснодар ': [98, 96, 94, 92, 90, 135], 'Самара ': [95, 93, 91, 89, 87, 129], 'Казань': [99, 97, 95, 93, 91, 137], 'Махачкала': [81, 79, 77, 75, 73, 100], 'Махачкала': [95, 93, 91, 89, 87, 129], 'Мурманск ': [107, 105, 103, 101, 99, 153], 'Магнитогорск ': [122, 120, 118, 116, 114, 184], 'Мин.воды ': [98, 96, 94, 92, 90, 135], 'Нальчик': [76, 74, 72, 70, 68, 90], 'Нижнекамск  (Набережные челны)': [99, 97, 95, 93, 91, 137], 'Новокузнецк ': [155, 153, 151, 149, 147, 251], 'Нов. Уренгой ': [165, 163, 161, 159, 157, 272], 'Владикавказ': [93, 91, 89, 87, 85, 125], 'Омск': [153, 151, 149, 147, 145, 247], 'Орск': [141, 139, 137, 135, 133, 223], 'Новосибирск': [141, 139, 137, 135, 133, 223], 'Пермь': [117, 115, 113, 111, 109, 174], 'Пенза': [96, 94, 92, 90, 88, 131], 'Петрп.-Камчат.': [172, 170, 168, 166, 164, 286], 'Оренбург ': [141, 139, 137, 135, 133, 223], 'Ростов-на-Дону ': [106, 104, 102, 100, 98, 151], 'Сыктывкар ': [137, 135, 133, 131, 129, 215], 'Сургут ': [146, 144, 142, 140, 138, 233], 'Симферополь': [119, 117, 115, 113, 111, 178], 'Саранск': [130, 128, 126, 124, 122, 200], 'Ставрополь': [106, 104, 102, 100, 98, 151], 'Екатеринбург ': [106, 104, 102, 100, 98, 151], 'Тюмень': [117, 115, 113, 111, 109, 174], 'Томск ': [159, 157, 155, 153, 151, 260], 'Ульяновск': [122, 120, 118, 116, 114, 184], 'Уфа': [129, 127, 125, 123, 121, 198], 'Южно-Сахал. ': [195, 193, 191, 189, 187, 333], 'Улан-Удэ': [265, 263, 261, 259, 257, 476], 'Волгоград ': [134, 132, 130, 128, 126, 209], 'Воронеж': [129, 127, 125, 123, 121, 198], 'Владивосток ': [112, 110, 108, 106, 104, 164]
}

const optionCities = []
let k = 0
for (let key in cities) {

    optionCities[k] = document.createElement('option')
    optionCities[k].setAttribute('value', key)
    optionCities[k].textContent = key
    listCities.append(optionCities[k])
    k++
}

console.log(optionCities)


let correctCalc = 0
let res
function Calc() {
    let tariff
    let minPayment = cities[String(dest.value)][0] * 25
    let terminalTreatment = +cargotype.value === 1 ? 13 : 21
    let stickerCost = 16
    let volWeigth = volume.value * 167
    let properWeight = volWeigth > weight.value ? volWeigth : weight.value
    let paperTariff = +cargotype.value === 1 ? 490 : 590

    if (isNaN(volume.value) || isNaN(weight.value) || isNaN(numOfUnits.value) || numOfUnits.vlaue == "" || weight.value == "" || volume.value == "") {
        alert("Введите корректные значения полей")
        correctCalc = 0
        return
    }
    else {
        correctCalc = 1
    }
    if (cargotype.value != 5) {
        if (properWeight <= 100) {
            tariff = cities[dest.value][0]
        }
        if (properWeight > 100 && properWeight <= 250) {
            tariff = cities[dest.value][1]
        }
        if (properWeight > 250 && properWeight <= 500) {
            tariff = cities[dest.value][2]
        }
        if (properWeight > 500 && properWeight <= 1000) {
            tariff = cities[dest.value][3]
        }
        if (properWeight > 1000) {
            tariff = cities[dest.value][4]
        }
    }
    else
        tariff = cities[dest.value][5]

    res = (tariff * properWeight + terminalTreatment * properWeight + numOfUnits.value * stickerCost + paperTariff) > minPayment ? (tariff * properWeight + terminalTreatment * properWeight + numOfUnits.value * stickerCost + paperTariff) : minPayment
}
btn.addEventListener('click', function() {
    Calc()
    if (document.getElementById('result')) {
        result.textContent = 'Cтоимость перевозки составит: ' + res + " рублей"
    }
    else {
        const result = document.createElement('span')
        result.textContent = 'Cтоимость перевозки составит: ' + res + " рублей"
        resultHolder.append(result)
        result.setAttribute('id', 'result')
        result.setAttribute('class', 'result')
    }
    console.log(result)
})

const serviceType = document.getElementById("servicetype")
const differentCiity = document.getElementById("differentCity")
const insideSpb = document.getElementById("insideSpb")
const packaging = document.getElementById("packaging")
insideSpb.setAttribute("style", "display: none")
packaging.setAttribute("style", "display: none")
serviceType.addEventListener("change", function () {
    switch (serviceType.value) {
        case '1': {
            differentCiity.removeAttribute("style")
            insideSpb.setAttribute("style", "display: none")
            packaging.setAttribute("style", "display: none")
            break;
        }

        case '2': {
            differentCiity.setAttribute("style", "display: none")
            insideSpb.removeAttribute("style")
            packaging.setAttribute("style", "display: none")
            break;
        }

        case '3': {
            differentCiity.setAttribute("style", "display: none")
            packaging.removeAttribute("style")
            insideSpb.setAttribute("style", "display: none")
            break
        }

        default:
            {
                alert("hui")
                break
            }
    }
})

const put = document.querySelector('.put')
const order = document.getElementById("order")

const surname = document.createElement("input")
const middleName = document.createElement("input")
const firstName = document.createElement("input")
const phoneNumber = document.createElement("input")

const fioTitle = document.createElement("div")
fioTitle.setAttribute("class", "fiotitle")

const divSurname = document.createElement("div")
const divMiddleName = document.createElement("div")
const divFirstName = document.createElement("div")
const divPhoneNumber = document.createElement("div")

fioTitle.textContent = "Заполните поля"
divSurname.textContent = "Фамилия"
divFirstName.textContent = "Имя"
divMiddleName.textContent = "Отчество"
divPhoneNumber.textContent = "Контактный номер телефона"

surname.setAttribute("name", "surname")
middleName.setAttribute("name", "middlename")
firstName.setAttribute("name", "firstname")
phoneNumber.setAttribute("name", "phonenumber")

surname.setAttribute("type", "text")
middleName.setAttribute("type", "text")
firstName.setAttribute("type", "text")
phoneNumber.setAttribute("type", "text")

order.append(fioTitle)
fioTitle.append(divSurname)
fioTitle.append(surname)
fioTitle.append(divFirstName)
fioTitle.append(firstName)
fioTitle.append(divMiddleName)
fioTitle.append(middleName)
fioTitle.append(divPhoneNumber)
fioTitle.append(phoneNumber)

fioTitle.setAttribute("style", "display:none")
divSurname.setAttribute("style", "display:none")
surname.setAttribute("style", "display:none")
divFirstName.setAttribute("style", "display:none")
firstName.setAttribute("style", "display:none")
divMiddleName.setAttribute("style", "display:none")
middleName.setAttribute("style", "display:none")
phoneNumber.setAttribute("style", "display:none")
divPhoneNumber.setAttribute("style", "display:none")
phoneNumber.value = 8

const orderBtn = document.getElementById("orderBtn")
const price = document.getElementById("calcRes")

orderBtn.addEventListener("click", function () {
    Calc()
console.log(res)

    if (isNaN(volume.value) || isNaN(weight.value) || isNaN(numOfUnits.value) || numOfUnits.vlaue == "" || weight.value == "" || volume.value == "") {
        alert("Введите корректные значения полей")
        correctCalc = 0
        return
    }
    else {
        correctCalc = 1
    }

    if (correctCalc == 1) {
        fioTitle.removeAttribute("style")
        divSurname.removeAttribute("style")
        surname.removeAttribute("style")
        divFirstName.removeAttribute("style")
        firstName.removeAttribute("style")
        divMiddleName.removeAttribute("style")
        middleName.removeAttribute("style")
        phoneNumber.removeAttribute("style")
        divPhoneNumber.removeAttribute("style")
        if (!isNaN(surname.value) || !isNaN(middleName.value) || !isNaN(firstName.value)) {
            alert("Введите корректные личные данные")
            return
        }
        else if(isNaN(phoneNumber.value) || phoneNumber.value.length < 11)
        {
            alert("Введите корректный номер телефона")
            return
        }
        else {
                price.value = res
                orderBtn.setAttribute("form", "order")
                alert("Ваш заказ успешно отправлен! Вскоре с Вами свяжется наш сотрудник")
                setTimeout(function () {
                    window.location.href = "./index.html"
                }, 100)
        }
    }
    else {
        alert("Введите корреткные значения полей")
        return
    }
}
)


//Вывод полей для заполнения длины ширины и высоты для каждого места
// const unitsBtn = document.getElementById("unitsBtn")
// const numOfUnits = document.getElementById("numberOfUnits")

// unitsBtn.addEventListener("click", function () {

// })

// let unitsHistory = []
// let len
// const units = []
// const unitLength = []
// const unitWidth = []
// const unitHeight = []
// numOfUnits.addEventListener("change", function () {
//     unitsHistory.push(+(numOfUnits.value))
//     len = unitsHistory.length

//     console.log(unitsHistory)
//     console.log(units)
//     if (len == 1) {
//         for (let i = 0; i < unitsHistory[len - 1]; i++) {
//             units[i] = document.createElement("div")
//             units[i].innerText = i + 1 + " место:"
//             units[i].setAttribute("id", i)
//             units[i].setAttribute("style", "font-style: italic ;margin-left: 30% ;padding:10px ;border-radius: 4px; width: 208px ;align-items:center;background-color: rgb(27, 44, " + 100 + Math.random() * 10 + ');')
//             unitLength[i] = document.createElement("input")
//             unitLength[i].setAttribute("placeholder", "Длина")
//             unitLength[i].setAttribute("name", i + 1 + "-th place length")
//             unitLength[i].setAttribute("class", "unitsInput")
//             unitWidth[i] = document.createElement("input")
//             unitWidth[i].setAttribute("placeholder", "Ширина")
//             unitWidth[i].setAttribute("name", i + 1 + "-th place width")
//             unitWidth[i].setAttribute("class", "unitsInput")
//             unitHeight[i] = document.createElement("input")
//             unitHeight[i].setAttribute("placeholder", "Высота")
//             unitHeight[i].setAttribute("name", i + 1 + "-th place height")
//             unitHeight[i].setAttribute("class", "unitsInput")

//             if (i == 0) {
//                 numOfUnits.after(units[i])
//                 units[i].append(unitLength[i])
//                 units[i].append(unitWidth[i])
//                 units[i].append(unitHeight[i])
//             }
//             else {
//                 units[i - 1].after(units[i])
//                 units[i].append(unitLength[i])
//                 units[i].append(unitWidth[i])
//                 units[i].append(unitHeight[i])
//             }
//         }
//     }
//     else {
//         if (document.getElementById(unitsHistory[len - 1] - 1)) {
//             for (let i = unitsHistory[len - 1] - 1; i < unitsHistory[len - 2]; i++) {
//                 units[i + 1].remove()
//                 unitHeight[i + 1].remove()
//                 unitLength[i + 1].remove()
//                 unitWidth[i + 1].remove()
//             }
//         }
//         else {
//             for (let i = unitsHistory[len - 2]; i < unitsHistory[len - 1]; i++) {
//                 units[i] = document.createElement("div")
//                 units[i].innerText = i + 1 + " место:"
//                 units[i].setAttribute("id", i)
//                 units[i].setAttribute("style", "font-style: italic ;margin-left: 30% ;padding:10px ;border-radius: 4px; width: 208px ;align-items:center;background-color: rgb(27, 44, " + 100 + Math.random() * 10 + ');')
//                 unitLength[i] = document.createElement("input")
//                 unitLength[i].setAttribute("placeholder", "Длина")
//                 unitLength[i].setAttribute("name", i + 1 + "-th place length")
//                 unitLength[i].setAttribute("class", "unitsInput")

//                 unitWidth[i] = document.createElement("input")
//                 unitWidth[i].setAttribute("placeholder", "Ширина")
//                 unitWidth[i].setAttribute("name", i + 1 + "-th place width")
//                 unitWidth[i].setAttribute("class", "unitsInput")

//                 unitHeight[i] = document.createElement("input")
//                 unitHeight[i].setAttribute("placeholder", "Высота")
//                 unitHeight[i].setAttribute("name", i + 1 + "-th place height")
//                 unitHeight[i].setAttribute("class", "unitsInput")

//                 units[i - 1].after(units[i])
//                 units[i].append(unitLength[i])
//                 units[i].append(unitWidth[i])
//                 units[i].append(unitHeight[i])
//             }
//         }
//     }
// })
