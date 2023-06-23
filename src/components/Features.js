import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Features.css";

const FeatureData = [
  {
    title: "Personal Progress",
    desc: "We understand that everyone learns differently. Our platform adapts to your unique learning style and provides personalized recommendations to help you stay on track. Keep an eye on your progress, earn badges and certificates, and celebrate your achievements as you reach new milestones.",
    // icon: "ri-draft-line",
  },

  {
    title: "Expert Guidance",
    desc: "Learn from the best in the field! Our platform brings together renowned experts and industry leaders who are passionate about sharing their knowledge with you. Benefit from their expertise, insider tips, and practical insights as you navigate through your learning journey.",
    // icon: "ri-discuss-line",
  },

  {
    title: "Flexible Learning",
    desc: "Life is busy, and we understand that. That's why our e-learning platform offers the flexibility to learn at your own pace, on your own schedule. Whether you're a night owl or an early riser, our courses are available 24/7, allowing you to learn whenever and wherever suits you best.",
    // icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Features</h2>
          </Col>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">{/* <i class={item.icon}></i> */}</h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
