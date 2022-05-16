DROP TABLE IF EXISTS "user_image";
DROP TABLE IF EXISTS "invested_hours";
DROP TABLE IF EXISTS "assigned_user";
DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "project_image";
DROP TABLE IF EXISTS "project";


CREATE TABLE IF NOT EXISTS "user"
(
    id         VARCHAR(128) PRIMARY KEY,
    first_name VARCHAR(128)        NOT NULL,
    last_name  VARCHAR(128)        NOT NULL,
    email      VARCHAR(128) UNIQUE NOT NULL,
    password   VARCHAR(128),
    level      INT,
    created    TIMESTAMP           NULL,
    updated    TIMESTAMP           NULL,
    last_login TIMESTAMP           NULL
);

CREATE TABLE IF NOT EXISTS "user_image"
(
    user_id       VARCHAR(128) NOT NULL,
    path          VARCHAR(512) NOT NULL,
    original_name VARCHAR(128) NOT NULL,
    uploaded      TIMESTAMP    NULL,

    FOREIGN KEY (user_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS "project"
(

    id              VARCHAR(128) PRIMARY KEY,
    name            VARCHAR(128),
    estimated_hours INT       NOT NULL,
    created         TIMESTAMP NULL,
    updated         TIMESTAMP NULL

);

CREATE TABLE IF NOT EXISTS "assigned_user"
(
    user_id    VARCHAR(128),
    project_id VARCHAR(128),
    created    TIMESTAMP NULL,
    updated    TIMESTAMP NULL,

    FOREIGN KEY (user_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (project_id) REFERENCES "project" (id) ON UPDATE CASCADE ON DELETE RESTRICT


);

CREATE TABLE IF NOT EXISTS "invested_hours"
(
    id         VARCHAR(128) PRIMARY KEY,
    user_id    VARCHAR(128),
    project_id VARCHAR(128),
    start_time TIMESTAMP NULL,
    end_time   TIMESTAMP NULL,
    created    TIMESTAMP NULL,
    updated    TIMESTAMP NULL,

    FOREIGN KEY (user_id) REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (project_id) REFERENCES "project" (id) ON UPDATE CASCADE ON DELETE RESTRICT


);

CREATE TABLE IF NOT EXISTS "project_image"
(
    project_id    VARCHAR(128) NOT NULL,
    path          VARCHAR(512) NOT NULL,
    original_name VARCHAR(128) NOT NULL,
    uploaded      TIMESTAMP    NULL,

    FOREIGN KEY (project_id) REFERENCES "project" (id) ON UPDATE CASCADE ON DELETE RESTRICT


);


INSERT INTO "user" (id, first_name, last_name, email, password, level, created, updated, last_login)
VALUES ('dc48e34f-8a9a-4245-bc81-b2fc275cdcf7', 'Super', 'Admin', 'test@test.com', '$5', 1, '2021-12-01T14:47:23.958Z',
        '2021-12-01T14:47:23.958Z', '2021-12-01T14:47:23.958Z')
RETURNING id, first_name, last_name, email, password, level, created, updated, last_login;

