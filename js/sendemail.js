	var name = "";
	var tel = "";
	var content = "";
		
	function send(){
		name = $("#name").val();
		tel = $("#tel").val();
		content = $("#content").val();
		var body = "姓名："+name+", 联系电话："+tel+", 咨询内容："+content;
		sendEmail(body);
	}
	
	function notify(message){
		if(message == 'OK'){
			alert("已经成功通知业务人员！业务人员会尽快和您联系，谢谢！");
			$("#name").val("");
			$("#tel").val("");
			$("#content").val("");
			$("#submit").attr("src","images/submit_button.png");
			
			$(".loading_submit").hide();
			
		}else{
			//alert("发送失败！");
			send();
		}
	}
	
	function sendEmail(body){
		$("#submit").attr("src","images/loading.gif");
		$(".loading_submit").show();
		Email.send({
			Host : "smtp.163.com",
			Username : "houzhanwu365@163.com",
			Password : "houzhanwu123",
			To : "1358850447@qq.com,755580740@qq.com",
			From : "houzhanwu365@163.com",
			Subject : "业务咨询",
			Body : body
		}).then(
			message => notify(message)
		);
	}
	

	
	function sendEmilForContectUs() {  
	  var form = document.getElementById("contact_form");  
	  var name = document.getElementsByName('contact_name')[0].value;  
	  var tel = document.getElementsByName('contact_tel')[0].value; 
	  var qq = document.getElementsByName('contact_qq')[0].value; 
	  var company = document.getElementsByName('contact_company')[0].value; 
	  var content = document.getElementsByName('contact_content')[0].value; 

	  var body = "姓名："+name+", 联系电话："
	  	+ tel +", QQ："+qq +", 公司名称："+company
	  	+", 咨询内容："+content;
	  sendEmail(body);
	}
	
	
	
	
	
	
	
	
	
	