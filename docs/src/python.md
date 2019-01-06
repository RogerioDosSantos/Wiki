# Python

`for (name,value) in <class_name>.__dict__.items(): print name,"=",value`: List all properties in a class

`list=["val1", "val2", ...]` : Create a list of items

`for item in list: print item`: Loop over a list

## How-to

### Python - Function Declaration and usage

```python3
# Function Declaration
def myfunc( parameter ):
	print '- Paramerer: ' % (parameter)
	return

# Function call
myfunc 'Test 01'
myfunc 'Test 02'
```

### Python - Web Scrapping with Beautiful Soup

*Web Scrapping* is the capability to extract information from a *Website*. 

The example below uses *Python 3* to extract the list of leaders from the site [umggaming.com](https://umggaming.com/leaderboards/weekly/activity) using [Beautiful Soup](https://pypi.org/project/beautifulsoup4/).  

Note: You can install *Beautiful Soup* using `apt-get install python3-bs4`

```python3
import requests
from bs4 import BeautifulSoup

# Get the page
page = requests.get('https://umggaming.com/leaderboards/weekly/activity')

# Parse the Page into BeautifulSoup
soup = BeautifulSoup(page.text, 'html.parser')

# Print the desired data
table = soup.find('table', {'id': 'leaderboard-table'})
tbody = table.find('tbody')
for tr in tbody.findAll('tr'):
  place = tr.find_all('td')[0].text.strip()
  user = tr.find_all('td')[1].find_all('a')[0].text.strip()
  print(place, user)
```

