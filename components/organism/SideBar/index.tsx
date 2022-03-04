import React from "react";
import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";
export default function SideBar() {
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="overview" icon="overview" active />
            <MenuItem title="transaction" icon="transaction" />
            <MenuItem title="messages" icon="messages" />
            <MenuItem title="card" icon="card" />
            <MenuItem title="rewards" icon="rewards" />
            <MenuItem title="settings" icon="settings" />
            <MenuItem title="log out" icon="logout" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
