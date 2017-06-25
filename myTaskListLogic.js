var taskCount = 0;

$("#input").attr("maxlength", "35");

$("#add").click(addToList);

function addToList() {
	if ($("#input").val() != "") {
		var task = document.createElement('div');
		$(task).html($("#input").val());
		$(task).css({
			"width": "95%",
			"height": "30px",
			"margin": "10px 0% 10px 2%",
			"background-color": "green",
			"color": "white",
			"font-size": "150%",
			"font-family": "sans-serif",
			"text-align": "center"
		});
		
		var del = document.createElement('button');
		$(del).html("Del");
		$(del).css({
			"width": "10%",
			"min-width": "34px",
			"height": "30px",
			"float": "right"
		});
		
		$(task).append(del);
		$("#taskList").append(task);
		
		$("#input").val(""); 
		
		if (++taskCount > 1) {
			var curHeight = $("#taskList").css("#height");
			$("#taskList").css({
				"height": curHeight + 50
			});
		}

		$(del).click(function() {
			task.remove();
			taskCount--;
		});
	}
}
