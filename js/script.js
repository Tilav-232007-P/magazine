let doc = document
// Начинаем
let wrap = doc.querySelector('.swiper-wrapper')
let phoners = [
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "9 790₽",
    price_do_skidki: "16 990₽",
    procent: "42%",
    neznayu: "2448₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/abf3288f-135b-4f1f-beb9-9ca82d7ed569.jpg",
    serdechko1: "sr1",
    srd: "srd1"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "6 990",
    price_do_skidki: "7 990₽",
    procent: "13%",
    neznayu: "1748₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/200x200.webp",
    serdechko1: "sr2",
    srd: "srd2"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "16 990₽",
    price_do_skidki: "18 990₽",
    procent: "11%",
    neznayu: "4248₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/65eff278-89ee-4d21-bbf6-3f4098bee943 (1).jpg",
    serdechko1: "sr3",
    srd: "srd3"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "3 290₽",
    price_do_skidki: "4 990₽",
    procent: "34%",
    neznayu: "823₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/200x200 (1).webp",
    serdechko1: "sr4",
    srd: "srd4"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "179 500₽",
    price_do_skidki: "345 000₽",
    procent: "48%",
    neznayu: "2448₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/767e4594-b352-484e-ad50-edcd9a220b47.jpg",
    serdechko1: "sr5",
    srd: "srd5"
  }
  ,
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "4 990₽",
    price_do_skidki: "5 400₽",
    procent: "9%",
    neznayu: "1248₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/a8b9200a-225c-4c15-b494-d7aad51aa86a.jpg",
    serdechko1: "sr6",
    srd: "srd6"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "9 790₽",
    price_do_skidki: "16 990₽",
    procent: "42%",
    neznayu: "2448₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/200x200.webp",
    serdechko1: "sr7",
    srd: "srd7"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "4 990₽",
    price_do_skidki: "5 400₽",
    procent: "9%",
    neznayu: "1248₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/767e4594-b352-484e-ad50-edcd9a220b47.jpg",
    serdechko1: "sr8",
    srd: "srd8"
  },
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "3 290₽",
    price_do_skidki: "16 990₽",
    procent: "62%",
    neznayu: "2648₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/a8b9200a-225c-4c15-b494-d7aad51aa86a.jpg",
    serdechko1: "sr9",
    srd: "srd9"
  }
  ,
  {
    id: Math.random(),
    serdechko: "❤",
    price_so_skidloy: "0₽",
    price_do_skidki: "100 000₽",
    procent: "100%",
    neznayu: "2448₽x4",
    split: "сплитом",
    zvezdi: "★",
    lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat sequi officiis nostrum. Possimus, aliquid soluta.",
    korzina: "В корзину",
    image: "./img/3386568448_w700_h500_erektsionnoe-vibrokoltso-i.webp",
    serdechko1: "sr10",
    srd: "srd10"
  }
]
function setup(phone1) {
  for (let it of phone1) {
    console.log(it.id);
    let swiper_slide = doc.createElement('div')
    swiper_slide.classList.add('swiper-slide')
    wrap.append(swiper_slide)
    // item
    let item = doc.createElement('div')
    item.classList.add('item')
    swiper_slide.append(item)
    // serdechko
    let serdechko1 = doc.createElement('span')
    serdechko1.classList.add("serdechko", it.serdechko1)
    // 2
    let serd2 = doc.createElement('span')
    serd2.classList.add(it.srd)
    serdechko1.append(serd2)
    // 
    let text_serd = doc.createTextNode(it.serdechko)
    serd2.append(text_serd)
    // 
    item.append(serdechko1)


    // img
    let image = doc.createElement('img')
    image.classList.add('image')
    image.setAttribute("src", it.image)
    item.append(image)


    // tseni
    let tseni = doc.createElement('div')
    tseni.classList.add('tseni')
    // 
    let p = doc.createElement('p')
    p.classList.add('p')
    let text_p = doc.createTextNode(it.price_so_skidloy)
    p.append(text_p)
    tseni.append(p)
    // 
    let span = doc.createElement('span')
    span.classList.add('span')
    let text_span = doc.createTextNode(it.price_do_skidki)
    span.append(text_span)
    tseni.append(span)
    // 
    let red_box = doc.createElement('div')
    red_box.classList.add("red_box")
    let red_box_text = doc.createTextNode(it.procent)
    red_box.append(red_box_text)
    tseni.append(red_box)


    // block
    let block = doc.createElement('div')
    block.classList.add('block')
    let p2 = doc.createElement('p')
    p2.classList.add('p2')
    let text_p2 = doc.createTextNode(it.neznayu)
    p2.append(text_p2)
    let span2 = doc.createElement('span')
    span2.classList.add('span2')
    let text_span2 = doc.createTextNode(it.split)
    span2.append(text_span2)
    block.append(p2)
    block.append(span2)


    // rating
    let rating1 = doc.createElement('div')
    rating1.classList.add('rating')
    rating1.setAttribute("data-total-value", "3")
    // 1
    let text_zvezda1 = doc.createTextNode(it.zvezdi)
    let zvezda1 = doc.createElement('span')
    zvezda1.classList.add("zvezda", "zd5")
    zvezda1.append(text_zvezda1)
    zvezda1.setAttribute("data-item-value", "5")
    // 2
    let text_zvezda2 = doc.createTextNode(it.zvezdi)
    let zvezda2 = doc.createElement('span')
    zvezda2.classList.add("zvezda", "zd4")
    zvezda2.append(text_zvezda2)
    zvezda2.setAttribute("data-item-value", "4")
    // 3
    let zvezda3 = doc.createElement('span')
    let text_zvezda3 = doc.createTextNode(it.zvezdi)
    zvezda3.classList.add("zvezda", "zd3")
    zvezda3.setAttribute("data-item-value", "3")
    zvezda3.append(text_zvezda3)
    // 4
    let text_zvezda4 = doc.createTextNode(it.zvezdi)
    let zvezda4 = doc.createElement('span')
    zvezda4.classList.add("zvezda", "zd2")
    zvezda4.setAttribute("data-item-value", "2")
    zvezda4.append(text_zvezda4)
    // 5
    let text_zvezda5 = doc.createTextNode(it.zvezdi)
    let zvezda5 = doc.createElement('span')
    zvezda5.classList.add("zvezda", "zd1")
    zvezda5.setAttribute("data-item-value", "1")
    zvezda5.append(text_zvezda5)
    // 
    rating1.append(zvezda1)
    rating1.append(zvezda2)
    rating1.append(zvezda3)
    rating1.append(zvezda4)
    rating1.append(zvezda5)


    // lorem
    let lorem = doc.createElement('p')
    lorem.classList.add('lorem')
    let text_lorem = doc.createTextNode(it.lorem)
    lorem.append(text_lorem)


    // btn
    let btn = doc.createElement('button')
    btn.classList.add('btn')
    let text_btn = doc.createTextNode(it.korzina)
    btn.append(text_btn)
    // 
    item.append(tseni)
    item.append(block)
    item.append(rating1)
    item.append(lorem)
    item.append(btn)
  }
}
setup(phoners)


// 
let rating = doc.querySelector('.rating')
let zd5 = doc.querySelector('.zd5').onclick = () => {
  rating.setAttribute('data-total-value', "5")
}
let zd4 = doc.querySelector('.zd4').onclick = () => {
  rating.setAttribute('data-total-value', "4")
}
let zd3 = doc.querySelector('.zd3').onclick = () => {
  rating.setAttribute('data-total-value', "3")
}
let zd2 = doc.querySelector('.zd2').onclick = () => {
  rating.setAttribute('data-total-value', "2")
}
let zd1 = doc.querySelector('.zd1').onclick = () => {
  rating.setAttribute('data-total-value', "1")
}
// Сердечко 💔
let header = doc.querySelector('header')
let header_chta = doc.querySelector('.header_chta')
let pip = doc.querySelector('#p')
let pip2 = doc.querySelector('#p2')
let pip3 = doc.querySelector('#p3')
let pip4 = doc.querySelector('#p4')
let pip5 = doc.querySelector('#p5')
let pip6 = doc.querySelector('#p6')
let pip7 = doc.querySelector('#p7')
let pip8 = doc.querySelector('#p8')
let pip9 = doc.querySelector('#p9')
let pip10= doc.querySelector('#p10')
let i = 0
header_chta.innerHTML = `${i}`
let headebr = doc.querySelector('header')
let sr1 = doc.querySelector(".sr1").addEventListener('click', serd1)
let sr2 = doc.querySelector(".sr2").addEventListener('click', serd2)
let sr3 = doc.querySelector(".sr3").addEventListener('click', serd3)
let sr4 = doc.querySelector(".sr4").addEventListener('click', serd4)
let sr5 = doc.querySelector(".sr5").addEventListener('click', serd5)
let sr6 = doc.querySelector(".sr6").addEventListener('click', serd6)
let sr7 = doc.querySelector(".sr7").addEventListener('click', serd7)
let sr8 = doc.querySelector(".sr8").addEventListener('click', serd8)
let sr9 = doc.querySelector(".sr9").addEventListener('click', serd9)
let sr10 = doc.querySelector(".sr10").addEventListener('click', serd10)
function serd1() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    headebr.classList.add('syebis')
    pip.classList.toggle("b1")
    if (pip.className == 'b1') {
      i = i + 1
    }else if (i < 0){
      i = 0
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd1")
}
function serd2() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip2.classList.toggle("b2")
    headebr.classList.add('syebis')
    if (pip2.className == 'b2') {
      i = i + 1
    }else if (i < 0){
      i = 0
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd2")
}
function serd3() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip3.classList.toggle("b3")
    headebr.classList.add('syebis')
    if (pip3.className == 'b3') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd3")
}
function serd4() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip4.classList.toggle("b4")
    headebr.classList.add('syebis')
    if (pip4.className == 'b4') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd4")
}
function serd5() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip5.classList.toggle("b5")
    headebr.classList.add('syebis')
    if (pip5.className == 'b5') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd5")
}
function serd6() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip6.classList.toggle("b6")
    headebr.classList.add('syebis')
    if (pip6.className == 'b6') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd6")
}
function serd7() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip7.classList.toggle("b7")
    headebr.classList.add('syebis')
    if (pip7.className == 'b7') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd7")
}
function serd8() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip8.classList.toggle("b8")
    headebr.classList.add('syebis')
    if (pip8.className == 'b8') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd8")
}
function serd9() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip9.classList.toggle("b9")
    headebr.classList.add('syebis')
    if (pip9.className == 'b9') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd9")
}
function serd10() {
  function srd(srdp) {
    let srd = doc.querySelector(srdp)
    srd.classList.toggle('serdechko_click')
    srd.classList.add('font1')
    pip10.classList.toggle("b10")
    headebr.classList.add('syebis')
    if (pip10.className == 'b10') {
      i = i + 1
    }else {
      i = i - 1
    }
    header_chta.innerHTML = `${i}`
    setTimeout(() => {
      srd.classList.remove('font1')
    }, 300)
    if (i == 0) {
      headebr.classList.remove('syebis')
    }
  }
  srd(".srd10")
}
let besh = 5
if (document.body.offsetWidth <= 1180) {
  besh = 3
}
if (document.body.offsetWidth <= 650) {
  besh = 2
}
if (document.body.offsetWidth <= 450) {
  besh = 1
}
let swiper = new Swiper(".mySwiper", {
  slidesPerView: besh,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
});