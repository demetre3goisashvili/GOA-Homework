
import random
kids = ["გიორგი ჭანკვეტაძე", "თორნიკე თაბუკაშვილი", "მათე ოკინაშვილი", "ცოტნე ბაჯელიძე","ცოტნე ნებიერიძე","დათო ბერუაშვილი", "ნიკოლოზ კუკავა", "გიორგი პაპუნაშვილი", "დემე გოათისაშვილი", "სანდრო სურიაკოვი", "დიმიტრი უგრეხელიძე", "იოანე ცერცვაძე", "ლაშა თაზიაშვილი", "ნიკა სუხიშვილი", "ანა გრიგოლია", "გეგა დევდარიანი", "ანა ჯოხაძე", "ლუკა ღვინჯილია"]
random.shuffle(kids)
groups = [kids[0:4],kids[4:8],kids[8:12]]

nashti = kids[12:]


for i in nashti:
    index = random.randint(0,2)
    groups[index].append(i)

print(groups[0])
print(groups[1])
print(groups[2])






# მასივის სიგრძე რამდენი ჯგუფია