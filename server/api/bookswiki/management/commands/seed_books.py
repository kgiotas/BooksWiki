from django.core.management.base import BaseCommand, CommandError

from bookswiki.models import Book
import csv

class Command(BaseCommand):
    help = 'Adds books to the database'

    def add_arguments(self, parser):
        parser.add_argument('seed_file', type=str)

    def handle(self, *args, **options):

        with open(options['seed_file']) as seed_file:
            seed_reader = csv.reader(seed_file, delimiter=';', skipinitialspace=False)
            headers = next(seed_reader)
            counter = 1
            for row in seed_reader:
                obj = Book()
                obj.id = counter
                obj.isbn = row[0]
                obj.title = row[1]
                obj.author = row[2]
                obj.pub_year = row[3]
                obj.publisher = row[4]
                obj.imagelink = row[6]
                obj.createdby = row[9]
                obj.createdday = row[8]
                obj.save()
                counter+=1
