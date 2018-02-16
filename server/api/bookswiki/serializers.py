from rest_framework import serializers
from .models import Book
from .models import Explaination
from .models import FullExplaination
from rest_framework.views import exception_handler
from rest_framework.response import Response


class ExplainationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Explaination
		fields = ('id', 'book','date', 'user', 'page', 'content')

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        allow_null = True
        fields = ('id', 'isbn', 'title','author', 'pub_year', 'publisher', 'imagelink', 'createdday', 'createdby')

class FullExplainationSerializer(serializers.ModelSerializer):
	class Meta:
		model = FullExplaination
		fields = ('id', 'book','content', 'date', 'user', 'page', 'karma', 'votetype')
