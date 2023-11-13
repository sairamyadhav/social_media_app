from django.urls import path
from .views import MyTokenObtainPairView

urlpatterns = [
    path('login', MyTokenObtainPairView.as_view(), name='login'),
    # path('register', Register.as_view(), name='register'),
]