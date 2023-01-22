package com.Spacecoding.service;

import java.util.Set;

import com.Spacecoding.model.User;
import com.Spacecoding.model.UserRole;

public interface UserService {
	
	public User Createuser(User user, Set<UserRole> userRoleset) throws Exception;
	
	public User userName(String email);

}
