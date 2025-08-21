import "./Galeria.css"; // Importando o CSS específico para a galeria
import icon from "../../assets/images/upload.svg"; // Importando o ícone para o upload de imagens
import Botao from "../../components/botao/Botao";
import Card from "../../components/card/Card";

const Galeria = () => {
  return (
    <>
      <h1 className="tituloGaleria">Galeria Online</h1>
      {/* Conteúdo da galeria vai aqui */}
      <form className="formulario" onSubmit="">
        <div className="campoNome">
          <label>Nome:</label>
          <input
            type="text"
            className="inputNome"
            placeholder="Digite Seu Nome..."
          />
        </div>
        <div className="campoImagem">
          <label className="arquivoLabel">
            <i>
              <img src={icon} alt="Icone de upload de imagem" />
            </i>
            <input type="file" className="arquivoInput" />
          </label>
        </div>
        <Botao nomeBotao="Cadastrar" />
      </form>
      <div className="campoCards">
        <Card tituloCard="Nicolas Maduro" />
        <Card tituloCard="Donald Trump" />
        <Card tituloCard="Joe Biden" />
        <Card tituloCard="Vladimir Putin" />
        <Card tituloCard="Xi Jinping" />
        <Card tituloCard="Jair Bolsonaro" />
        <Card tituloCard="Luiz Inácio Lula da Silva" />
        <Card tituloCard="Angela Merkel" />
        <Card tituloCard="Emmanuel Macron" />
        <Card tituloCard="Justin Trudeau" />
      </div>
    </>
  );
};

export default Galeria;
