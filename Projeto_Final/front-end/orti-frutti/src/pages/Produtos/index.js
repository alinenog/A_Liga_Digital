/*Produtos*/
import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Card } from 'antd';
import './styles.css'

export default function Produtos(){
    const [ produtos, setProdutos ] = useState([])

    useEffect(() => {
        api.get('/item')
        .then((response) =>{
        setProdutos(response.data)
        })
    .catch((err) => {
        console.log("Aconteceu um erro inesperado" + err)
    })
    }, [])

    return(
        <div className="produto_container">
            <h1>Relação de todos os produtos</h1>
            <div className="produto_card_container">
                {produtos.map(produto => (
                    <Card key={produto.id} title={produto.name} bordered={false} style={{width: 300}}>
                        <p>
                            Descrição:{produto.description} 
                        </p>
                        <p>
                            Quantidade:{produto.quatity}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    )
}