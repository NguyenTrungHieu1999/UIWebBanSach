$(document).ready(function(){
	i=1;
	$("#cong").click(function () {
        	if(i<100){
        		$("#qty").attr("value", i+=1);
		}
        });
	$("#tru").click(function(){
        	if(i!=1){
              		$("#qty").attr({"value": i-=1});
		}
	});
	$("#dangky").click(function () {
              	if($("#email").val()=="" || !$("#email").val().match('@'))
        		alert("Email không hợp lệ. Mời bạn nhập lại!");
              	else
                	alert("Đăng ký thành công!");
        });
        var j=document.getElementById("qty").value;
	$("#mua").click(function () {
              	$("#soluong").text(i);
        });
});		
