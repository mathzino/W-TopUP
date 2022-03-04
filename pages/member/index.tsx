import React from "react";
import OverviewContent from "../../components/organism/OverviewContent";
import SideBar from "../../components/organism/SideBar";

export default function Overview() {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar activeMenu="overview" />
        <OverviewContent />
      </section>
    </>
  );
}
