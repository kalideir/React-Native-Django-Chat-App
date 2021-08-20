from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .models import Chatroom, Message
from .serializers import ChatroomSerializer, MessageSerializer
import json



class ChatroomViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Chatroom.objects.all()
    serializer_class = ChatroomSerializer

    @action(methods=['get'], detail=True, url_path='chat-history')
    def get_chatroom_chat_history(self, request):
        user = request.user
        chatroom = self.get_object()
        data = ChatroomSerializer(chatroom).data 
        return Response({'message': 'success', 'history': data})

    @action(methods=['patch'], detail=True, url_path='exit')
    def exit_chatroom(self, request, pk=None): 
        chatroom = self.get_object()   

        user = request.user
        return Response({}) 


class MessageViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer