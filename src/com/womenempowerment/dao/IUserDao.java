package com.womenempowerment.dao;

import com.womenempowerment.model.User;

public interface IUserDao {
	User registerUser(User user);

	User login(String username, String password);

	User forgotPassword(User user);

}
