import React, {Component} from "react";

export class Pessoa extends Component {
    state ={
        nome:"Gabriel",
        idade: 23,
        comida_favorita: "churrasco",
        musicas:[
            "Pagode", "Rap", "Samba"
        ]
    }

    render(){
        return(
            <>
                <h1>{this.state.nome}</h1>
                <h2>{this.state.idade}</h2>
                <h3>{this.state.comida_favorita}</h3>
                <ul>
                    <li>{this.state.musicas[0]}</li>
                    <li>{this.state.musicas[1]}</li>
                    <li>{this.state.musicas[2]}</li>
                </ul>
            </>
        )
    }
}