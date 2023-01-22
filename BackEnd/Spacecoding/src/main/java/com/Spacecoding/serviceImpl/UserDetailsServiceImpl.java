package com.Spacecoding.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Spacecoding.model.User;
import com.Spacecoding.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		User user = this.userRepository.findByEmail(email);
		
		if(user == null) {
			System.out.println("Username Not Found ....??//");
			throw new UsernameNotFoundException("User not found ...");
			
		}
		
		return user;
	}

}
