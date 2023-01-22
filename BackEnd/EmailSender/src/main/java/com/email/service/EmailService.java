package com.email.service;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
public boolean sendEmail(String subject, String message, String to) {
		
		
		boolean f = false;
		
		String from = "testingweb98@gmail.com";
		
		//variable for gmail
		String host = "smtp.gmail.com";
		
		//get the system properties 
		Properties properties = System.getProperties();
		System.out.println("Properties "+properties);
		
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", "465");
		properties.put("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth", "true");
		
		
		//step 1 : to get the session object 
		Session session = 	Session.getInstance(properties, new Authenticator() {

			@Override
			protected PasswordAuthentication getPasswordAuthentication() {

				return new PasswordAuthentication("testingweb98@gmail.com", "lfbezcrypwbnukdn");
			}



		});
		
		session.setDebug(true);
		
		//step 2 : compose the message 
		MimeMessage m = new MimeMessage(session);
		
		//from email
		try {
			m.setFrom(from);
			
			m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			
			m.setSubject(subject);
			
			m.setText(message);
			
			//step 3: send the message using transport class
			
			Transport.send(m);
			
			System.out.println("sending success.....");
			
			f = true;
		}catch(Exception e) {
			e.printStackTrace();
			
		}
		return f;
		
	}


}
