# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.TextField()),
                ('created_at', models.DateField(default=django.utils.timezone.now, blank=True)),
                ('deadline', models.DateField(default=django.utils.timezone.now)),
                ('priority', models.IntegerField(default=0)),
                ('done', models.BooleanField(default=False)),
                ('user', models.ForeignKey(default=1, blank=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
