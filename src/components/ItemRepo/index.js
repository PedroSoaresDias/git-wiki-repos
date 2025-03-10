import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({ repo, handleRemoveRepo }) {
    
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel='noreferrer' target='_blank' >Ver Repositório</a>
            <br />
            <button onClick={handleRemove} 
            className='remover'>Remover</button>
            <hr />
        </ItemContainer>
    )
}
