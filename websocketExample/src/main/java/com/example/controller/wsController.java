package com.example.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.example.wsBLI.OutputMessage;
import com.example.wsBLI.Message;

@Controller
public class wsController {
	 @MessageMapping("/chat/{topic}")
	    @SendTo("/topic/messages")
	    public OutputMessage send(@DestinationVariable("topic") String topic,
				      Message message) throws Exception
	    {
		return new OutputMessage(message.getFrom(), message.getText(), topic);
	    }
}
