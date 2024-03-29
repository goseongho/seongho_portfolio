
 // 팝업 열기 함수
 function showPopup(language) {
  // 모든 팝업 닫기
  closeAllPopups();
  let popup = document.getElementById("popup" + language);
  popup.style.display = "block";
}
// 팝업 닫기 함수
function closePopup(popupId) {
  let popup = document.getElementById(popupId);
  popup.style.display = "none";
}
// 모든 팝업 닫기 함수
function closeAllPopups() {
  let popups = document.querySelectorAll('.popup');
  popups.forEach(function (popup) {
    popup.style.display = "none";
  });
}