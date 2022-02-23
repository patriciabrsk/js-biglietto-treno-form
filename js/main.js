// Click event for submit button
document.getElementById('submit').addEventListener('click', 
    // Collect data from input text form
    function() {
        const inputName = document.getElementById('inputName').value;
        document.getElementById("user-name").innerHTML = inputName;

        const inputDistance = document.getElementById('inputDistance').value;
        console.log(inputDistance);

        const inputAge = document.querySelector('#inputAge').value;

        const standardPrice = (travelDistance * 0.27);
        let totalPrice;

        if (inputAge < "under18") {
            totalPrice = (standardPrice - (standardPrice * 0.17));
        } else if (inputAge > "over65") {
            totalPrice = (standardPrice - (standardPrice * 0.33));
        } else {
            totalPrice = standardPrice;
        }

        document.getElementById('ticket').classList.remove("invisible");
    });

// document.getElementById('price').innerHTML += ` ${totalPrice.toFixed(2)} &euro;`;

// Click event for cancel button
document.getElementById('cancel').addEventListener('click', 

    function() {
        document.getElementById('ticket').classList.add("invisible");
    });
