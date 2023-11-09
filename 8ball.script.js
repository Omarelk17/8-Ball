document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const submitButton = document.getElementById("submit");
    const output = document.getElementById("result");

    submitButton.addEventListener("click", () => {
        if (input.value.length != 0) {
            const result = playRound();
            output.textContent = result;
        }
    });

    function playRound() {
        const choices = [
            "I dont think so",
            "maybe",
            "Yes",
            "No",
            "Perhaps",
            "Very Unlikely",
            "Possibly",
            "The chances are slim",
            "Your guess is as good as mine",

        ];

        const randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
    }
});
