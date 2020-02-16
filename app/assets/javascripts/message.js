$(function(){

     function buildHTML(message){
      if ( message.content && message.image ) {
        var html =
         `<div class= "chat-main_message-list" data-message-id=${message.id}>
            <div class= "chat-main_message-list--info">
              <div class= "chat-main_message-list--info__member">
                ${message.user_name}
              </div>
              <div class= "chat-main_message-list--info__data">
                ${message.created_at}
              </div>
            </div>
            <div class= "chat-main_message-list--message">
              <p class= "lower-message__content">
               ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
      } else if (message.content) {
        var html =
         `<div class= "chat-main_message-list" data-message-id=${message.id}>
            <div class= "chat-main_message-list--info">
              <div class= "chat-main_message-list--info__member">
                ${message.user_name}
              </div>
              <div class= "chat-main_message-list--info__data">
                ${message.created_at}
              </div>
            </div>
            <div class= "chat-main_message-list--message">
              <p class= "lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
      } else if (message.image){
        var html =
         `<div class= "chat-main_message-list" data-message-id=${message.id}>
            <div class= "chat-main_message-list--info">
              <div class= "chat-main_message-list--info__member">
                ${message.user_name}
              </div>
              <div class= "chat-main_message-list--info__data">
                ${message.created_at}
              </div>
            </div>
            <div class= "chat-main_message-list--message">
              <p class= "lower-message__content">
                ${message.image}
              </p>
            </div>
          </div>`
      };
      return html;
     };

$('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType:'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.chat-main_message-list').append(html);      
       $('form')[0].reset();
       $('.chat-main_message-list').animate({ scrollTop: $('.chat-main_message-list')[0].scrollHeight});
     })
     .fail(function() {
       alert("メッセージ送信に失敗しました");
     })
     .always(function(data){
       $('.chat-main_message-form--button').prop('disabled', false);
     })
    })


    var reloadMessages = function(){
      if (document.location.href.match(/\/groups\/\d+\/messages/)) {
      last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: "json",
        data: {id: last_message_id}
      })
      .done(function(messages){
        if(messages.length !== 0){
          var insertHTML = '';
          $.each(messages, function(i, message){
            insertHTML += buildHTML(message)
          });
          $('.chat-main_message-list').append(insertHTML);
          $('.chat-main_message-list').animate({ scrollTop: $('.chat-main_message-list')[0].scrollHeight});
        }
      })
      .fail(function(){
        alert('error');
      });
    }
    };

    setInterval(reloadMessages, 7000);
  
});