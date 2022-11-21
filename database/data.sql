insert into "users" (
  "userId",
  "firstName",
  "lastName",
  "email",
  "password"
) values (
  1,
  'Brandon',
  'Au',
  'design.brandonau@gmail.com',
  'iloveanime77'
);

insert into "moodboards" (
  "moodboardId",
  "userId",
  "name",
  "url"
) values (
  1,
  1,
  'Project 1',
  '/images/moodboard_thumbnail_1.png'
), (
  2,
  1,
  'Project 2',
  '/images/moodboard_thumbnail_2.jpg'
), (
  3,
  1,
  'Project 3',
  '/images/moodboard_thumbnail_3.jpg'
);
