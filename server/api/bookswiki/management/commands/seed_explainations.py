from django.core.management.base import BaseCommand, CommandError

from bookswiki.models import Explaination
import csv

class Command(BaseCommand):
    help = 'Adds explainations to the database'

    def add_arguments(self, parser):
        parser.add_argument('seed_file', type=str)

    def handle(self, *args, **options):

        with open(options['seed_file']) as seed_file:
            seed_reader = csv.reader(seed_file, delimiter=',', skipinitialspace=True)
            headers = next(seed_reader)
            counter = 1
            for row in seed_reader:
                try:
                    obj = Explaination()
                    obj.book = row[1]
                    obj.date = row[2]
                    obj.user = row[3]
                    obj.page = row[4]
                    obj.content = row[5]
                    obj.save()
                    counter+=1
                except:
                    print ('Error while creating explaination "%s"' % (counter))
                    counter+=1
            print ('#%d explainations successfully added' % (counter))
