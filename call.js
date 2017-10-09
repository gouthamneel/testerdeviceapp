$('document').ready(function (){
  document.getElementById("btn").onclick = function ()
  {
		var c = document.getElementById("click");
		var country = c.options[c.selectedIndex].value;
		var d = document.getElementById("click1");
		var device = d.options[d.selectedIndex].value;
		var list = [];
		var dev_data = {
			desc: device,
			country: country
		}
		console.log(dev_data);
		$.ajax({
		url: "call.php",
		type: "post",
		data: dev_data,
		datatype: 'json',
		success: function(response){
			    console.log(response);
				var data = JSON.parse(response);
				if (data['error']) 
				{
                   showAndDismissAlert('danger', 'Sorry!! No Results Found');
                    
//                    $('document').ready(function () {
//                        $("#btn").click(function(){
//                            $("#myAlert").show('fade');
//                            
//                            setTimeout(function(){
//                                $("#myAlert").hide('fade'); }, 2000);
//                          
//                        });
//                            $("#linkClose").click(function(){
//                            $("#myAlert").hide('fade'); 
//                           
//                           });
//                        });                  
//                 	document.getElementById("demo").innerHTML = "Sorry!! No results found!!";
//    				document.getElementById("demo").style.color = "red";
//    				document.getElementById("demo").style.fontSize = "larger";
//    				$("#demo").fadeTo(2000, 500).slideUp(500, function(){
//					    $("#demo").slideUp(500);
//                   	});
                    
				} else {
					$('#dev-table').find('td').each(function(){
				 	$(this).parents('tr').remove();
				  });
					for (var i = 0; i < data.length; i++) {
								tr = $('<tr/>');
								tr.attr('id',data[i].ID);
								tr.append("<td>" + data[i].firstName + "</td>");
								tr.append("<td>" + data[i].count + "</td>");
								tr.append("<td>" + data[i].device + "</td>");
								console.log(tr);
								$('table').append(tr); 
							}
				        }
				  }  
		 });
	}
});
    