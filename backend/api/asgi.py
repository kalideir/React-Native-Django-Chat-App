  
import os
import django
# from decouple import config

from channels.auth import AuthMiddlewareStack

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", f'{config("PROJECT_NAME")}.settings')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'api.settings')

django.setup()

from channels.routing import ProtocolTypeRouter, URLRouter

from channels.security.websocket import AllowedHostsOriginValidator, OriginValidator
import chat.routing as ChatRouting


 
routes = ChatRouting.websocket_urlpatterns 



application = ProtocolTypeRouter({
    "websocket": 
    # AuthMiddlewareStack(
        URLRouter(
            routes
        )
    # ),
})