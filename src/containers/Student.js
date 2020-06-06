import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Student from "../components/Student";
function Students() {
  return (
    <Route
      exact
      path={["/students"]}
      render={(props) => <Student name="SmileBots" />}
    />
  );
}

export default Students;
