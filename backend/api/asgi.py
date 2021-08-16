import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

import chat.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'chatty.settings')


django.setup()

from channels.security.websocket import AllowedHostsOriginValidator, OriginValidator
import chat.routing as ChatRouting


 
routes = ChatRouting.websocket_urlpatterns 



application = ProtocolTypeRouter({
  "http": get_asgi_application(),
  "websocket": AuthMiddlewareStack(
    URLRouter(
      routes
    )
  )
})