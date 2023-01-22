package com.Spacecoding.controller;



import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Spacecoding.model.Role;
import com.Spacecoding.model.User;
import com.Spacecoding.model.UserRole;
import com.Spacecoding.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/")
	public User addUser(@RequestBody User user) throws Exception{
		
		
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		Role role = new Role();
		role.setRolename("NORMAL");
		
		
		UserRole roles = new UserRole();
        roles.setUser(user);
        roles.setRole(role);
		
		Set<UserRole> userSet = new HashSet<>();
		userSet.add(roles);
		
				
		return this.userService.Createuser(user, userSet);
	}
	
	//get user from db
	@GetMapping("{username}")
	public User getUser(@PathVariable("username") String email) {
		
		return this.userService.userName(email);
		
	}
	
	
	

}
