import React from "react";

function UserCount(props) {
  return (
    <div>
      <p className="lead fw-semibold mt-5 fs-3">
        User Count is : {props.count}
      </p>
    </div>
  );
}

export default UserCount;
