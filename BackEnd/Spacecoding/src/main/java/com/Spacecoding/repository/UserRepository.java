package com.Spacecoding.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Spacecoding.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);

}
