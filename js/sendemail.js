function sendEmail(body){
	Email.send({
		Host : "smtp.163.com",
		Username : "houzhanwu365@163.com",
		Password : "houzhanwu123",
		To : "1358850447@qq.com,755580740@qq.com,1406958005@qq.com",
		From : "houzhanwu365@163.com",
		Subject : "工作室业务咨询",
		Body : body
	}).then(
		message => notify(message)
	);
}