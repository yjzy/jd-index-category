window.onload = function() {
    searchEffect();
    timeBack();
    // bannerEffect();
}

// 顶部效果
function searchEffect() {
    var banner = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight;
    var search = document.querySelector(".jd_search");
    window.onscroll = function() {
        var offsetTop = document.body.scrollTop || document.documentElement.scrollTop;
        var opacity = 0;
        if (offsetTop < bannerHeight) {
            opacity = offsetTop / bannerHeight;
            search.style.backgroundColor = "rgba(233,35,34," + opacity + ")";
        }
    }
}


// 倒计时
function timeBack() {
    var spans = document.querySelector(".jd_sk_time").querySelectorAll("span");
    var time = 3700;
    var timeId = setInterval(function() {
        time--;
        if (time < 0) {
            clearInterval(timeId);
            return;
        }
        var hour = Math.floor(time / 3600);
        var minute = Math.floor(time % 3600 / 60);
        var second = time % 60;
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    }, 1000)
}



// 轮播图
// function bannerEffect() {
//     var banner = document.querySelector(".jd_banner");
//     var imgBox = banner.querySelector(".jd_bannerImg");
//     var first = imgBox.querySelector("li:first-of-type");
//     var last = imgBox.querySelector("li:last-of-type");
//     // 分别克隆第一张和最后一张加到imgBox相应位置
//     imgBox.appendChild(first.cloneNode(true));
//     imgBox.insertBefore(last.cloneNode(true), imgBox.firstChild);

//     // 获取所有li
//     var lis = imgBox.querySelectorAll("li");
//     // console.log(lis);
//     var count = lis.length;
//     var bannerWidth = banner.offsetWidth;
//     imgBox.style.width = count * bannerWidth + "px";
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].style.width = bannerWidth + "px";
//     }
//     var index = 1;
//     imgBox.style.left = -(index * bannerWidth) + "px";
//     setInterval(function() {
//         index++;
//         imgBox.style.left = -(index * bannerWidth) + "px";
//         imgBox.style.transition = "left 0.3s linear";
//         if (index == count - 1) {
//             setTimeout(function() {
//                 index = 1;
//                 imgBox.style.transition = "none";
//                 imgBox.style.left = -(index * bannerWidth) + "px";
//             }, 500)
//         }
//     }, 2000);

//     // 底部原点
//     var lis = querySelectorAll(".jd_bannerIndicator>li");
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].classList
//     }



//     // 手动轮播
//     var startX, moveX, distanceX;
//     imgBox.addEventListener("touchstart", function() {
//         // clearInterval(timeId);
//         startX = e.targetTouches[0].clientX;
//     });
//     imgBox.addEventListener("touchmove", function(e) {
//         moveX = e.targetTouches[0].clientX;
//         distanceX = moveX - startX;
//         imgBox.style.transition = "none";
//         imgBox.style.left = (-index * bannerWidth) + distanceX + "px";
//     });


//     imgBox.addEventListener("touchend", function() {
//         if (Math.abs(distanceX) > 100) {
//             if (distanceX > 0) {
//                 index--;
//             } else {
//                 index++;
//             }
//             imgBox.style.transition = "left 0.3s linear";
//             imgBox.style.left = -index * bannerWidth + "px";
//         } else if (Math.abs(distanceX) > 0) {
//             imgBox.style.transition = "left 0.3s linear";
//             imgBox.style.left = -index * bannerWidth + "px";
//         }
//         // startTime();
//     })

//     imgBox.addEventListener("webkitTransitionEnd", function() {
//         if (index == 0) {
//             index == count - 2;
//             imgBox.style.transition = "none";
//             imgBox.style.left = -index * bannerWidth + "px";
//         } else if (index == count - 1) {
//             index = 1;
//             imgBox.style.transition = "none";
//             imgBox.style.left = -index * bannerWidth + "px";
//         }
//     });
// }


// zepto轮播图
// 1.添加首尾两张图
// 2.重新设置土图片宽度以及外部banner宽度
// 3.开启定时器实现图片轮播
// 4.添加移动端滑动事件，实现手动轮播
// 5.添加过渡效果之后的监听