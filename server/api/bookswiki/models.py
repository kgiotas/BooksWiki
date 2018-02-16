from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Book(models.Model):
	id = models.AutoField(primary_key=True)
	isbn = models.CharField(max_length=10)
	title = models.CharField(max_length=200)
	author = models.CharField(max_length=200)
	pub_year = models.IntegerField('publication year', default=1970)
	publisher = models.CharField(max_length=200)
	imagelink = models.CharField(max_length=100, default='#')
	createdby = models.CharField(max_length=100, default='defaultuser')
	createdday = models.DateField(default='1970-1-1')
	def __str__(self):
		return str(self.id) + ': ' + str(self.title)


class Vote(models.Model):
	explaination = models.IntegerField('expid', default=-1)
	type = models.CharField(max_length=4,default="neut")
	username = models.CharField(max_length=65, default="no_username_provided")

	def __str__(self):
		return str(self.explaination) + ', type:' + str(self.type)


class Explaination(models.Model):
	id = models.AutoField(primary_key=True)
	book = models.IntegerField(default=-1)
	date = models.DateField()
	user = models.CharField(default="defuser",max_length=64)
	page = models.CharField(max_length=5, default=-1)
	content = models.CharField(default="default", max_length=10000)

	def __str__(self):
		return str(self.id) + ', bookid:' + str(self.book) + ", user: " + str(self.user)

class FullExplaination(models.Model):
	id = models.AutoField(primary_key=True)
	book = models.IntegerField(default=-1)
	content = models.CharField(default="default", max_length=10000)
	date = models.DateField()
	user = models.CharField(default="defuser",max_length=64)
	page = models.CharField(max_length=5, default=-1)
	karma = models.CharField(default="1",max_length=5)
	votetype = models.CharField(default="neut",max_length=4)

	def __str__(self):
		return str(self.id) + ', bookid:' + str(self.book) + ", user: " + str(self.user)
