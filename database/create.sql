create schema name_gator;

create table name_gator.item (
    id serial,
    type text not null, 
    description text not null,
);

insert into name_gator.item (type, description) values ('prefix', 'Air');
insert into name_gator.item (type, description) values ('prefix', 'Jet');
insert into name_gator.item (type, description) values ('prefix', 'Flight');
insert into name_gator.item (type, description) values ('suffix', 'Hub');
insert into name_gator.item (type, description) values ('suffix', 'Station');
insert into name_gator.item (type, description) values ('suffix', 'Mart');