# SuperKnow

O **SuperKnow** é um aplicativo desenvolvido em **React Native** criado para fãs do Universo Cinematográfico Marvel (MCU). O app consulta uma API externa para trazer informações detalhadas sobre os filmes, como data de lançamento, sinopse, duração e saga.

O design foi totalmente customizado, inspirado na estética visual de *Vingadores: Ultimato*, utilizando um tema escuro com detalhes em dourado para imersão do usuário.

<div align="center">
  <img src="https://github.com/user-attachments/assets/1168f204-dbdb-4fda-b69f-6ebc8e3927bf" width="300" alt="Demonstração do SuperKnow" />

  
</div>
<br/>
* O fluxo de navegação e arquitetura do app pode ser visualizado abaixo:

[![](https://mermaid.ink/img/pako:eNqdVM1S2zAQfhWNGGZgJkAckz8f2kkDtHQIZZpwqcNBidaxBltKJZkCcQ59lE4PPfUp8mJdyW4KDKf6IGvX3_ftj9Za0bniQCOaZOrbPGXaksnJVBJ8xhatvb1zufk9F4oMlsv9fXJw8IYMU5jfDgqbrq5Nsfmh8eOFWjCu3q4rZrXu7pKzrLhXhANBNEgr5mzza_NTVd-3Mk60vER_6XSEjCeQMcfy1tGQcWasVjcVzTs95UxomDHj1dPyn96LJDbfNbAqQ_Za5LHIS_JB5RC7hVxplSssWLKsjujdDvlOWcySDBWWIgumSzJhMxOPQBbkXCaAndA3T6ObYrbQbJk63PjBWMhJfMnuYFH1gaA9wApqjnucoG_ySN0JMPGFMNb34kxkObyKxIQTkUF8BRrf5IiM1UxDjQTJX55JIavqBGccTOWvovkiB_dCGfL-dFKSwdV5vDcaXrvNfi2IWw_7OP50WVY8l2P8GSNhAx4ZGTLNzbM2bFGeOVFfCyBSeaCT4CyL_RqRE7AsSzETrqqKn-nUlXoVPE9V2HpiXpR4aqzIMJUnw2bsQ1YPFEGNLNpJWJKE_cZcZUpHO81OMwzChpuzW4h2wjB8yvPZ_QfP_0I1r0bWvCRJtiTc0wZdaMFpZHUBDZqDzpkz6crJTalNIYcpjXDLmb6d0qlcI2fJ5Bel8r80rYpFSqOEZQatYsmZhRPBcATzrVf7cxqqQloaBZ2-F6HRit7TqBW0D3v9oHfcOw46aLQb9AFBrcOg2-keB-1OpxV2W-11gz76qM3DfrPXb3Z7YbMbtINuP2xQ4MIqPaouFX-3rP8ADz9pMw?type=png)](https://mermaid.live/edit#pako:eNqdVM1S2zAQfhWNGGZgJkAckz8f2kkDtHQIZZpwqcNBidaxBltKJZkCcQ59lE4PPfUp8mJdyW4KDKf6IGvX3_ftj9Za0bniQCOaZOrbPGXaksnJVBJ8xhatvb1zufk9F4oMlsv9fXJw8IYMU5jfDgqbrq5Nsfmh8eOFWjCu3q4rZrXu7pKzrLhXhANBNEgr5mzza_NTVd-3Mk60vER_6XSEjCeQMcfy1tGQcWasVjcVzTs95UxomDHj1dPyn96LJDbfNbAqQ_Za5LHIS_JB5RC7hVxplSssWLKsjujdDvlOWcySDBWWIgumSzJhMxOPQBbkXCaAndA3T6ObYrbQbJk63PjBWMhJfMnuYFH1gaA9wApqjnucoG_ySN0JMPGFMNb34kxkObyKxIQTkUF8BRrf5IiM1UxDjQTJX55JIavqBGccTOWvovkiB_dCGfL-dFKSwdV5vDcaXrvNfi2IWw_7OP50WVY8l2P8GSNhAx4ZGTLNzbM2bFGeOVFfCyBSeaCT4CyL_RqRE7AsSzETrqqKn-nUlXoVPE9V2HpiXpR4aqzIMJUnw2bsQ1YPFEGNLNpJWJKE_cZcZUpHO81OMwzChpuzW4h2wjB8yvPZ_QfP_0I1r0bWvCRJtiTc0wZdaMFpZHUBDZqDzpkz6crJTalNIYcpjXDLmb6d0qlcI2fJ5Bel8r80rYpFSqOEZQatYsmZhRPBcATzrVf7cxqqQloaBZ2-F6HRit7TqBW0D3v9oHfcOw46aLQb9AFBrcOg2-keB-1OpxV2W-11gz76qM3DfrPXb3Z7YbMbtINuP2xQ4MIqPaouFX-3rP8ADz9pMw)

### Tecnologias Utilizadas

Este projeto combina consumo de dados externos com uma interface rica. As principais tecnologias foram:

* [React Native](https://reactnative.dev/) (Framework principal)
* [Firebase Auth](https://firebase.google.com/docs/auth) (Gerenciamento de Login e Cadastro)
* [Axios](https://axios-http.com/) (Requisições HTTP à API do MCU)
* [React Navigation](https://reactnavigation.org/) (Navegação Stack e Bottom Tabs)
* [Vector Icons](https://github.com/oblador/react-native-vector-icons) (Ícones Feather)

## Dependências e Versões Necessárias

Para rodar este projeto, você precisará do ambiente React Native configurado.

* Node.js
* Android Studio (Para emulador Android)
* Conta no Firebase (Para configurar a autenticação)
* API: O projeto consome a [MCU API](https://mcuapi.up.railway.app/api/v1/movies)

## Como rodar o projeto ✅

1. Clone o repositório e instale as dependências:

```bash
git clone https://github.com/cesarbarts/SuperKnowAppRN.git
cd SuperKnowAppRN
npm install
# ou
yarn install
```

2. **Configuração do Firebase:**
   * Crie um projeto no Console do Firebase.
   * Adicione o app Android e baixe o `google-services.json` para a pasta `android/app/`.
   * Ative o método de autenticação por **Email/Senha**.

3. Para rodar no Android:

```bash
npx react-native run-android
```

4. Para rodar no iOS (apenas Mac):

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

## Como rodar os testes

```bash
npm test
```

## 📌 Funcionalidades Detalhadas 📌

* **Sistema de Login Completo:** Cadastro e autenticação persistente (o app lembra do usuário logado mesmo ao fechar) utilizando Firebase.
* **Catálogo de Filmes:** Listagem dinâmica consumindo a API, com imagens de capa e títulos.
* **Detalhes em Modal:** Ao clicar em um filme, um Modal animado exibe a sinopse, duração, data de lançamento e saga, sem perder o contexto da lista.
* **Tema Dark/Gold:** Estilização manual (`StyleSheet`) focada em contraste e identidade visual única.
* **Navegação Híbrida:** Uso de `Stack Navigator` para o fluxo de entrada e `Tab Navigator` para a área logada.

## ⚠️ Problemas enfrentados

Durante a construção do SuperKnow, lidei com desafios de integração e UI.

### Problema 1: Exibição de Detalhes sem Navegar
Eu queria que o usuário visse os detalhes do filme rapidamente, sem ter que carregar uma nova tela inteira e depois voltar.
* **Como solucionar:** Utilizei o componente `Modal` do React Native com fundo transparente (`transparent={true}`). Isso permitiu criar uma sobreposição visual elegante, onde o usuário mantém a referência da lista ao fundo enquanto lê os dados do filme.

### Problema 2: Gerenciamento de Sessão do Usuário
Havia dificuldade em saber quando renderizar a tela de Login ou a Home, causando "piscas" na tela ou redirecionamentos errados.
* **Como solucionar:** Implementei o hook `useEffect` no `App.tsx` escutando o método `onAuthStateChanged` do Firebase. Também utilizei um estado de renderização condicional: se `user` existe, renderiza a Home; se não, o Login.

## ⏭️ Próximos passos

Futuras atualizações para o SuperKnow:

1. **Favoritos:** Permitir que o usuário salve seus filmes preferidos no Firestore.
2. **Busca:** Adicionar uma barra de pesquisa para filtrar filmes pelo título.
3. **Trailers:** Integrar com o YouTube para exibir o trailer dentro do modal.
