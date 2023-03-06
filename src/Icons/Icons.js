import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdRedo,
  MdUndo,
} from "react-icons/md";
import { FaRemoveFormat } from "react-icons/fa";
import { RiSubscript, RiSuperscript } from "react-icons/ri";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
export const icons = [
  {
    icon: <MdUndo />,
    action: "undo",
  },
  {
    icon: <MdRedo />,
    action: "redo",
  },
  {
    icon: <BiBold />,
    action: "bold",
  },
  {
    icon: <BiItalic />,
    action: "italic",
  },
  {
    icon: <BiUnderline />,
    action: "underline",
  },
  {
    icon: <AiOutlineStrikethrough />,
    action: "strikethrough",
  },
  {
    icon: <MdFormatAlignCenter />,
    action: "justifyCenter",
  },
  {
    icon: <MdFormatAlignLeft />,
    action: "justifyLeft",
  },
  {
    icon: <MdFormatAlignRight />,
    action: "justifyRight",
  },
  {
    icon: <MdFormatAlignJustify />,
    action: "justifyFull",
  },
  {
    icon: <GoListOrdered />,
    action: "insertOrderedList",
  },
  {
    icon: <GoListUnordered />,
    action: "insertUnorderedList",
  },
  {
    icon: <RiSuperscript />,
    action: "superscript",
  },
  {
    icon: <RiSubscript />,
    action: "subscript",
  },
  {
    icon: <FaRemoveFormat />,
    action: "removeFormat",
  },
];

export const fontSizeList = [1, 2, 3, 4, 5, 6, 7];

export const fontFamilyList = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "emoji",
  "math",
  "fangsong",
  "Georgia",
  "Times New Roman",
  "Impact",
];

// export const emojiList = [
//   <option>&#128514;</option>,
// <option>&#128512;</option>,
// <option>&#128517;</option>,
// <option>&#128525;</option>,
// <option>&#128540;</option>,
// <option>&#128545;</option>,
// <option>&#128547;</option>,
// <option>&#128579;</option>,
// <option>&#128561;</option>,
// <option>&#128557;</option>,
// <option>&#128536;</option>,
// <option>&#128542;</option>,
// <option>&#128534;</option>,
// <option>&#128076;</option>,
// <option>&#128077;</option>,
// <option>&#128078;</option>,
// ];
export const emojiList = [
  {
    icon : "Smile",
    value : "&#128514",
  } ,
  {
    icon : "Thumbs Up",
    value : "&#128514",
  } ,
  {
    icon : "Thumbs Down",
    value : "&#128514",
  } ,
];

export const scaleList = [
  "100%", "150%" , "200%" ,"75%", "50%" , "25%"
]
