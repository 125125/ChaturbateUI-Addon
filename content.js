$("body").append('<script>function speedtip(p){var t=$("#id_tip_message"),e=$(".tip_popup");for(x=1;x<p;x++)t.submit(),e.toggle();e.fadeOut()}function timer(t){var e=document.getElementById("chat_input"),n=$(".chat-form");e.value="/starttimer "+t,n.submit()}function stoptime(){var t=document.getElementById("chat_input"),e=$(".chat-form");t.value="/stoptimer",e.submit()}function clickevent(){var t=document.getElementById("chat_input"),e=$(".chat-form");$.each([":goaltipshowpp",":follow123",":SATISFIED",":rate59"],function(n,a){t.value=a,e.submit()})}</script>');
$("body").append('<div onclick="clickevent();" style="width:203px;height:42px;background:grey;color:#fff;line-height:42px;position:absolute;text-align:center;font-size:20px;border:1px solid #222;box-shadow:0 0 8px #000;top:21px;right:0;left:0;margin:auto;border-radius:5px;cursor:pointer;">Send Gifs</div>');
$("body").append('<div id="timerdiv" style="position:absolute;top: 86px;right:0;padding: 4px 5px;"></div>');
$("#timerdiv").append('<div onclick="timer(60);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">60 mins</div>');
$("#timerdiv").append('<div onclick="timer(30);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">30 mins</div>');
$("#timerdiv").append('<div onclick="timer(25);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">25 mins</div>');
$("#timerdiv").append('<div onclick="timer(20);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">20 mins</div>');
$("#timerdiv").append('<div onclick="timer(15);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">15 mins</div>');
$("#timerdiv").append('<div onclick="timer(10);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">10 mins</div>');
$("#timerdiv").append('<div onclick="timer(5);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">5 mins</div>');
$("#timerdiv").append('<div onclick="timer(4);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">4 mins</div>');
$("#timerdiv").append('<div onclick="timer(3);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">3 mins</div>');
$("#timerdiv").append('<div onclick="timer(2);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">2 mins</div>');
$("#timerdiv").append('<div onclick="timer(1);" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">1 mins</div>');
$("#timerdiv").append('<div onclick="stoptime();" style="cursor:pointer;background-color:grey;border-radius:5px;color: white;padding: 5px 10px;border: 1px solid #999;float: right;margin-left: 5px;">Stoptime</div>');
$("#id_tip_amount").after("<br><label>Loop Times:</label><input type='text' id='loop_amount' name='loop_amount' value='100' style='width:50px;'><br>");
$(".tip_popup form").after("<button onclick='speedtip($(\"#loop_amount\").val());' style='float:left;margin-top:10px;background:green;color:#fff;font-weight:bold;padding: 6px 56px;border:1px solid #b1b1b1;border-radius: 6px;'>Speedtip</button>");
$(".formborder").css({
  display:'table-cell',
  paddingBottom:'10px'
});
