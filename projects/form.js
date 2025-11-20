document.getElementById('myForm').addEventListener('submit',function(event)) {
            event.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('pass').value;
            const age = document.getElementById('number').value;
            
	 if (!fullname) {
	    alert(“Enter your name.”);
	    return;
	}
	if (!email) {
	    alert(“Enter your email.”);
	    return;
	}
	if (!password || password.length < 5) {
	    alert(“Password must be at least 5 characters.”);
	    return;
	}
	if (!age || age < 18 || age > 130) {
	    alert(“Age must be between 18 and 130.”);
	    return;
	}
	const formData = {
	       fullname,
	       email,
	       age,
	       password
	}
	console.log(“Form Data:”, formData);
	const xhr = new XMLHttpRequest();
	xhr.open(“GET”, “submit.json”, true);

	xhr.onreadystatechange = function () {
	      if (xhr.readyState === 4 && xhr.status === 200) {
		const response = JSON.parse(xhr.responseText);
		document.getElementById(“myForm”).innerHTML = “”;
		document.getElementById(“message”).textContent = response.message;
	      }
	};

	xhr.send();
	}