package com.Spacecoding.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Role {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long rid;
	private String Rolename;
	
	@OneToMany(mappedBy = "role", fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<UserRole> userRole = new HashSet<>();
	
	
	public Role() {
		
	}
	
	public Role(Long rid, String rolename, Set<UserRole> userRole) {
		super();
		this.rid = rid;
		Rolename = rolename;
		this.userRole = userRole;
	}
	public Long getRid() {
		return rid;
	}
	public void setRid(Long rid) {
		this.rid = rid;
	}
	public String getRolename() {
		return Rolename;
	}
	public void setRolename(String rolename) {
		Rolename = rolename;
	}
	public Set<UserRole> getUserRole() {
		return userRole;
	}
	public void setUserRole(Set<UserRole> userRole) {
		this.userRole = userRole;
	}
	
	
	
	

}
