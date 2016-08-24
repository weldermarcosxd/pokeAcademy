
string="https://img.pokemondb.net/artwork/"

count=0

cat pokemonNames.txt | while read line

do
   url=$string$line

   b=`echo "console.log('$url'.toLowerCase());" | node`

   echo $((count+1))

   wget $b -P /var/www/html/pokeAcademy/img
done
