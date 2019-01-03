package com.tomow.moneytracker.rest;

import com.tomow.moneytracker.domain.User;
import com.tomow.moneytracker.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {

    @Inject
    UserRepository userRepository;

    @RequestMapping(value = "/test")
    public ResponseEntity<User> test() {
        User user = new User();
        user.setName("painfoia");
        user.setBalance(23546345.12);
        user.setEarnings(12356.34);
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/get")
    public ResponseEntity<User> testGet() {
        User one = userRepository.getOne(1L);
        return new ResponseEntity<>(one, HttpStatus.OK);
    }
}
