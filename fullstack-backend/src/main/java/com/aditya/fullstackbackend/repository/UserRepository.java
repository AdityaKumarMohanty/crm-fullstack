package com.aditya.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aditya.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {



}
