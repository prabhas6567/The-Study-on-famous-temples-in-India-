const districts = {
    "State1": ["District1-1", "District1-2"],
    "State2": ["District2-1", "District2-2"]
    // Add more states and districts as needed
};

function populateDistricts(type) {
    const stateSelect = document.getElementById(`${type}State`);
    const districtSelect = document.getElementById(`${type}District`);
    const selectedState = stateSelect.value;

    districtSelect.innerHTML = `<option value="">Select District</option>`;

    if (selectedState && districts[selectedState]) {
        districts[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function generateTicketPrice() {
    const sourceState = document.getElementById('sourceState').value;
    const sourceDistrict = document.getElementById('sourceDistrict').value;
    const destinationState = document.getElementById('destinationState').value;
    const destinationDistrict = document.getElementById('destinationDistrict').value;
    const transportation = document.getElementById('transportation').value;

    if (!sourceState || !sourceDistrict || !destinationState || !destinationDistrict) {
        alert("Please select all fields.");
        return;
    }

    let price;

    switch (transportation) {
        case 'bus':
            price = 500; // Example price
            break;
        case 'train':
            price = 1000; // Example price
            break;
        case 'flight':
            price = 5000; // Example price
            break;
        default:
            price = 0;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `The ticket price from ${sourceDistrict}, ${sourceState} to ${destinationDistrict}, ${destinationState} by ${transportation} is ₹${price}.`;
}
