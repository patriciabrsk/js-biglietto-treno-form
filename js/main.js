// Click event for submit button
document.getElementById('submit').addEventListener('click', 
    // Collect data from input text form
    function() {
        const inputName = document.getElementById('input-name');
        const name = inputName.value;
        // document.getElementById('user-name').innerHTML = inputName;
        console.log(inputName);

        const inputDistance = document.getElementById('input-distance');
        const km = inputDistance.value;
        console.log(inputDistance);

        const inputAge = document.querySelector('#input-age');
        const age = inputAge.value;
        console.log(inputAge);

        const standardPrice = (inputDistance * 0.27);
        let totalPrice;

        if (inputAge == "under18") {
            totalPrice = (standardPrice - (standardPrice * 0.17));
        } else if (inputAge == "over65") {
            totalPrice = (standardPrice - (standardPrice * 0.33));
        } else {
            totalPrice = standardPrice;
        }

        document.getElementById('user-name').innerHTML = inputName;
        document.getElementById('ticket-type').innerHTML = inputAge;
        document.getElementById('train-car').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * 90000) + 10000;
        document.getElementById('price').innerHTML = `${totalPrice.toFixed(2)} &euro;`;
        document.getElementById('ticket').classList.remove("invisible");
    });

// document.getElementById('price').innerHTML += ` ${totalPrice.toFixed(2)} &euro;`;

// Click event for cancel button
document.getElementById('cancel').addEventListener('click', 
    function() {
        document.getElementById('ticket').classList.add("invisible");
});
