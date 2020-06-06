import React, { Component } from "react";
import Layout from "../layouts/Layout";
import Paper from "@material-ui/core/Paper";

export default class Student extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }
  componentDidMount() {
    this.setInitialValues(this.props);
  }

  render() {
    const { tabs } = this.state;
    return (
      <Layout
        tabs={tabs}
        fabClickHandler={() => this.props.history.push("/student")}
      >
        <Paper
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          Your Student data will be here.
        </Paper>
      </Layout>
    );
  }
}
