import React from 'react';
import {Lista} from './lista';

export class Componente1 extends React.Component {

    initialState = {
        nome: '',
        idade: '',
        email: '',
        telefone: '',
        cep: '',
        dataNascimento: '',
        categorias: ['INFORMATICA', 'REDES', 'ADM']
    }
    state = this.initialState

    limpar() {
        this.setState(this.initialState);
    }

    componentDidMount() {
        setTimeout(_ => this.setState({ ...this.state, nome: 'Rafael' }), 3000);
        setTimeout(_ => this.limpar(), 10000);
    }
    
    renderLista(){
        return this.state.categorias.map((cat, i) => <Lista key={i} texto={cat} />)
    }

    render() {
        return (
            <div>
                <h1>Meu Primeiro Componente - {this.state ? this.state.nome : ''}</h1>
                <ul>
                    {this.renderLista()}
                </ul>
            </div>
        );
    }
}