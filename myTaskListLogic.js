function addToList() {
	var div = document.createElement('div');
	$(div).css({
		"width": "80%",
		"height": "30px",
		"margin": "10px 10% 10px 10%",
		"background-color": "green"
	});
	
	$("#taskList").append(div);
}

$("#add").click(addToList);