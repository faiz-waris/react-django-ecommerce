from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProductSerializer

from .models import Product

# Create your views here.


@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        "Product_List": "/product-list/",
        "Product_Details": "/product-details/<str:pk>",
        "Product_Create": "/product-create/",
        "Product_Update": "/product-update/<str:pk>",
        "Product_Delete": "/product-delete/<str:pk>",
    }
    return Response(api_urls)


@api_view(["GET"])
def productList(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def productDetail(request, pk):
    product = Products.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def productCreate(request):
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["POST"])
def productUpdate(request, pk):
    product = Products.objects.get(id=pk)
    serializer = ProductSerializer(instance=product, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["DELETE"])
def productDelete(request, pk):
    product = Products.objects.get(id=pk)
    product.delete()

    return Response("Item Deleted Successfully!")
