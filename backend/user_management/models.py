from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager, PermissionsMixin
from django.contrib.auth.hashers import make_password

# Create your models here.

class CustomManager(UserManager):

    # create user should accept username field, and all required fields that user model has defined
    def create_user(self, username, email=None, password=None, **extra_fields):
        if not username:
            raise ValueError("The given username must be set")
        if not email:
            raise ValueError("The given email must be set")
        if not password:
            raise ValueError("The given password must be set")
        extra_fields.setdefault("is_superuser", False)
        user = self.model(username=username, email=email, **extra_fields)
        user.password = make_password(password) # this creates an hashed password and stores in db
        user.save()
        return user

    # create superuser should accept username field, and all required fields
    # that user model has defined
    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(username, email, password, **extra_fields)


class BaseClass(models.Model):
    createdAt = models.DateTimeField('createdat', auto_now_add=True)
    modifiedAt = models.DateTimeField('modifiedat', auto_now=True)
    isDeleted = models.BooleanField('isdeleted', default=False)

    class Meta:
        abstract = True

class User(AbstractBaseUser, PermissionsMixin, BaseClass):
    username = models.CharField(verbose_name='username', null=False, max_length=64, unique=True)
    password = models.CharField(verbose_name='password', null=False, max_length=64)
    email = models.EmailField(verbose_name='email', null=False, max_length=64, unique=True)

    is_superuser = models.BooleanField(verbose_name='issuperuser', default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']

    objects = CustomManager()