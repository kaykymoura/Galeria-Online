# 🖼️ Galeria Online

O **Galeria Online** é uma aplicação **Fullstack** desenvolvida para exibir e gerenciar imagens em uma galeria virtual.  
O projeto foi construído com **React (Frontend)**, **C# .NET Web API (Backend)** e **SQL Server (Banco de Dados)**, aplicando conceitos de **MVC, consumo de APIs e boas práticas de programação**.  

---

## 🚀 Tecnologias Utilizadas
### 🔹 Frontend
- React  
- JavaScript (ES6+)  
- HTML5, CSS3  

### 🔹 Backend
- C# com .NET Web API  
- Entity Framework Core  
- REST API  

### 🔹 Banco de Dados
- SQL Server  

### 🔹 Outros
- Git e GitHub  
- Visual Studio / VS Code  

---

## 📌 Funcionalidades
✔️ Exibição de imagens em galeria  
✔️ Estrutura responsiva e amigável  
✔️ Integração com API própria  
✔️ Organização modular para expansão futura (ex: upload, categorias, autenticação)  

---

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório
```bash
git clone https://github.com/kaykymoura/galeriaonline.git

# Entrar na pasta do frontend
cd galeriaonline/GaleriaOnlineReact

# Instalar dependências
npm install

# Rodar a aplicação
npm run dev

# Entrar na pasta do backend
cd galeriaonline/GaleriaOnline.WebApi

# Rodar o projeto no Visual Studio ou via CLI
dotnet run

📂 Estrutura do Projeto
GaleriaOnline/
├── GaleriaOnlineReact/       # Frontend em React
│   ├── src/                  # Código principal (componentes, páginas, estilos)
│   └── package.json
│
├── GaleriaOnline.WebApi/     # Backend em C# .NET
│   ├── Controllers/          # Endpoints da API
│   ├── Models/               # Modelos de dados
│   ├── Data/                 # Configuração do banco
│   └── Program.cs
│
└── README.md                 # Documentação

📡 Endpoints da API
🔹 Imagens

GET /api/imagens → Retorna todas as imagens

GET /api/imagens/{id} → Retorna uma imagem pelo ID

POST /api/imagens → Adiciona uma nova imagem

PUT /api/imagens/{id} → Atualiza uma imagem existente

DELETE /api/imagens/{id} → Remove uma imagem

🖥️ Demonstração

📌 (adicione prints ou gifs da aplicação rodando aqui)

Exemplo:


📫 Contato

👤 Desenvolvido por Kayky Moura
🔗 GitHub: @kaykymoura

📧 Email: kaykymoura@gmail.com
