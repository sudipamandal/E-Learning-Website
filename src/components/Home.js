import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import FreeCourse from "./FreeCourse";
import Features from "./Features";
import Company from "./Company";
import Newsletter from "./NewsLetter";
import About from "./About";

const Home = () => {
  // const { user, logOut } = UseUserauth();

  // const navigate = useNavigate();

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  return (
    <>
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div> */}
      <Fragment>
        <Navbar />
        <HeroSection />
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="courses-section" id="courses">
          <FreeCourse />
        </section>
        <section className="features-section" id="features">
          <Features />
        </section>
        <section className="company-section" id="partners">
          <Company />
        </section>
        <section className="newsletter-section" id="newsletter">
          <Newsletter />
        </section>
      </Fragment>
    </>
  );
};

export default Home;
