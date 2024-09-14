package com.aditya.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aditya.fullstackbackend.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long>
{

}
