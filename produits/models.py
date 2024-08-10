from django.db import models

# Create your models here.



class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Produit(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    stock = models.IntegerField()
    image = models.ImageField(upload_to='products/')

class Commande(models.Model):
    product = models.ForeignKey(Produit, related_name='orders', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    ordered_at = models.DateTimeField(auto_now_add=True)
