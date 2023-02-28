import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={5}
    width={1200}
    height={50}
    viewBox="0 0 1200 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="180" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="360" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="540" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="720" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="900" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="1080" y="15" rx="0" ry="0" width="150" height="25" />
    <rect x="1200" y="15" rx="0" ry="0" width="100" height="25" />
  </ContentLoader>
);

export default MyLoader;
