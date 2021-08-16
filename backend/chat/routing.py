  
from chat import consumers

from django.urls import path

websocket_urlpatterns = [
    path(r'ws/chatroom/(?P<chatroom_id>\d+)', consumers.ChatConsumer),
]