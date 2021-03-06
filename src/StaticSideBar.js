import React, { Component } from "react";
import Users from "./Users.js";
import Channels from "./Channels.js";
import UserInfo from "./UserInfo.js";

class StaticSideBar extends Component {
  handleLogout(event) {
    localStorage.clear();
  }
  render() {
    return (
      <div className="side-bar">
        <UserInfo
          currentUser={this.props.currentUser}
          handleLogout={this.handleLogout}
        />
        <div className="side-bar-nav">
          <section className="channels">
            <h2 className="side-bar-section-header">Channels</h2>
            <Channels
              onChannelCallback={this.props.onChannelCallback}
              channels={this.props.channels}
              activeChannelId={this.props.activeChannelId}
              activeUserId={this.props.activeUserId}
            />
          </section>
          <section className="direct-messsages">
            <h3 className="side-bar-section-header">Direct Messages</h3>
            <Users
              onUserCallback={this.props.onUserCallback}
              users={this.props.users}
              activeUserId={this.props.activeUserId}
              currentUser={this.props.currentUser}
              login_users={this.props.login_users}
            />
          </section>
        </div>
        <section className="side-bar-bottom">
          {/*<form method="GET" action="/">
            <button
              className="logout-button btn btn-primary btn-sm"
              type="submit"
              onClick={this.props.handleLogout}
            >
              Logout
            </button>
          </form>*/}
        </section>
      </div>
    );
  }
}

export default StaticSideBar;
