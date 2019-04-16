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
        'const arr = [1, 2, 3, 4, 5] arr.forEach(function (numb)
            console.log(numb)})', 'True'),

    ('Python', 'len', ' len() method takes a list and tells you how many items are in that list',
        'list1 = ["cat","dog","rat","fish","hamster","bird"]
    print(len(list1))', 'True'),

    ('Python', 'upper', 'The upper() method returns a string where all characters are in upper case. Symbols and numbers are ignored.', 'txt = "Hello my friends" x = txt.upper() print(x)', 'True'),

    ('Python', 'lower', 'The lower() method returns a string where all characters are lower case. Symbols and Numbers are ignored.', 'txt = "Hello my FRIENDS" x = txt.lower() print(x)', 'True'),

    ('Python', 'replace', 'The replace() method replaces a specified phrase with another specified phrase.', 'txt "I like bananas" x = txt.replace("bananas", "apples") print(x)', 'True'),

    ('CSS', 'align-content', 'align-content declares the alignment when a bit of text does not take up its full flex container','align-content: center;', 'True'),
    
    ('NPM','access','npm acess is used to set certain access levels to documents wether it is public or private, and read only or edit versions',
    '[user]$ npm access restricted [<superImportantPackage>]','True'),

    ('NPM','bin','npm bin shows a NPM bin folder',
    '[users]$ npm bin','True'),

    ('NPM','outdated','npm outdated displays all outdated packages you currently have installed','[users]$ npm outdated','True'),

    ('NPM','doctor','npm doctor checks if you have the correct npm installations to manage your JavaScript packages', '[users]$ npm doctor', 'True'),

    ('NPM','install','npm install downloads a package to your local files','[user]$ npm install nodemon','True'),

    ('NPM','uninstall','npm uninstall removes a package from your local files',
    '[user]$ npm uninstall nodemon','True'),

    ('CSS', 'background-image', 'The background-image property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element.', 'body { background-image: url("paper.gif");}', 'True'),

    ('CSS', 'margins', 'The CSS margin properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).', 'p { margin-top: 100px; margin-bottom: 100px; margin-right: 150px; margin-left: 80px; }', 'True'),

    ('CSS', 'padding', 'The CSS padding properties are used to generate space around an elements content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).', 'div { padding-top: 50px padding-right: 30px; padding-bottom: 50px; padding-left: 80px; }', 'True')

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
    ('https://www.youtube.com/embed/159EAISAxwg', 12, 'True')
;
-- Banana = BananaPeel
-- Stevie = CoolGuy420
-- Potato Head = StarchProblems