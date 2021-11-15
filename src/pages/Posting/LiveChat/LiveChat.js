import React from 'react';
import styled from 'styled-components';
import io from 'socket.io';

const LiveChat = () => {
  let socket = io();
  /* 접속 되었을 때 실행 */
  socket.on('connect', function () {
    /* 이름을 입력받고 */
    let name = prompt('반갑습니다!', '');

    /* 이름이 빈칸인 경우 */
    if (!name) {
      name = '익명';
    }

    /* 서버에 새로운 유저가 왔다고 알림 */
    socket.emit('newUser', name);
  });

  /* 서버로부터 데이터 받은 경우 */
  socket.on('update', function (data) {
    let chat = document.getElementById('chat');

    let message = document.createElement('div');
    let node = document.createTextNode(`${data.name}: ${data.message}`);
    let className = '';

    // 타입에 따라 적용할 클래스를 다르게 지정
    switch (data.type) {
      case 'message':
        className = 'other';
        break;

      case 'connect':
        className = 'connect';
        break;

      case 'disconnect':
        className = 'disconnect';
        break;
    }

    message.classList.add(className);
    message.appendChild(node);
    chat.appendChild(message);
  });
  /* 메시지 전송 함수 */
  function send() {
    // 입력되어있는 데이터 가져오기
    let message = document.getElementById('test').value;

    // 가져왔으니 데이터 빈칸으로 변경
    document.getElementById('test').value = '';

    // 내가 전송할 메시지 클라이언트에게 표시
    let chat = document.getElementById('chat');
    let msg = document.createElement('div');
    let node = document.createTextNode(message);
    msg.classList.add('me');
    msg.appendChild(node);
    chat.appendChild(msg);

    // 서버로 message 이벤트 전달 + 데이터와 함께
    socket.emit('message', { type: 'message', message: message });
  }

  return (
    <Main>
      <Chat id="chat" />
      <InputMsg id="test" placeholder="메세지를 입력해주세요" />
      <Send onClick={send}>전송하기</Send>
    </Main>
  );
};

export default LiveChat;

const Main = styled.div`
  margin: auto;
  margin-top: 100px;
  border-radius: 20px;
  background-color: lightblue;
  text-align: center;
  width: 500px;
  height: 800px;
`;

const Chat = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: auto;

  /* 접속 알림 */
  .connect {
    width: 90%;
    margin: auto;
    background-color: aquamarine;
    text-align: center;
    margin-top: 10px;
  }

  /* 접속 종료 알림 */
  .disconnect {
    width: 90%;
    margin: auto;
    background-color: indianred;
    text-align: center;
    margin-top: 10px;
  }

  /* 내가 보낸 메시지 */
  .me {
    width: 90%;
    margin: auto;
    background-color: lemonchiffon;
    border-radius: 5px;
    margin-top: 10px;
  }

  /* 상대방이 보낸 메시지 */
  .other {
    width: 90%;
    margin: auto;
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const InputMsg = styled.input``;

const Send = styled.button``;
