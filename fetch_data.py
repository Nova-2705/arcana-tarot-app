import urllib.request
import json
import os

os.makedirs('src/data', exist_ok=True)
req = urllib.request.Request('https://tarotapi.dev/api/v1/cards', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    with open('src/data/tarot.json', 'w') as f:
        json.dump(data, f)
print("Saved tarot.json")
