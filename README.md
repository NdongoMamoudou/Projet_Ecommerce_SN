﻿# Projet_Ecommerce_SN

I) Modéls definis et relation entre les tables : 
Catégorie , produit et commande

Category
+----+----------------+-------------+
| ID | Name           | Description |
+----+----------------+-------------+
	      	|
         	|
         	v
Rmq : Chaque produit appartient à une seule catégorie, mais une catégorie peut contenir plusieurs produits.
Produit
+----+----------------+----------------+-------+----------+-----------------+
| ID | Name           | Description    | Price | Stock    | Category (FK)   |
+----+----------------+----------------+-------+----------+-----------------+
         |
         |
         v
Rmq : Chaque commande se réfère à un produit spécifique, mais un produit peut être commandé plusieurs fois dans différentes commandes.

Commande
+----+----------------+----------+-------------------+
| ID | Product (FK)   | Quantity | Ordered_at        |
+----+----------------+----------+-------------------+
