const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <p>{nome}, idade de {idade}, profissao {profissao} e </p>
        <div>
            {idade >= 18 ? (
                <div>
                    <p>{nome} pode dirigir</p>
                </div>
            ) : (
                <div>
                    <p>{nome} não pode dirigir</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default UserDetails