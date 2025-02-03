import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadPage from './components/LoadPage';
import StartPage from './components/StartPage';
import NumberPage from './components/NumberPage';
import VerifyPage from './components/VerifyPage';
import NamePage from './components/NamePage';
import HomePage from './components/HomePage';
import InquiriesPage from './components/InquiriesPage';
import InquiryDetailPage from './components/InquiryDetailPage';
import DealsPage from './components/DealsPage';
import HotelsPage from './components/HotelsPage';
import ActivitiesPage from './components/ActivitiesPage' ;
import NotificationsPage from './components/NotificationsPage';
import ProfilePage from './components/ProfilePage' ;
import UpdatePage from './components/UpdatePage' ;
import OngoingPage from './components/OngoingPage' ;
import CompletedPage from './components/CompletedPage';
import CancelledPage from './components/CancelledPage';
import OngoingDetails from './components/OngoingDetails';
import CompletedDetails from './components/CompletedDetails';
import CancelledDetails from './components/CancelledDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadPage />} />
        <Route path="/next" element={<StartPage />} />
        <Route path="/number" element={<NumberPage/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/name" element={<NamePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/inquiries"element={<InquiriesPage/>} />
        <Route path="/inquiry/:locationName" element={<InquiryDetailPage />} />
        <Route path="/deals" element={<DealsPage/>} />
        <Route path="/hotels"element={<HotelsPage/>} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/ongoing" element={<OngoingPage/>} />
        <Route path="/completed" element={<CompletedPage/>} />
        <Route path="/cancelled" element={<CancelledPage/>} />
        <Route path="/activity/:id" element={<OngoingDetails/>} />
        <Route path="/completed/:id" element={<CompletedDetails />} />
        <Route path="/cancelled/:id" element={<CancelledDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
