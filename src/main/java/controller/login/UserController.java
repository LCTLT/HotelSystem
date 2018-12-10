package controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*
 * 用户控制类
 */
@Controller
public class UserController {
	@RequestMapping("login")
	public String login() {
		return "login";
	}
}
