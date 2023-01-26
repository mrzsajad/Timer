import React from "react";
import { Badge, Button } from "react-bootstrap";

const TimerTwo = ({ setFlag3, flag3, setFlag2,num3 }) => {
  
  console.log("third")
  return (
    <div>
      <h2 className="mt-3">
        <Badge bg="danger" className="mt-3">
          {num3}
        </Badge>
      </h2>
      <Button
        variant="light"
        onClick={() => {
          if (flag3) {
            setFlag3(false);
            setFlag2(true);
          }
        }}
      >
        prev
      </Button>
    </div>
  );
};

export default React.memo (TimerTwo);
