CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE users (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE KEY,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  role INT(1) NOT NULL DEFAULT (0),
  created DATETIME NOT NULL DEFAULT NOW()
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES (
        'benoit.vandanjon@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'Benoît',
        'Vandanjon',
        1
    );

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES (
        'useradm.test@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'User',
        'Test',
        1
    );

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES (
        'user1.test@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'User1',
        'Test1',
        0
    );

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES (
        'user2.test2@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'User2',
        'Test2',
        0
    );

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES (
        'user3.test3@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'User3',
        'Test3',
        0
    );

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES (
        'user4.test4@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'User4',
        'Test4',
        0
    );
