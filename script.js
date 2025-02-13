document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        let answers = {
            q1: "A",
            q2: "C",
            q3: "A",
            q4: "A",
            q5: "A",
            q6: "A",
            q7: "A",
            q8: "B",
            q9: "B",
            q10: "C"
        };

        let score = 0;
        let totalQuestions = Object.keys(answers).length;

        for (let key in answers) {
            let selected = document.querySelector(`input[name=${key}]:checked`);
            if (selected && selected.value === answers[key]) {
                score++;
            }
        }

        alert(`Your Score: ${score} / ${totalQuestions}`);
    });