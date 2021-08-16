from django.urls import include, path
from rest_framework import routers
from .views import ChatroomViewSet, MessageViewSet

router = routers.DefaultRouter()
router.register(r'chatrooms', ChatroomViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
]