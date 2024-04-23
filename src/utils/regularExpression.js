export const regexId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/; // 영문, 숫자 조합 + 각 1자 이상
// export const regexId = /^[A-Za-z0-9]{6,15}$/; // 영문, 숫자 조합 6~15
export const regexNickname = /^[A-Za-z0-9]{1,10}$/; // 영문, 숫자 조합 1~10
export const regexMinText4 = /^[A-Za-z0-9]{4,}$/; // 영문, 숫자 조합 4자 이상
export const regexMinNum4 = /^\d{4,}$/; // 숫자만 최소 4자 이상

export const userIdCheck = (param) => {
  return regexId.test(param);
};

export const userNicknameCheck = (param) => {
  return regexNickname.test(param);
};
export const minText4Check = (param) => {
  return regexMinText4.test(param);
};
export const minNum4Check = (param) => {
  return regexMinNum4.test(param);
};
