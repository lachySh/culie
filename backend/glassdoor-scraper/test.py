import json

with open ('./websites.json','r') as f:
    data = json.load(f)
    print(data)

from main import main, args

args.url = "https://www.glassdoor.com.au/Overview/Working-at-Amazon-EI_IE6036.11,17.htm"

args.file = "amazon.csv"
main()
