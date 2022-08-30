import './TabelaProdutos.css'
import React from "react";
import produtos from '../../data/produtos'

export default props => {

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <caption>Tabela de produtos</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, i) => (
                        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}