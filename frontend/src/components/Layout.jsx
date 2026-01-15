import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <main className="py-4">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
