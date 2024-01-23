$(function () {
  // 카카오페이 결제하기 버튼 누르면
  $('#kakaopaybtn').click(function () {
    // alert('kakaopay.js 연결됨');
    $.ajax({
      url: 'kakaopay',
      dataType: 'json',
      success: function (data) {
        // alert(data);
        console.log(JSON.stringify(data));
        var successUrl = data.next_redirect_pc_url;
        // window.open(successUrl);
        location.href = successUrl;
      },
      error: function (err) {
        console.log('[Error] > ' + err.responseText);
      }
    });
  });
});
