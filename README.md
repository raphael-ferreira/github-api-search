
# github-api-search
Projeto de busca de usuários do GitHub e listagem de repositórios, utilizando ***react*** + ***hooks***.

#### Conteúdo do projeto
- Três rotas: `home`, `users`, `user/detail/:login`.
- Tecnologias/ferramentas utilizadas: 
	- **react-router-dom** para criação das rotas.
	- **react-icons** para ícones do projeto.
	- **hooks** para gerenciamento de *state*, *effects* e *context*.
	- **axios** para chamadas de API's.
	- **styled-components** para criação de componentes estilizados.
	- **eslint+prettier** para padronização de código.

#### Como instalar
- `git clone https://github.com/raphael-ferreira/github-api-search.git`
- `cd github-api-search`
- `yarn` ou `yarn install` 
- `yarn start`

#### Como utilizar
- Ao abrir o projeto, clicar no botão **"Ir para usuários"** ou entrar em **Usuários** no menu superior.
- Em usuários, pesquisar por algum **login** de dentro do GitHub, por padrão, é exibido uma lista com os 30 primeiros usuários cadastrados.
- Ao clicar em um usuário, será redirecionado para a página de detalhes do usuário.
- Além de informações do usuário, são exibidos os repositórios, e informações de quais linguagens foram mais utilizadas, tamanho total dos projetos, e quantidade de issues.
---

![image](https://user-images.githubusercontent.com/53406041/80162260-3d24a380-85a9-11ea-8235-62fca680f3c2.png)


> Desenvolvido por: Raphael D. Ferreira - 04/2020
