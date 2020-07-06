<p  align="center">
<img  height="200px"  src="./docs/logo.png">
</p>

<p  align="center">
Melidriver é um App para motoristas parceiros do mercado livre. A fim de reduzir a complexidade logística do MELI e possibilitar que recebam uma renda extra, beneficiando tanto a cia quando o consumidores.
</p>

:-------------------------:|:-------------------------:
![IOS PNG](/doc/Screen1.png)  |  ![Android PNG](/doc/Screen1.png)

#### Tecnologia:
O app foi desenvolvido em React Native com ajuda do Expo, para facilitar a visualização por vários dispositivos em tempo de desenvolvimento. O React Native permite o desenvolvimento de apps para Android e IOS utilizando Javascript.

#### Ferramentas em destaque no projeto:

* `React Navigation` é utilizado para viabilizar a navegação do usuário pelo app de forma atráves de botões e da barra inferior
* ```Redux``` é utilizado para criar uma fonte única de verdade no app, ou a chamada `loja`, que armazena os dados do app e somente atravez de ações enviadas para esta loja, as informações podem ser alteradas. Isso garante imutabilidade das informações e garante um app mais estável.


##### Rodar o projeto

* Para rodar a versão hospedada, clique [aqui](https://fashion.reinaldowft.com/).

##### Para rodar na sua máquina:

* Caso ainda não possua o `npm`, a forma mais fácil de obtê-lo é instalando o [NodeJS](https://nodejs.org/en/download/)
* O `git` também é necessário, você pode baixá-lo [aqui](https://git-scm.com/)
* Faça o Download ou clone o repo usando `git clone https://github.com/Reinaldooo/fashion.git` em uma janela de terminal
* Entre na pasta com `cd fashion`
* Instale as dependências com `npm i`
* Para iniciar o servidor local, use `npm start`
* O app abrirá automaticamente no seu navegador utilizando a porta `3000`
