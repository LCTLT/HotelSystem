package service.login;

import org.apache.ibatis.annotations.Param;

import pojo.User;

public interface UserService {
	public User loginInfo(@Param("phone")String phone,@Param("password")String password);
    public int loginUser(@Param("phone")String phone);
}
