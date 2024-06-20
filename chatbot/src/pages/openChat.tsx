function openChat() {
    const popupURL = "/chat";
    // 팝업 창의 속성
    const popupProperties = "width=450,height=719,scrollbars=yes";
    // 팝업 열기
    window.open(popupURL, "Popup", popupProperties);
}

export default openChat;