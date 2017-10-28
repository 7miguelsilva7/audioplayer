exiftool *.mp3 | grep Duration > duracao.txt

sed -i s'/Duration                        \: 0\://'g duracao.txt

sed -i s'/Duration                        \: //'g duracao.txt

sed -i s'/ (approx)//'g duracao.txt

sed -i '/Tracks/d' duracao.txt

zenity --info \
--text="Criado arquivo duracao.txt."
