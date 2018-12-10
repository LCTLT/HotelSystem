package dao.login;

import org.apache.ibatis.annotations.Param;

import pojo.User;

public interface UserMapper {
	
	//µÇÂ¼
	public User loginInfo(@Param("phone")String phone,@Param("password")String pwd);
	

}
