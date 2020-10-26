document.addEventListener("DOMContentLoaded",
    function (event) {
        // DOM Manipulation
        console.log(document.getElementById("title")); //prints null value bcz it is being called at the top where title id doesn't exits

        console.log(document instanceof HTMLDocument);
        function sayHello() {
            var name = document.getElementById("name").value; // select element by id
            var message = "<h2>Hello " + name + "!</h2>";
            //document.getElementById("content").textContent = message;
            document.getElementById("content").innerHTML = message; // for adding inner html code

            if (name === "student") {
                var title = document.querySelector("h1").textContent;  // select by query
                title += " & Example";
                document.querySelector("h1").textContent = title;
            }
        }

        document.querySelector("button").addEventListener("click", sayHello);

        //document.querySelector("button").onclick = sayHello; - prefered way
        //DOMContentLoaded

    })

