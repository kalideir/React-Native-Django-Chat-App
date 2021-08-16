  
from chat import consumers

from django.conf.urls import url, path

websocket_urlpatterns = [
    path(r'ws/chatroom/(?P<chatroom_id>\d+)', consumers.ChatConsumer),
]