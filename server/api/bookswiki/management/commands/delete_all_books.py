from django.core.management.base import BaseCommand, CommandError

from bookswiki.models import Book

class Command(BaseCommand):
    help = 'Deletes all books saved in the database'

    def handle(self, *args, **options):
        try:
            Book.objects.all().delete()
            print ('All books deleted')
        except:
            print ('Error while deleting books')
