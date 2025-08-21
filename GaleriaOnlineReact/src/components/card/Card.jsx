import "./Card.css";

import imgCard from "../../assets/images/nicolas.webp"; // Importando uma imagem de exemplo
import imgPen from "../../assets/images/pen.svg"; // Importando o ícone de caneta
import imgTrash from "../../assets/images/trash.svg"; // Importando o ícone de lixeira


const Card = ({tituloCard}) => {
  return (
    <>
      <div className="cardDaImagem">
        <p>{tituloCard}</p>
        <img className="imgDoCard" src={imgCard} alt="Imagem de exemplo" />
        <div className="icons">
            <img src={imgPen} alt="Ícone de editar" />
            <img src={imgTrash} alt="Ícone de deletar" />
        </div>
      </div>
    </>
  );
};
export default Card;
