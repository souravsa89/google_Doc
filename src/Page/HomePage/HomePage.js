import React, { useState, useRef } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import style from "./HomePage.module.css";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import html2canvas from "html2canvas";

export default function HomePage() {
  const [color, setColor] = useState("black");
  const printDiv = useRef(null);
  const [title, setTitle] = useState("Untitled Document");

  async function downloadPDF(){
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

    //========================================//

    // const element = document.createElement("a");
    // let printContents = printDiv.current.innerText;
    // console.log(printContents);
    // const file = new Blob([printContents], { type: "text/plain" });
    // element.href = URL.createObjectURL(file);
    // element.download = "myFile.text";
    // document.body.appendChild(element); // Required for this to work in FireFox
    // element.click();
  
  return (
    <>
      <div className={style.download} onClick={downloadPDF}>
        <BsDownload className={style.downloadBtn} />
      </div>
      <div className={style.main}>
        <div className={style.upperNav}>
          <div className={style.subMain}>
            <IoDocumentTextSharp className={style.icon} />
            <sup>
              Untitled Document{" "}
              {/* <AiFillStar
                onClick={() => setColor(color === "black" ? "red" : "black")}
                style={{ color: color }}
              /> */}
            </sup>
          </div>

          <Navbar printDiv={printDiv}/>
        </div>
        <div className={style.wrapper}>
          <div
            id="edit"
            ref={printDiv}
            className={style.textArea}
            contentEditable="true"
             ></div>
        </div>
      </div>
    </>
  );
}
