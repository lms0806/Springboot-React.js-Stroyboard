package com.cos.book.model.message;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Integer>{
	Page<Message> findBySendusernameContains(String username, Pageable pageable);
	Page<Message> findByReceiveusernameContains(String username, Pageable pageable);
}
