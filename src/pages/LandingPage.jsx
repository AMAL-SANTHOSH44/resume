import React from "react";
import "./landingpage.css";
import Container from "@mui/material/Container";

const Landingpage = () => {
  return (
    <div>
      <div id="bg1">
        <div class="row pt-5">
          <div class="col-12 col-md-4"></div>
          <div class="col-12  col-md-4 box py-5 border rounder mt-5 text-center">
            <h1>Designed to get Hired</h1>
            <h3>Your Skills, Your Story, your next job - all in one</h3>
            <button style={{border:"solid,1px",padding:"5px",backgroundColor:"#154D71"}}>MAKE YOUR RESUME</button>
          </div>
        </div>
      </div>

      <section class="p-5" style={{}}>
        <h3 class="text-center">Tools</h3>
        <div class="d-flex justify-content-around">
          <div>
            <h3>Resume</h3>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h3>Cover Letters</h3>
            <p>Easily write professional cover letters.</p>
            <h3>Jobs</h3>
            <p>Automatically receive new and relevant job postings.</p>
            <h3>Applications</h3>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.
            </p>
          </div>

          <div>
            <img height={"500px"} src="./public/pic2.png" alt="" />
          </div>
        </div>
      </section>

      <section id="bg"></section>

      <div className="d-flex justify-content-evenly mt-5">
        <section>
          <div>
            <h1 class="text-center">Testimony</h1>
          </div>
          <div class="">
            <h3>Trusted by professionals worldwide.</h3>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether
              <br /> you're a seasoned professional or just starting out, our
              tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly <br />
              stands out.
            </p>
          </div>
        </section>

        <section class="mt-5">
          <div class="row">
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
              ></img>
            </div>

            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
              ></img>
            </div>
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
              ></img>
            </div>
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
              ></img>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
              ></img>
            </div>

            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
              ></img>
            </div>
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
              ></img>
            </div>
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
              ></img>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
              ></img>
            </div>

            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
              ></img>
            </div>
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
              ></img>
            </div>
            <div class="col-3">
              <img
                alt=""
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;
