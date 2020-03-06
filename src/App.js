import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import MyProfile from "./components/MyProfile/MyProfile";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Communities from "./components/Communities/Communities";
import Photo from "./components/Photo/Photo";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/myProfile" render={() => <MyProfile />} />
        <Route path="/news" component={News} />

        <Route path="/friends" component={Friends} />
        <Route path="/communities" component={Communities} />
        <Route path="/photo" component={Photo} />
        <Route path="/music" component={Music} />
        <Route path="/video" component={Video} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
