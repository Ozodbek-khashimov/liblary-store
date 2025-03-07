--  create
--  \! clear
--  \l  hamma malumotlar bazasini ko'rish
CREATE Table users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) not null check (name <> ''),
    birth_date Date default now (),
    age INT CHECK (age > 0),
    email VARCHAR(50) UNIQUE not null
);

INSERT INTO
    users (name, age, birth_date, email)
VALUES
    ('Usmon', 19, '2000-12-12', 'Usmon@gmail.com') RETURning *;

SELECT
    *
FROM
    "user";

CREATE Table departments (id Serial PRIMARY key, name varchar(255) not null)
CREATE Table employees (
    id Serial PRIMARY key,
    name varchar(255) not null,
    department_id INT not null,
    constraint fk_department FOREIGN key (department_id) REFERENCES departments (id) on delete set NULL on update CASCADE
);

--
select
    *
from
    customer
    inner join orders on customer.id = orders.order_id;

-- index
CREATE INDEX idx_name ON users (name);

-- --
-- select
--     *
-- from
--     "user"
-- where
--     salary >= 32406.571428571428
SELECT
    *
FROM
    company_regions
WHERE
    region_id = (
        select
            region_id
        from
            staff
        where
            salary >= (
                SELECT
                    MAX(SALARY)
                FROM
                    staff
            )
    );

--
CREATE TYPE USER_ROLE AS ENUM ('ADMIN', 'USER', 'GUEST');

-- tranzaction
