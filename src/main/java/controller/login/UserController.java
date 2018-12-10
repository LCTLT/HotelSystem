package controller.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import pojo.User;
import service.login.UserService;

/*
 * �û�������
 */
@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("login")
	public String login() {
		String phone = "15211792615";
		String password = "123456";
		User user = userService.loginInfo(phone, password);
		if(user!=null) {
			System.out.println("��¼�ɹ�");
			return "index";
		}else {
			System.out.println("��¼ʧ��");
			return "login";
		}
	}
}
