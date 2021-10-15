import React, { FunctionComponent, useState } from "react";
import Tag from "./Tag";
import { IProject } from "../../Data/types";
import Details from "./Details";

import { motion } from "framer-motion";
import { stagger } from "../Animation/animation";
import Modal from 'react-modal'
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
interface IProjectCard {
  project: IProject;
}
function ProjectCard({ project }: IProjectCard) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    },
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let classname;
  classname = `border-4  hero container max-w-screen-lg mx-auto relative
    flex-col justify-center cursor-pointer `;
  const [showDetail, setshowDetail] = useState(false);
  function closeDetails() {
    setshowDetail(false);
  }
  if (showDetail === true) {
    classname +=
      "dark:border-dark-background_light_color border-dark-border_color";
  } else {
    classname += "dark:border-dark-border_color border-light-border_2";
  }
  return (
    <div className="dark:hover:bg-indigo-700 hover:bg-light-border">
      <div onClick={() => setshowDetail(true)} className={classname}>
        <div className=" flex flex-wrap  mx-3 absolute bottom-12">
          {project.tag.map((x) => (
            <Tag name={x} />
          ))}
        </div>
        <img className="" src={project.imageUrl}></img>
        <p
          className=" py-2
         bg-dark-border_colo
          font-medium text-lg text-center"
        >
          {project.name}
        </p>
      </div>
        {/* {showDetail && <Details onClose={closeDetails} project={project} />} */}
        <Modal
        isOpen={showDetail}
        onRequestClose={()=>setshowDetail(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
          <Details onClose={closeDetails} project={project} />
        </Modal>
    </div>
  );
}

export default ProjectCard;

        // <Modal
        //   hideBackdrop
        //   open={open}
        //   onClose={handleClose}
        //   aria-labelledby="child-modal-title"
        //   aria-describedby="child-modal-description"
        // >
        //   <div>
        //     <Details onClose={closeDetails} project={project} />
        //     <Button onClick={handleClose}>Close Child Modal</Button>
        //   </div>
        // </Modal>