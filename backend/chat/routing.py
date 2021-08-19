  
from chat import consumers

from django.conf.urls import url  


websocket_urlpatterns = [
    url(r'ws/chatroom/(?P<chatroom_id>\w+)', consumers.ChatConsumer.as_asgi()),
]