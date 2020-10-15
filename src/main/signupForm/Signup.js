
// 변수 선언

let id = document.querySelector("#id");


let pwd1 = document.querySelector("#pwd1");
let pwdMsg = document.querySelector("#alertTxt");
let pwdImg1 = document.querySelector("#pwd1_img");


let pwd2 = document.querySelector("#pwd2");
let pwdImg2 = document.querySelector("#pwd2_img");
let pwdMsgArea = document.querySelector(".int_pass");

let userName = document.querySelector("#name");

let yy = document.querySelector("#yy");
let mm = document.querySelector("#mm");
let dd = document.querySelector("#dd");

let gender = document.querySelector("#gender");

let email = document.querySelector("#email");

let mobile = document.querySelector("#mobile");

let button = document.querySelector("#btnJoin");

let error = document.querySelectorAll(".error_next_box");


// 이벤트 헨들러 연결

id.addEventListener("focusout", checkId);

pwd1.addEventListener("focusout", checkPwd);


pwd2.addEventListener("focusout", comparePwd);

userName.addEventListener("focusout", checkName);

yy.addEventListener("focusout", isBirthCompleted);
mm.addEventListener("focusout", isBirthCompleted);
dd.addEventListener("focusout", isBirthCompleted);

gender.addEventListener("focusout", function() {
    if (gender.value === "성별") {
        error[5].style.display = "block";
    } else {
        error[5].style.display = "none";
    }
});

gender.addEventListener("focusout", checkGender);

email.addEventListener("focusout", isEmailCorrect);

mobile.addEventListener("focusout", checkPhoneNum);

button.addEventListener("onclick", isSubmit);


// 콜벡 함수

function checkId() {
    let idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if (id.value === "") {
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.color = "#E53A40";
        error[0].style.display = "block";
    } else if (!idPattern.test(id.value)) {
        error[0].innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호 _ , - 만 사용이 가능합니다.";
        error[0].style.color = "#E53A40";
        error[0].style.display = "block";
    } else {
        error[0].innerHTML = "Great!";
        error[0].style.color = "#08A600";
        error[0].style.display = "block";
    }
}

function checkPwd() {
    let pwdPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if (pwd1.value === "") {
        error[1].innerHTML = "필수 정보입니다.";
        error[1].style.color = "#E53A40";
        error[1].style.display = "block";
    } else if (!pwdPattern.test(pwd1.value)) {
        error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        error[1].style.color = "#E53A40";
        error[1].style.display = "block";
        // pwdImg1.src = "images/pwd_disable.png";
        // pwdMsg.innerHTML = "사용불가";
        // pwdMsgArea.style.paddingRight = "93px";
        // pwdMsg.style.display = "block";
        // if (pwdPattern.test(pwd1.value)) {
        //     error[1].innerHTML = "Great!";
        //     error[1].style.color = "#08A600";
        //     error[1].style.display = "block";
        //     pwdImg1.src = "images/lock.png";
        // }
    } else {
        error[1].innerHTML = "Great!";
        error[1].style.color = "#08A600";
        error[1].style.display = "block";
    }
}

function comparePwd() {
    if (pwd2.value === pwd1.value && pwd2.value !== "") {
        pwdImg2.src = "images/pwd_enable.png";
        error[2].style.color = "#08A600";
        error[2].innerHTML = "비밀번호가 일치합니다.";
        error[2].style.display = "block";
    } else if (pwd2.value !== pwd1.value) {
        pwdImg2.src = "images/pwd_disable.png";
        error[2].innerHTML = "비밀번호가 일치하지 않습니다.";
        error[2].style.color = "#E53A40";
        error[2].style.display = "block";
    }

    if (pwd2.value === "") {
        error[2].innerHTML = "필수 정보입니다.";
        error[2].style.color = "#E53A40";
        error[2].style.display = "block";
    }
}

function checkName() {
    let namePattern = /[a-zA-Z가-힣]/;
    if(userName.value === "") {
        error[3].innerHTML = "필수 정보입니다.";
        // error[3].style.color = "#E53A40";
        error[3].style.display = "block"
    } else if (!namePattern.test(userName.value) || userName.value.indexOf(" ") > -1) {
        error[3].innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        error[3].style.display = "block";
    } else {
        error[3].style.display = "none";
    }
}

function isBirthCompleted() {
    let yearPattern = /[0-9]{4}/;

    if(!yearPattern.test(yy.value)) {
        error[4].innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        error[4].style.display = "block";
    } else {
        isMonthSelected();
    }
}

function isMonthSelected() {
    if(mm.value === "월") {
        error[4].innerHTML = "태어난 월을 선택하세요.";
    } else {
        isDateCompleted();
    }
}


function isDateCompleted() {
    let datePattern = /[0-9]{2}/;

    if(dd.value === "") {
        error[4].innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
    } else {
        isBirthRight();
    }
}

function isBirthRight() {
    let datePattern = /\d{1,2}/; // ?
    if(!datePattern.test(dd.value) || Number(dd.value) < 1 || Number(dd.value) > 31) {
        error[4].innerHTML = "생년월일을 다시 확인해주세요.";
    }
    // else {
    //     checkAge();
    // }
}

// function checkAge() {
//     태어난 년도 체크
// }

function checkGender() {
    if (gender.value === "성별") {
        error[5].innerHTML = "성별을 선택해주세요.";
        error[5].style.display = "block";
    }
}

function isEmailCorrect() {
    let emailPattern = /[a-z0-9]{2,}@[a-z0-9]{2,}/;


    if(email.value === "") {
        error[6].style.display = "none";
    } else if(!emailPattern.test(email.value)) {
        error[6].style.display = "block";
    } else {
        error[6].style.display = "none";
    }

}


function checkPhoneNum() {
    let isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

    if (mobile.value === "") {
        error[7].innerHTML = "필수 정보입니다.";
        error[7].style.display = "block";
    } else if (!isPhoneNum.test(mobile.value)) {
        error[7].innerHTML = "형식에 맞지 않는 번호입니다.";
        error[7].style.display = "block";
    } else {
        error[7].style.display = "none";
    }
}

// function isSubmit() {
//     if (checkId() === true) {
//
//     }
// }

$("#btnJoin").click(() => {
    $.ajax(
        {
            type: "POST",
            url: "https://localhost:3000/api/members",
            data: {

            }
        }
    )

    });














