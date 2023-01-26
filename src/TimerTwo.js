import React from "react";
import { Badge, Button } from "react-bootstrap";

const TimerTwo = ({ flag2, setFlag2, setFlag1, setFlag3,num2 }) => {

 console.log("second")
  return (
    <div>
      <h2 className="mt-3">
        <Badge bg="danger" className="mt-3">
          {num2}
        </Badge>
      </h2>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            setFlag2(false);
            setFlag1(true);
          }
        }}
      >
        prev
      </Button>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            setFlag2(false);
            setFlag3(true);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default React.memo (TimerTwo);
