-- insert into users
--     (name, email, password)
-- values
--     ('Banana', 'banana@gmail.com', '$2a$10$Eg2fJeOgL2JV6xwL8cL45OvmY8JC.vlZAXVSCUMxzwnDYKzmBsIty'),
--     ('Stevie Cool', 'coolBot@yahoo.com', '$2a$10$Eg2fJeOgL2JV6xwL8cL45OM9CAOqTEVsRH5TCKBpLHtAr4ewSvpqO'),
--     ('Potato Head', 'iH8myLife@spud.gov', '$2a$10$Eg2fJeOgL2JV6xwL8cL45O9M8I3BvQYTopFWfv5jGjPfkw/AAv4tG')
-- ;

insert into methods
    (language, method, description, snippet, display)
values
    ('JavaScript', 'concat', '.concat() requires two arrays, and when called will join the two arrays into one. It does not change the original arrays, it just creates a new array under a new variable name.',
        'const arr1 = ["Steevie", "Ryan"]
    const arr2 = ["Blake", "Rick"]
    const arr3 = arr1.concat(arr2)', 'True'),

    ('JavaScript', 'fill', '.fill() changes all elements in an array into a declared element. .fill can be specified to start and stop at sepcific index values.',
        'const arr1 = ["Pipe","screws","gears"]
    arr1.fill("motors")', 'True'),

    ('JavaScript', 'filter', '.filter() passes back a new array with elements that passed a test.',
        'const arr1 = [1,5,6,7,10,15,14,20]
    function theFunction(value) = {
        return value >= 8;
        ages.filter(theFunction)', 'True'),

    ('JavaScript', 'includes', '.includes() checks if an array contains a specific element, and will return a true or false value. ',
        'const groceryList = [Chicken, Salt, Butter, Bread, Soda]
    groceryList.includes("Milk")', 'True'),

    ('JavaScript', 'indexOf', '.indexOf() combs through an array for the specified value and returns what index position it is located in',
        'const arr1 = ["PapaJohns", "Dominoes", "Little Ceasers", "Pizza Hut"]
    const arr1.indexOf("PapaJohns");', 'True'),

    ('JavaScript', 'join', '.join() takes an array of items and joins them together in a string',
        'const supplies = ["water", "soap", "sponges", "brushes"
    const Stuff = supplies.join(supplies);', 'True'),

    ('JavaScript', 'map', '.map() creates a new array by calling a function on every element of an array, in order.',
        'var Numbas = ["1","2","3","6","15") 
    Numbas.map(Math.sqrt)', 'True'),

    ('JavaScript', 'pop', '.pop() removes the last element in an array',
        'const Animals = ["cow","chicken","sheep","dog","Tiger"]
    Animals.pop()', 'True'),

    ('JavaScript', 'push', '.push() adds a new item to the end of an array',
        'let Animals = ["cow","chicken","sheep","dog"]
    Animals.push("Fox")', 'True'),

    ('JavaScript', 'shift', '.shift() removes the first item in an array',
        'let Animals = ["bear","cow","chicken","sheep","dog"]', 'True'),

    ('JavaScript', 'unshift', '.unshift() adds a new item to the beggining of an array',
        'let Animals = ["cow","chicken","sheep","dog",]
    Animals.unshift("doe")', 'True'),
    ('JavaScript', 'forEach',
        '.forEach() requires an array, and will call a provided function for each value in that array. function(currentValue, index, arr) It is required to pass this function the currentValue, the other two paramaters are optional.',
        'const arr = [1, 2, 3, 4, 5]
arr.forEach(function (numb){
    console.log(numb)
})', 'True')
;

insert into articles
    (method_id, article, display)
VALUES
    (1, 'https://www.w3schools.com/jsref/jsref_foreach.asp', 'True'),
    (1, 'https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead', 'True')
;

insert into videos
    (link, method_id, display)
VALUES
    ('https://www.youtube.com/watch?v=159EAISAxwg', 1, 'True')
;
-- Banana = BananaPeel
-- Stevie = CoolGuy420
-- Potato Head = StarchProblems