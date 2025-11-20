# ⚛️ Star Wars API Frontend (React Consumer)

Este repositório contém a interface de usuário web, construída com React, que atua como cliente da API REST desenvolvida em Spring Boot.

## ✨ Visão Geral

O objetivo deste projeto é demonstrar a comunicação entre um Frontend moderno (React) e um Backend Java, focando em:

* **Gerenciamento de Estado:** Uso do `useState` para controlar o formulário de busca, resultados e status de carregamento.
* **Comunicação Assíncrona:** Utilização da função nativa `fetch` do JavaScript para fazer requisições HTTP GET para o servidor Java.
* **Renderização Condicional:** Exibir os resultados ou mensagens de erro/carregamento de forma dinâmica, baseada na resposta do Backend.

---

## 🛠️ Tecnologias Principais

* **Framework:** React (usando JSX)
* **Build Tool:** Vite / NPM
* **Linguagem:** JavaScript

---

## 🔗 Como Rodar o Frontend

**AVISO:** O Backend (Spring Boot) deve estar rodando primeiro na porta **8080**.

1.  **Pré-requisitos:** Node.js e npm instalados.
2.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/RaquielRA/star-wars-frontend.git]
    cd star-wars-frontend
    ```
3.  **Instalar Dependências:**
    ```bash
    npm install
    ```
4.  **Iniciar o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação será aberta no seu navegador (geralmente em `http://localhost:5173`).

---

## 🌐 Conexão com o Backend (API)

* **Servidor Consumido:** O projeto faz requisições para a porta 8080.
* **Repositório do Backend:** **[star-wars-app](https://github.com/RaquielRA/star-wars-app.git)**