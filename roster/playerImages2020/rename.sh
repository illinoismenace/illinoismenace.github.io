files=*.jpg
for file in $files
do
    newfile=`echo $file | sed 's/\(.*\.\)jpeg/\1png/'`;
    mv "$file" "$newfile"
done  
