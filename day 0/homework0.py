from turtle import *


#we want to paint a house
#step one draw a square

speed(7)


width(7)
color("red")
begin_fill()

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

#end of square

#drawing a door



forward(70)
left(90)
color("black")
begin_fill()


forward(120)    #height of the door
right(90)

forward(60)     #width of the door
right(90)

forward(120)
end_fill()
#end of door

#drawing a roof

penup()
goto(200, 200)

pendown()

color("black")
begin_fill()



right(150)
forward(200)

left(120)
forward(200)
end_fill()
#end of roof
#making windows


penup()
goto(50, 60)
pendown()
color("cyan")
begin_fill()

right(60)
forward(40)

right(90)
forward(75)

right(90)
forward(40)

right(90)
forward(75)
end_fill()
#end of first window

penup()
goto(150, 135)

pendown()

begin_fill()
left(90)
forward(40)

right(90)
forward(75)

right(90)
forward(40)

right(90)
forward(75)

end_fill()
#end of second window






exitonclick()



