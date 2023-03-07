import React, { useState, useRef } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import style from "./HomePage.module.css";
import { IoDocumentTextSharp } from "react-icons/io5";

import jsPDF from "jspdf";

import { BsDownload } from "react-icons/bs";
import html2canvas from "html2canvas";

export default function HomePage() {
  const imgDiv = useRef(null);
  const [title, setTitle] = useState("Untitled Document");

  async function downloadPDF() {
    // Create new PDF document
    const sheetContent = document.getElementById(`edit`);
    const canvas = await html2canvas(sheetContent, { dpi: 300 });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${title}.pdf`);
  }

  return (
    <>
      <div className={style.container} onClick={downloadPDF}>
        <BsDownload className={style.downloadBtn} />
      </div>
      <div className={style.main_div}>
        <div className={style.top_nav}>
          <div className={style.bottom_nav}>
            <IoDocumentTextSharp className={style.icon} />
            <sup>Untitled Document </sup>
          </div>

          <Navbar imgDiv={imgDiv} />
        </div>
        <div className={style.wrapper}>
          <div
            id="edit"
            ref={imgDiv}
            className={style.textArea}
            contentEditable="true"
          ></div>
        </div>
      </div>
    </>
  );
}
