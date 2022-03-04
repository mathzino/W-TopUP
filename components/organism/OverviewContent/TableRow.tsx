import React from "react";
import Image from "next/image";
import cx from "classnames";
interface TableRowProps {
  title: string;
  category: string;
  price: number;
  item: number;
  status: string;
  image: string;
}
export default function TableRow(props: TableRowProps) {
  let { title, category, item, price, status, image } = props;
  let statusClass = cx({
    " float-start": true,
    "icon-status": true,
    pending: status === "Pending",
    failed: status === "Failed",
    success: status === "Success",
  });
  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`} width="80" height="60" alt="" />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
        </td>
        <td>
          <div>
            <span className={statusClass}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
          </div>
        </td>
      </tr>
    </>
  );
}
