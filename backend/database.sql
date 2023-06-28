CREATE TABLE smartphones (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    ram VARCHAR(255) NOT NULL,
    storage VARCHAR(255) NOT NULL,
    screen VARCHAR(255) NOT NULL,
    network VARCHAR(255) NOT NULL,
    loader TINYINT(1) NOT NULL,
    operating_system VARCHAR(255) NOT NULL,
    operating_system_version VARCHAR(255) NOT NULL,
    images VARCHAR(255) NOT NULL,
    screen_size_id, FOREIGN KEY (screen_size_id) REFERENCES screen_sizes(id),
    ram_memory_id, FOREIGN KEY (ram_memory_id) REFERENCES ram_memories(id),
    storage_value_id, FOREIGN KEY (storage_value_id) REFERENCES storage_values(id),
    state_id, FOREIGN KEY (state_id) REFERENCES states(id)
)  ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO smartphones (brand) VALUES ("Iphone", "Samsung", "Google");
INSERT INTO smartphones (model) VALUES ("PRO MAX", "A", "Pixel 7a"); /* A redéfinir */
INSERT INTO smartphones (network) VALUES ("3G", "4G", "5G");
INSERT INTO smartphones (operating_system) VALUES ("IOS", "Android");
INSERT INTO smartphones (operating_system_version) VALUES ("10", "11","12","13","14","15","16");

CREATE TABLE screen_sizes (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(255) NOT NULL,
    size_value VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO screen_sizes (size) VALUES ("6","7","8","9"); /* AJOUTER VALUE */

CREATE TABLE ram_memories (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    memory_number VARCHAR(255) NOT NULL,
    memory_value VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO ram_memories (memory_number) VALUES ("1","2","3","4","6","8","12"); /* AJOUTER VALUE */

CREATE TABLE storage_values (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_storage VARCHAR(255) NOT NULL,
    storage_value VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO storage_values (number_storage) VALUES ("16","32","65","128","256","512","1000"); /* AJOUTER VALUE */

CREATE TABLE states (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    state VARCHAR(255) NOT NULL,
    weighting VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO states (state, weighting) VALUES ("Parfait", "0"), ("Très bon", "0.90"), ("Correct","0.8");

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
