import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [colorRed, setRed] = useState("bg-danger opacity-50");
	const [colorOrange, setOrange] = useState("bg-warning opacity-50");
	const [colorGreen, setGreen] = useState("bg-success opacity-50");
	const [activeLight, setActiveLight] = useState("red");

	function changeRed() {
		setRed("bg-danger redLight");
		setGreen("bg-success opacity-50");
		setOrange("bg-warning opacity-50");
		if (colorRed === "bg-danger redLight"){
			setRed("bg-danger opacity-50");
		}
	}

	function changeOrange() {
		setOrange("bg-warning orangeLight");
		setRed("bg-danger opacity-50")
		setGreen("bg-success opacity-50")
		if (colorOrange === "bg-warning orangeLight"){
			setOrange("bg-warning opacity-50");
		}
	
	}

	function changeGreen() {
		setGreen("bg-success greenLight ");
		setRed("bg-danger opacity-50")
		setOrange("bg-warning opacity-50")
		if (colorGreen === "bg-success greenLight "){
			setGreen("bg-success opacity-50");
		}
	}


	function toggleAllColors() {
        switch (activeLight) {
            case "red":
                changeRed();
                setActiveLight("orange");
                break;
            case "orange":
                changeOrange();
                setActiveLight("green");
                break;
            case "green":
                changeGreen();
                setActiveLight("red");
                break;
            default:
                break;
        }
    }


	function turnAllPurple() {
        if (activeLight === "purple") {
            setRed("bg-danger opacity-50");
            setOrange("bg-warning opacity-50");
            setGreen("bg-success opacity-50");
            setActiveLight("red");
        } else {
            setRed("bg-purple");
            setOrange("bg-purple");
            setGreen("bg-purple");
            setActiveLight("purple");
        }
    }


	

	return (
		<>
		<div className="d-flex flex-column align-items-center position-absolute">
                <button className="btn btn-success my-1" onClick={toggleAllColors}>
                    Change Color
                </button>
                <button className="btn btn-info ml-2" onClick={turnAllPurple}>
                    {activeLight === "purple" ? "Restore Original" : "Turn Purple"}
                </button>  
		</div>
		<div className="container baseLight bg-black "></div>
		<div className="container trafficLight bg-black">
					<div className={`light ${colorRed}`} onClick={changeRed}></div>
					<div className={`light ${colorOrange} `}onClick={changeOrange}></div>
					<div className={`light ${colorGreen}`}onClick={changeGreen}></div>		
		</div>
		</>
	);
};

export default Home;
