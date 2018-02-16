from django.core.management.base import BaseCommand, CommandError

from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Deletes all users from django app'

    def handle(self, *args, **options):
        try:
            User = get_user_model()
            User.objects.all().delete()
            print ('All users deleted.')
        except:
            print ('Error deleting users.')
