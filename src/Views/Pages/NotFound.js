import React from "react";
import { Container } from "../../Styles/styles";
import NavBar from "../../Components/NavBar";
import NotFoundPage from "../../Components/PagesContents/NotFound/";

function NotFound() {
  return (
		<Container>
			<NavBar/>
			<NotFoundPage/>
		</Container>
  );
}

export default NotFound;
