package com.Spacecoding.helper;

public class TitleFoundException extends Exception{

	public TitleFoundException() {
		super("This same type of title is alrady in server ");
	}
	
	public TitleFoundException(String mss) {
		super(mss);
	}

}
