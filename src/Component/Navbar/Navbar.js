import { useState, useRef } from "react";
import { AiOutlineHighlight } from "react-icons/ai";
import { ImFontSize, ImTextColor } from "react-icons/im";
import {
  icons,
  fontSizeList,
  fontFamilyList,
  emojiList,
  scaleList,
} from "../../Icons/Icons";
import style from "./Navbar.module.css";
import { RxImage } from "react-icons/rx";
import { BiPrinter } from "react-icons/bi";

export default function Navbar({ imgDiv }) {
  const [emoji, setEmoji] = useState("&#128514;");
  const [fontSize, setFontSize] = useState("Font Size");
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("#000000");
  const [higlightColor, setHiglightColor] = useState("#000000");
  const [zoomLevel, setZoomLevel] = useState("100%");
  const inputRef = useRef();

  function handleZoom(e) {
    setZoomLevel(e.target.value);
    if (e.target.value === "100%") {
      imgDiv.current.style.transform = "scale(1,1)";
    } else if (e.target.value === "150%") {
      imgDiv.current.style.transform = "scale(1.5,1)";
    } else if (e.target.value === "200%") {
      imgDiv.current.style.transform = "scale(2,1)";
    } else if (e.target.value === "50%") {
      imgDiv.current.style.transform = "scale(0.65,0.65)";
    } else if (e.target.value === "25%") {
      imgDiv.current.style.transform = "scale(0.5,0.5)";
    } else if (e.target.value === "75%") {
      imgDiv.current.style.transform = "scale(0.8,1)";
    }
  }

  function handleAction(element) {
    document.execCommand(`${element.action}`);
  }
  function handleFontColor(e) {
    setColor(e.target.value);
    console.log(e.target.value);
    document.execCommand("foreColor", false, e.target.value);
  }
  function handleFontSize(e) {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, e.target.value);
  }
  function handleHighlightColor(e) {
    setHiglightColor(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  }
  function handleFontStyle(e) {
    setFontName(e.target.value);
    document.execCommand("fontName", false, e.target.value);
    console.log(e.target.value);
  }
  function handleEmoji(e) {
    setEmoji(e.target.value);

    if (e.target.value === "Smile") {
      document.execCommand("insertHTML", false, "&#128514");
    } else if (e.target.value === "Thumbs Up") {
      document.execCommand("insertHTML", false, "&#128077");
    } else if (e.target.value === "Thumbs Down") {
      document.execCommand("insertHTML", false, "&#128078");
    }
    console.log(e.target.value);
  }

  const handlePrint = () => {
    console.log(imgDiv);
    let printContents = imgDiv.current.innerHTML;
    console.log(printContents);
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

  };

  function handleImageOpen() {
    inputRef.current.click();
  }
  function captureImage(event) {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      document.execCommand(
        "insertImage",
        "",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }

  return (
    <>
      <div className={style.main_container}>
        <button onClick={handlePrint}>
          <BiPrinter />
        </button>
        <div>
          <select
            style={{ width: "100%" }}
            id="fontStyle"
            onChange={handleZoom}
          >
            <option>{zoomLevel}</option>
            {scaleList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>

        {icons.slice(0, 6).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}

        <div>
          <select onChange={handleEmoji}>
            <option>Emoji</option>
            {emojiList.map((set, i) => (
              <option key={i}>{set.icon}</option>
            ))}
          </select>
        </div>

        <div>
          <select id="fontStyle" onChange={handleFontStyle}>
            <option>{fontName}</option>
            {fontFamilyList.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </div>

        <button>
          <label htmlFor="color">
            <ImTextColor style={{ color: color }} />
          </label>
          <input
            className={style.input}
            id="color"
            type="color"
            value={color}
            onChange={handleFontColor}
          />
        </button>

        <div className={style.fontSize}>
          <label htmlFor="fontSize">
            <span>
              <ImFontSize className={style.icon} />
            </span>
          </label>
          <select
            className={style.select}
            id="fontSize"
            onChange={handleFontSize}
          >
            <option>3</option>
            {fontSizeList.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <button>
          <label htmlFor="highlighColor">
            <AiOutlineHighlight style={{ zIndex: "1", color: higlightColor }} />
          </label>
          <input
            className={style.input}
            id="highlighColor"
            type="color"
            value={higlightColor}
            onChange={handleHighlightColor}
          />
        </button>

        <button>
          <label htmlFor="link">
            <RxImage onClick={handleImageOpen} />
          </label>
        </button>

        {icons.slice(6).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
      </div>

      <input ref={inputRef} hidden onChange={captureImage} type="file" />
    </>
  );
}
