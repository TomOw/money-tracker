package com.tomow.moneytracker.rest;

import com.tomow.moneytracker.domain.User;
import com.tomow.moneytracker.dto.UserDTO;
import com.tomow.moneytracker.repository.UserRepository;
import com.tomow.moneytracker.service.UserDTOService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {

    @Inject
    UserRepository userRepository;

    @Inject
    UserDTOService userDTOService;

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

    @RequestMapping(value = "/all")
    public ResponseEntity<List<UserDTO>> getUsers() {
        return new ResponseEntity<>(userDTOService.getUsers(), HttpStatus.OK);
    }
}
