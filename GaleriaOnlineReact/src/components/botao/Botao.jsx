import "./Botao.css";

const Botao = ({ nomeBotao, onClick }) => {
    return (
        <button className='botao' onClick={onClick} type='submit'>
           {nomeBotao}
        </button>
    )
}

export default Botao;