SELECT persons.name, hobbies.name
FROM persons
JOIN hobbies
ON persons.id = hobbies.person_id
/* WHERE persons.name = 'Bobby McBobbyFace' */
;