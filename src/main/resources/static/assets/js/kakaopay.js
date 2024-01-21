$(function() {
    $('#kakaopaybtn').click(function() {
        // alert('kakaopay.js 연결됨');
        $.ajax({
            url: 'kakaopay',
            dataType: 'json',
            success: function(data) {
                alert(data);
                console.log(JSON.stringify(data));
                var successUrl = data.next_redirect_pc_url;
                window.open(successUrl);
            },
            error: function(err) {
                console.log("[Error] > " + err.responseText);
            }
        });
    });
});