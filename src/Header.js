import Button from "@mui/material/Button";
import React from "react";
import Typical from "react-typical";

export function Header() {
  return (
    <>
      <div className="head-bac" id="h">
        <div className="head-area">
          <div className="header-cnt">
            <h2>
              <a className="p-inhi">Hi</a> there...!
            </h2>
            <h2 className="p-my">
              <a className="p-innmy">I'm</a> Dhanush MC{" "}
            </h2>
            <h2 className="type-font">
              <Typical
                steps={[
                  "Full Stack  Developer",
                  2000,
                  "Experience in MERN Stack",
                  2500,
                ]}
                loop={Infinity}
                wrapper="p"
              />{" "}
            </h2>
            <br />
            <Button
              href="mailto:dhanushmc93@gmail.com"
              size="large"
              color="primary"
              className="cnt-but"
              variant="outlined"
            >
              Contact me
            </Button>
          </div>
          <div>
            <img
              className="my-img"
              src="https://ik.imagekit.io/mim7hvkph/result.png?updatedAt=1688238917695"
              alt="my-picture"
            />
          </div>
        </div>
      </div>
    </>
  );
}
