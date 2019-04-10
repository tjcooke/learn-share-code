insert into users
    (name, email, password)
values
    ('Banana', 'banana@gmail.com', '$2a$10$Eg2fJeOgL2JV6xwL8cL45OvmY8JC.vlZAXVSCUMxzwnDYKzmBsIty'),
    ('Stevie Cool', 'coolBot@yahoo.com', '$2a$10$Eg2fJeOgL2JV6xwL8cL45OM9CAOqTEVsRH5TCKBpLHtAr4ewSvpqO'),
    ('Potato Head', 'iH8myLife@spud.gov', '$2a$10$Eg2fJeOgL2JV6xwL8cL45O9M8I3BvQYTopFWfv5jGjPfkw/AAv4tG')
;

insert into methods 
(language, method, description, snippet)
values
('JavaScript', 'arr.forEach()', 
'.forEach() requires an array, and will call a provided function for each value in that array. 
function(currentValue, index, arr)
It is required to pass this function the currentValue, the other two paramaters are optional.',
'const arr = [1, 2, 3, 4, 5]
arr.forEach(function (numb){
    console.log(numb)
})')
;

insert into articles
(method_id, article)
VALUES
(1,'https://www.w3schools.com/jsref/jsref_foreach.asp'),
(1,'https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead')
;

insert into videos
(link, method_id)
VALUES
('https://www.youtube.com/watch?v=159EAISAxwg', 1)
;
-- Banana = BananaPeel
-- Stevie = CoolGuy420
-- Potato Head = StarchProblems