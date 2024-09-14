package com.aditya.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aditya.fullstackbackend.controller.ProductNotFoundException;
import com.aditya.fullstackbackend.model.Product;
import com.aditya.fullstackbackend.repository.ProductRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Add a new product
    @PostMapping("/product")
    public Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    // Get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get a product by ID
    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    // Update a product
    @PutMapping("/product/{id}")
    public Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setDescription(newProduct.getDescription());
                    product.setPrice(newProduct.getPrice());
                    return productRepository.save(product);
                }).orElseThrow(() -> new ProductNotFoundException(id));
    }

    // Delete a product
    @DeleteMapping("/product/{id}")
    public String deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product with the id " + id + " has been successfully deleted.";
    }
}
