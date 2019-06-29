$(document).ready(function() {
	
	function win() {
			if (localStorage.getItem("status") === "win") {
			$("#btn").css("display","none");
			$("#btn2").css("display","none");
			if (confirm("Тест уже пройден. Пройти заново?")) {
				localStorage.removeItem("status");
				window.location.href = "main.html";
			}
		}
	}
	
	function allcheck() {
		var allchecked = 0;
		allchecked = $('input[type="radio"]:checked').length;
		if (allchecked == 4) {
			document.querySelector("#btn").removeAttribute("disabled");				
		}
		
		else if ((($("#titan").prop("checked"))||($("#fobos").prop("checked"))||($("#deimos").prop("checked")))&&(allchecked == 3)) {
			document.querySelector("#btn2").removeAttribute("disabled");	
		}
	}
	
	$("input[type='radio']").click(function() {
		allcheck();	
		win();	
	})
	
	$("input[type='checkbox']").click(function() {
		allcheck();
		win();		
	})

	$("#btn").click(function() {
		var que = $(".question").length;		
		var k = 0;			
		k += $('input[name="atom"]:eq(2):checked').length;
		k += $('input[name="bit"]:eq(1):checked').length;
		k += $('input[name="print"]:eq(0):checked').length;
		k += $('input[name="planeta"]:eq(0):checked').length;
		
		localStorage.setItem("question", que.toString());
		localStorage.setItem("temp", k.toString());
		
		window.location.href = "main2.html";		
	})	
	
	$("#btn2").click(function() {
		var que = $(".question").length;
		que += +localStorage.getItem("question");		
		var k = +localStorage.getItem("temp");
		var assessment = 0;
		
		localStorage.removeItem("question");
		localStorage.removeItem("temp");
		
		$("#btn2").css("display","none");
		
		if (!($("#titan").prop("checked"))&&($("#fobos").prop("checked"))&&($("#deimos").prop("checked"))) k++;		
		
		k += $('input[name="kilobyte"]:eq(2):checked').length;
		k += $('input[name="zvuk"]:eq(1):checked').length;
		k += $('input[name="izo"]:eq(2):checked').length;		
		
		if (k == 8) {	
			assessment = 5;
		}
		else if (k >= 6) {
			assessment = 4;
		}
		else if (k >= 4) {
			assessment = 3;
		}
		else {
			assessment = 2;
		}
		
		$("#show").html("Верных ответов: " + k + "<br>Результат: " + Math.round(k/que*100) + 
			"%<br><h4>Оценка: " + assessment + "</h4>");
		
		if (assessment) {
			localStorage.setItem("status", "win");
		}
		
		//document.querySelector("#btn2").setAttribute("disabled","disabled");		
		
	})	
})

