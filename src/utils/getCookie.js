
export const getCookie = (name) => {
  let cookieName = document.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${name}=`)); // modalClose찾기
  
  if (cookieName) {
    // 쿠키이름에 해당하는 T반환
    return cookieName.split('=').map((v) => decodeURIComponent(v.trim()))[1];
  }
}
