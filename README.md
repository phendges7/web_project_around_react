# Documentação do Projeto Web ReactJS

## Visão Geral

Este projeto é uma aplicação web inicial em ReactJS que foca na implementação de popups, criação de cartões com imagens e na gestão do estado de maneira eficiente utilizando técnicas avançadas do React, como **elevação de estado**, **contextos**, **hooks** e **referências**. O design segue a metodologia pixel-perfect, com base em layouts fornecidos pelo Figma, garantindo uma reprodução fiel do design.

## Componentes Incluídos

- **Popup**: Componente genérico reutilizável para popups.
- **ImagePopup**: Componente especializado para exibir imagens em popups.
- **Card**: Componente para exibição de cartões, agora com integração com o contexto `CardContext`.
- **NewCard**: Componente para criação de novos cartões, usando hooks e contexto para gerenciar o estado de entrada e adicionar novos cartões.
- **EditProfile**: Componente para editar o perfil do usuário, utilizando o contexto `CurrentUserContext` para gerenciar o estado do usuário.
- **EditAvatar**: Componente para edição do avatar do usuário.

## Instalação

Clone o repositório e instale as dependências necessárias.

```bash
# Clone o repositório
git clone https://github.com/phendges7/web_project_around_react.git

# Navegue até o diretório
cd web-react-project

# Instale as dependências
npm install
```

## Desenvolvimento

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

O projeto será iniciado em `localhost:3000`.

### Construindo para Produção

Para criar uma build para produção:

```bash
npm run build
```

Os arquivos otimizados serão colocados no diretório `build`.

## Estrutura de Pastas

```text
node_modules/
public/
src/
  assets/
  blocks/
  components/
    Footer/
      Footer.jsx
    Header/
      Header.jsx
    Main/
      components/
        Card/
          Card.jsx
        ImagePopup/
          ImagePopup.jsx
        Popup/
          components/
            EditAvatar/
              EditAvatar.jsx
            EditProfile/
              EditProfile.jsx
            NewCard/
              NewCard.jsx
          Popup.jsx
        constants.jsx
      Main.jsx
    App.jsx
  contexts/
    CardContext.js
    CurrentUserContext.js
  images/
  utils/
    api.js
  vendor/
  index.css
  main.jsx
.gitignore
.eslintrc.js
index.html
package-lock.json
package.json
README.md
vite.config.js
```

## Descrição dos Arquivos

### Estrutura Principal

- `src/components/Footer/Footer.jsx`: Componente de rodapé do site.
- `src/components/Header/Header.jsx`: Componente de cabeçalho do site.
- `src/components/Main/components/Card/Card.jsx`: Componente para exibição de cartões.
- `src/components/Main/components/ImagePopup/ImagePopup.jsx`: Componente especializado para exibir imagens em popups.
- `src/components/Main/components/Popup/components/EditAvatar/EditAvatar.jsx`: Componente para edição de avatar.
- `src/components/Main/components/Popup/components/EditProfile/EditProfile.jsx`: Componente para edição de perfil.
- `src/components/Main/components/Popup/components/NewCard/NewCard.jsx`: Componente para criação de novos cartões.
- `src/components/Main/components/Popup/Popup.jsx`: Componente genérico de popup reutilizável.
- `src/components/Main/components/constants.jsx`: Arquivo responsável por armazenar as constantes utilizadas na aplicação, como identificadores de popups e cartões para popular a aplicação.
- `src/components/Main/Main.jsx`: Componente principal que reúne os cartões, o popup de edição e o formulário para adicionar novos cartões. Ele recebe as funções de manipulação de dados (como adicionar, curtir e excluir cartões) através de props.
- `src/App.jsx`: Componente raiz da aplicação. Gerencia o estado global de usuários, cartões e popups, e faz o controle das interações entre componentes.

### Estrutura de Contextos

- `src/contexts/CardContext.js`: Contexto que gerencia o estado e as operações relacionadas aos cartões, como adicionar, curtir, excluir e atualizar os cartões. Ele fornece um estado global acessível por toda a aplicação.
- `src/contexts/CurrentUserContext.js`: Contexto que armazena as informações do usuário atual, como nome, descrição e avatar. Ele facilita o gerenciamento do estado do usuário em toda a aplicação.

### Utilitários

- `src/utils/api.js`: Arquivo com funções responsáveis por fazer chamadas à API para recuperar, adicionar, atualizar e excluir dados, como informações de usuários e cartões. Ele abstrai a comunicação com o servidor, permitindo que a aplicação interaja com os dados.

### Outros Arquivos

- `App.jsx`: Componente raiz da aplicação, onde o estado global (como a lista de cartões) é gerenciado e passado para os componentes filhos.
- `index.css`: Estilos globais da aplicação.
- `main.jsx`: Ponto de entrada principal da aplicação.
- `images/`: Contém imagens utilizadas na aplicação.
- `vendor/`: Bibliotecas de terceiros.
- `.gitignore`: Arquivo para especificar arquivos a serem ignorados pelo Git.
- `.eslintrc.js`: Configuração do ESLint para padronização de código.
- `index.html`: Estrutura HTML principal.
- `package-lock.json` e `package.json`: Gerenciamento de dependências do projeto.
- `vite.config.js`: Configuração do Vite para a aplicação.

## Melhores Práticas

- **Componentes Reutilizáveis**: O componente `Popup` foi projetado para ser reutilizável e flexível, acomodando diferentes tipos de conteúdo. O uso de contextos permite que a lógica de exibição de dados seja compartilhada entre vários componentes.
- **Composição de Componentes**: O `ImagePopup` e outros componentes especializados aproveitam o componente `Popup` para assegurar consistência de estilo e comportamento em toda a aplicação.

- **Gerenciamento de Estado Centralizado**: A elevação de estado, com o gerenciamento de cartões em `App.jsx`, permite um controle centralizado, fácil de gerenciar e propagar para os outros componentes.

- **Uso de Contextos e Hooks**: O uso de `useContext` e `useState` facilita a manutenção do estado de maneira eficiente, reduzindo a necessidade de passar props desnecessárias entre componentes.

- **Design Pixel-Perfect**: A aplicação segue fielmente os layouts do Figma, garantindo uma correspondência exata ao design.

## Funcionalidades do Projeto

- **Fontes Locais**: Integração da fonte "Inter" com diferentes estilos.
- **Metadados HTML**: Incorporação de metadados para SEO, como autor, palavras-chave e descrição.
- **Responsividade**: Adaptação a diferentes tamanhos de tela usando `@media queries`.
- **Grid Layout**: Utilização de layout em grid para organização eficiente do conteúdo.

## ReactJS

Esta aplicação utiliza React para criar componentes reutilizáveis e modulares, facilitando a manutenção e expansão do código. Além disso, foram aplicadas práticas mais avançadas do React, como a elevação de estado e o uso de contextos e hooks.

## Dependências

Fonte Inter do site oficial.

## Link do website

[https://github.com/phendges7/web_project_around_react](https://github.com/phendges7/web_project_around_react)

## Autor

Pedro Henrique

## Meta

Este projeto demonstra o uso inicial do ReactJS com foco em popups e criação de cartões, seguindo boas práticas de desenvolvimento web, design pixel-perfect e gestão avançada de estado com hooks e contextos.

## Licença

Este projeto é de uso livre para fins educacionais e pessoais.
