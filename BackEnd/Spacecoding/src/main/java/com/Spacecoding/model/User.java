package com.Spacecoding.model;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
@Table(name = "user")
public class User implements UserDetails{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String fullname;
	@Column(unique=true)
	private String email;
	private int phone;
	private boolean enabled=true;
	private String password;
	private String gender;
	private String zipcode;
	
	@OneToMany(mappedBy = "user", fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<UserRole> userRole = new HashSet<>();
	
	public User() {
		
	}

    

	public User(Long id, String fullname, String email, int phone, String password,
			Set<UserRole> userRole,boolean enabled,String zipcode,String gender) {
		super();
		Id = id;
		this.fullname = fullname;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.userRole = userRole;
		this.enabled = enabled;
		this.zipcode = zipcode;
		this.gender = gender;
		
	}



	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<UserRole> getUserRole() {
		return userRole;
	}

	public void setUserRole(Set<UserRole> userRole) {
		this.userRole = userRole;
	}


	

//	User details Security 
	
	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getZipcode() {
		return zipcode;
	}



	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}



	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}



	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		Set<Authority> setAuth = new HashSet<>();
		
		this.userRole.forEach(userRole->{
			setAuth.add(new Authority(userRole.getRole().getRolename()));
		});
				
		return setAuth;
	}



	@Override
	public String getUsername() {
		
		return email;
	}



	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}



	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}



	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}



	@Override
	public boolean isEnabled() {
		
		return true;
	}
	
	

}
