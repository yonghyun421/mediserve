// import { ADD_REPLYS, DELETE_REPLYS } from './type';

// const replyReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_REPLYS:
//       if (replyInput.trim() === '') {
//         return;
//       }
//       const replys = [
//         ...state,
//         {
//           comment_writer: state.comment_writer
//             ? state.comment_writer
//             : '원래는 로그인 유저아이디 들어가야됌',
//         },
//       ];

//       return replys;
//     case DELETE_REPLYS:
//       const deletedreplys = state.filter(
//         item => item.comment_id !== state.comment_id
//       );

//       return deletedreplys;
//   }
// };
