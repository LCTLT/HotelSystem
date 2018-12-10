package service.login.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.login.UserMapper;
import pojo.User;
import service.login.UserService;

@Service
public class UserSerivceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;

	public User loginInfo(String phone, String password) {
		return userMapper.loginInfo(phone, password);
	}
	
	

}
