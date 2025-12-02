document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const comments = document.getElementById("comments").value;

    if (!fullname) {
        alert("Please enter your full name.");
        return;
    }
    if (!email) {
        alert("Please enter your email.");
        return;
    }
    if (!phone) {
        alert("Please enter your phone number.");
        return;
    }
    if (!food) {
        alert("Please select a food item.");
        return;
    }
    if (!quantity || quantity < 1 || quantity > 20) {
        alert("Quantity must be between 1 and 20.");
        return;
    }
    if (!address) {
        alert("Please enter your address.");
        return;
    }

    const formData = {
        fullname,
        email,
        phone,
        food,
        quantity,
        address,
        comments
    };

    alert("Order submitted successfully!");
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true);

    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Order submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById("myForm").innerHTML = "";
            document.getElementById("message").innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting order.");
        }
    };
    xhr.send(JSON.stringify(formData));
});