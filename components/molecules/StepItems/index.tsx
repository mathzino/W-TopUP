import React from "react";
import Image from "next/image";
import { title } from "process";
interface StepItemsProps {
  icon: "step1" | "step2" | "step3";
  desc1: string;
  desc2: string;
  title: string;
}
export default function StepItems(props: StepItemsProps) {
  const { icon, desc1, desc2, title } = props;
  return (
    <>
      <div className="col-lg-4">
        <div className="card feature-card border-0">
          <img className="mb-30" height="80" width="80" src={`/icon/${icon}.svg`} />
          <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
          <p className="text-lg color-palette-1 mb-0">
            {desc1}
            <br />
            {desc2}
          </p>
        </div>
      </div>
    </>
  );
}
