
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from random import randrange
import random

# Use the application default credentials
cred = credentials.Certificate('Culie-d7d736ddeb50.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

curr = db.collection(u'jobtitles')
docs = curr.stream()

print(docs)

curr_ids = []

for doc in docs:
    curr_ids.append(doc.id)

for ID in curr_ids:
    db.collection(u'jobtitles').document(ID).delete()

areas = db.collection(u'areasofwork')
docs = areas.stream()

print(docs)

area_id_list = []

for doc in docs:
    area_id_list.append(doc.id)

prefixes = ["UX/UI", "Cloud", "Google Services", "Internal Systems", "Database", "Blockchain", "Productivity", "CI/CD", "DevOps", "Backend"]
suffixes = ["Engineer", "Developer", "Tech Lead","Manager", "Data Manager", "Data Analyst", "Analyst", "Researcher"]

for prefix in prefixes:
    for suffix in suffixes:
        job_title = prefix + " " + suffix
        doc_ref = db.collection(u'jobtitles').document()
        doc_ref.set({
            u'name': job_title,
            u'relevantAreasOfWork': random.sample(area_id_list, random.randint(1,3))           
        })