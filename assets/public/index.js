// function detectDevice() {
//     if (window.innerWidth <= 768) {
//         console.log("Thiết bị di động");
//     } else {
//         console.log("Máy tính để bàn");
//     }
// }

// window.onload = detectDevice;
// window.onresize = detectDevice;  // Kiểm tra lại khi kích thước thay đổi

window.onload = function() {
    const deviceType = detectDevice();
    
    handleDeviceDesktop(deviceType);

};


function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const width = window.innerWidth;

    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)) {
        if (width < 768) {
            return "Mobile";
        } else {
            return "Tablet";
        }
    } else {
        return "Desktop";
    }
}

function handleDeviceDesktop(deviceType) {
    notifyByDevice(deviceType);
    
}

function notifyByDevice(deviceType) {
    let notify = "Bạn đang sử dụng trên : ";
    let msgWarningOnDesktop = "! \nĐể có trải nghiệm tốt với Provision - AR ! Vui lòng sử dụng trên điện thoại"
    if (deviceType == "Desktop") {
        notify = notify + deviceType + msgWarningOnDesktop;
        alert(notify)
    }

    
}