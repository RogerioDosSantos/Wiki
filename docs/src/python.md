# Python

## Additional Information

- [realpython.com](https://realpython.com)

## Commands

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

### Python - Multi-Threading

```python3
from multiprocessing import Thread
import os
import math

def calc():
	for i in range(0, 70000000):
		math.sqrt(i)

threads = []
for i in range(os.cpu_count()):
	print('registering thread %d' % i)
	threads.append(Thread(target=calc))

for thread in threads:
	thread.start()

for thread in threads:
	thread.join()
```

### Python - Multi-Processing

```python3
from multiprocessing import Process
import os
import math

def calc():
	for i in range(0, 70000000):
		math.sqrt(i)

processes = []
for i in range(os.cpu_count()):
	print('registering process %d' % i)
	processes.append(Process(target=calc))

for process in processes:
	process.start()

for process in processes:
	process.join()
```

### Python - Call external process

Call an external command (as if I'd typed it at the Unix shell or Windows command prompt)

```python3
import subprocess
import sys

# Sync call - Receive the return code of the execution
subprocess.call(["ls", "-l"])

# Sync call - Run command with arguments. Wait for command to complete. If the return code was zero then return, otherwise raise CalledProcessErro
try:
	subprocess.check_output(["echo", "Hello World!"])
except subprocess.CalledProcessError as ex:
	print('Error!:' + str(ex))

# Async call - You cannot close the current execution
pid = subprocess.Popen([sys.executable, "longtask.py"])

# Async call - You can close the current execution (However the program stay executing until the chield proccess exit)
DETACHED_PROCESS = 0x00000008
pid = subprocess.Popen([sys.executable, "longtask.py"], creationflags=DETACHED_PROCESS).pid

# Async call - You can close the current execution (The chield proccess runs totally independent of the current execution)
CREATE_NEW_CONSOLE = 0x00000010
pid = subprocess.Popen([sys.executable, "longtask.py"], creationflags=CREATE_NEW_CONSOLE).pid
```

### Python - File Manipulations

```python3
# open/open modes
# r  = open for read (default)
# w  = open for write, truncate
# r+ = open for read/write
# w+ = open for read/write, truncate
# a+ = open for read/append
animals = open('animals.txt', 'a+')

# read
text = animals.read()
print text
animals.seek(0)

# read lines
for animal in animals:
	print animal,

# write/append
animals.write('elephant\n')
animals.write('frog\n')

# close
animals.close()
```

### Python - Argument list

```python3
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("square", type=int, help="display a square of a given number")
parser.add_argument("-v", "--verbosity", type=int, choices=[0, 1, 2], help="increase output verbosity")
args = parser.parse_args()

answer = args.square**2
if args.verbosity == 2:
    print("the square of {} equals {}".format(args.square, answer))
elif args.verbosity == 1:
    print("{}^2 == {}".format(args.square, answer))
else:
    print(answer)
```

```python3
import argparse

parser = argparse.ArgumentParser(description='Description of your program')
parser.add_argument('-f','--foo', help='Description for foo argument', required=True)
parser.add_argument('-b','--bar', help='Description for bar argument', required=True)
args = vars(parser.parse_args())

if (args.foo):
    print 'foo called!'

if args['foo'] == 'Hello':
    print 'foo called!'

if args['bar'] == 'World':
    print 'bar called!'
```

### Python - Port forward 

```python3
import socket
import sys
import thread
import time

def main(setup, error):
    # open file for error messages
    sys.stderr = file(error, 'a')
    # read settings for port forwarding
    for settings in parse(setup):
        thread.start_new_thread(server, settings)
    # wait for <ctrl-c>
    while True:
       time.sleep(60)

def parse(setup):
    settings = list()
    for line in file(setup):
        # skip comment line
        if line.startswith('#'):
            continue

        parts = line.split()
        settings.append((int(parts[0]), parts[1], int(parts[2])))
    return settings

def server(*settings):
    try:
        dock_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        dock_socket.bind(('', settings[0]))
        dock_socket.listen(5)
        while True:
            client_socket = dock_socket.accept()[0]
            server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            server_socket.connect((settings[1], settings[2]))
            thread.start_new_thread(forward, (client_socket, server_socket))
            thread.start_new_thread(forward, (server_socket, client_socket))
    finally:
        thread.start_new_thread(server, settings)

def forward(source, destination):
    string = ' '
    while string:
        string = source.recv(1024)
        if string:
            destination.sendall(string)
        else:
            source.shutdown(socket.SHUT_RD)
            destination.shutdown(socket.SHUT_WR)

if __name__ == '__main__':
    main('port-forward.config', 'error.log')
```

```ini
80 localhost 8080
# 10020 x.x.x.x 10040
```

### Python - Classes

#### Definition 

```python3
class Dog:

    def __init__(self, name):
        self.name = name
        self.tricks = []    # creates a new empty list for each dog

    def add_trick(self, trick):
        self.tricks.append(trick)
```

#### Usage

```python3
d = Dog('Fido')
e = Dog('Buddy')
d.add_trick('roll over')
e.add_trick('play dead')
d.tricks
e.tricks
```

### Python - Logging

#### Global Logging

```python3
import logging

# Log Messages
logging.debug('This is a debug message')
logging.info('This is an info message')
logging.warning('This is a warning message')
logging.error('This is an error message')
logging.critical('This is a critical message')

name = 'Roger'
logging.error('%s raised an error', name)
logging.error(f'{name} raised an error')

# Log Config

## Allow Log all levels
### E.g.: DEBUG:root:This will get logged
logging.basicConfig(level=logging.DEBUG)

## Allow log to file changing the log print format
### E.g.: root - ERROR - This will get logged to a file
logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')

## Output Formats

### E.g.: 18472-WARNING-This is a Warning
logging.basicConfig(format='%(process)d-%(levelname)s-%(message)s')

### E.g.: 2018-07-11 20:12:06,288 - Admin logged in
logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)

### E.g.: 12-Jul-18 20:53:19 - Admin logged out
logging.basicConfig(format='%(asctime)s - %(message)s', datefmt='%d-%b-%y %H:%M:%S')

# Stack Trace
a = 5
b = 0

try:
  c = a / b
except Exception as e:
  logging.error("Exception occurred", exc_info=True)

try:
  c = a / b
except Exception as e:
  logging.exception("Exception occurred")

```

#### Logger Object 

```python3
# logging_example.py

import logging

# Create a custom logger
logger = logging.getLogger(__name__)

# Create handlers
c_handler = logging.StreamHandler()
f_handler = logging.FileHandler('file.log')
c_handler.setLevel(logging.WARNING)
f_handler.setLevel(logging.ERROR)

# Create formatters and add it to handlers
c_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
f_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)

# Add handlers to the logger
logger.addHandler(c_handler)
logger.addHandler(f_handler)

logger.warning('This is a warning')
logger.error('This is an error')
```

### Python - Download file from URL

Download file and save in disk (Temp folder)

```python3
import urllib
urllib.urlretrieve ("http://www.example.com/songs/mp3.mp3", "/tmp/mp3.mp3")
```

Download file and display a progress bar

```python3
import urllib2

url = "http://download.thinkbroadband.com/10MB.zip"

file_name = url.split('/')[-1]
u = urllib2.urlopen(url)
f = open(file_name, 'wb')
meta = u.info()
file_size = int(meta.getheaders("Content-Length")[0])
print "Downloading: %s Bytes: %s" % (file_name, file_size)

file_size_dl = 0
block_sz = 8192
while True:
    buffer = u.read(block_sz)
    if not buffer:
        break

    file_size_dl += len(buffer)
    f.write(buffer)
    status = r"%10d  [%3.2f%%]" % (file_size_dl, file_size_dl * 100. / file_size)
    status = status + chr(8)*(len(status)+1)
    print status,

f.close()
```

### Python - Creating temporary files and directories

```python3
import tempfile

# create a temporary file and write some data to it
fp = tempfile.TemporaryFile()
fp.write(b'Hello world!')
# read data from file
fp.seek(0)
fp.read()
b'Hello world!'
# close the file, it will be removed
fp.close()

# create a temporary file using a context manager
with tempfile.TemporaryFile() as fp:
  fp.write(b'Hello world!')
  fp.seek(0)
  fp.read()
b'Hello world!'

# file is now closed and removed

# create a temporary directory using the context manager
with tempfile.TemporaryDirectory() as tmpdirname:
  print('created temporary directory', tmpdirname)

# directory and contents have been removed
```

### Python - Directories and Files

#### Remove folder if exists

```python3
import shutil

dir = 'path_to_my_folder'
if os.path.exists(dir):
    shutil.rmtree(dir)
os.makedirs(dir)
```

#### Copy folder recursively

```python3
from shutil import copytree, ignore_patterns

# Every File
copytree(source, destination, ignore=ignore_patterns('*.pyc', 'tmp*'))

# Ignoring some files
copytree(source, destination, ignore=ignore_patterns('*.pyc', 'tmp*'))
```

#### Compressing / Uncompressing Folder

```python3
# Compress folder - When uncompressed it will not keep the example
shutil.make_archive('/home/test/example', 'zip', '/home/test/example')

# Compress folder - When uncompressed it will keep the example
shutil.make_archive('/home/test/example', 'zip', '/home/test/', 'example')

# Uncompress folder
shutil.unpack_archive("example.zip", extract_dir="/tmp")
```

### Python - TinyDB

#### Installation

```python3
pip install tinydb
```

#### Usage

```python3
from tinydb import TinyDB, Query

# Open database
db = TinyDB('db.json')

# Open database in memory
from tinydb.storages import MemoryStorage
db = TinyDB(storage=MemoryStorage)

# Insert Data
db.insert({'type': 'OSFY', 'count': 700})
db.insert({'type': 'EFY', 'count': 800})

# Get all data
db.all()

# Search Data
Magazine = Query()
db.search(Magazine.type == 'OSFY')
db.search(Magazine.count > 750)

# Update Data
db.update({'count': 1000}, Magazine.type == 'OSFY')

# Remove Data
db.remove(Magazine.count < 900)

# Remove all 
db.purge()
```

