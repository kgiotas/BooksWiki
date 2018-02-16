from .models import Book
from .models import Explaination
from .models import FullExplaination
from .models import Vote
from .serializers import BookSerializer
from .serializers import ExplainationSerializer
from .serializers import FullExplainationSerializer
from rest_framework import generics
from django.contrib.staticfiles import views
from django.core import serializers
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth import get_user_model
from django.shortcuts import redirect
from django.shortcuts import render, get_object_or_404
from rest_framework.renderers import JSONRenderer
from django.http import JsonResponse
from .pagination import StandardResultsSetPagination
from django.db import connection
import datetime

def index(request, path=''):
    if (path.endswith('.js')):
        return views.serve(request, path)
    else:
        return views.serve(request, 'index.html')

def create_user(request):
    User = get_user_model()
    user = User.objects.create_user(username=request.POST['username'], email=request.POST['email'])
    user.set_password(request.POST['password'])
    user.save()
    return redirect('http://localhost:4200/main')

# Adds a new book to the database
def addbook(request):

    obj = Book()
    obj.isbn = request.POST['bookcreator_input_isbn']
    obj.title = request.POST['bookcreator_input_title']
    obj.author = request.POST['bookcreator_input_author']
    obj.pub_year = request.POST['bookcreator_input_pubyear']
    obj.publisher = request.POST['bookcreator_input_publisher']
    obj.imagelink = request.POST['bookcreator_cover_link']
    obj.createdby = request.user.username
    obj.createdday = datetime.datetime.now().strftime ("%Y-%m-%d")
    obj.save()
    return redirect('http://localhost:4200/main')

# Gets book object from book id
def getbookdetails(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    serializer = BookSerializer(book)
    return JsonResponse(serializer.data, safe=False)

# adds a new or changes an existing vote in database
def addvote(request):
    queryset = Vote.objects.filter(username=request.user.username).filter(explaination=request.POST['expid']);
    if len(queryset) == 1:
         for item in queryset:
             item.type=request.POST['type']
             item.save()
    else:
        obj = Vote()
        obj.explaination=request.POST['expid']
        obj.type=request.POST['type']
        obj.username=request.user.username
        obj.save()
    return HttpResponse()

# adds a new explaination to the database
def addexplaination(request):
    if request.user.is_authenticated():
        obj = Explaination()
        obj.book = request.POST['bookid']
        obj.date = datetime.datetime.now().strftime ("%Y-%m-%d")
        obj.user = request.user.username
        obj.page = request.POST['page']
        obj.content = request.POST['contenta']
        obj.save()
        return redirect('http://localhost:4200/book/' + obj.book + '/1')

# returns all book explainations from the database.
def getbookexplainations(request, book_id):
    queryset = FullExplaination.objects.raw("select id, book, content, date, user, page, (select count(*) from bookswiki_vote where type='up' and explaination=bookswiki_explaination.id)-(select count(*) from bookswiki_vote where type='down' and explaination=bookswiki_explaination.id) as karma,IFNULL((select type from bookswiki_vote where username='"+request.user.username+"'), 'neut') as votetype from bookswiki_explaination where book="+ book_id +" order by page ASC, karma DESC")
    serializer = FullExplainationSerializer(queryset, many=True)
    response = JsonResponse(serializer.data, safe=False)
    return response

# returns 6 recently created books
class PopularBooks(generics.ListCreateAPIView):
    serializer_class = BookSerializer
    def get_queryset(self):
        queryset = Book.objects.all().order_by('-createdday')[:6]
        return queryset

class BookList(generics.ListCreateAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = Book.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

# returns all books
class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# returns all explainations
class ExplainationList(generics.ListCreateAPIView):
    serializer_class = ExplainationSerializer

    def get_queryset(self):
        queryset = Explaination.objects.all()
        return queryset

class ExplainationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Explaination.objects.all()

    serializer_class = ExplainationSerializer
