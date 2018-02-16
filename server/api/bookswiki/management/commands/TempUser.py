class TempUser(object):
    def __init__(self, email, username, password, upvotes, downvotes):
        self.email = email
        self.username = username
        self.password = password
        self.upvotes = upvotes
        self.downvotes = downvotes

class BigUser(object):
    def __init__(self, users):
        self.users = users

def tempuser_decoder(obj):
    if '__type__' in obj and obj['__type__'] == 'TempUser':
        return User(obj['email'], obj['username'], obj['password'], obj['upvotes'], obj['downvotes'])
    return obj

def biguser_decoder(obj):
    if '__type__' in obj and obj['__type__'] == 'BigUser':
        return User(obj['users'])
    return obj
