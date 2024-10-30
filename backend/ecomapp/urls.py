from django.urls import path
from ecomapp import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


urlpatterns = [
    path("", views.get_routes, name="get_routes"),
    path("products/", views.get_products, name="get_products"),
    path("product/<str:pk>/", views.get_product, name="get_product"),
    path(
        "users/login/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"
    ),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("users/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("users/", views.get_users, name="get_users"),
    path("users/profile/", views.get_user_profile, name="get_user_profile"),
]
