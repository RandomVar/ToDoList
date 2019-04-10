from rest_framework.routers import DefaultRouter

from .views import TaskViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)
# urlpatterns=[
#     # url(r'^',  )),
#      url(r'^$', include(router.urls)),
#     url(r'^api-auth/$', include('rest_framework.urls', namespace='rest_framework'))
# ]
urlpatterns = router.urls