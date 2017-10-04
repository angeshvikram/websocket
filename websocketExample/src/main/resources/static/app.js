$(function() {
    'use strict';

    var client = null;
    var stompClient = null;

    function showMessage(mesg)
    {
	$('#messages').append('<tr>' +
			      '<td>' + mesg.from + '</td>' +
			      '<td>' + mesg.topic + '</td>' +
			      '<td>' + mesg.message + '</td>' +
			      '<td>' + mesg.time + '</td>' +
			      '</tr>');
    }

    function setConnected(connected) {
	$("#connect").prop("disabled", connected);
	$("#disconnect").prop("disabled", !connected);
	$('#from').prop('disabled', connected);
	$('#text').prop('disabled', !connected);
	if (connected) {
	    $("#conversation").show();
	    $('#text').focus();
	}
	else $("#conversation").hide();
	$("#messages").html("");
    }

    $("form").on('submit', function (e) {
	e.preventDefault();
    });

    $('#from').on('blur change keyup', function(ev) {
	$('#connect').prop('disabled', $(this).val().length == 0 );
    });
    $('#connect,#disconnect,#text').prop('disabled', true);

    $('#connect').click(function() {
    	//var socket = new SockJS("<c:url value='/chat'/>");
        //stompClient = Stomp.over(socket);
        
	client = Stomp.over(new SockJS('http://10.15.21.71:9090/chat'));
        //client = stompClient;
        //client.disconnect();
	    //setConnected(false);
	client.connect({}, function (frame) {
	    setConnected(true);
	    client.subscribe('/topic/messages', function (message) {
		showMessage(JSON.parse(message.body));
	    });
	});
    });

    $('#disconnect').click(function() {
	if (client != null) {
	    client.disconnect();
	    setConnected(false);
	}
	client = null;
    });

    $('#send').click(function() {
	var topic = "/app/chat/"+$('#topic').val();
	client.send(topic, {}, JSON.stringify({
	    from: $("#from").val(),
	    text: $('#text').val(),
	}));
	$('#text').val("");
    });
});