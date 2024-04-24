# Para iniciar o aplicativo mobile:

```bash
# depois de configurar o emulador de android
emulator -avd android -no-snapshot

# e depois

npx react-native run-android
````

## Especificação do projeto e critérios de avaliação

**Projeto Mobile - Satisfying.you**

Descrição geral do projeto:

A pesquisa de satisfação é essencial para entender como os clientes de uma corporação se sentem em relação à empresa. Por meio dos dados coletados, a empresa pode realizar melhorias em seu processo, pessoas e/ou produtos/serviços.

Nesse sentido, é proposto nesta disciplina o desenvolvimento de uma aplicação para dispositivos móveis compatível com Android/iOS para realizar pesquisas com clientes/usuários de uma corporação.

**Os requisitos gerais do projeto são:**

**1. Gestão de usuários:** cadastro e autenticação de usuários, e recuperação de senha;

**2. Gestão de pesquisas:** cada usuário poderá gerenciar diferentes pesquisas de produtos/serviços;

**3. Coleta da satisfação do usuário;**

**4. Produção de relatórios gráficos por pesquisa.**

## Parte 1

A primeira parte do projeto visa o desenvolvimento da interface gráfica do projeto utilizando a biblioteca React-Native sem considerar a autenticação de usuários e persistência de dados. Contudo, é obrigatório seguir as cores, os ícones, o fluxo de navegação, fontes, esquema de layout do protótipo disponível em Figma.

### Os critérios avaliativos da parte 1 e suas respectivas pontuações estão listados abaixo:

**Critério 1 (2,7).** Elaboração de todas as interfaces do aplicativo seguindo o layout e cores do protótipo, incluindo:

- Login

- Criar conta

- Recuperar senha

- Home

- Nova pesquisa

- Modificar pesquisa

- Ações de pesquisa

- Coleta de satisfação

- Agradecimentos

**Critério 2 (1,2).** Checagem de campos nas seguintes telas:

- Login - verificação de e-mail válido

- NovaConta - verificação de senhas iguais e e-mail

- RecuperarSenha - verificação de email válido

- NovaPesquisa - verificação de todos os campos preenchidos

**Critério 3 (1,0).** Criação do componente Card da pesquisa: contendo nome da pesquisa, data da pesquisa e a imagem da pesquisa. Os dados exibidos neste componente devem ser passados por meio de atributos do componente.

**Critério 4 (1,5).** Implementação da barra lateral de navegação (DrawerNavigator)

**Critério 5 (1,0).** Implementação da navegação utilizando Stack Navigator	

**Critério 6 (0,7).** Exibição de caixa de diálogo (pop up) para confirmar exclusão de uma vacina.

**Critério 7 (1,0).** Implementação da interface de relatório de uma pesquisa contendo um gráfico de Pizza, contendo legenda. Utilize dados fictícios.

**Critério 8 (0,9).** Timer de 3 segundos para realizar a transição automática da tela AgradecimentoParticipacao para a tela Coleta.
