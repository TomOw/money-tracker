package com.tomow.moneytracker.dto;

import com.tomow.moneytracker.domain.Sex;
import lombok.Data;

@Data
public class UserDTO {

	public Long id;
	public String name;
	public Sex sex;
	public String initials;
	public Double earnings;
	public Double balance;
}
