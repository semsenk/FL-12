// Guessing game

const MAX_LIM = 8;
const RANDOM_VALUE_STEP = 4;
const ATTEMPTS = 3;
const HUNDRET = 100;
const PRIZE_COEF = 2;

let max_range = MAX_LIM;
let attempts;
let posible_prize = 100;
let result_sum = 0;
let first_prize;
let user_guess_is = false;

if (window.confirm('Do you want to play a game?')) {
    let play = true;
    while (play) {
        let win_number = Math.floor(Math.random() * (max_range + 1));

        for (attempts = ATTEMPTS; attempts > 0; attempts--) {
            if (attempts === ATTEMPTS) {
                first_prize = posible_prize;
            }

            let guess = parseInt(prompt(`
            Chose a roulete pocket number from 0 to ${max_range}
            Attempts left: ${attempts}
            Total prize: ${result_sum}$
            Possible prise of current attempt: ${posible_prize}$
            `))
            if (guess === win_number) {
                result_sum += posible_prize;
                user_guess_is = true;
                break;
            }
            posible_prize /= PRIZE_COEF;
        }

        if (user_guess_is) {
            if (confirm(`Congratulation, you won! Your prize is: ${posible_prize}$ Do you want to continue?`)){
                max_range += RANDOM_VALUE_STEP;
                posible_prize = first_prize * PRIZE_COEF;
            } else {
                alert(`Thank you for your participation. Your prize is: ${result_sum}$`);
                if(!confirm(`Do you want to play again?`)) {
                    alert('Game Over!');
                    play = false;
                    break;
                } else {
                    posible_prize = HUNDRET;
                    result_sum = 0;
                    max_range = MAX_LIM;
                }
            }
            user_guess_is = false;
        } else {
            alert(`Thank you for your participation. Your prize is: ${result_sum}$`);
            posible_prize = HUNDRET;
            result_sum = 0;
            max_range = MAX_LIM;

            if (!confirm(`Do you want to try again?`)) {
                alert('Game Over!');
                play = false;
                break;
            }
        }

    }

} else {
    alert('You did not become a billionaire, but can.');
}










 