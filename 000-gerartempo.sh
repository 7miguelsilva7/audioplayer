exiftool *.mp3 | grep Duration > 000-duracao.txt

sed -i s'/Duration                        \: 0\://'g 000-duracao.txt

sed -i s'/Duration                        \: //'g 000-duracao.txt

sed -i s'/ (approx)//'g 000-duracao.txt

sed -i '/Tracks/d' 000-duracao.txt

ls > 000-arquivos.txt

sed -i s'/\.mp3//'g 000-arquivos.txt
#sed -i s'/0//'g arquivos.txt
#sed -i s'/1//'g arquivos.txt
#ed -i s'/2//'g arquivos.txt
#ed -i s'/3//'g arquivos.txt
#ed -i s'/4//'g arquivos.txt
#sed -i s'/5//'g arquivos.txt
#sed -i s'/6//'g arquivos.txt
#sed -i s'/7//'g arquivos.txt
#sed -i s'/8//'g arquivos.txt
#sed -i s'/9//'g arquivos.txt
sed -i s'/_/ /'g 000-arquivos.txt

zenity --info \
--text="Criado arquivo 000-duracao.txt e 000-arquivos.txt"


