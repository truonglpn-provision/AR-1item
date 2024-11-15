$(function () {
    // Ẩn modal khi DOM được tải
    $("#modalArea").hide();
  
    $(".title, .ar_container").css("display", "flex");
  
    $("#openModal").click(function () {
      $("#modalArea").fadeIn();
      $("html, body").css("overflow", "hidden");
  
      // Ẩn tiêu đề và hai nút khi modal mở
      $(".title, .ar_container").css("display", "none");
    });
  
    $("#closeModal , #modalBg").click(function () {
      $("#modalArea").fadeOut();
      $("html, body").css("overflow", "auto");
  
      // Hiển thị lại tiêu đề và hai nút khi modal đóng
      $(".title, .ar_container").css("display", "flex");
    });
  
  
  });
  
  document.addEventListener("DOMContentLoaded", function () {
      const elements = document.getElementsByClassName("ar_button_text");
      Array.from(elements).forEach(e => {
        e.addEventListener("click", function () {
          console.log()
          const modelViewer = document.getElementById("d3model");
          if (modelViewer && modelViewer.activateAR) {
            modelViewer.activateAR();
          } else {
            console.warn(
              "No AR Mode can be activated. This is probably due to missing configuration or device capabilities."
            );
          }
        });
      })
  });
  
  
  document.getElementById("d3model").addEventListener("dblclick", function () {
    if (!document.fullscreenElement) {
      this.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  });
  