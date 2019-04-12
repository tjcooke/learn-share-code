
-- create table javascript (
--     id serial primary key,
--     methods text
-- )

-- create table python (
--     id serial primary key,
--     methods text
-- )

-- create table npm (
--     id serial primary key,
--     methods text
-- )

-- create table CSS (
--     id serial primary key,
--     methods text
-- )


create table methods (
    id serial primary key,
    language text,
    method text,
    description text,
    snippet text,
    display text
);
create table method_edits (
    id serial primary key,
    method_id integer references methods(id),
    language text,
    method text,
    description text,
    snippet text,
    display text
);

create table articles (
    id serial primary key,
    method_id integer references methods(id),
    method_name text,
    article text,
    display text
);

create table videos (
    id serial primary key,
    method_name text,
    link text,
    method_id integer references methods(id),
    display text
);

create table notes (
    id serial primary key,
    user_id integer,
    comment text,
    method_id integer references methods(id),
    display text
);


create table moderators (
    id serial primary key,
    github_id integer,
    permission text
);

-- create table q_a (
--     id serial primary key,
--     user_id integer,
--     comment text,
--     method text,
--     language text
-- )