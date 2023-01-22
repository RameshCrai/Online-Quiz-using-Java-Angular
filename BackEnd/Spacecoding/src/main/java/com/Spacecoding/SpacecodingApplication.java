package com.Spacecoding;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Spacecoding.model.Role;
import com.Spacecoding.model.User;
import com.Spacecoding.model.UserRole;
import com.Spacecoding.service.UserService;

@SpringBootApplication
public class SpacecodingApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpacecodingApplication.class, args);
		
		System.out.println("Spacecoding program started ............");
	}
	
	@Autowired
	private UserService userService;

	@Override
	public void run(String... args) throws Exception {
//		
//		try {
//		
//     User u = new User();
//     u.setEmail("inv@gmail.com");
//     u.setFullname("sougat");
//     u.setPassword("123");
//     u.setPhone(983849);
//     
//     Role role = new Role();
//     role.setRolename("ADMIN");
//     
//     UserRole roles = new UserRole();
//     roles.setUser(u);
//     roles.setRole(role);
//     
//     Set<UserRole> userSet = new HashSet<>();
//     userSet.add(roles);
//     
//     this.userService.Createuser(u, userSet);
//     
//     System.out.println("user create successfully ...........");
//     
//		}catch (Exception e) {
//			e.printStackTrace();
//			System.out.println("User Added  failed ........");
//		}
//     
		
	}

}
