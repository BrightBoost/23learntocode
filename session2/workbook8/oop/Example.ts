let x: number = 3;

function addTwoNumbers(x: number, y: number): number {
   
    return (x + y); // return type is inferred from the expression's type.
}

let arr: Array<String> = ["str1", "str2"];

function display(): void {

}


get_player_guess_called = ensure_function_call("get_player_guess")
assert get_player_guess_called, "Are you calling the get_player_guess in the for loop? <failed>"


# mock the get_player_guess
def get_player_guess_mock:
  return "GUESS"
mock_function("get_player_guess", get_player_guess_mock)
guessed_words = for_loop["__body__"].find_match("guessed_words")
assert len(guessed_words) is not 0, "Are you adding the guess to the list of guessed words in the for loop? <failed>"


provide_feedback_called = ensure_function_call("provide_feedback")
assert provide_feedback_called, "Are you calling the provide_feedback function in the for loop? <failed>"


def test_play_game_out_of_guesses(monkeypatch, capfd):
    # Mock the input function and random word selection
    monkeypatch.setattr('builtins.input', lambda _: "GUESS")
    monkeypatch.setattr('random.choice', lambda words: "APPLE")

    # Run the game
    game.play_game()

    # Capture the print output
    out, err = capfd.readouterr()
    
    # Check if the game congratulated the player after the first try
    assert "Sorry!" in out
