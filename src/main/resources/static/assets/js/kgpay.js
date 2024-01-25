$(function () {
    function requestPay() {
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.init("imp50428434");
        IMP.request_pay({ // param
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: "DolmengPlus-" + new Date().getTime(),
            name: "리드미 플러스",
            amount: 100,
            buyer_email: "abc@gmail.com",
            buyer_name: "돌멩이",
            buyer_tel: "01000000000",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181"
        }, function (rsp) { // callback
            if (rsp.success) {// 결제성공시 로직
                alert("리드미 플러스가 결제되었습니다.")
                location.href = "http://118.217.203.37:3000/free/readme/mypage/pay";
            } else {// 결제 실패시
                alert("결재 실패");
                alert(rsp.error_msg);
                console.log(rsp);            
            }
        });
    }//requestPay

    // 결제하기 버튼 누르면
    $('#kgpaybtn').click(function () {
        requestPay();
    });

});
  