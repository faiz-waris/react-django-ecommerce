from django.contrib import admin
from .models import Product

admin.site.site_header = "React-Django-Ecommerce Backend Dashboard"

# Register your models here.
admin.site.register(Product)
