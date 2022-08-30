import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React (Arrow _)</h1>

        <div className="Cards">

        <Card titulo="#8 - Renderização Condicional" color="#C44444">
            <ParOuImpar numero={21}></ParOuImpar>
        </Card>

        <Card titulo="#7 - Desafio repetição" color="#1E2CBA">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#6 - Repetição" color="#2F4F4F">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 - Componente com Filhos" color="#111">
        <Familia sobrenome="Binatti">
            <FamiliaMembro nome="Iaguito"/>
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana"/>
        </Familia>
        </Card>

        <Card titulo="#4 - Desafio aleatório" color="#6495ED">
        <Aleatorio max={10} min={1} />
        </Card>

        <Card titulo="#3 - Fragmento" color="#FF7F50">
        <Fragmento />
        </Card>
        
        <Card titulo="#2 - Com parâmetro" color="#40E0D0">
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={8.7}
        />
        </Card>

        <Card titulo="#1 - Primeiro componente" color="#DE3163">
        <Primeiro/>
        </Card>

        </div>


    </div>