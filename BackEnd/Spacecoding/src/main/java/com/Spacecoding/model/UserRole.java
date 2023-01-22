package com.Spacecoding.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class UserRole {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long urid;
	
	@ManyToOne(fetch=FetchType.LAZY)
	private User user;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Role role;

	public UserRole() {
		
	}
	

	public UserRole(Long urid, User user, Role role) {
		super();
		this.urid = urid;
		this.user = user;
		this.role = role;
	}

	public Long getUrid() {
		return urid;
	}

	public void setUrid(Long urid) {
		this.urid = urid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	

}
