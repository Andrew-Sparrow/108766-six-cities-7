import React from "react";
import Layout from "../layout/layout";

export const withLayout = (Component) => {
  return (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};
