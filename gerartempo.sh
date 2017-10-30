exiftool *.mp3 | grep Duration > duracao.txt

sed -i s'/Duration                        \: 0\://'g duracao.txt

sed -i s'/Duration                        \: //'g duracao.txt

sed -i s'/ (approx)//'g duracao.txt

sed -i '/Tracks/d' duracao.txt

ls > arquivos.txt

sed -i s'/\.mp3//'g arquivos.txt
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
sed -i s'/_/ /'g arquivos.txt

zenity --info \
--text="Criado arquivo duracao.txt e arquivos.txt"


