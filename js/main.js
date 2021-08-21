$(document).ready(function () {
	var currentFloor = 2; //переменная где хранится текущий этаж
	var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
	var flatsPath = $(".flats path"); //каждая отдельная квартира в SVG
	var counterUp = $(".counter-up"); /*кнопка увеличения этажа */
	var counterDown = $(".counter-down"); /*кнопка уменьшения этажа */
	var modal =$(".modal");
	var modalCloseButton =$(".modal-close-button");
	var viewFlatsButton =$(".view-flats");
	//функция при наведении мышью на этаж
	floorPath.on('mouseover', function(){
		floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
		currentFloor = $(this).attr('data-floor'); //получаем значение текущего этажа
		$(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
	});
	//функция при наведении мышью на квартиру
	flatsPath.on('mouseover', function(){
		flatsPath.removeClass('flat-link'); //удаляем активный класс у квартир
		flatsPath.addClass('flat-link-current'); //добавляем класс квартирам
	});
	floorPath.on("click", toggleModal); //при клике на этаж вызвать окно
	modalCloseButton.on("click", toggleModal); //клик на кнопку закрыть убирает окно
	viewFlatsButton.on("click", toggleModal);
	counterUp.on("click",function(){ //отслеживаем клик по кнопке вверх
		if(currentFloor < 18){ //проверяем значение этажа, не должно быть больше 18
			currentFloor++; //прибавляем 1 этаж
			//форматируем переменную с этажом, чтобы было 01, а не 1
			usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false}); 
			$(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
			floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
			$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечивем текущий этаж
		}
	});
	counterDown.on("click",function(){ //отслеживаем клик по кнопке вниз
		if(currentFloor > 2){ //проверяем значение этажа, не должно быть меньше 2
			currentFloor--; //отнимаем 1 этаж
			//форматируем переменную с этажом, чтобы было 01, а не 1
			usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false});
			$(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
			floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
			$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечивем текущий этаж
		}
	});
	function toggleModal() { //ф-я открыть/закрыть окно
		modal.toggleClass("is-open");
	}
});