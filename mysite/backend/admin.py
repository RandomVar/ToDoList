from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Task
# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ('name','created_at','priority','done')
    search_fields = ['name']

admin.site.register(Task, TaskAdmin)