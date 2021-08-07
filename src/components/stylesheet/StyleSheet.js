
import Inline from "../inline/Inline";
import "./styleSheet.css";

const StyleSheet = ({ isPrimary }) => {
    /* console.log("isSecondary", props.isSecondary)
    console.log("isSelected", props.isSelected) */
    // console.log(props);


    // this is JS destructuring {} inside curly braces otherwise we need to use prop. and while using it props.isPrimary every single time that we nee to use  GB
    const checkIsPrimary = isPrimary ? "primary" : "secondary";

    return (
        <div className="style-sheet-container">
            <img
                className="logo"
                src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
                alt="clarusway-logo"
            />
            <h1 className="header">Welcome to Clarusway</h1>
            <p className="primary">
                Change your skillset, change your future!
            </p>
            <p className={checkIsPrimary}>
                Using ternary statement to catch the props
            </p>
        </div>
    );
};

export default StyleSheet;