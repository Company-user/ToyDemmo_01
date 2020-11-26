var nav =
    ` <div class="nav-top-bar">
            <div class="container-fluid bg-orange">
                <div class="container d-flex justify-content-between ">
                    <div class="dropdown dropdown-language">
                        <button class="btn btn-transparent dropdown-toggle text-white focus-btn language-btn"
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img src="img/layout/language.svg" alt="">
                            <span class="ml-2">中文</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-language" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item dropdown-item-language" href="#">中文</a>
                            <a class="dropdown-item dropdown-item-language" href="#">英文</a>
                        </div>
                    </div>

                    <div class="user-item">
                        <div class="dropdown dropdown-language">
                        <button class="btn btn-transparent dropdown-toggle text-white focus-btn language-btn"
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img src="img/layout/user.svg" alt="">
                        </button>
                        <div class="dropdown-menu dropdown-menu-language" aria-labelledby="dropdownMenuButton">
                            <a id="enterCenter" class="dropdown-item dropdown-item-language" href="member.html">會員中心</a>
                            <a class="dropdown-item dropdown-item-language" href="#">幫助中心</a>
                        </div>
                    
                        <a href="signup.html" class="btn text-white btn-hover" role="button" aria-pressed="true">註冊</a>
                        <span class="vertical-line"></span>
                        <a href="login.html" class="btn text-white btn-hover" role="button" aria-pressed="true">登入</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-white bottom-border p-0">
            <div class="container">
                <a class="navbar-brand" href="index.html"><img src="img/layout/logo.svg" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item header-nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-home" href="index.html">首頁</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-about" href="">關於</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-product" href="productlist.html">產品</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-sale" href="#">優惠專區</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-contact" href="#">聯絡我們</a>
                        </li>
                        
                        <li class="nav-item-2">
                            <div class="dropdown">
                                <button class="btn" type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="img/layout/search.svg" class="" alt="">
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <form class="form-inline my-2 align-middle my-lg-0">
                                        <input class="form-control search-bar mr-sm-2" type="search"
                                            placeholder="請輸入關鍵字" aria-label="Search">
                                        <button class="btn search-bar-btn my-2 my-sm-0" type="submit">搜尋</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        
                        <li class="nav-item-dropdown">
                            <div class="dropdown">
                                <button class="btn btn-cart " type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="img/layout/shopping-cart.svg" class="btn-car" alt="">
                                    <span class="badge badge-pill ">1</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-car">
                                    <h6 class="h6-text">最近加入的商品</h6>
                                    <div class="dropdown-divider"></div>
                                    <a href="product.html" class="d-flex">
                                     <div class="dropdown-item car-list-dropdown-item p-2"  type="button">
                                        <div class="d-flex">
                                            <div class="car-item-img mr-3">
                                                <img src="img/layout/car-item-1.jpg" class="car-list-item" alt="">
                                            </div>
                                            <div class="car-list-info ">
                                                <h5>玩具總動員方形收納箱...</h5>
                                                <h6>規格:小丑</h6>
                                                <h4>$1,200</h4>
                                            </div>
                                            <div class="trash">
                                                <a href="#"><i class="fas fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                   
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> `
        
    var footer = `
        <div class="container-fluid bg-orange">
            <div class="container">
                <ul class="d-flex justify-content-center align-items-center footer-menu">
                        <li class="footer-item"> 
                            <a href="" class="footer-link"> 關於SINGULAR </a>
                        </li>
                        <li class="footer-item">
                            <a href=""  class="footer-link">  用戶協議</a>
                        </li>
                        <li class="footer-item">
                            <a href=""  class="footer-link"> 隱私政策 </a>
                        </li>
                        <li class="footer-item">
                            <a href=""  class="footer-link"> 幫助中心</a>
                        </li>
                </ul>

            </div>
        </div>

        <div class="container-fluid py-4">
            <div class="container">
                <div class="row footer-contact">
                    <div class="col-md-4">
                        <div class="section-1  text-center">
                            <div class="logo mb-3">
                                <img src="img/layout/logo.svg" alt="">
                            </div>
                            <div class="subscribe">
                                <img src="img/layout/fb-icon.svg" class="mr-2" alt="">
                                <img src="img/layout/ig-icon.svg" alt="">
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 ">
                        <h6 class="title">
                            Singujar Co. Ltd
                        </h6>
                        <p class="info">（04637）首爾特別市中區漢江大路416號首爾廣場</br>
                            電話：+ 82-2-1599-0110</br>
                            傳真：+ 82-2-849-4962
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h6>客戶服務中心</h6>
                        <p>（04637）首爾特別市中區漢江大路416號首爾廣場</br>
                            電話：+ 82-2-1599-0110</br>
                            傳真：+ 82-2-849-4962
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="footer-line">
        <div class="copylight text-center py-3">
            copyright@2020
        </div> `

    
   var fixedicon = `<a href="#" class="talk-btn">
        <img src="img/layout/talk.svg" alt="">
    </a>

    <a href="#" class="top-btn">
        <img src="img/layout/top-icon.svg" alt="">
    </a>

    `


$(function () {
    //jq 起手式
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            // console.log('300超過+class')
        } else {
            btn.removeClass('show');
            // console.log('以內300removeclass')
        }
    });


    //jq點擊事件
    var btn = $('.top-btn');
    // console.log(btn);
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    $("#enterCenter").on("click",function(){
        localStorage.setItem("itemActive", 1);
    });
});
   

    

document.querySelector('.nav-layout').innerHTML=nav
document.querySelector('.footer').innerHTML=footer
document.querySelector('.fixed-btn').innerHTML=fixedicon
 


    
