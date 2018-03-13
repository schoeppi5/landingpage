function done()
{
	var url = $('.placeholder .entry-head input').val();
	var heading = $('.placeholder .entry-main input').val();
	var desc = $('.placeholder .entry-main textarea').val();
	
	$("#add").attr("src", url);
	
	$.when($('#add').on("load")).then(function()
	{
		if(heading && desc)
		{
			$.ajax({
				method: "POST",
				url: "/script/insertEntry.php",
				data: {cmd: "insert", content: [url, heading, desc]}
			}).done(function(data)
			{
				var json = $.parseJSON(data);
				if(json.code == 0)
				{
					location.reload();
				}
				else
				{
					console.log("An error occurred!");
				}
			});
		}
		else if(!heading)
		{
			$('.placeholder .entry-main input').css("background-color", "var(--txt-error)");
		}
		else if(!desc)
		{
			$('.placeholder .entry-main textarea').css("background-color", "var(--txt-error)");
		}
	});
}

function isURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return pattern.test(str);
}

$(document).ready(function()
{
	$(window).resize(function()
	{
		if($('.navi-drop-btn').css('display') == "none")
		{
			$('.navi-item').show();
		}
	});
	
	$('.navi-drop-btn').click(function()
	{
		$('.hamburger').toggleClass('is-active');
		$('.navi-item').slideToggle(200);
	});
	
	$('.placeholder .entry-head input').on("change", function()
	{
		$("#add").attr("src", $('.placeholder .entry-head input').val());
	});
	
	$('.delete').click(function()
	{
		var url = $(this).attr("id");
		$.ajax({
			method: "POST",
			url: "/script/insertEntry.php",
			data: {cmd: "delete", content: [url]}
		}).done(function(data)
		{
			var json = $.parseJSON(data);
			if(json.code == 0)
			{
				location.reload();
			}
			else
			{
				console.log("An error occurred!");
			}
		});
	});
});