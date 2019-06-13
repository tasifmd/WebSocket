package com.bridgelabz.websocket.cotroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

	@Autowired
	private SimpMessagingTemplate simpleMessagingTemplet;

	@MessageMapping("/send/message")
	public void generateMessage(String message) {
		this.simpleMessagingTemplet.convertAndSend("/chat", message);
	}
}
