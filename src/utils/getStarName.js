export const getStarName = (getWriter) => {
  let getWriterLength = getWriter.length; // 이름의 길이 담기
          
  if(getWriterLength == 2) { // 이름이 두글자
    return `${getWriter[0]}*`;
  }
  if(getWriterLength >= 3) { // 이름이 세글자 이상
    return `${getWriter[0]}${"*".repeat(getWriter.length - 2)}${getWriter[getWriter.length - 1]}`;
  }
}