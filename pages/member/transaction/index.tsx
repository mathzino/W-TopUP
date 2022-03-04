import React from "react";
import SideBar from "../../../components/organism/SideBar";
import TransactionContents from "../../../components/organism/TransactionContents";

export default function Transaction() {
  return (
    <>
      {" "}
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContents />
      </section>
    </>
  );
}
