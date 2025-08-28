import { FaUserEdit } from "react-icons/fa";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import "./preview.css"


const Edit = () => {
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p :3,
  maxHeight: "75vh",
  overflowY:"auto"

};

 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Button id="effect" onClick={handleOpen} className="border-0 outline-none bg-white fs-3 text-dark" title="Edit" variant="text">
      <FaUserEdit />


    </Button>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="subtitle2" component="h2" color="blue">
            Edit Detailes
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h6" color="brown">
            Personal Detailes
            </Typography>
            <TextField className="w-100" id="standard-basic" label="Full Name" variant="standard" />
            <TextField className="w-100" id="standard-basic" label="Job Title" variant="standard" />
            <TextField className="w-100" id="standard-basic" label="Location" variant="standard" />
             <Typography sx={{ mt: 1 }} variant="h6" color="brown">
            Contact Detailes
            </Typography>
            <TextField className="w-100" id="standard-basic" label="Email" variant="standard" />
            <TextField className="w-100" id="standard-basic" label="Phone Number" variant="standard" />
            <TextField className="w-100" id="standard-basic" label="Github Profile Link" variant="standard" />
            <TextField className="w-100" id="standard-basic" label="Linkdin Profile Link" variant="standard" />
            <TextField className="w-100" id="standard-basic" label="Portfolio Link" variant="standard" />
            <Typography sx={{ mt: 1 }} variant="h6" color="brown">
            Education Detailes
            </Typography>
              <TextField className="w-100" id="standard-basic" label="Course Name" variant="standard" />
              <TextField className="w-100" id="standard-basic" label="College Name" variant="standard" />
              <TextField className="w-100" id="standard-basic" label="University" variant="standard" />
              <TextField className="w-100" id="standard-basic" label="Year Of Passout" variant="standard" />
               <Typography sx={{ mt: 1 }} variant="h6" color="brown">
            Professional Detailes
            </Typography>
              <TextField className="w-100" id="standard-basic" label="Job or Internship" variant="standard" />
              <TextField className="w-100" id="standard-basic" label="Company Name" variant="standard" />
              <TextField className="w-100" id="standard-basic" label="Location" variant="standard" />
              <TextField className="w-100" id="standard-basic" label="Duration" variant="standard" />
              <Typography sx={{ mt: 1 }} variant="h6" color="brown">
            Skills
            </Typography>
              <TextField className="w-100" id="standard-basic" label="Add Skill" variant="standard" />
              <Typography align="center"><Button variant="text">ADD</Button></Typography>
              <Typography variant="subtitle1">Selected skills :</Typography>
               <Typography sx={{ mt: 1 }} variant="h6" color="brown">
            Professional Summary
            </Typography>
            <TextField className="w-100" label="Write a short summary of yourself"
                          multiline
                          rows={3}
                          variant="standard"
                        />
            <Typography><Button variant="text">UPDATE</Button></Typography>
           
             
             
             













        </Box>
      </Modal>
       </>
    
  );
};

export default Edit;
