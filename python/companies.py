import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from random import randrange

# Use the application default credentials
cred = credentials.Certificate('Culie-d7d736ddeb50.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Define a filename.
filename = "data/company_names.txt"

# Open the file as f.
# The function readlines() reads the file.
with open(filename) as f:
    names = f.readlines()

for name in names:
    doc_ref = db.collection(u'companies').document()
    doc_ref.set({
        u'name': name,
        u'companyProfile': {
            u'benefits': randrange(0, 10),
            u'careerOpportunities': randrange(0, 10),
            u'cultureAndValues': randrange(0, 10),
            u'diversityAndInclusion': randrange(0, 10),
            u'workLifeBalance': randrange(0, 10),
        },
        u'size': randrange(0, 20000)

    })