# from django.shortcuts import render

# Create your views here.
# from django.contrib.auth.models import Task
from backend.models import Task
from rest_framework import viewsets
from backend.serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
# class TaskViewSet(  mixins.CreateModelMixin,
#     mixins.RetrieveModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     mixins.ListModelMixin,  GenericViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    search_fields = ('name', 'priority',  'done')
    filter_fields = ('priority', 'done')
    def myview(_request):

        response = HttpResponse(json.dumps({"key": "value", "key2": "value"}))
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "*"
        return response
