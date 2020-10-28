var linkCatalog = document.querySelectorAll(".buy"); // Массив кнопок "купить"
var linkBookmark = document.querySelectorAll(".bookmark")
var popupCatalog = document.querySelector(".modal-buy"); // Всплывающее окно о добавлении в корзину
var close = popupCatalog.querySelector(".modal-close"); // Кнопка закрытия всплывающего окна
var addCart = document.querySelector(".basket-head"); // Корзина, нужно будет добавить класс
var amountBascet = document.querySelector(".amount-basket"); // span в корзине для коррекции числа
var amountBookmarks = document.querySelectorAll(".amount-Bookmarks");
var myVar = 0; // число которое будет прописывать в корзине



linkCatalog.forEach(function (item) { // Перебираем массив из кнопок купить
   	item.addEventListener("click", function (evt) { // Элементу массива задаёт прослушку на клик
		evt.preventDefault();
		popupCatalog.classList.add("modal-show"); // Тут показывает попап(всплывающее окно), у тебя он вроде по другому сделан, просто пропишу тут свой вывод попапа
		addCart.classList.add("header-basket-catalog"); // Добавляем класс в корзину
		myVar++; // Обновляем переменную
		amountBascet.textContent = myVar; // Меняем текст в span в корзине
	});
	close.addEventListener("click", function (evt) { // Закрытие попапа, пропиши свой
		evt.preventDefault();
		popupCatalog.classList.remove("modal-show");

	});
	window.addEventListener("keydown", function (evt) { // Закрытие на кнопку esc
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popupCatalog.classList.add("visually-hidden")) {
				popupCatalog.classList.remove("visually-hidden");
			}
		}
	});
});
  linkBookmark.forEach (function (item) {
  item.addEventListener("click", function (evt) {
  evt.preventDefault();
  myVar++; // Обновляем переменную
  amountBookmarks.textContent = myVar;
})});
