$(document).ready(function()
{
	$('#home').addClass("active");
	
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
});