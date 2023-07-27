function maths(request, response) {
    const {num1, num2} = request.query
    const prod = num1 * num2
    response.json(prod)
}

module.exports = maths