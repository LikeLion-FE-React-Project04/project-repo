export function checkValidation(type, value) {
  switch (type) {
    case 'email': {
      const email_validation =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

      if (!value) {
        return '이메일을 입력해주세요.';
      } else if (!email_validation.test(value)) {
        return '이메일 형식으로 입력해주세요.';
      } else {
        return '';
      }
    }
    case 'password': {
      const password_validation_count = /^.{10,}$/;
      const password_validation_format =
        /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/;

      if (!value || !password_validation_count.test(value)) {
        return '비밀번호를 최소 10자리 이상 입력해주세요.';
      } else if (!password_validation_format.test(value)) {
        return '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합';
      } else {
        return '';
      }
    }
    case 'passwordConfirm': {
      // console.log(value);
      if (!value[0]) {
        return '비밀번호를 한번 더 입력해주세요.';
      } else if (value[0] != value[1]) {
        return '동일한 비밀번호를 입력해주세요.';
      } else {
        return '';
      }
    }
    case 'name': {
      const name_validation = /^.{2,}$/;

      if (!value || !name_validation.test(value)) {
        return '이름을 2자리 이상 입력해주세요.';
      } else {
        return '';
      }
    }
    case 'phoneNumber': {
      const phoneNumber_validation = /^([0-9]{11,11})$/;

      if (!phoneNumber_validation.test(value)) {
        return '휴대폰 번호를 입력해주세요.';
      } else {
        return '';
      }
    }
    case 'birth': {
      const yearValidation = /^(19[0-9][0-9]|20\d{2})$/;
      const monthValidation = /^(0?[0-9]|1[0-2])$/;
      const dayValidation = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;

      if (!value.year && !value.year && !value.year) {
        return '';
      } else if (!yearValidation.test(value.year)) {
        return '생년월일을 다시 확인해주세요.';
      } else if (!monthValidation.test(value.month)) {
        return '태어난 월을 정확하게 입력해주세요.';
      } else if (!dayValidation.test(value.day)) {
        return '태어난 일을 정확하게 입력해주세요.';
      } else {
        return '';
      }
    }
    case 'address': {
      if (!value) {
        return '주소를 입력해주세요.';
      } else {
        return '';
      }
    }
  }
}
