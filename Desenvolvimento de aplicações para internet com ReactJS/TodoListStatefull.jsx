import React, { Component } from 'React';

class TodoListstatefull extends Component {

  constructor (props) {
    super(props);
    this.state = {
      items: [
        'tomate',
        'alface',
        'melancia'
      ]
    }
  }

  addItem = (item) => {
    this.setState({items: [...this.state.items, item]}); 
  }


  removeItem = () => {
    this.setState({items: [...this.state.items.slice(1)] })
  }

  render() {
    const { items } = this.state;
    return (
      <div className="bloco-lista">
        <p>Minha lista ClassName</p>
        <ul className="lista-estilizada">
          {items.map(item => <li>{item}</li>)}
        </ul>
        <button onClick={() => this.addItem('Abobora')}>Adicionar item</button>
        <button onClick={() => this.removeItem()}>Remover item</button>
      </div>
    )
  }

}

export default TodoListstatefull;
