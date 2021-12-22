package com.cos.book.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.book.model.message.Message;
import com.cos.book.model.message.MessageRepository;
import com.cos.book.model.user.User;
import com.cos.book.model.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MessageService {
	
	private final UserRepository userRepository;
	private final MessageRepository messageRepository;
	
	@Transactional
	public int 전송(Message message) {
		User userEntity = userRepository.findByUsername(message.getReceiveusername());
		
		if(userEntity == null) {
			return 0;
		}
		
		messageRepository.save(message);
		return 1;
	}
	
	@Transactional(readOnly = true)
	public Page<Message> 메시지함(Pageable pageable, String keyword, String type) {
		if(type.equals("Receiveusername")) {
			return messageRepository.findByReceiveusernameContains(keyword, pageable);
		}
		return messageRepository.findBySendusernameContains(keyword, pageable);
	}
	
	@Transactional(readOnly = true)
	public Page<Message> 검색(Pageable pageable, String keyword, String type){
		if(type.equals("Receiveusername")) {
			return messageRepository.findByReceiveusernameContains(keyword, pageable);
		}
		return messageRepository.findBySendusernameContains(keyword, pageable);
	}
}
