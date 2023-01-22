package com.Spacecoding.serviceImpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spacecoding.helper.UserFoundException;
import com.Spacecoding.model.User;
import com.Spacecoding.model.UserRole;
import com.Spacecoding.repository.RoleRepository;
import com.Spacecoding.repository.UserRepository;
import com.Spacecoding.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public User Createuser(User user, Set<UserRole> userRoleset) throws Exception {
	  	
		User local = this.userRepository.findByEmail(user.getEmail());
	
		if(local != null) {
			System.out.println("Email is already there ! ");
			throw new UserFoundException("This name user is Already there ??");
			
		}else {
			for(UserRole r : userRoleset) {
				this.roleRepository.save(r.getRole());
			}
			user.getUserRole().addAll(userRoleset);
			local = this.userRepository.save(user);
			System.out.println("User saved ... "+local);
		}
		
		return local;
	}

	@Override
	public User userName(String email) {
		
		return this.userRepository.findByEmail(email);
	}

}
