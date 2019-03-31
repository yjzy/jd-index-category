// 商品左侧
window.onload = function() {
    var left = document.querySelector(".ct_left");
    var ulBox = left.querySelector("ul:first-of-type");
    var leftHeight = left.offsetHeight;
    var ulBoxHeight = ulBox.offsetHeight;

    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var currentY = 0;

    // 静止状态下最大top值
    var maxTop = 0;
    var minTop = leftHeight - ulBoxHeight; //最小top值
    // 滑动状态下最大top值
    var maxBounceTop = maxTop + 100;
    var minBounceTop = minTop - 100; //最小top值

    ulBox.addEventListener("touchstart", function(e) {
        startY = e.targetTouches[0].clientY;
    });

    ulBox.addEventListener("touchmove", function(e) {
        moveY = e.targetTouches[0].clientY;
        distanceY = moveY - startY;

        if (currentY + distanceY > maxBounceTop || currentY + distanceY < minBounceTop) {
            // console.log("超出范围啦");
            return;
        }

        ulBox.style.transition = "none";
        ulBox.style.top = (currentY + distanceY) + "px";
    });

    ulBox.addEventListener("touchend", function(e) {
        if (currentY + distanceY < minTop) {
            currentY = minTop;
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = minTop + "px";
        } else if (currentY + distanceY > maxTop) {
            currentY = maxTop;
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = maxTop + "px";
        } else {
            currentY += distanceY;
        }
    });

    // 左侧点击事件
    var lis = ulBox.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
    }
    ulBox.addEventListener("click", function(e) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove("active");
        }
        e.target.parentNode.classList.add("active");


        var index = e.target.parentNode.index;
        var liHeight = e.target.parentNode.offsetHeight;
        if (-index * liHeight < minTop) {
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = minTop + "px";
            currentY = minTop;
        } else {
            ulBox.style.transition = "top 0.5s";
            ulBox.style.top = -index * liHeight + "px";
            currentY = -index * liHeight;
        }

    });
}