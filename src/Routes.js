import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';
import UploadPage from './pages/UploadPage/UploadPage';
import MyPage from './pages/MyPage/Mypage';
import Subject from './pages/QnA/Subject';
import SubjectDetail from './pages/QnA/SubjectDetail';
import HomeBtn from './components/HomeBtn';
import Counsel from './pages/QnA/Counsel';
import Submit from './pages/QnA/Submit';
import Answer from './pages/QnA/Answer';
import MoreCounsel from './pages/QnA/MoreCounsel';
import Prescription from './pages/Prescription/Prescription';
import QnA from './pages/QnA/QnA';
import Feed from './pages/Feed/Feed';
import PictureAndQR from './pages/PictureAndQR/PictureAndQR';
import SnapShot from './pages/SnapShot/SnapShot';
import Loading from './pages/SnapShot/Loading';
import Find from './pages/Find/Find';
import FindHospital from './pages/Find/FindHospital';
import Posting from './pages/Posting/Posting';
import PostingResult from './pages/Posting/PostingResult';
import PostingChat from './pages/Posting/PostingChat';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/upload" component={UploadPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/subject" component={Subject} />
        <Route exact path="/detail" component={SubjectDetail} />
        <Route exact path="/counsel" component={Counsel} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/answer" component={Answer} />
        <Route exact path="/more" component={MoreCounsel} />
        <Route exact path="/prescription" component={Prescription} />
        <Route exact path="/qna" component={QnA} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/checkqr" component={PictureAndQR} />
        <Route exact path="/snapshot" component={SnapShot} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/find" component={Find} />
        <Route exact path="/findHospital" component={FindHospital} />
        <Route exact path="/posting" component={Posting} />
        <Route exact path="/postingResult" component={PostingResult} />
        <Route exact path="/postingChat" component={PostingChat} />
      </Switch>
      <div className="header_fixed" style={{ marginBottom: '69px' }} />
      <HomeBtn />
    </Router>
  );
};

export default Routes;
