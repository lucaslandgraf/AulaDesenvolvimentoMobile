# 📱 Desenvolvimento de Aplicativos Móveis

Este repositório é o registro completo dos projetos, exercícios e anotações desenvolvidos para a disciplina de **Desenvolvimento de Aplicativos Móveis**. O foco principal foi a criação de aplicações híbridas *full-stack* utilizando **React Native** (Expo) integradas a um Back-end em **Node.js** e persistência de dados com **MySQL**.

---

## 🚀 Stack Tecnológica

O desenvolvimento dos projetos foi baseado na seguinte *stack* tecnológica:

| Tecnologia | Descrição | Badge |
| :--- | :--- | :--- |
| **React Native** | Framework principal para o desenvolvimento do frontend móvel. | ![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| **Node.js** | Utilizado para a criação do backend e APIs RESTful. | ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) |
| **Expo** | Ferramenta essencial para simplificar o desenvolvimento, *build* e testes do React Native. | ![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) |
| **MySQL** | Sistema de gerenciamento de banco de dados relacional, acessado via **XAMPP** para ambiente local. | ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) |
| **VS Code** | A *Integrated Development Environment* (IDE) utilizada para todo o desenvolvimento. | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) |

---

## 💡 Projetos e Conceitos Chave

Os principais módulos e conceitos explorados nos projetos deste repositório incluem:

### 1. 💰 App Financeiro (Exemplo de Componentização)
Um aplicativo de gestão financeira pessoal focado em UI/UX e Componentização.
*   **Conceitos:** `FlatList`, `StyleSheet`, Componentes Funcionais, Passagem de Props.

### 2. 🚗 CRUD de Dados (Integração API)
Implementação de um sistema completo de *CRUD* (Create, Read, Update, Delete) conectando o App Mobile a uma API REST.
*   **Tecnologias:** Node.js (Express) para o backend e MySQL para persistência.
*   **Conceitos:** `fetch API`, `Async/Await`, `useEffect`, `useState`, Conexão com Banco de Dados.

### 3. 🔐 Sistema de Autenticação (JWT)
Exploração de mecanismos de segurança para proteger rotas e dados.
*   **Conceitos:** `jsonwebtoken` (JWT), Middleware de autenticação no Node.js, Armazenamento de estado de usuário.

### 4. 🧭 Navegação Avançada
Estudo e implementação dos diferentes tipos de navegação no React Native:
*   **Stack Navigator:** Navegação em pilha.
*   **Tab Navigator:** Menu inferior.
*   **Drawer Navigator:** Menu lateral.

---

## ⚠️ Nota sobre a Estrutura do Repositório

> A organização dos códigos e a separação por "aulas" neste repositório refletem o meu processo de aprendizado e prática pessoal. A estrutura pode não seguir estritamente o cronograma ou o planejamento diário exato do professor, pois houve momentos de adiantamento, foco em tópicos específicos ou prática de conteúdos complementares.

---

## 📅 Cronograma Detalhado da Disciplina

Abaixo, o cronograma detalhado das aulas, conforme o planejamento da disciplina. Esta seção é crucial para contextualizar o conteúdo de cada pasta do repositório.

### Primeiro Bimestre

| Data | Aula | Conteúdo Abordado |
| :--- | :--- | :--- |
| 28/Jul | Aula 01 | Intro Mobile e React Native e Instalação das Ferramentas |
| 31/Jul | Aula 02 | Olá Mundo, Intro ao JSX, Criando componentes, Fragmentos, Estilização (Stylesheet) - Alinhamentos, tamanhos, cores, botões e Prática. |
| 04/Aug | Aula 03 | Estilização (Stylesheet) - Entendendo os eixos (FLEXBOX) e ícones. |
| 07/Aug | Aula 04 | Trocando Página Principal, adicionando Imagens (assets), Identificando o OS, Comunicação Direta e Indireta entre os componentes. |
| 11/Aug | Aula 05 | Utilizando Listas (ScrolView, ListView, FlatList). |
| 14/Aug | Aula 06 | Prática (Melhorando um aplicativo básico e estilizado), Inputs (TextInputs) e Destructuring de Objetos. |
| 18/Aug | Aula 07 | Gerenciando o Estado do Aplicativo com Redux, Prática (Adicionando Redux ao Projeto). |
| 21/Aug | Aula 08 | Navegação - Stack. |
| 25/Aug | Aula 09 | Navegação - Tab e Drawer. |
| 28/Aug | Aula 10 | Dedicação ao Projeto (prática), Inserindo Vídeos em Aplicativos. |
| 11/Sep | Aula 14 | Hooks: useState. |
| 15/Sep | Aula 15 | Hooks: useEffect. |
| 29/Sep | Aula 16 | Adicionando Efeitos Visuais e JWT. |
| 02/Oct | Aula 17 | Conectando a um banco de dados local. |
| 06/Oct | Aula 18 | Prática (Adicionando Hooks). |

### Segundo Bimestre

| Data | Aula | Conteúdo Abordado |
| :--- | :--- | :--- |
| 16/Oct | Aula 19 | Criando um BackEnd em Node.js para as próximas aulas. |
| 20/Oct | Aula 20 | Conectando a uma API REST (Read e Create). |
| 23/Oct | Aula 21 | Conectando a uma API REST (Update e Delete). |
| 30/Oct | Aula 23 | Criando apps Nativos com Linguagem de Programação Específica de Android (Java e Kotlin). |
| 03/Nov | Aula 24 | Criando apps Nativos com Linguagem de Programação Específica de Android (Java e Kotlin). |
| 06/Nov | Aula 25 | Criando apps Nativos com Linguagem de Programação Específica de iOS (Swift). |
| 13/Nov | Aula 26 | Criando apps Nativos com Linguagem de Programação Específica de iOS (Swift). |
| 17/Nov | Aula 27 | Deploy da aplicação para lojas. |

---

## ⚙️ Como Executar os Projetos

Para rodar os projetos de React Native e Node.js contidos neste repositório, siga os passos abaixo:

### Pré-requisitos
*   **Node.js** instalado.
*   **XAMPP** instalado e com o serviço **MySQL** ativo.
*   Aplicativo **Expo Go** no celular ou um emulador Android/iOS.

### 1. Rodando o Back-end (API)

1.  Navegue até a pasta do servidor (ex: `backend` ou `node`).
2.  Instale as dependências e inicie o servidor:
    ```bash
    # Instale as dependências
    npm install
    
    # Inicie o servidor (verifique o script de inicialização no package.json)
    npm run dev
    # ou
    node server.js
    ```
    *O servidor rodará geralmente na porta `3000` ou `5000`.*

### 2. Rodando o Front-end (App Mobile)

1.  Navegue até a pasta do projeto mobile (ex: `pfinancas` ou `aula-201025`).
2.  Instale as dependências e inicie o Expo:
    ```bash
    # Instale as dependências
    npm install
    
    # Inicie o Expo
    npx expo start
    ```
3.  Leia o QR Code gerado com o aplicativo **Expo Go** para visualizar a aplicação no seu dispositivo.

### 3. Configuração do Banco de Dados

Para os projetos que utilizam banco de dados, certifique-se de:
1.  Iniciar o serviço MySQL no XAMPP.
2.  Criar o banco de dados necessário (ex: `aulanode`) via PHPMyAdmin.
3.  Verificar o arquivo de conexão do Node.js (geralmente `db/mysqlConnect.js` ou similar) para garantir que as credenciais (`host`, `port`, `user`, `password`, `database`) estejam corretas.

---

## ✒️ Autor

Desenvolvido por **[Lucas Landgraf - a partir das aulas de Alex Junior Nunes]** durante a disciplina de Desenvolvimento de Aplicativos Móveis.
