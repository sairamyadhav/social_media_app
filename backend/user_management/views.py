from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User
from rest_framework.views import APIView

from base.exceptions import FormDataNotFoundException, FormDataValidationException


# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class GetAllUsers(APIView):
    @staticmethod
    def get(request):
        return Response({User.objects.all().values()}, status.HTTP_200_OK)


class Register(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def post(request):
        try:
            if not (request.data['username'] and request.data['password'] and request.data['email']):
                raise FormDataNotFoundException('Required Fields Missing')
            username, email, password = request.data['username'], request.data['email'], request.data['password']
            if User.objects.filter(username=username).exists():
                raise FormDataValidationException('This username is already taken')
            if User.objects.filter(email=email).exists():
                raise FormDataValidationException('This email is already taken')
            user = User.objects.create_user(username, email, password,
                                            is_superuser=request.data.get('is_superuser', False))
            if user:
                token = MyTokenObtainPairSerializer.get_token(user)
                return Response({'response': "Success", "message": "user successfully created", "data": token},
                                status=status.HTTP_200_OK)
        except FormDataNotFoundException as error:
            return Response({"response": "Failed", "message": error},
                            status=status.HTTP_400_BAD_REQUEST)
        except FormDataValidationException as error:
            return Response({'response': "Failed", "message": error},
                            status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'response': "Failure", 'message': str(error)},
                            status=status.HTTP_400_BAD_REQUEST)
