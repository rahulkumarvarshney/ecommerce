<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <div id="myDiv">Original Text</div>

    <script>
        // Create a new div element
        var newDiv = document.createElement("div");
        
        // Set the inner text of the new div
        newDiv.innerText = "New Text";

        // Append the new div to the body
        document.body.appendChild(newDiv);
    </script>
</body>
</html>
