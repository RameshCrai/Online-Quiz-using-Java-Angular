package com.email.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.email.model.EmailRequest;
import com.email.service.EmailService;


@RestController
public class EmailController {

	@Autowired
	private EmailService emailService;
	
	@GetMapping("/wel")
	public String getEmail() {
		return "welcome to home";
	}
	
	@RequestMapping(value ="/sendemail", method=RequestMethod.POST)
	public ResponseEntity<?> sendEmail(@RequestBody EmailRequest Request)
	{
	 
	 System.out.println(Request);
	 
	 boolean email = this.emailService.sendEmail(Request.getSubject(), Request.getMessage(), Request.getTo());
	 
	 
	 if(email) {
		 
		 return ResponseEntity.ok("email send sccessfull");
		 
	 }else {
		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email send is false ");
	 }
	 		
	}
	
	

}
