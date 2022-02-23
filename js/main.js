// Click event for submit button
document.getElementById('submit').addEventListener('click', 
    // Collect data from input text form
    function() {
        const inputName = document.getElementById('input-name').value;
        console.log(inputName);

        const inputDistance = document.getElementById('input-distance').value;
        console.log(inputDistance);

        const inputAge = document.getElementById('input-age').value;
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
        document.getElementById('train-car').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * 90000) + 10000;
        document.getElementById('price').innerHTML = `${totalPrice.toFixed(2)} &euro;`;
        document.getElementById('ticket').classList.remove("invisible");
    });

// Click event for cancel button
document.getElementById('cancel').addEventListener('click', 
    function() {
        document.getElementById('ticket').classList.add("invisible");
});
