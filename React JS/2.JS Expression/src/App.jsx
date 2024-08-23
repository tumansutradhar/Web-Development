import React from "react";

const firstName = "Tuman";
const lastName = "Sutradhar";
const num = "69";

function App() {
    return (
        <>
            <div>
                {/* <h1>Hello {firstName + " " + lastName}!</h1> */}
                <h1>Hello {`${firstName} ${lastName}`}!</h1> {/*ES6*/}
                <p>Your lucky number is {num}</p>
            </div>
        </>
    );
}

export default App;
