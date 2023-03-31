document.querySelector("#submit").addEventListener("click",
    function () {

        console.log("click")
        
        let name = document.querySelector("#name").value
        let surname = document.querySelector("#surname").value
        let age = document.querySelector("#age").value
        let e = document.querySelector("#friends");
        let text = e.options[e.selectedIndex].text;

        console.log(`Your name is ${name}`);
        console.log(`Your surname ${surname}`);
        console.log(`Your age is ${age}`);
        console.log(`Your friend is ${text}`);

        document.querySelector(".container").innerHTML +=

            `<div id= result>
      <h2>Your name is ${name}</h2>
      <h2>Your surname is ${surname}</h2>
       <h2>Your age is ${age}</h2>
       <h2>Your Friend is ${text}</h2>
    </div>
    `;

        document.querySelector("#result").style =
            "border : 2px solid black; width : 300px;display: flex; justify-content: center; align-items:center; flex-direction : column ; background-color : white"
    }
)