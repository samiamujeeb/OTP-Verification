document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.container input');
    const button = document.querySelector('.container button');

    // Auto-focus on the first input when the page loads
    inputs[0].focus();

    // Focus on the next input when a digit is entered
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Handle backspace to move focus back
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Collect OTP and show it on button click
    button.addEventListener('click', () => {
        let otp = '';
        inputs.forEach((input) => {
            otp += input.value;
        });

        if (otp.length === inputs.length) {
            alert(`Your OTP is: ${otp}`);
        } else {
            alert('Please fill in all the OTP fields.');
        }
    });
});
