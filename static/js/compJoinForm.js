function Postcode() {
    new daum.Postcode({
        oncomplete: function(data) {
          
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가짐
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 상세주소 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가하는 코드 - 법정동명의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가하는 코드
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 상세주소가 있을 경우 추가하는 코드
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 상세주소를 address에 넣는다
                document.getElementById("addressDetail").value = extraAddr;
            
            } else {
                document.getElementById("addressDetail").value = '';
            }

            // 우편번호와 주소 정보를 주소칸에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("addressDetail").focus();
        }
    }).open();
}

async function check(){
    let username = document.querySelector("#userId").value;
    
    let response = await fetch(`/url 넣는 자리/?userId=${userId}`,{
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    });

    let responseBody = await response.json();
    if (responseBody.success) {
        alert(responseBody.data);
    }else{

        alert(responseBody.data);
    }
}

function pwcheck() {
  let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/
  let pwcheck = document.getElementById('pwcheck');
  let pw = document.getElementById('pwd').value;
  pwcheck.style.color = 'black';


  if (!regex.test(pw)) {
  pwcheck.style.color = 'red';
  }else{
  pwcheck.style.color='black';
  }

}
function isSame() {
var pw = document.getElementById('pwd').value;
var pwcheck = document.getElementById('pwdchk').value;

if (pw != pwcheck) {
    document.getElementById('same').innerHTML='비밀번호가 일치하지 않습니다';
    document.getElementById('same').style.color = 'red';
}else{
    document.getElementById('same').innerHTML='비밀번호가 일치합니다';
    document.getElementById('same').style.color = 'blue';
}
}