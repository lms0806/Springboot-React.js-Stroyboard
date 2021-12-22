package com.cos.book.web;

import javax.servlet.http.HttpSession;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.book.model.message.Message;
import com.cos.book.model.post.Post;
import com.cos.book.service.MessageService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MessageController {
	private final MessageService messageService;
	private final HttpSession session;
	
	@GetMapping({"/message/{keyword}/{type}"})
	public ResponseEntity<?> home(@PathVariable String keyword, @PathVariable String type, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
		return new ResponseEntity<Page<Message>>(messageService.검색(pageable, keyword, type), HttpStatus.OK);
	}
	
	@PostMapping("/message/send")
	public ResponseEntity<?> save(@RequestBody Message message){
		int result = messageService.전송(message);
		
		if(result == 1) {
			return new ResponseEntity<String>("ok", HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("fail", HttpStatus.FORBIDDEN);
	}
}
