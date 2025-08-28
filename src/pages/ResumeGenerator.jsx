// import Link from "@mui/material/Link";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const ResumeGenerator = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5 ms-4">
          Create a job-winning Resume in minutes
        </h3>
        <div className="d-flex justify-content-around mt-5">
          <div className="informationDiv shadow border rounded p-5 text-center">
            <FaFileAlt className="text-primary fs-1 mb-3" />

            <h4>Add your Information</h4>
            <p>Add prewritten examples to each section</p>
            <h4>Step 1</h4>
          </div>
          <div className="downloadDiv shadow border rounded p-5 text-center">
            <LiaFileDownloadSolid className="text-danger fs-1 mb-3" />


            <h4>Download your Resume</h4>
            <p>Downlaod and start applying</p>
            <h4>Step 2</h4>
          </div>
        </div>

        <div className="text-center ms-4">
          <Link to={"/formpage"} className="btn btn-success">LET'S START</Link>
          

        </div>
      </div>
    </>
  );
};

export default ResumeGenerator;
