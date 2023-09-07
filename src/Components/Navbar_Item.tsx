import { useNavigate } from "react-router-dom";
import { BiNotepad } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSync } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Block } from "@mui/icons-material";
import "../Styles.css";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface INavPage {
  newPath: string;
  header: string;
}

function Navbar_Item({ newPath, header }: INavPage) {
  const navigate = useNavigate();
  function switchPage(page: string) {
    navigate(page);
  }

  function Icon(icon: string) {
    switch (icon) {
      case "About me":
        return <CgProfile />;
      case "Experience":
        return <BiNotepad />;
      case "Projects":
        return <BsCodeSlash />;
      case "Contact Me":
        return <BsChatLeftDots />;
      default:
        return <AiOutlineSync />;
    }
  }

  return (
    <>
      <ListItem
        className="listItem"
        key={header}
        disablePadding
        onClick={() => switchPage(newPath)}
      >
        <ListItemButton>
          <ListItemIcon>{Icon(header)}</ListItemIcon>
          <ListItemText
            primary={header}
            sx={{ display: { md: "block", sm: "none" } }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default Navbar_Item;
