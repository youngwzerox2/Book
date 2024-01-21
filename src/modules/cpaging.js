// 액션 타입 정의하기
const TOMAIN = 'cpaging/TOMAIN';
const TOBOOKSHELF = 'cpaging/TOBOOKSHELF';
const TODESK = 'cpaging/TODESK';
const TOCALENDAR = 'cpaging/CALENDAR';
const TODOOR = 'cpaging/TODOOR';

// 액션 생성 함수 만들기
export const tomain = () => ({ type: TOMAIN });
export const tobookshelf = () => ({ type: TOBOOKSHELF });
export const todesk = () => ({ type: TODESK });
export const tocalendar = () => ({ type: TOCALENDAR });
export const todoor = () => ({ type: TODOOR });

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  choosed: 'main'
};
function paging(state = initialState, action) {
  switch (action.type) {
    case TOMAIN:
      return {
        choosed: action.choosed
      };
    case TOBOOKSHELF:
      return {
        choosed: action.choosed
      };
    case TODESK:
      return {
        choosed: action.choosed
      };
    case TOCALENDAR:
      return {
        choosed: action.choosed
      };
    case TODOOR:
      return {
        choosed: action.choosed
      };
    default:
      return state;
  }
}

export default paging;

// 루트 리듀서 만들기 -> index.jss 파일 새로 생성
