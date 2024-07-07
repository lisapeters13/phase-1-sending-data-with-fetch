// Add your code here
function submitData(name, email) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        const idElement = document.createElement("p");
        idElement.textContent = newId;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorMessage = error.message;
        const errorElement = document.createElement("p");
        errorElement.textContent = errorMessage;
        document.body.appendChild(errorElement);
      });
  }