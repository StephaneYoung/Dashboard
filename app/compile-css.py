import glob
import os
import shutil

outputfile = open("style.less", "w")
outputfile.seek(0)
outputfile.truncate()
outputfile.close()

dirs = os.walk(".")
less_files = []
for items in dirs:
	if(items[0].startswith("./components")):
		files = os.listdir(items[0])
		for file_items in files:
			if(file_items.endswith(".less")):
				less_files.append(items[0]+ "/" + file_items)

with open("style.less", 'wb') as outfile:
	for data in less_files:
		print(data)
		with open(data, 'rb') as readfile:
			shutil.copyfileobj(readfile, outfile)