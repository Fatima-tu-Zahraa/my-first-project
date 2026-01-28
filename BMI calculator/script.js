const form = document.getElementById("bmiForm"); // Corrected ID reference
        
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const height = parseFloat(document.getElementById('heightInput').value); 
            const weight = parseFloat(document.getElementById('weightInput').value);
            const resultDiv = document.getElementById('result');
            resultDiv.className = 'text-center result-box';

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {

                resultDiv.innerHTML = '<span class="text-danger">Please enter valid values for height and weight.</span>';
                return;
            }

            // BMI Formula: BMI = kg / m^2
            const bmi = (weight / (height * height)).toFixed(2);
            
            let category = '';
            let colorClass = 'text-dark';

            if (bmi < 18.5) {
                category = 'Underweight ';
                colorClass = 'text-warning';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = 'Normal weight ';
                colorClass = 'text-success';
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = 'Overweight ';
                colorClass = 'text-warning';
            } else {
                category = 'Obesity ';
                colorClass = 'text-danger';
            }
            
            // Final display of result
            resultDiv.innerHTML = `
                Your BMI is: <strong>${bmi}</strong> <br>
                Category: <span class="${colorClass}"><strong>${category}</strong></span>
            `;
        });