import { DefaultRoute } from '@router/routes/index.js';

// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

// ** Returns K format from a number
export const kFormatter = (num) =>
  num > 999 ? `${(num / 1000).toFixed(1)}k` : num;

// ** Converts HTML to string
export const htmlToString = (html) => html.replace(/<\/?[^>]+(>|$)/g, '');

// ** Checks if the passed date is today
export const isToday = (date) => {
  const today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};

export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === 'admin') return DefaultRoute;
  if (userRole === 'client') return '/access-control';
  return '/login';
};

export function isEmpty(str) {
  return (
    str === '' ||
    str === undefined ||
    str === null ||
    str === 'null' ||
    str === 'undefined'
  );
}

export function isNotEmpty(str) {
  return !isEmpty(str);
}

export function replaceHtml(html) {
  html = html.replace(/<br>/gi, '\n');
  html = html.replace(/&nbsp;/gi, '');
  html = html.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, '');
  return html;
}

export function fileTransform(value) {
  const s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const e = Math.floor(Math.log(value) / Math.log(1024));
  return `${(value / Math.pow(1024, e)).toFixed(2)} ${s[e]}`;
}

// 받아온 값을 string으로 return
export const stringConverter = (value) => {
  return typeof value !== 'string' ? value.toString() : value;
};

export const dateFormatter = (value, type) => {
  //type point 추가 ex) 2012.01.01
  const formatDate = new Date(value);
  const year = formatDate.getFullYear();
  let month = formatDate.getMonth() + 1;
  let day = formatDate.getDate();

  let hour = formatDate.getHours();
  let min = formatDate.getMinutes();

  month = month.toString().padStart(2, '0');
  day = day.toString().padStart(2, '0');
  hour = hour.toString().padStart(2, '0');
  min = min.toString().padStart(2, '0');

  let returnVal =
    type !== 'point' ? `${year}-${month}-${day}` : `${year}.${month}.${day}`;

  if (type === 'dateTime') {
    returnVal += `${hour}:${min}`;
  }

  return returnVal;
};

export const authChk = (type, userRoleList, boardRoleList) => {
  let chk = false;
  const boardAuthMap = {};

  boardRoleList.forEach((d) => {
    if (d.bbsAuthType === type) {
      boardAuthMap[d.auth.authCd] = d.auth.authNm;
    }
  });

  userRoleList.forEach((userRole) => {
    if (boardAuthMap.hasOwnProperty.call(userRole.auth.authCd)) {
      chk = true;
      return false;
    }
  });

  return chk;
};

// 숫자 세자리마다 콤마 넣기
export const commaFormatter = (num) => {
  if (typeof num === 'number') {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    console.log('commaFormatter : NaN');
  }
};

// 숫자 세자리마다 콤마 넣기 - register 사용 | numText: number
export const commaFormatterRegister = (numText) => {
  const tempNumText = numText.replace(/,/g, '');
  return tempNumText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 숫자 콤마 제거
export const commaFormatterDelete = (numText) => numText.replace(/,/g, '');

// 문자열 앞쪽에 붙은 0을 제거
export const zeroFormatterDelete = (numText) => numText.replace(/^0+/, '');

// 문자열에서 숫자만 남게 수정
export const textFormatterDelete = (numText) => numText.replace(/\D/g, '');

export const arraysAreEqual = (arr1, arr2) => {
  // 배열의 길이가 다르면 두 배열은 다르다고 판단
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 배열 요소를 하나씩 비교하여 다른 요소가 나오면 두 배열은 다르다고 판단
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // 모든 요소가 같다면 두 배열은 같다고 판단
  return true;
};

// 작성자 id 뒷자리 2개 *로 표기
export const commenterNicknameHiding = (commenter) => {
  return commenter.slice(0, -2) + '**';
};

// true/false가 텍스트로 들어온 경우를 판별하여 boolean형으로 반환
export const convertTextBoolean = (value) => {
  if (typeof value === 'boolean') {
    return value;
  } else if (typeof value === 'string') {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    }
  } else {
    console.log('convertTextBoolean: 잘못된 함수 사용입니다.');
  }
};

// 배열 혹은 객체가 CBR 될때 deepCopy를 위한 함수
export const deepCopyObjArr = (objArr) => {
  return JSON.parse(JSON.stringify(objArr));
};

export const getDefaultRouteForLoggedInUser = () => {
  return DefaultRoute;
};
