var nav =
    `<nav>
        <div class="nav-top-bar">
            <div class="container-fluid bg-orange">
                <div class="container d-flex  justify-content-between ">
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
                            <a class="dropdown-item dropdown-item-language" href="member.html">會員中心</a>
                            <a class="dropdown-item dropdown-item-language" href="#">幫助中心</a>
                        </div>
                    </div>
                    
                        <a href="signup.html" class="btn text-white btn-hover" role="button" aria-pressed="true">註冊</a>
                        <span class="vertical-line"></span>
                        <a href="login.html" class="btn text-white btn-hover" role="button" aria-pressed="true">登入</a>

                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-white bottom-border">
            <div class="container">
                <a class="navbar-brand" href="index.html"><img src="img/layout/logo.svg" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <span class="vertical-line-3"></span>
                        <li class="nav-item header-nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-home" href="index.html">首頁</a>
                        </li>
                        <span class="vertical-line-2"></span>
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-about" href="">關於</a>
                        </li>
                        <span class="vertical-line-2"></span>
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-product" href="productlist.html">產品</a>
                        </li>
                        <span class="vertical-line-2"></span>
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-sale" href="#">優惠專區</a>
                        </li>
                        <span class="vertical-line-2"></span>
                        <li class="nav-item">
                            <a class="nav-link header-nav-link text-center nav-active-contact" href="#">聯絡我們</a>
                        </li>
                        <span class="vertical-line-2"></span>
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
                        <span class="vertical-line-2"></span>
                        <li class="nav-item-dropdown">
                            <div class="dropdown">
                                <button class="btn btn-cart " type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="img/layout/shopping-cart.svg" class="btn-car" alt="">
                                    <span class="badge badge-pill ">6</span>
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
        </nav>
       
    </nav>

    
    
    
    `


document.write(nav);