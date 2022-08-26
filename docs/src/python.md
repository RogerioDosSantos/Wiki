# Python

## Additional Information

- [realpython.com](https://realpython.com)

## Python - Packages

The sequence where the *Python interpreter* search for packages are:

- The directory from which the input script was run or the current directory if the interpreter is being run interactively
- The list of directories contained in the PYTHONPATH environment variable, if it is set. (The format for PYTHONPATH is OS-dependent but should mimic the PATH environment variable.)
- An installation-dependent list of directories configured at the time Python is installed

## Commands

`for (name,value) in <class_name>.__dict__.items(): print name,"=",value`: List all properties in a class

`list=["val1", "val2", ...]` : Create a list of items

`for item in list: print item`: Loop over a list

`dir()`: List defined objects

`dir(<module>)`: Define the objects defined in a module

## WSGI

![](http://tinyurl.com/y8q8aj9h)

WSGI is a specification form application interface contract between applications. 
  - WSGI is not a protocol
  - WSGI is not a implementation, but a specification only.
   
Below is an example of a *Hello World* application the implement the *WSGI* interface.

![](http://tinyurl.com/yctztv82)

Do not write *WSGI* application by hand, use a Frameworks e.g.: Flask.

Although the *Web Frameworks* like *Flask or Django* provides a development server, they are not enough. 

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

### Python - Email Fetcher

```python3
# Fetch Emails
# pip install imap-tools
from imap_tools import MailBox
def Fetch_Email(user, pwd):
    mbox = MailBox('imap.mail.com').login(user, pwd, "INBOX")
    for email in mbox.fetch():
        print(email.date, email.subject, len(email.text or email.html))
        
Fetch_Email("user", "pass")
```

### Python - Analyze Stock Market

```python3
# Analyse Stock market
# pip install yfinance
import yfinance as yf
market = yf.Ticker("MSFT")
# Get stockmarket info
info = market.info
print(info)
# Fetch historical data
historical = market.history(period="1y")
print(historical)
# get actions
actions = market.actions
print(actions)
# get dividends
dividends = market.dividends
print(dividends)
# get splits
splits = market.splits
print(splits)
# get balance sheet
balance_sheet = market.balance_sheet
print(balance_sheet)
# get market news
market_news = market.news
print(market_news)
# show earnings
earnings = market.earnings
print(earnings)
# get recommendation
rec = market.recommendation
print(rec)
# Get another Ticker
market1 = yf.Ticker("AAPL")
market2 = yf.Ticker("TSLA")
market3 = yf.Ticker("GOOG")
# Fetch Market data from multiple tickers
market_data = yf.download("AAPL", "GOOG", start="2019-01-01", end="2019-12-31")
print(market_data)
```

### Python - Image Size Compressor

```python3
# Compress Photo Size
# pip install pyguetzli
import pyguetzli
def Compress(image):
    img = open(image, "rb").read()
    optimized= pyguetzli.process_jpeg_bytes(img, quality=80)
    output = open("optimized", "wb")
    output.write(optimized)
Compress("test.jpg")
```

### Python - PySimpleGui

```python3
# pip install PySimpleGUI
import PySimpleGUI as gui
layout = []
# Label Text
text = gui.Text('This is PysimpleGui', size=(30, 1))
layout.append([text])
# Button
button = gui.Button('Click Me', target='_blank')
layout.append([button])
# Input Box
input_box = gui.Input(key='-IN-')
layout.append([input_box])
# Browse Folders
browse_folder = gui.FolderBrowse()
layout.append([browse_folder])
# Set Image
image = gui.Image('img.png')
layout.append([image])
# Radio Buttons
radio = gui.Radio('Radio', ['A', 'B', 'C'])
layout.append([radio])
# Check Boxes
check = gui.Checkbox('Check', default=True)
layout.append([check])
 
# Set window
win = gui.Window('Window Title', layout, auto_size_text=True)
                                                
event, values = win.read()
win.close()
```

### Python - Merge CSV Files

```python3
# Merge CSV Files
# pip install pandas
from pandas import read_csv
import pandas
import os
def Merge_Csv(files):
    df = pandas.concat(map(read_csv, files), ignore_index=True)
    df.to_csv("merged.csv", index=False)
    print("CSV has Been Merged...")
Merge_Csv(["movies.csv", "movies2.csv", "movies3.csv"])
```

### Python - Automate Databases

```python3
# Database with Python 
# pip install mysql-connector-python
import mysql.connector
# Connect to yout SQL database
sql = mysql.connector.connect(
    host="Your host",
    user="username",
    passwd="",
    database="mydatabase_1"
)
# create table
cursor = sql.cursor()
cursor.execute("CREATE TABLE movies (title VARCHAR(255), rating VARCHAR(255))")
# insert data
query = "INSERT INTO movies (title, rating) VALUES (%s, %s)"
value = ("The Matrix", "7.5")
cursor.execute(query, value)
# Select Data
cursor.execute("SELECT * FROM movies")
myresult = cursor.fetchall()
for x in myresult:
    print(x)
    
# Delete Data
cursor.execute("DELETE FROM movies WHERE title = 'The Matrix'")
# Get Specific Data
cursor.execute("SELECT * FROM movies WHERE title = 'The Matrix'")
myresult = cursor.fetchall()
# Update Data
cursor.execute("UPDATE movies SET rating = '8' WHERE title = 'The Matrix'")
# Delete Table
cursor.execute("DROP TABLE movies")
# Close Connection
sql.close()
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

### Python - Looping

```Python
# Loop until Ctrl-C is pressed
try:
    while True:
       print('Press Ctrl-C to stop')
       time.sleep(0.5)
except KeyboardInterrupt:
    pass
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

#### Compressing / Uncompressing Folder (Zip)

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

### Python - WebProxy

```python3
from mitmproxy import http

def request(flow: http.HTTPFlow):
    # redirect to different host
    if flow.request.pretty_host == "example.com":
        flow.request.host = "mitmproxy.org"
    # answer from proxy
    elif flow.request.path.endswith("/brew"):
    	flow.response = http.HTTPResponse.make(
            418, b"I'm a teapot",
        )
```

### Python - Exceptions

```python3
try:
  raise ValueError('A very specific bad thing happened.')
except Exception as e:
  print('Exception desc: {e}'.format(e=str(e)))
finally:
  print('Enter here no matter what')
```

### Python - Decorated Static Vars

```python3
def static_vars(**kwargs):
    def decorate(func):
        for k in kwargs:
            setattr(func, k, kwargs[k])
        return func
    return decorate
```

### Python - Thread Lock

```python3
import time
import threading
import atexit
from apscheduler.schedulers.background import BackgroundScheduler

lock = threading.Lock()
scheduler = BackgroundScheduler()

def protected_function():
  print('Several threads call this')
  if lock.locked():
    return True
  with lock:
    print('Only 1 thread call this per time')
    time.sleep(10)

def run():
  job_defaults = {
    'coalesce': False,
    'max_instances': 3
  }
  scheduler.add_job(func=execution_loop, trigger="interval", job_defaults=job_defaults, seconds=1)
  scheduler.start()
  print('Press Ctrl-C to stop the execution')
  atexit.register(lambda: shutdown())
  try:
    while True:
      time.sleep(1)
  except KeyboardInterrupt:
    pass

def shutdown():
  scheduler.shutdown()

if __name__ == '__main__':
    run()
```

### Python Packages - Create Requirements File

[Requirements files](https://pip.pypa.io/en/stable/user_guide/#requirements-files) are files containing a list of items to be installed using [pip install](https://pip.pypa.io/en/stable/reference/pip_install/#pip-install) 

```shell
# Create Requirements Files
pip freeze > requirements.txt

# Install using requirements-files
pip install -r requirements.txt
```

### Python - Get debug information

```python3
# Print all variables from a functions
print(locals())
```

### Python - Execute python to get info of a package

```shell
# Find python location
python -c "import sys; print(sys.executable)"

# Find specific package version
python -c "import package_name; print(package_name.__version__)"

# Find specific package location
python -c "import package_name; print(package_name.__file__)"
```

### Python - Photo Editing 

```python3
# Photo Editing 
# pip install pillow
from PIL import Image, ImageFilter
# Resize an image
img = Image.open('img.jpg')
resize = img.resize((200, 300))
resize.save('output.jpg')
# Blur Image
img = Image.open('img.jpg')
blur = img.filter(ImageFilter.BLUR)
blur.save('output.jpg')
# Sharp Image
img = Image.open('img.jpg')
sharp = img.filter(ImageFilter.SHARPEN)
sharp.save('output.jpg')
# Crop Image
img = Image.open('img.jpg')
crop = img.crop((0, 0, 50, 50))
crop.save('output.jpg')
# Rotate Image
img = Image.open('img.jpg')
rotate = img.rotate(90)
rotate.save('output.jpg')
# Flip Image
img = Image.open('img.jpg')
flip = img.transpose(Image.FLIP_LEFT_RIGHT)
flip.save('output.jpg')
# Transpose Image
img = Image.open('img.jpg')
transpose = img.transpose(Image.TRANSPOSE)
transpose.save('output.jpg')
# Convert Image to GreyScale
img = Image.open('img.jpg')
convert = img.convert('L')
convert.save('output.jpg')
```

### Python - Read Excel

```python3
# Read Excel
# pip install pandas
import pandas as pd
df = pd.read_excel('test.xlsx', sheet_name='Sheet1')
# Read Columns
name = df['Name'].to_list()
Id  = df['Id'].to_list()
print(name) # ["haider", "Dustin, "Tadashi"]
print(Id) # [245, 552, 892]
```

### Python - Automate Win, Mac and Linux 

```python3
# Automate Win, Mac and Linux
# pip install PyAutoGUI
import pyautogui as py
# Mouse Movements
py.moveTo(100, 100)
py.moveTo(200, 200, duration=1)
py.click(100, 100)
py.doubleClick(200, 200)
# Keyboard Inputs
py.write('Hello World!', interval=0.25)
py.press('enter')
py.hotkey('ctrl', 'c')
py.keyDown('shift')
py.keyUp('shift')
# Screen Automation
img = py.screenshot('screenshot.jpg')
img.save('screenshot.jpg')
loc = py.locationsOnScreen('icon.jpg')
print(loc)
```

### Python - Grammar Checker

```python3
# Grammar Checker in Python
# pip install gingerit
from gingerit.gingerit import GingerIt
text = "Welcm Progammer to Python"
Grammer = GingerIt()
Correction = Grammer.parse(text)
print(Correction["result"]) # Welcome, Programmer to Python
print(Correction['corrections'])
```
### Python - Spell Checker 

```python3
# Spell Checker in Python 
# pip install pyspellchecker
from spellchecker import SpellChecker as spell
Words = spell.unknown(['Python'  , 'is' , 'a' , 'good' , 'lantyguage'])
for w in Words:
    print(spell.correction(w)) #language
    print(spell.candidates(w)) #{ language }
```
### Python - GUI (Window)

```python3
# Python GUI
# pip install PyQt6
import sys
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QMessageBox, QLabel, QLineEdit
def Application():
app = QApplication(sys.argv)
    win = QWidget()
    win.resize(300, 300)
    win.move(200, 200)
    win.setWindowTitle('Medium Article')
# Create Buttons
    btn = QPushButton('Quit', win)
    
    # Message Box
    QMessageBox.question(win, 'Message',"Are you sure to quit?")
# Label Text
    lbl = QLabel('Hello World', win)
# Button Clicked
    btn.clicked.connect(lambda: QMessageBox.question(win, 'Message',"Are you sure to quit?"))
# Entry Box
    entry = QLineEdit(win)
win.show()
    sys.exit(app.exec())
if __name__ == '__main__':
    Application()
```
### Python - HTTP Client 

```python3
# Request Api 
# pip install requests
import requests
# Get Data
headers = {
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
}
r = requests.get('https://api.example.com', headers=headers)
print(r.status_code) # 200
print(r.headers['content-type'])
print(r.content) # HTML Data
# Login Site
payload = {'username': 'USERNAME', 'userpass': 'PASSWORD'}
r = requests.post('https://example.com/login', data=payload)
print(r.status_code) # 200
```
### Python - AI Convert Speech to Text

```python3
# Convert Speech to Text
#pip install SpeechRecognition
import speech_recognition as sr
def SpeechToText():
Ai = sr.Recognizer()
    with sr.Microphone() as source:
        listening = Ai.listen(source, phrase_time_limit = 6)  
    try:
        command = Ai.recognize_google(listening).lower()
        print("You said: " + command)
        
    except sr.UnknownValueError:
        print("Sorry Can't understand, Try again")
        SpeechToText()
```
### Python - Video Editing

```python3
# Video Editing
# pip install moviepy
from moviepy.editor import *
# Triming the video
clip_1 = VideoFileClip("sample_video.mp4").subclip(40, 50)
clip_2 = VideoFileClip("sample_video.mp4").subclip(68, 91)
final_clip = concatenate_videoclips([clip_1, clip_2])
final_clip.write_videofile("output.mp4")
# Adding VFX
clip_1 = (VideoFileClip("sample_video.mp4").subclip(40, 50).fx(vfx.colorx, 1.2).fx(vfx.lum_contrast, 0, 30, 100))
clip_2 = (VideoFileClip("sample_video.mp4").subclip(68, 91).fx(vfx.invert_colors))
final_clip = concatenate_videoclips([clip_1, clip_2])
final_clip.write_videofile("output.mp4")
# Add Audio to Video
clip = VideoFileClip("sample_video.mp4")
# Add audio to only first 5 sec
clip = clip.subclip(0, 5)
audioclip = AudioFileClip("audio.mp3").subclip(0, 5)
videoclip = clip.set_audio(audioclip)
final_clip.write_videofile("output.mp4")

```
### Python - Watermark PDF files

```python3
# Watermark PDF files
# pip install PyPDF4
import PyPDF4
def Watermark():
    pdf_file= "test.pdf"
    output_pdf= "output.pdf"
    watermark= "watermark.pdf"
watermark_read = PyPDF4.PdfFileReader(watermark)
    watermark_page = watermark_read.getPage(0)
    pdf_reader = PyPDF4.PdfFileReader(pdf_file)
    pdf_writer = PyPDF4.PdfFileWriter()
    for page in range(pdf_reader.getNumPages()):
page = pdf_reader.getPage(page)
        page.mergePage(watermark_page)
        pdf_writer.addPage(page)
    
    # writing output pdf file
    with open(output_pdf, 'wb') as pdf:
        pdf_writer.write(pdf)
Watermark()
```

### Remove background from image 

```python3
# Get Your API: https://www.remove.bg/tools-api
# pip install remove-bg-api
from remove_bg_api import RemoveBg
# Remove from File
bg = RemoveBg("Your API")  
img = bg.remove_bg_file(input_path="img.jpg", out_path="out.jpg")
# Remove from URL
img_url = "https://www.example.com/img"
img = bg.remove_background_from_img_url(input_url=img_url, out_path="out.jpg")
```
### URL Shortener

```python3
# Get your API: https://dev.bitly.com/
# pip install bitly_api
import bitly_api
api_key = ""
req = bitly_api.Connection(api_key)
url = "https://medium.com/"
# Get the short url
short_url = req.shorten(url)
print(short_url)
```

### Calls and SMS

```python3
# Get your API
# pip install twilio
import twilio.rest
acc = "API Key"
token = "API Token"
cli = twilio.rest.Client(acc, token)
# Send SMS
msg = cli.messages.create(to="+xxxxxxxxxx", from_="+xxxxxxxxxx", body="Medium")
# Do Programatic Calls
cli.calls.create(to="+xxxxxxxxxx", from_="+xxxxxxxxxx", twiml='<Response><Say> Medium </Say></Response>',)
```
