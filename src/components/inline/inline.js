import {styleObject} from "./style"

const myStyles = {
  color: "red",
  backgroundColor: "#E0E0E0",
  fontWeight: "lighter"
};

// const styleObject = {
//   parag: {
//     color: "blue",
//     fontSize: "20px",
//     fontWeight: "bolder",
//   },

//   div: {
//     backgroundColor: "#b0b0b0",
//   },
// }
const Inline = () => {
  return (
      <div>
          <h1
              style={{
                  color: "purple",
                  backgroundColor: "#E0E0E0",
                  fontWeight: "lighter"
              }}
          >
              Hello From inline component (1st option)
          </h1>
          <h2 style={myStyles}> Inline comp with Contant Object (3nd option)</h2>
          <div>
            <h2 style={styleObject}> Inline usage with the third option (3rd) </h2>
            <p>Styling with the third option</p>
          </div>
      </div>
  );
};
export default Inline;