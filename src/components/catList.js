import React from 'react'
import { useCatsData } from '../hooks/useCatsData';

export default function CatList() {
    const { data, isLoading, isError } = useCatsData();
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            {data && (
                <ul>
                    {data.map((cat) => (
                        <li key={cat.id}>
                            <h2>{cat.name}</h2>
                            <p>{cat.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

