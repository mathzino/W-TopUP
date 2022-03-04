import React from "react";
import TransactionContents from "../../../components/organism/TransactionContents";
import TransactionDetailContent from "../../../components/organism/TransactionDetailContent";

export default function Detail() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent />
      </section>
    </>
  );
}
