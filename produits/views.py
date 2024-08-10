from django.shortcuts import render
from rest_framework import viewsets
from .models import Produit, Category, Commande
from .serializers import ProduitSerializer , CommandeSerializer , CategorySerializer




class ProduitViewSet(viewsets.ModelViewSet):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CommandeViewSet(viewsets.ModelViewSet):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer
