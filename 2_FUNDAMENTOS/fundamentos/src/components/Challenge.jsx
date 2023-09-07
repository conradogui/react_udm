const Challenger = () => {
    const num1 = 3
    const num2 = 4
    const somar = () => {
        console.log(num1 + num2)
    }
    return (
        <div>
            <h3>O valor do primeiro número é {num1}</h3>
            <h3>O valor do segundo número é {num2}</h3>
            <button onClick={somar}>Fazer a soma</button>
        </div>
    )
}
export default Challenger