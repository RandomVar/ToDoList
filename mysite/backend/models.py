
# Create your models here.
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from datetime import datetime
from django.conf import settings
# Create your models here.
class Task(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,default=1, blank=True)
    name = models.TextField()
    # created_at = models.DateField(auto_now_add=True)
    created_at = models.DateField(default=timezone.now,blank=True)
    priority = models.IntegerField(default=0,blank=True)
    done = models.BooleanField(default=False, blank=True)
    # def __unicode__(self):
    #     return self.title