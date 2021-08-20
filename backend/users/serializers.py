from .models import User
from rest_framework import serializers
from django.db import transaction
from dj_rest_auth.registration.serializers import RegisterSerializer
from allauth.utils import email_address_exists
from django.contrib.auth.password_validation import validate_password
from allauth.account import app_settings as allauth_settings
from allauth.account.utils import setup_user_email



class UserSerializer(serializers.ModelSerializer): 

    class Meta:
        model = User
        fields = ('full_name', 'username', 'email', 'created_at')

    def create(self, validated_data):
         return User.objects.create(**validated_data)



class CustomRegisterSerializer(RegisterSerializer):
    full_name = serializers.CharField(required=True)
    
    def validate_email(self, email):
        print('###############', email_address_exists(email), email)
        if email and email_address_exists(email):
            raise serializers.ValidationError(
                ("A user is already registered with this e-mail address."))
        return email

    def validate_password(self, password):
        min_length = allauth_settings.PASSWORD_MIN_LENGTH
        if min_length and len(password) < min_length:
            raise serializers.ValidationError(("Password must be a minimum of {0} "
                                                "characters.").format(min_length))
        validate_password(password)
        return password


    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'email': self.validated_data.get('email', ''),
            'password': self.validated_data.get('password1', ''),
            'full_name': self.validated_data.get('full_name', ''),
        }
    @transaction.atomic
    def save(self, request):
        cleaned_data = self.get_cleaned_data()
        user = User.objects.create_user(**cleaned_data)
        setup_user_email(request, user, [])
        return user 