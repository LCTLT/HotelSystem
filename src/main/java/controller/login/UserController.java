package controller.login;

import javax.servlet.http.HttpServletRequest;

import org.apache.catalina.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pojo.User;
import service.login.UserService;

/*
 * 用户控制类
 */
@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping("login")
	@ResponseBody
	public String login(@RequestParam("phone")String phone,@RequestParam("password")String password,HttpServletRequest request) {
		User user = userService.loginInfo(phone, password);
		if(user!=null) {
			 request.getSession().setAttribute("user",user);
			return "1";
		}else {
			return "2";
		}
	}
	@RequestMapping("loginUser")
	@ResponseBody
	public String loginUser(@RequestParam("phone")String phone) {
		int result = userService.loginUser(phone);
		if(result>0) {
			return "1";
		}else {
			return "2";	
		}
	}
}
