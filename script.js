// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username')
let elFailMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elPassword = document.querySelector('#password')
let elPasswordRetype = document.querySelector('#password-retype')
let elMissMatchMessage = document.querySelector('.mismatch-message')
let elMatchMessage = document.querySelector('.match-message')
let elHeader = document.querySelector('#header')
let elTravel = document.querySelector('.wrap')
let elSignup = document.querySelector('.form-signup')
let elClickSignup = document.querySelector('.sign-btn')
let elPasswordLength = document.querySelector('.passwordLength')
let elPasswordEng = document.querySelector('.passwordEng')
let elPasswordSame = document.querySelector('.passwordSame')
let elPasswordUpper = document.querySelector('.passwordUpper')






elInputUsername.onkeyup = function(){
  if(isMoreThan4Length(elInputUsername.value,)){
    elSuccessMessage.classList.remove('hide')
    elFailMessage.classList.add('hide')
  } else {
    elSuccessMessage.classList.add('hide')
    elFailMessage.classList.remove('hide')
  }
}

function passwordFn () {

  if( isMoreThan10Length(elPassword.value) ) {
    elPasswordLength.classList.add('hide');
  } else {
    elPasswordLength.classList.remove('hide');
  }

  /*
  if( isPasswordEng(elPassword.value) ) {
    console.log('영어가 있다..');
  } else {
    console.log('영어가 없다...!!!');
  }
  
  if( isPasswordNum(elPassword.value) ) {
    console.log('숫자가 있다..');
  } else {
    console.log('숫자가 없다...!!!');
  }

  if( isPasswordSpeci(elPassword.value) ) {
    console.log('특수문자가 있다..');
  } else {
    console.log('특수문자가 없다...!!!');
  }

  if( isPasswordBlank(elPassword.value) ) {
    console.log('공백이 없다..');
  } else {
    console.log('공백이 있다...!!!');
  }
  */

  if( (isPasswordEng(elPassword.value) + isPasswordNum(elPassword.value) + isPasswordSpeci(elPassword.value) >= 2) && isPasswordBlank(elPassword.value) ) {
    elPasswordEng.classList.add('hide');
  } else {
    elPWFailureComb.classList.remove('hide');
  }

  if(isPasswordRepeat(elPassword.value)) {
    elPasswordSame.classList.remove('hide');
  } else {
    elPasswordSame.classList.add('hide');
  }

  if((isPasswordUpper(elPassword.value))) {
    elPasswordUpper.classList.add('hide');
  } else {
    elPasswordUpper.classList.remove('hide');
  }

  isSubmitButton();
}

elPassword.onclick = passwordFn;
elPassword.onkeyup = passwordFn;

// { 비밀번호 확인 } input 유효성 검사
elPasswordRetype.onkeyup = function() {
  if( isMatch(elPassword.value, elPasswordRetype.value) ) {
    // console.log('동일하다!!');
    elPWFailureMsg.classList.add('hide');
    elPWSuccessMsg.classList.remove('hide');
  } else {
    // console.log('다르다!!');
    elPWFailureMsg.classList.remove('hide');
    elPWSuccessMsg.classList.add('hide');
  }

  isSubmitButton();
}

//비밀번호 확인 input 유효성 검사


elPassword.onclick = passwordFn;
elPassword.onkeyup = passwordFn;

elPasswordRetype.onkeyup = function(){
  if(isMatch(elPassword.value, elPasswordRetype.value)){
    elMissMatchMessage.classList.add('hide')
  }else {
    elMissMatchMessage.classList.remove('hide')
  }
}

elHeader.onclick = function(){
  return window.location.reload()
}

elTravel.onclick = function(){
  elTravel.classList.add('hide')
  elSignup.classList.remove('hide')
}







elClickSignup.onclick = function() {
  if(isAllCheck()) {
    alert('회원가입이 완료되었습니다!');
    elInputUsername.value = '';
    elPassword.value = '';
    elPasswordRetype.value = '';
    elClickSignup.classList.remove('allCheck');
  }
  else {
    alert('모든 조건이 충족되어야합니다.');
  }
};



//회원가입 버튼

function isSubmitButton() {
  if(isAllCheck()) {
    elClickSignup.classList.add('allCheck');
  }
  else {
    elClickSignup.classList.remove('allCheck');
  }
}






// 최종 유효성검사 함수
function isAllCheck() {
  if(isMoreThan4Length(elInputUsername.value)) { // 아이디
    if(isMoreThan10Length(elPassword.value) && (isPasswordEng(elPassword.value) + isPasswordNum(elPassword.value) + isPasswordSpeci(elPassword.value) >= 2) && isPasswordBlank(elPassword.value) && !isPasswordRepeat(elPassword.value) && (isPasswordUpper(elPassword.value))) { // 비밀번호
      if(isMatch(elPassword.value, elPasswordRetype.value)) { // 비밀번호 확인
        //console.log('true!!');
        return true;
      }
    }
  } else {
    //console.log('false!!');
    return false;
  }
}







//함수 만드는곳 
function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

function isMatch (elPassword, elPassworRetype) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return elPassword === elPassworRetype
}

function isMoreThan10Length(elPassword){
  return elPassword.length >= 10
}

function isPasswordEng (elPassword){
  var letters = /[A-Za-z]/
  if(letters.test(elPassword)){
    return true
  }else {
    return false
  }
}

function isPasswordNum (elPassword) {
  var letters = /[0-9]/;
  
  if( letters.test(elPassword) ) {
    return true;
  } else {
    return false;
  }
}

function isPasswordSpeci (elPassword) {
  var letters = /[~!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]/;
  
  if( letters.test(elPassword) ) {
    return true;
  } else {
    return false;
  }
}

function isPasswordBlank (elPassword) {
  if( elPassword.search(/\s/) === -1 ) {
    return true;
  } else {
    return false;
  }
}

function isPasswordRepeat (elPassword) {
  // password의 길이만큼 반복되는 반복문이 있어야 한다.
  // 문자 하나와 나 자신+1과 나자신 +2와 비교한다.
  // 숫자인지 아닌지 판단한다.숫자이면 true 아니면 false
  for(let i=0; i<elPassword.length-2; i++) {
    if(elPassword[i]===elPassword[i+1]&&password[i]===elPassword[i+2]) {
      if(!isNaN(Number(elPassword[i]))) {
        return true;
      }
    }
  }
  return false;
}

function isPasswordUpper (elPassword) {
  var letters = /[A-Z]/; 
  
  if( letters.test(elPassword) ) { 
    return true;
  } else {
    return false;
  }
}