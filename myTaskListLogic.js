function addToList() {
	if ($("#input").val() != "") {
		var div = document.createElement('div');
		$(div).html($("#input").val());
		$(div).css({
			"width": "80%",
			"height": "30px",
			"margin": "10px 10% 10px 10%",
			"background-color": "green",
			"color": "white",
			"font-size": "150%",
			"font-family": "sans-serif",
			"text-align": "center"
		});
	
		$("#taskList").append(div);
	}
}

$("#add").click(addToList);