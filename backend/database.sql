CREATE TABLE screen_sizes (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(255) NOT NULL,
    size_value VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO screen_sizes (size, size_value) VALUES ('6','40'),('7','44'),('8','49'),('9','53'); /* A VERIFIER LES VALEURS */

CREATE TABLE ram_memories (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    memory_number VARCHAR(255) NOT NULL,
    memory_value VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO ram_memories (memory_number, memory_value) VALUES ('1','30'),('2','40'),('3','50'),('4','60'),('6','70'),('8','80'),('12','90'); /* A VERIFIER LES VALEURS */

CREATE TABLE storage_values (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_storage VARCHAR(255) NOT NULL,
    storage_value VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO storage_values (number_storage,storage_value) VALUES ('16','31'),('32','45'),('65','66'); /* AJOUTER VALUE */

CREATE TABLE states (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    state VARCHAR(255) NOT NULL,
    weighting VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO states (state, weighting) VALUES ('Parfait', '0'), ('Très bon', '0.90'), ('Correct','0.8');

CREATE TABLE smartphones (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    ram VARCHAR(255) NOT NULL,
    storage VARCHAR(255) NOT NULL,
    screen VARCHAR(255) NOT NULL,
    network VARCHAR(255) NOT NULL,
    loader TINYINT(1) NOT NULL DEFAULT 1,
    operatingSystem VARCHAR(255) DEFAULT '',
    operatingSystemVersion VARCHAR(255),
    screen_size_id INT UNSIGNED, FOREIGN KEY (screen_size_id) REFERENCES screen_sizes(id),
    ram_memory_id INT UNSIGNED, FOREIGN KEY (ram_memory_id) REFERENCES ram_memories(id),
    storage_value_id INT UNSIGNED, FOREIGN KEY (storage_value_id) REFERENCES storage_values(id),
    state_id INT UNSIGNED, FOREIGN KEY (state_id) REFERENCES states(id)
)  ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO smartphones (brand, model, ram, storage, screen, network, operatingSystem, operatingSystemVersion)
VALUES ('Apple', 'Iphone 12 Pro','6','256','6', '5G', 'IOS', '16'),
       ('Samsung', 'Galaxy S22 Ultra','12','256','6', '5G', 'Android', '13'),
       ('Google', 'Pixel 6 Pro','12','256','6', '5G', 'Android', '13');
       ('Apple', 'IPhone 8', '8', '2', '64', '4G', 'IOS', '10')
       ('Samsung', 'Galaxy S10 Plus', '4', '32', '128', '4G', 'Android', '11')
       ('Xiaomi', 'Xiaomi 13', '6', '32', '128', '4G', 'Android', '12')
       ('Google', 'Pixel 5 Pro','12','128','6', '5G', 'Android', '14');
       ('Xiaomi', 'Xiaomi 11', '8', '64', '128', '4G', 'Android', '1')

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
        'anthony.gorski@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'Anthony',
        'Gorski',
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
        'anne.louis@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'Anne',
        'Louis',
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
        'marine.deveza@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'Marine',
        'Deveza',
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
        'trung.nguyen@wildcodeschool.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'Trung',
        'Nguyen',
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
        'jean.noiraud@gmail.com',
        '$argon2id$v=19$m=16384,t=2,p=1$k3aFXCpcjyZ2cHpcZPDw3w$gSJbTCadxNikkm/zhTb+IvPDDJyZe0LpZh+5bCE7X+g',
        'Jean-Baptiste',
        'Noiraud',
        0
    );