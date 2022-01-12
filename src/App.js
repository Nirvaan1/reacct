import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./App.css";

class App extends React.Component {

  state = {
    clients : [
      {id: 1, nom: "Nirvaan Guilloux"},
      {id: 2, nom: "Cyril Gane"},
      {id: 3, nom: "Megane Fox"},
      {id: 4, nom: "Scarlett Johansson"}
    ],
    nouveauClient: "",
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) =>
        client.id === id
    );

    clients.splice(index, 1)

    this.setState({clients});
  }

  handleAdd = client => {
    const clients = this.state.clients.slice();
    clients.push(client)

    this.setState({clients})
  }

  render(){
    const title = "Liste de clients"

    return(<div>
      <h1>{title}</h1>
      <ul>
        {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete}/>
        ))}
      </ul>
      <ClientForm onClientAdd={this.handleAdd}/>

    </div>)

  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
);


export default App;