from django.db import models
import datetime
import time
import os

from django.contrib.auth.models import AbstractBaseUser
from users.managers import CustomUserManager


class User(AbstractBaseUser):
    REQUIRED_FIELDS = []
    fullName = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True) 
    USERNAME_FIELD = 'username'
    objects = CustomUserManager()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    def get_username(self):
        return self.email

    def __str__(self):
        return self.email

    def is_staff(self):
        return self.is_admin

    def has_perm(self, perm, obj=None):
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        # Simplest possible answer: Yes, always
        return True
    