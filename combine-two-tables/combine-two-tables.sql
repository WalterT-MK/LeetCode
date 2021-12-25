# Write your MySQL query statement below
SELECT Address.city, Address.state, Person.lastName, Person.firstName from Person left join Address on Person.personId = Address.personId;