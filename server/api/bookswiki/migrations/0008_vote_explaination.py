# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-31 11:09
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bookswiki', '0007_auto_20171230_2053'),
    ]

    operations = [
        migrations.AddField(
            model_name='vote',
            name='explaination',
            field=models.ForeignKey(default=13, on_delete=django.db.models.deletion.CASCADE, to='bookswiki.Explaination'),
            preserve_default=False,
        ),
    ]
