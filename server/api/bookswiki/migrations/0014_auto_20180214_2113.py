# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-14 19:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookswiki', '0013_auto_20180214_1930'),
    ]

    operations = [
        migrations.AlterField(
            model_name='explaination',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='explaination',
            name='page',
            field=models.CharField(default=-1, max_length=5),
        ),
    ]