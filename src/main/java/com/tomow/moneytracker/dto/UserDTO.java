package com.tomow.moneytracker.dto;

import lombok.Data;

@Data
public class UserDTO {

	public Long id;
	public String name;
	public Double earnings;
	public Double balance;
}
