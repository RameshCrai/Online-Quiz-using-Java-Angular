package com.Spacecoding.controller;


import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Spacecoding.config.JwtUtils;
import com.Spacecoding.model.JwtRequest;
import com.Spacecoding.model.JwtResponse;
import com.Spacecoding.model.User;
import com.Spacecoding.serviceImpl.UserDetailsServiceImpl;



@RestController
@CrossOrigin("*")
public class AuthenticateController {
	
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	//generate token 
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception
	{
		
		try {
			
			authenticate(jwtRequest.getEmail(),jwtRequest.getPassword());
			
		}catch(UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User Not Found ??");
			
		}
		/// authenticate 		
		UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getEmail());
		String token = this.jwtUtils.generateToken(userDetails);
		
		System.out.println("this is token "+token);
		
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	private void authenticate(String username, String password) throws Exception {
		
		try {
			
			//auth
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		}catch(DisabledException e) {
			e.printStackTrace();
			throw new Exception("User Disable ");
		}catch(BadCredentialsException e) {
			throw new Exception("invalid Credentials "+e.getMessage());
			
		}
		
	}
	
	
	//return the details of current user 
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return ((User)this.userDetailsServiceImpl.loadUserByUsername(principal.getName()));
	}
	

}