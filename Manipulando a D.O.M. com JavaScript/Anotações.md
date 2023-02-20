# D.O.M
document Object model

- o DOM  HTML é um padrao de como **acessar e modificar os elementos HTML de uma página.**

## BOM 
- browser object model

**tudo que esta dentro de um objeto window.**

### Manipulando um DOM

Métodos

selecionando eleemntos de uma página

- document.getElementsById('titulo');
- documnet.getElementsByTagName('li');
- document.getElementsByClassName('textos');
- document.queryselectorAll('li, opcao');


adiciona e deleta

 
Método​

Descrição​

- document.createElement(element)​ = Cria um novo elemento HTML​

- document.removeChild(element)​ = Remove um elemento​

- document.appendChild(element)​ = Adiciona um elemento​

- document.replaceChild(new, old)​ = Substitui um elemento​


#### trabalhando com estilos

Element.classList

- Element.classList.add = adiciona a classe "meu estilo"

- Element.classList.remove = Remove a classe "classe"

- Element.classList.add("dark-mode") = adiciona a classe "dark-mode" caso ela nao tenha e se tiver ele remove.


#### CSS

acessando diretamente o CSS de um elemento

- document.getElementsByTagname("p").style.color = "blue";


#### Eventos

Ação que o usuario realiza na página

eventos do mouse 

- mouseouver
- mouseout

eventos de click 

- click
- dbclick = click duplo

Tipos

Eventos de atualização 

- change
- load


Adicionando Eventos

.addEventListener("click", outraFuncao);

Atributo HTML 

Especifica a funcão a ser chamada diretamente no HTML

<h1 onclick="mudaTexto"(this)"Clique aqui!"></h1>

