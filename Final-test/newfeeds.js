let header = document.getElementById("header")
let mobileMenu = document.getElementById("mobile-menu-btn")
let currentHeight = header.clientHeight
mobileMenu.onclick = function () {
  let isclosed = header.clientHeight === currentHeight
  if (isclosed) {
    header.style.height = "auto"
  } else {
    header.style.height = null
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



const laptopGaming = [
  {
    id: 'laptop_gaming_1',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopGaming/IMG1.jfif",
    model: "Asus TUF",
    Cpu: "i5-10300H",
    Gpu: "GTX 1650Ti 4GB + UHD Graphics 630",
    RAM: "8GB RAM",
    Storage: "512GB SSD",
    Display: "15.6 FHD 144Hz",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "21.290.000 vnđ",
    oldprice: "22.900.000 vnđ"
  },
  {
    id: 'laptop_gaming_2',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopGaming/IMG2.jfif",
    model: "Acer Nitro",
    Cpu: "i5-10300H",
    Gpu: "GTX 1650Ti 4GB + UHD Graphics 630",
    RAM: "8GB RAM",
    Storage: "512GB SSD",
    Display: "15.6 FHD 144Hz",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    OS: "Win 10",
    price: "19.490.000 vnđ",
    oldprice: "23.900.000 vnđ"
  },
  {
    id: 'laptop_gaming_3',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopGaming/IMG3.jfif",
    model: "Lenovo Legion Khiem",
    Cpu: "R7-4800H",
    Gpu: "GTX 1660Ti 6GB + AMD Radeon Graphics",
    RAM: "16GB RAM",
    Storage: "512GB SSD",
    Display: "15.6 FHD 144Hz",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "29.290.000 vnđ",
    oldprice: "31.790.000 vnđ"
  },
  {
    id: 'laptop_gaming_4',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopGaming/IMG4.jfif",
    model: "Dell G5",
    Cpu: "i7-10750H",
    Gpu: "GTX 1650Ti 4GB + UHD Graphics 630",
    RAM: "8GB RAM",
    Storage: "256GB SSD",
    Display: "15.6 FHD 120Hz",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "24.990.000 vnđ",
    oldprice: "26.890.000 vnđ"
  },
  {
    id: 'laptop_gaming_5',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopGaming/IMG5.jfif",
    model: "Lenovo legion 5",
    Cpu: "i7-10750H",
    Gpu: "GTX 1650Ti 4GB + UHD Graphics 630 ",
    RAM: "8GB RAM",
    Storage: "256GB SSD",
    Display: "15.6 FHD 120Hz",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "25.290.000 vnđ",
    oldprice: "27.490.000 vnđ"
  }
]

function createDomGaming() {
  window.localStorage.setItem('laptop_gaming', JSON.stringify(laptopGaming));
  let lapTop = ""
  for (let i = 0; i < laptopGaming.length; i++) {
    lapTop +=
      `
    <div class = "sub_product">
    <div class ="imagine" >
        <img src=${laptopGaming[i].image} alt="">
    </div>
    <div class = "decription">
        <a href="${laptopGaming[i].link}#${laptopGaming[i].id}" target="_blank">
        ${laptopGaming[i].model} : ${laptopGaming[i].Cpu} | ${laptopGaming[i].RAM} | ${laptopGaming[i].Storage} | ${laptopGaming[i].Gpu} | ${laptopGaming[i].Display} | ${laptopGaming[i].OS}    
        </a> 
      <div class = "pricebox">
            <p class="price">${laptopGaming[i].price}</p>
            <p class="oldprice">${laptopGaming[i].oldprice}</p>
    </div>
    </div> 
    </div>
    `
  }
  document.getElementsByClassName("product")[0].innerHTML = lapTop
}

createDomGaming();




const laptopVanphong = [
  {
    id: 'laptop_vanphong_1',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopVanPhong/img1.jpg",
    model: "Dell Latitude E530",
    Cpu: "i5-3230M",
    Gpu: "HD Graphics 630",
    RAM: "4GB RAM",
    Storage: "320GB HDD",
    Display: "15.6 HD",
    OS: "Win 10 pro",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "4.490.000 vnđ",
    oldprice: "4.790.000 vnđ"
  },
  {
    id: 'laptop_vanphong_2',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopVanPhong/img2.jpg",
    model: "Dell Vostro V3558",
    Cpu: "i3-5005U",
    Gpu: "HD Graphics 5500",
    RAM: "4GB RAM",
    Storage: "320GB HDD",
    Display: "15.6 HD ",
    OS: "Win 10 pro",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "4.900.000 vnđ",
    oldprice: "5.390.000 vnđ"
  },
  {
    id: 'laptop_vanphong_3',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopVanPhong/img3.png",
    model: "HP Probook 430 G3",
    Cpu: "i3-6100U",
    Gpu: "HD Graphics 520",
    RAM: "4GB RAM",
    Storage: "120GB SSD",
    Display: "13.3 HD ",
    OS: "Win 10 pro",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "5.990.000 vnđ",
    oldprice: "6.400.000 vnđ"
  },
  {
    id: 'laptop_vanphong_4',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopVanPhong/img4.png",
    model: "HP Probook 450 G1",
    Cpu: "i5-4200M",
    Gpu: "HD Graphics 4600",
    RAM: "4GB RAM",
    Storage: "320GB HDD",
    Display: "13.3 HD",
    OS: "Win 10 pro",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "6.390.000 vnđ",
    oldprice: "6.690.000 vnđ"
  },
  {
    id: 'laptop_vanphong_5',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopVanPhong/img5.png",
    model: "Dell Latitude E6440",
    Cpu: "i5-4300M",
    Gpu: "HD Graphics 4600 ",
    RAM: "4GB RAM",
    Storage: "320GB HDD",
    Display: "14 FHD",
    OS: "Win 10 pro",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "6.590.000 vnđ",
    oldprice: "6.090.000 vnđ"
  }
]

function createDomVanphong() {
  window.localStorage.setItem('laptop_vanphong', JSON.stringify(laptopVanphong));
  let lapTop = ""
  for (let i = 0; i < laptopVanphong.length; i++) {
    lapTop +=
      `
    <div class = "sub_product">
    <div class ="imagine" >
        <img src=${laptopVanphong[i].image} alt="">
    </div>
    <div class = "decription">
        <a href="${laptopVanphong[i].link}#${laptopVanphong[i].id}" target="_blank">
        ${laptopVanphong[i].model} : ${laptopVanphong[i].Cpu} | ${laptopVanphong[i].RAM} | ${laptopVanphong[i].Storage} | ${laptopVanphong[i].Gpu} | ${laptopVanphong[i].Display} | ${laptopVanphong[i].OS}    
        </a> 
      <div class = "pricebox">
            <p class="price">${laptopVanphong[i].price}</p>
            <p class="oldprice">${laptopVanphong[i].oldprice}</p>
    </div>
    </div> 
    </div>
    `
  }
  document.getElementsByClassName("product1")[0].innerHTML = lapTop
}

createDomVanphong();


const laptopDohoa = [
  {
    id: 'laptop_dohoa_1',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopDohoa/Img1.jpg",
    model: "Lenovo IdeaPad Gaming 3 15ARH05 (82EY00C3VN)",
    Cpu: "R5-4600H",
    Gpu: "GTX 1650 4GB + AMD Radeon Graphics",
    RAM: "8GB RAM",
    Storage: "256GB SSD",
    Display: "15.6 FHD IPS",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "16.690.000 vnđ",
    oldprice: ""
  },
  {
    id: 'laptop_dohoa_2',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopDohoa/Img2.png",
    model: "Lenovo IdeaPad Gaming 3 15ARH05 (82EY00C3VN)",
    Cpu: "R5-4600H",
    Gpu: "GTX 1650 4GB + AMD Radeon Graphics",
    RAM: "8GB RAM",
    Storage: "256GB SSD",
    Display: "15.6 FHD IPS",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "17.990.000 vnđ",
    oldprice: ""
  },
  {
    id: 'laptop_dohoa_3',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopDohoa/Img3.png",
    model: "HP Pavilion Gaming 15-ec1054AX 1N1H6PA",
    Cpu: "R5-4600H",
    Gpu: "GTX 1650 4GB + AMD Radeon Graphics",
    RAM: "8GB RAM",
    Storage: "128GB SSD + 1TB HDD",
    Display: "15.6 FHD 144Hz",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "19.990.000 vnđ",
    oldprice: ""
  },
  {
    id: 'laptop_dohoa_4',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopDohoa/Img4.jpg",
    model: "Lenovo IdeaPad Gaming 3 15ARH05 (82EY005VVN)",
    Cpu: "R5-4600H",
    Gpu: "GTX 1650 4GB + AMD Radeon Graphics",
    RAM: "8GB RAM",
    Storage: "512GB SSD",
    Display: "15.6 FHD IPS",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "17.790.000 vnđ",
    oldprice: ""
  },
  {
    id: 'laptop_dohoa_5',
    link: "/C4EJS-master/Final-test/detail.html",
    image: "/C4EJS-master/Final-test/asset/LaptopDohoa/Img5.jpg",
    model: "Dell Inspiron 5490-FMKJV11",
    Cpu: "i5-10210u",
    Gpu: "NVIDIA geforce MX230 ",
    RAM: "8GB RAM",
    Storage: "512GB SSD",
    Display: "14.0 FHD",
    OS: "Win 10",
    communicate: "Four USB 3.1 Gen 1 (one Always On), one USB 3.1 Type-C Gen 1 (with the function of DisplayPort 1.2), HDMI 2.0, Ethernet (RJ-45), headphone / microphone combo jack, security keyhole, AC power adapter jack",
    price: "19.990.000 vnđ",
    oldprice: ""
  }
]

function createDomDohoa() {
  window.localStorage.setItem('laptop_vanphong', JSON.stringify(laptop_Dohoa));
  let lapTop = ""
  for (let i = 0; i < laptopDohoa.length; i++) {
    lapTop +=
      `
    <div class = "sub_product">
    <div class ="imagine" >
        <img src=${laptopDohoa[i].image} alt="">
    </div>
    <div class = "decription">
        <a href="${laptopDohoa[i].link}#${laptopDohoa[i].id}" target="_blank">
        ${laptopDohoa[i].model} : ${laptopDohoa[i].Cpu} | ${laptopDohoa[i].RAM} | ${laptopDohoa[i].Storage} | ${laptopDohoa[i].Gpu} | ${laptopDohoa[i].Display} | ${laptopDohoa[i].OS}    
        </a> 
      <div class = "pricebox">
            <p class="price">${laptopDohoa[i].price}</p>
            <p class="oldprice">${laptopDohoa[i].oldprice}</p>
    </div>
    </div> 
    </div>
    `
  }
  document.getElementsByClassName("product2")[0].innerHTML = lapTop
}

createDomDohoa();