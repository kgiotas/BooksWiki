# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-30 18:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bookswiki', '0004_auto_20171230_1502'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=32)),
                ('status', models.CharField(max_length=7)),
            ],
        ),
        migrations.AlterField(
            model_name='explaination',
            name='status',
            field=models.OneToOneField(default='neutral', on_delete=django.db.models.deletion.CASCADE, related_name='vote', to='bookswiki.Vote'),
        ),
    ]