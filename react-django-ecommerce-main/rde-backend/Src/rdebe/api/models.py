import uuid
from django.db import models

# Create your models here.


class Product(models.Model):
    product_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_name = models.CharField(max_length=100)
    sku = models.CharField(max_length=75, default="")
    category = models.CharField(max_length=50, default="")
    subcategory = models.CharField(max_length=50, default="")
    price = models.IntegerField(default=0)
    desc = models.CharField(max_length=300)
    pub_date = models.DateField()
    image = models.URLField(max_length=200, default="https://i.imgur.com/oV5jba1.png")

    def __str__(self):
        return self.product_name
