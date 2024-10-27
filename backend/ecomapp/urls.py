from django.urls import path
from ecomapp import views

urlpatterns = [
    path("", views.get_routes, name="get_routes"),
    path("products/", views.get_products, name="get_products"),
    path("product/<str:pk>/", views.get_product, name="get_product"),
]
