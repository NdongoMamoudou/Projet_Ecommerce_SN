// src/api/produits.js
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/produits/';

export const fetchProduits = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching produits:', error);
        throw error;
    }
};
