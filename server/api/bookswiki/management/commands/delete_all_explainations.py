from django.core.management.base import BaseCommand, CommandError
from bookswiki.models import Explaination
class Command(BaseCommand):
    help = 'Deletes all users from django app'

    def handle(self, *args, **options):
        try:
            Explaination.objects.all().delete()
            print ('All explainations deleted.')
        except:
            print ('Error deleting explainations.')
