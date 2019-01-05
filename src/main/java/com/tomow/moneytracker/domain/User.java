package com.tomow.moneytracker.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class User {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "INITIALS")
	private String initials;

	@Column(name = "SEX")
	@Enumerated(EnumType.STRING)
	private Sex sex;

	@Column(name = "EARNINGS")
	private Double earnings;

	@Column(name = "BALANCE")
	private Double balance;
}
