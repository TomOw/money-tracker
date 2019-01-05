package com.tomow.moneytracker.service;

import com.tomow.moneytracker.domain.User;
import com.tomow.moneytracker.dto.UserDTO;
import com.tomow.moneytracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserDTOService {

	@Inject
	UserRepository userRepository;

	private UserDTO toDTO(User user) {
		UserDTO dto = new UserDTO();
		dto.id = user.getId();
		dto.name = user.getName();
		dto.initials = user.getInitials();
		dto.earnings = user.getEarnings();
		dto.balance = user.getBalance();

		return dto;
	}

	public List<UserDTO> getUsers() {
		return userRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
	}
}
