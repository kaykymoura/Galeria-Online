import "./Galeria.css";
import icon from "../../assets/images/upload.svg";
import Botao from "../../components/botao/Botao";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import api from "../../Services/services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const Galeria = () => {
  const [cards, setCards] = useState([]);
  const [imagem, setImagem] = useState(null);
  const [nomeImagem, setNomeImagem] = useState("");

  async function listarCards() {
    try {
      const resposta = await api.get("Imagem");
      console.log("Cards listados com sucesso:", resposta.data);
      setCards(resposta.data);
    } catch (error) {
      console.error("Erro ao listar os cards:", error);
    }
  }

  async function cadastrarCard(e) {
    e.preventDefault();

    if (imagem && nomeImagem) {
      try {
        // FormData é uma caixinha que guarda informações para enviar para o servidor, como fotos e textos.
        const formData = new FormData();
        //append: adiciona/anexa/acrescenta informações à caixinha
        formData.append("Nome", nomeImagem);
        formData.append("Arquivo", imagem);

        await api.post("Imagem/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        await listarCards(); // Atualiza a lista após cadastro

        MySwal.fire({
          title: "✅ Sucesso!",
          text: "Imagem cadastrada com sucesso!",
          icon: "success",
          background: "#0f0f0f",
          color: "#fff",
          confirmButtonText: "Show!",
          backdrop: `
            rgba(0,0,0,0.9)
            left top
            no-repeat
          `,
          didOpen: () => {
            const popup = Swal.getPopup();
            popup.style.boxShadow =
              "0 0 15px #00fff7, 0 0 30px #00ffcc, 0 0 60px #00ff7a";
          },
        });
      } catch (error) {
        MySwal.fire({
          title: "❌ Erro!",
          text: "Não foi possível realizar o cadastro!",
          icon: "error",
          background: "#1a1a1a",
          color: "#ff4d4d",
          confirmButtonText: "Beleza",
        });
        console.error(error);
      }
    } else {
      MySwal.fire({
        title: "⚠️ Atenção!",
        text: "Preencha os campos de Nome e Imagem!",
        icon: "warning",
        background: "#111",
        color: "#ffcc00",
        confirmButtonText: "Ok!",
        didOpen: () => {
          const popup = Swal.getPopup();
          popup.style.boxShadow =
            "0 0 15px #ff0000, 0 0 30px #00ff00, 0 0 45px #0000ff";
        },
      });
    }
  }

async function editarCard(id, nomeAntigo) {
  try {
    const novoNome = prompt("Digite o novo nome da imagem:", nomeAntigo);
    const inputArquivo = document.createElement("input");
    inputArquivo.type = "file";
    inputArquivo.accept = "image/*";
    inputArquivo.style = "display: none"; // igual ao da professora

    // Corrigido: onchange minúsculo no DOM puro
    inputArquivo.onchange = async (e) => {
      const novoArquivo = e.target.files[0];

      const formData = new FormData();
      formData.append("Nome", novoNome);
      formData.append("Arquivo", novoArquivo);

      if (formData) {
        try {
          await api.put(`Imagem/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          await listarCards();

          await MySwal.fire({
            title: "✅ Sucesso!",
            text: "Card editado com sucesso!",
            icon: "success",
            background: "#1a1a1a",
            color: "#00ff99",
            confirmButtonText: "Beleza",
          });
        } catch (error) {
          console.error("Não foi possível editar o card:", error);
          await MySwal.fire({
            title: "❌ Erro!",
            text: "Não foi possível editar o card, tente novamente.",
            icon: "error",
            background: "#1a1a1a",
            color: "#ff4d4d",
            confirmButtonText: "Beleza",
          });
        }
      }
    };

    inputArquivo.click();
  } catch (error) {
    console.error("Erro ao iniciar a edição do card:", error);
    await MySwal.fire({
      title: "❌ Erro!",
      text: "Não foi possível editar o card, tente novamente.",
      icon: "error",
      background: "#1a1a1a",
      color: "#ff4d4d",
      confirmButtonText: "Beleza",
    });
  }
}

  async function excluirCard(id) {
    // Lógica para excluir o card com o ID fornecido
    try {
      await api.delete(`Imagem/${id}`);

      await listarCards(); // Atualiza a lista após exclusão
    } catch (error) {
      await MySwal.fire({
        title: "❌ Erro!",
        text: "Não foi possível excluir o card!",
        icon: "error",
        background: "#1a1a1a",
        color: "#ff4d4d",
        confirmButtonText: "Beleza",
      });
      console.error(error);
    }
  }

  useEffect(() => {
    listarCards();
  }, []);

  return (
    <>
      <h1 className="tituloGaleria">Galeria Online</h1>

      <form className="formulario" onSubmit={cadastrarCard}>
        <div className="campoNome">
          <label>Nome:</label>
          <input
            type="text"
            className="inputNome"
            onChange={(e) => setNomeImagem(e.target.value)}
            value={nomeImagem}
            placeholder="Digite Seu Nome..."
          />
        </div>
        <div className="campoImagem">
          <label className="arquivoLabel">
            <i>
              <img src={icon} alt="Icone de upload de imagem" />
            </i>
            <input
              type="file"
              className="arquivoInput"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </label>
        </div>
        <Botao nomeBotao="Cadastrar" />
      </form>

      <div className="campoCards">
        {cards.length > 0 ? (
          cards.map((e) => (
            <Card
              key={e.id}
              tituloCard={e.nome}
              imgCard={`https://localhost:7031/${e.caminho.replace(
                "wwwroot/",
                ""
              )}`}
              funcaoExcluir={() => excluirCard(e.id)}
              funcaoEditar={() => editarCard(e.id, e.nome)}
            />
          ))
        ) : (
          <p>Nenhum card cadastrado.</p>
        )}
      </div>
    </>
  );
};

export default Galeria;
