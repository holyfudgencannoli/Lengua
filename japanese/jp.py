import pandas as pd
import random





def choice():
	x = random.randrange(30,50)
	print(df.iloc[x,3])
	i = input()
	if i == (df.iloc[x,4]):
		print("yay")
		print("Meaning?")
		m = input()
		if m == (df.iloc[x,5]):
			print("yay")				
		if m != (df.iloc[x,5]):
			print(df.iloc[x,5])

	if i != (df.iloc[x,4]):
		print("boo")
		print(df.iloc[x,4])

df = pd.read_excel("jp_vocab.xlsx", sheet_name="All")


choice()
choice()
