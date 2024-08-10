// src/components/ProduitList.js
import React, { useState, useEffect } from 'react';
import { fetchProduits } from '../api/produits.js'; // Importer la fonction depuis le fichier api

const ProduitList = () => {
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduits = async () => {
            try {
                const data = await fetchProduits();
                setProduits(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getProduits();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {produits.map(produit => (
                    <li key={produit.id}>
                        <h2>{produit.name}</h2>
                        <p>{produit.description}</p>
                        <p>Prix: ${produit.price}</p>
                        <p>Stock: {produit.stock}</p>
                        {produit.image && <img src={`http://localhost:8000${produit.image}`} alt={produit.name} width="100" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProduitList;
