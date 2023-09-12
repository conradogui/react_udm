import './Car.Details.css'

const CarDetails = ({marca, ano, km, blindado}) => {
  return (
    <div>
        <h3 className="marca">{marca}</h3>
        <p>O carro é do ano de {ano}, com {km}km rodados</p>
        {blindado ? ( <p>Carro blindado</p> ) : (null)}
    </div>
  )
}

export default CarDetails