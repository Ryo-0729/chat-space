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

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message);
      $('.messages').append(html);      
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.form__post__form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});