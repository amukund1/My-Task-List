function addToList() {
	if ($("#input").val() != "") {
		var div = document.createElement('div');
		$(div).html($("#input").val());
		$(div).css({
			"width": "90%",
			"height": "30px",
			"margin": "10px 5% 10px 5%",
			"background-color": "green",
			"color": "white",
			"font-size": "150%",
			"font-family": "sans-serif",
			"text-align": "center",
		});
	
		$("#taskList").append(div);
	}
}

$("#input").attr("maxlength", "35");
$("#add").click(addToList);