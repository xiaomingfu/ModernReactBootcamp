import React, { Component } from "react";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps() {
//     console.log("FETCHING DATA INSIDE GETINITIALPROPS");
//   }
//   render() {
//     return (
//       <div>
//         <h1>Our Index Page!!</h1>
//       </div>
//     );
//   }
// }

const Index = () => {
  return (
    <div>
      <h1>Our Index Page!!</h1>
    </div>
  );
};
Index.getInitialProps = async () => {
  console.log("FETCHING DATA INSIDE GETINITIALPROPS");
};
export default Index;
