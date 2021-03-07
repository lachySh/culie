import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from random import randrange
import random

# Use the application default credentials
cred = credentials.Certificate('Culie-d7d736ddeb50.json')
firebase_admin.initialize_app(cred)




db = firestore.client()

curr = db.collection(u'jobs')
docs = curr.stream()

print(docs)

curr_ids = []

for doc in docs:
    curr_ids.append(doc.id)

for ID in curr_ids:
    db.collection(u'jobs').document(ID).delete()

companies = db.collection(u'companies')
docs = companies.stream()

print(docs)

company_id_list = []

for doc in docs:
    company_id_list.append(doc.id)

skills = db.collection(u'skills')
docs = skills.stream()

print(docs)

skill_id_list = []

for doc in docs:
    skill_id_list.append(doc.id)

titles = db.collection(u'jobtitles')
docs = titles.stream()

print(docs)

titles_id_list = []

for doc in docs:
    titles_id_list.append(doc.id)

#job_titles = ["UX/UI Designer", "Web Developer", "CI/CD Manager", "Frontend Tech Lead", "Backend Development Intern", "Infrastructure Manager", "Cloud Services Engineer"]

locations = ["Melbourne, Australia","Sydney, Australia","Canberra, Australia","Brisbane, Australia","Geelong, Australia"]

for company in company_id_list:
    selection = random.sample(titles_id_list, 5)
    for job in selection:
        skill_list = random.sample(skill_id_list, randrange(1,len(skill_id_list)))
        doc_ref = db.collection(u'jobs').document()
        doc_ref.set({
            u'company': company,
            u'currentApplicants': randrange(0, 200),
            u'skillsRequired': skill_list,
            u'jobTitle': job,
            u'location': locations[random.randint(0,len(locations)-1)]            
        })

# # Define a filename.
# filename = "names.txt"

# # Open the file as f.
# # The function readlines() reads the file.
# with open(filename) as f:
#     names = f.readlines()

# for name in names:
#     doc_ref = db.collection(u'companies').document()
#     doc_ref.set({
#         u'name': name,
#         u'companyProfile': {
#             u'benefits': randrange(0, 10),
#             u'careerOpportunities': randrange(0, 10),
#             u'cultureAndValues': randrange(0, 10),
#             u'diversityAndInclusion': randrange(0, 10),
#             u'workLifeBalance': randrange(0, 10),
#         },
#         u'size': randrange(0, 20000)

#     })