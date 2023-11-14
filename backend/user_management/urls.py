from django.urls import path
from .views import MyTokenObtainPairView, Register, GetAllUsers

urlpatterns = [
    path('login', MyTokenObtainPairView.as_view(), name='login'),
    path('register', Register.as_view(), name='register'),
    path("get-all-users", GetAllUsers.as_view())
]
