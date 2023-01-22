package com.Spacecoding.helper;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("Email is Already saved in the DB. ");
	}
	
	
	public UserFoundException(String msg) {
		super(msg);
	}
	

}
