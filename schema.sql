create table users
(
    id serial primary key,
    name varchar(100),
    email varchar(200),
    password varchar(500)
);

create table items
(
    id serial primary key,
    title varchar(200),
    description varchar(200),
    photo varchar(200),
    claimed varchar(20),
    price varchar(200),
    user_id integer references users(id)
);

create table comments
(
    id serial primary key,
    user_id integer references users(id),
    item_id integer references items,
    comment varchar(300)
);


create table javascript
(
    id serial primary key,
    methods text,
    news text,

)
create table python
(
    id serial primary key,
    methods text,
    news text
)
create table npm
(
    id serial primary key,
    methods text,
    news text
)
create table CSS
(
    id serial primary key,
    methods text,
    news text
)

create table methods
(
    id serial primary key,
    language text,
    method text,
    description text,
    snippet text
)

create table articles
(
    id serial primary key,
    method text,
    language text,
    article text
)

create table videos
(
    id serial primary key,
    link text,
    language text,
    method text
)

-- create table notes (
--     id serial primary key,
--     user_id integer,
--     comment text,
--     method text,
--     language text
-- )


-- create table q_a (
--     id serial primary key,
--     user_id integer,
--     comment text,
--     method text,
--     language text
-- )