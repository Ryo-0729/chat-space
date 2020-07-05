$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__info__box">
            <div class="message__info__box__name">
              ${message.user_name}
            </div>
            <div class="message__info__box__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__image">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } 
    else {
      let html =
      `<div class="message" data-message-id=${message.id}>
        <div class="message__info__box">
          <div class="message__info__box__name">
            ${message.user_name}
          </div>
          <div class="message__info__box__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message__image">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});