import React from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";
interface MenuItemProps {
  title: string;
  icon: string;
  active?: boolean;
  href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  let { title, icon, active, href } = props;
  let classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  if (active) {
    return (
      <>
        <div className="item active mb-30">
          <div className="me-3">
            <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} />
          </div>
          <p className="item-title m-0">
            <a href="" className="text-lg text-decoration-none">
              {title}
            </a>
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="item  mb-30">
        <div className="me-3">
          <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
          <Link href={`/${href}`}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        </p>
      </div>
    </>
  );
}
