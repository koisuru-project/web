window.addEventListener("message", function (event) {
    if (!event.origin.startsWith("https://panel.naoti.me")) {
        return;
    }
    const data = JSON.parse(event.data);
    const iframe = document.getElementById("naotimes-project");
    if (data.action === "resize") {
        iframe.height = data.height;
        iframe.width = "100%";
        iframe.scrolling = "no";
        iframe.style.opacity = "1";
        iframe.frameBorder = "0"
        iframe.style.overflowY = "hidden";
    }
}, false);