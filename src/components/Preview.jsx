import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaHistory } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
import Edit from "./Edit";
import "./preview.css"


Typography;

const Preview = () => {
  return (
    <div>
      <Box>
        <Stack justifyContent={"end"} direction={"row"} spacing={2}>
          <button id="effect" className="border-0 outline-none bg-white fs-2" title="Download "variant="text"><LiaFileDownloadSolid /></button>
          <Edit/>
        <button  className="border-0 outline-none bg-white fs-4 text-dark" title="History"  variant="text"><FaHistory /></button>
        <button  className="border-0 outline-none bg-white fs-3" title="Back"  variant="text"><FaBackspace /></button>




        </Stack>
      </Box>

      <Box
        sx={{
          width: "700px",
          height: "700px",
          m: 5,
          display: "flex",
          flexWrap: "wrap",
          p: 5,
          borderRadius: "20px",
        }}
      >
        <Paper className="w-100 p-4" elevation={10}>
          <Typography variant="h4" align="center" component={"h1"}>
            Full Name :
          </Typography>
          <Typography variant="subtitle2" align="center" color="brown">
            Job titile
          </Typography>
          <Typography variant="subtitle2" align="center">
            Location | Email | ph:no
          </Typography>
          <Typography variant="body2" align="center" mb={4}>
            <Link>Github</Link> | <Link>Linkedin</Link> | <Link>Portfolio</Link>
          </Typography>

          <Divider className="text-success">Summary</Divider>
          <Typography variant="body1"align="center" mb={4}>.......Summary.......</Typography>
          <Divider className="text-success">Education</Divider>
          <Typography variant="h5" align="center">
            course name
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            Collage name | University | year
          </Typography>
          <Divider className="text-success">Professional Experience</Divider>
          <Typography variant="h5" align="center">
            Job name
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            Comapny name | location | Duration
          </Typography>
          <Divider className="text-success">Skills</Divider>
          <Stack direction={"row"} spacing={2}>
            <Button variant="outlined">Skills</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Preview;
