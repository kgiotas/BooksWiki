from django.conf.urls import url
from . import views

app_name = 'bookswiki'

urlpatterns = [
    url(r'^books/?$', views.BookList.as_view()), 
    url(r'^gpb/?$', views.PopularBooks.as_view()),
    url(r'^register/?$', views.create_user),
    url(r'^addbook/?$', views.addbook),
    url(r'^addexp/?$', views.addexplaination),
    url(r'^addvote/?$', views.addvote),
    url(r'^explaination/?$', views.ExplainationList.as_view()),
    url(r'^bookdetails/(?P<book_id>[0-9]+)/?$', views.getbookdetails),
    url(r'^bookexplainations/(?P<book_id>[0-9]+)/?$', views.getbookexplainations),
    url(r'^book/(?P<pk>[0-9]+)/?$', views.BookDetail.as_view()),
    url(r'^explaination/(?P<pk>[0-9]+)/?$', views.ExplainationDetail.as_view()),
]
