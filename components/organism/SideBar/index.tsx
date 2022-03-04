import React from "react";
import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";
interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  let { activeMenu } = props;
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="overview" icon="overview" href="/member" active={activeMenu === "overview"} />
            <MenuItem title="transaction" icon="transaction" href="member/transaction" active={activeMenu === "transactions"} />
            <MenuItem title="messages" icon="messages" href="/member" />
            <MenuItem title="card" icon="card" href="/member" />
            <MenuItem title="rewards" icon="rewards" href="/member" />
            <MenuItem title="settings" icon="settings" href="/member/edit-profile" active={activeMenu === "settings"} />
            <MenuItem title="log out" icon="logout" href="/sign-in" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
