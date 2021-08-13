import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";
import "./stepper.css";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const Stepper = (props) => {
  const { current } = props;

  return (
    <>
      <div className="container-fluid msform">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
    </>
  );
};

export default Stepper;
