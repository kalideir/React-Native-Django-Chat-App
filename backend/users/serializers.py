from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer): 
    profileImage = serializers.ImageField(use_url=False, allow_null=True)

    class Meta:
        model = User
        fields = ('fullName', 'email', 'createdAt', 'updatedAt', 'profileImage')

    def create(self, validated_data):
         return User.objects.create(**validated_data)

