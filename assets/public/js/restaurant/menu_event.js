document.addEventListener("DOMContentLoaded", function () {
    const menuWrapper = document.querySelector(".menu-wrapper");
    const menuItems = document.querySelectorAll(".menu-item");
    const openButton = document.querySelector(".menu-open-btn");
    const menuContent = document.querySelector(".menu");

    let startY = 0;

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuWrapper.classList.remove("visible");
        });
    });

    openButton.addEventListener("click", function () {
        if(menuWrapper.classList.contains("visible")){
            menuWrapper.classList.remove("visible");
            return;
        }
        menuWrapper.classList.add("visible");
    });

    menuWrapper.addEventListener("touchstart", function(e) {
        if (!menuContent.contains(e.target)) {
            startY = e.touches[0].clientY;
        }
    });

    menuWrapper.addEventListener("touchmove", function(e) {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;

        if (!menuContent.contains(e.target) && deltaY > 30 && menuWrapper.classList.contains("visible")) {
            menuWrapper.classList.remove("visible");
        }
    });
});