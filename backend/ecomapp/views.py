from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# from .products import products
from .models import Products
from .serializers import ProductsSerializer


# Create your views here.
@api_view(["GET"])
def get_routes(request):
    return Response({"Hello": "World"})


@api_view(["GET"])
def get_products(request):
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)
