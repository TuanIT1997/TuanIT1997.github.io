document.getElementById("header").innerHTML = 
'<button class="bar-item button show-mobile" id="openMenu" onclick="showHideMenu(this,true)" style="display: block;"><i class="fas fa-bars"></i></button>'+
        '<div class="dropdown-hover show-mobile left" id="showHideMenu" style="display: none;">'+
            '<button class="button" onclick="showHideMenu(this,false)"><i class="fas fa-times"></i></button>'+
            '<div class="dropdown-content bar-block card-4 animate-left" style="display: block;">'+
                '<a class="button bar-item" href="../../index.html">Trang chủ</a>'+
                '<a class="button bar-item" href="#">Giới thiệu</a>'+
                '<a class="button bar-item" href="./page/shop/index.html" >Menu nước</a>'+
                '<a class="button bar-item" href="#">Hệ thống cửa hàng</a>'+
                '<a class="button bar-item" href="#">Nhượng quyền</a>'+
                '<a class="button bar-item" href="#">Tuyển dụng</a>'+
                '<a class="button bar-item" href="#">Liên hệ</a>'+
            '</div>'+
        '</div>'+
        '<a class="bar-item button "><img class="image" src="../../img/—Pngtree—coffee_3626459.png" alt="" style="height: 20px;transform: scale(1.5);"></a>'+
        '<a class="bar-item button hide-mobile" href="../../index.html">Trang chủ</a>'+
        '<a class="bar-item button hide-mobile">Giới thiệu</a>'+
        '<a class="bar-item button hide-mobile"  href="./page/shop/index.html" >Menu nước</a>'+
        '<a class="bar-item button hide-ipad">Hệ thống cửa hàng</a>'+
        '<a class="bar-item button hide-ipad">Nhượng quyền</a>'+
        '<a class="bar-item button hide-ipad">Tuyển dụng</a>'+
        '<a class="bar-item button hide-ipad">Liên hệ</a>'+
        '<div class="dropdown-hover hide-mobile show-ipad">'+
            '<button class="button">More &nbsp; <i class="fas fa-caret-down"></i></button>'+
            '<div class="dropdown-content bar-block card-4">'+
                '<a class="bar-item button" href="#">Hệ thống cửa hàng</a>'+
                '<a class="bar-item button" href="#">Nhượng quyền</a>'+
                '<a class="bar-item button" href="#">Tuyển dụng</a>'+
                '<a class="bar-item button" href="#">Liên hệ</a>'+
            '</div>'+
        '</div>'
function showHideMenu(event,exam){
    if(exam==true){
        event.style.display = "none";
        document.getElementById("showHideMenu").style.display = "block";
    } else{
        document.getElementById("showHideMenu").style.display = "none";
        document.getElementById("openMenu").style.display = "block";
    }
}