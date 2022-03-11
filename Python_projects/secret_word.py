import random 

def secret_number():
    secret = random.randint(1, 100)
    guessed = False
    attempts = 10
    print('I am thinking of a number between 1 and 100...')
    prompt = 'Enter a number: '
    answer = int(input(prompt))
    while answer != secret and attempts > 0:
        attempts -= 1
        print('Sorry, that is incorrect. You have {} attempts left'.format(attempts))
        if answer > secret:
            print('Hint: try thinking lower.')
        elif answer < secret:
            print('Hint: try thinking higher')
        answer = int(input(prompt))
    if attempts == 0:
        print('Sorry, you have ran out of attempts. The secret number is {}'.format(secret))
    if answer == secret:
        print('Congrats, you have won! The secret number was {}'.format(secret))
        guessed = True
    play_again = 'Do you want to play again? Y/N '
    play_again_answer = input(play_again)
    if play_again_answer == 'Y':
        secret_number()
    else:
        print('Alrighty. Until next time!')
