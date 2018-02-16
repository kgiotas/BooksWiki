from django.core.management.base import BaseCommand, CommandError

import sys
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from bookswiki.models import Vote
import csv
import json

class Command(BaseCommand):
    help = 'Seeds the database with usernames, passwords, e-mails found from various datasets all over the Internet. Note: This might take a long time due to adding Vote objects too.'

    def add_arguments(self, parser):
        parser.add_argument('seed_file', type=str)

    def handle(self, *args, **options):
        User = get_user_model()
        with open(options['seed_file']) as data_file:
            data = json.load(data_file)
            counter = 0;
            for x in range(0, 363):
                user = User.objects.create_user(username=data['allusers'][x]['username'], email=data['allusers'][x]['email'])
                user.set_password(data['allusers'][x]['password'])
                uvs = 0;
                dvs = 0;
                for y in data['allusers'][x]['Upvotes']:
                    uvs = uvs + 1;
                for y in range(0, uvs):
                    vote = Vote()
                    vote.explaination = data['allusers'][x]['Upvotes'][y]
                    vote.type = 'up'
                    vote.username = data['allusers'][x]['username']
                    vote.save()
                for downvote in data['allusers'][x]['Downvotes']:
                    dvs = dvs + 1;
                for y in range(0, dvs):
                    vote = Vote()
                    vote.type = 'down'
                    vote.username = data['allusers'][x]['username']
                    vote.explaination = data['allusers'][x]['Downvotes'][y]
                    vote.save()
                counter = counter +1
                print ('#%d users added' % (counter))
