import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import User from "../user/User";
import Bars from "./Bars";
import SearchBar from "./SearchBar";

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [menuItem, setMenuitem]= useState("Home");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas className="parentOffCanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center h-[35px] w-[35px] bg-black text-white rounded-full text-xl">
              M
            </div>
            <p className="m-0 font-bold text-xl">
              <b>Monu</b>{" "}
            </p>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="text-red-500"></p>
          <SearchBar/>
          <Bars menuItem={menuItem} setMenuitem={setMenuitem}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
