import { Breadcrumbs, Grid, Link } from "@mui/material";
import React, {useEffect} from "react";
import "./jean.css";
import { MdNavigateNext } from "react-icons/md";

const Jean = () => {
	useEffect(() => {
	const woman = document.querySelector(".woman-jean");

		woman.onclick = function() {
		window.location.href = "kadin/jean/c/1"
		}
	})
  const breadcrumbs = [
    <Link href="/" key={"1"} color="inherit" underline="hover" fontSize={"13px"}>
      Anasayfa
    </Link>,
    <Link
      href="/jeanguide"
      key={"2"}
	  color="text.primary"
      underline="hover"
      aria-current="page"
	  fontSize={"13px"}
    >
      Jean Guide
    </Link>,
  ];
  return (
    <div>
      <Breadcrumbs
		style={{ backgroundColor : "#EBEDEF" }}
        separator={<MdNavigateNext fontSize={"small"} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        <Grid xs={6} sm={6} md={6} lg={6} className="woman-jean">
          <div className="text-white fs-2 m-5">KADIN</div>
        </Grid>
        <Grid xs={6} sm={6} md={6} lg={6} className="men-jean">
          <div className="text-white fs-2 m-5">ERKEK</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jean;
