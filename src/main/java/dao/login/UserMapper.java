package dao.login;

import org.apache.ibatis.annotations.Param;

import pojo.User;

public interface UserMapper {
	
	//登录
	public User loginInfo(@Param("phone")String phone,@Param("password")String pwd);
	//验证账号是否存在
	public int loginUser(@Param("phone")String phone);
}
