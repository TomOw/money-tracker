package com.tomow.moneytracker.repository;

import com.tomow.moneytracker.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
