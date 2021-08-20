from .models import Chatroom, Message, Request
from rest_framework import serializers
from users.models import User


class UserMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'avatar', 'full_name']


class ChatroomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chatroom
        fields = ['id', 'name', 'recipients']
    
    def to_representation(self, instance):
        data = super(ChatroomSerializer, self).to_representation(instance)
        return data['name'] 



class RequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Request
        fields = '__all__'
    

class MessageSerializer(serializers.ModelSerializer):
    chatroom = ChatroomSerializer(read_only=True)
    user = UserMessageSerializer(read_only=True)
 
    class Meta:
        model = Message
        fields = ['id', 'name', 'chatroom', 'user', 'message']
    