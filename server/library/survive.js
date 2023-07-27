function survive (request, response) {
    const scenarios = [
        'you made it to salon',
        'you died',
        'A snake got you',
        'your horse made it',
        'you found gold',
        'you found oil',
        'you made it your horse did not',
        'you were too drunk to attempt'
    ]

    const randNum = Math.floor(Math.random() * scenarios.length)
    const outcome = scenarios[randNum]

    response.json(outcome)
}

module.exports = survive