1. **Jadval tuzish (PRIMARY KEY va CHECK) – Postgres sintaksisi**
   - “groups” nomli jadvalni yarating:
     - `group_id SERIAL PRIMARY KEY`
     - `group_name VARCHAR(50) UNIQUE`
     - `max_students INT CHECK (max_students BETWEEN 5 AND 30)`

2. **Talabalar jadvali (FOREIGN KEY bilan)**
   - “students” nomli jadvalni yarating:
     - `student_id SERIAL PRIMARY KEY`
     - `first_name VARCHAR(50) NOT NULL`
     - `last_name VARCHAR(50) NOT NULL`
     - `birth_date DATE CHECK (birth_date < '2010-01-01')`
     - `group_id INT REFERENCES groups(group_id)`

3. **O‘qituvchilar jadvali (CHECK)**
   - “teachers” nomli jadvalni yarating:
     - `teacher_id SERIAL PRIMARY KEY`
     - `first_name VARCHAR(50) NOT NULL`
     - `last_name VARCHAR(50) NOT NULL`
     - `gender CHAR(1) CHECK (gender IN ('M', 'F'))`

4. **Fanlar jadvali (UNIQUE va FOREIGN KEY)**
   - “subjects” nomli jadvalni yarating:
     - `subject_id SERIAL PRIMARY KEY`
     - `subject_name VARCHAR(100) UNIQUE`
     - `teacher_id INT REFERENCES teachers(teacher_id)`

5. **Jadvallarga ma’lumot kiritish (INSERT) – Postgresda**
   - “groups” jadvaliga kamida 5 ta yozuv kiriting.
   - Har bir guruh uchun `group_name` turlicha bo‘lsin, `max_students` qiymatlarini turli raqamlarda sinab ko‘ring.
   - Takrorlanuvchi `group_name` yozishni sinab ko‘ring (UNIQUE constraint qanday ishlashini ko‘rish uchun).

6. **Talabalar ma’lumotlari (INSERT) – Postgresda**
   - “students” jadvaliga kamida 10 ta yozuv qo‘shing.
   - Yozuvlarda `birth_date` (2000-yillardan to 2009-yillargacha, masalan) va turli `group_id`lar kiriting.
   - `birth_date` ustuniga 2010-yildan keyingi sanani (masalan, '2012-05-01') kiritib ko‘rib, CHECK constraint ishlashini tekshiring.

7. **O‘qituvchilar va fanlar (INSERT)**
   - “teachers” jadvaliga kamida 5 ta yozuv kiritib, `gender` ustuniga `M` va `F` dan boshqa qiymat kiritishga urining (xatolik chiqsin).
   - “subjects” jadvaliga kamida 6 ta fan nomi kiriting va har bir fanni mos `teacher_id`ga bog‘lang.

8. **Oraliq jadval (enrollments)**
   - “enrollments” nomli jadvalni yarating:
     - `enrollment_id SERIAL PRIMARY KEY`
     - `student_id INT REFERENCES students(student_id)`
     - `subject_id INT REFERENCES subjects(subject_id)`
     - `enroll_date DATE NOT NULL`
     - `grade INT CHECK (grade BETWEEN 1 AND 5)`
   - Kamida 15–20 ta yozuv qo‘shing (har bir talabaning bir nechta fanga yozilishi mumkin).

9. **UPDATE bilan ma’lumotni yangilash**
   - Bitta talabani boshqa guruhga o‘tkazing: `UPDATE students SET group_id = ... WHERE student_id = ...;`
   - O‘sha talabaning `birth_date` ustunini 2012-yilga yangilashga urining (CHECK constraint xatolik qaytarishi kerak).

10. **DELETE bilan ma’lumotni o‘chirish**
    - “subjects” jadvalidan bitta fan yozuvini o‘chiring. Agar fan “enrollments” jadvalida mavjud bo‘lsa va FOREIGN KEY sozlamalariga bog‘liq holda xatolik chiqishi yoki kaskadli o‘chish yuz berishi mumkin.
    - “students” jadvalidan bitta talabani o‘chiring va “enrollments”ga ta’sirini tekshiring.

11. **PRIMARY KEY va UNIQUE constraint sinovi**
    - “groups” jadvaliga `group_id` yoki `group_name` ustunlari takrorlanuvchi qiymat kiritib ko‘ring.
    - Xatolik chiqishini kuzating va sabablab bering (PRIMARY KEY yoki UNIQUE constraint).

12. **CHECK constraint sinovi**
    - “teachers” jadvalida `gender`ga `'X'` kiritish, “groups” jadvalida `max_students` qiymatini 3 yoki 40 qilib kiritish orqali CHECK constraintni sinab ko‘ring.
    - Xatolik mazmuni va sabablarini aniqlang.

13. **INNER JOIN bilan ma’lumot chiqarish**
    - “students” va “groups” jadvallarini INNER JOIN yordamida bog‘lab, har bir talabaning guruh nomini ko‘rsating.
    - JOIN natijasida qancha yozuv chiqqanini tekshirib ko‘ring.

14. **LEFT JOIN bilan ma’lumot chiqarish**
    - “subjects” va “teachers” jadvallarini LEFT JOIN orqali bog‘lang.
    - Agar ba’zi fanlarda o‘qituvchi belgilanmagan bo‘lsa, natijada NULL chiqishini kuzating.

15. **RIGHT JOIN bilan ma’lumot chiqarish**
    - “groups” jadvali bilan “students”ni RIGHT JOIN orqali bog‘lang va barcha guruhlarni (talabasi bo‘lmasa ham) ko‘rsating.
    - Talaba yo‘q guruhlarda `student_id` maydonlari NULL chiqishini tekshiring.

16. **GROUP BY va HAVING**
    - “students” jadvalidan talabalarning guruh bo‘yicha hisobini chiqaring:
      ```sql
      SELECT group_id, COUNT(*)
      FROM students
      GROUP BY group_id;
      ```
    - Faqat 5 tadan ortiq talaba bo‘lgan guruhlarni ko‘rsatish uchun HAVING qo‘llang.

17. **ON DELETE CASCADE sinovi**
    - “students” jadvalidagi FOREIGN KEY e’lonida `ON DELETE CASCADE` yoki `ON DELETE RESTRICT` belgilab ko‘ring.
    - Bitta talaba yozuvini o‘chirib, “enrollments” jadvaliga ta’sirini kuzating.
    - Kaskadli yoki cheklovchi o‘chirish natijalarini izohlang.

18. **ON UPDATE CASCADE sinovi**
    - “subjects” jadvalidagi PRIMARY KEY uchun `ON UPDATE CASCADE` ishlatib ko‘ring.
    - Bitta fanning `subject_id` qiymatini yangilab, “enrollments” jadvalidagi mos yozuvlar ham o‘zgargan-o‘zgarmaganini tekshiring.

19. **Bir nechta JOIN kombinasiyasi**
    - “students”, “enrollments”, “subjects” va “teachers”ni bir so‘rovda bog‘lang, har bir talabaning qaysi fanga yozilgani va o‘qituvchining ism-familiyasi qanday ekanini chiqaring.
    - Natijalarni ma’lumotlarga qarab saralang (`ORDER BY`).

20. **ORDER BY va LIMIT**
    - “enrollments” jadvalidan baho (`grade`) bo‘yicha saralash uchun `ORDER BY grade DESC` yozib ko‘ring.
    - Eng yaxshi 5 bahoni ko‘rish uchun `LIMIT 5`dan foydalaning.
    - Natijalar ustida tahlil olib boring va constraint’lar bilan taqqoslang.

21. **OFFSET va FETCH**
    - “students” jadvalidan 5-tadan keyingi talabalarni ko‘rish uchun `OFFSET 5`dan foydalaning.
    - Keyingi 3 talabani ko‘rish uchun `FETCH NEXT 3 ROWS ONLY` qo‘llanmasidan foydalaning.
    - Natijalarni tekshirib, OFFSET va FETCH qo‘llanmasining ishlashini tushunib chiqing.

22. **LIKE operatori va % belgisi**
    - “students” jadvalidan ismida “a” harfi qatnashgan tal
    abalarni ko‘rish uchun `WHERE first_name LIKE '%a%'` qo‘llanmasidan foydalaning.
    - Ismida “a” harfi va “n” harfi qatnashgan talabalar uchun `WHERE first_name LIKE '%a%n%'` qo‘llanmasidan foydalaning.
    - Natijalarni tekshirib, `LIKE` operatori va `%` belgisining ishlashini tushunib chiqing.

23. **IN operatori**
    - “students” jadvalidan guruh raqamlari 1, 3, 5, 7, 9 bo‘lgan talabalar ro‘yxatini ko‘rish uchun `WHERE group_id IN (1, 3, 5, 7, 9)` qo‘llanmasidan foydalaning.
    - Natijalarni tekshirib, `IN` operatorining ishlashini tushunib chiqing.

24. **BETWEEN operatori**
    - “students” jadvalidan tug‘ilgan sanasi 2000-yilning 1-yanvaridan 2005-yilning 31-dekabrigacha bo‘lgan talabalar ro‘yxatini ko‘rish uchun `WHERE birth_date BETWEEN '2000-01-01' AND '2005-12-31'` qo‘llanmasidan foydalaning.
    - Natijalarni tekshirib, `BETWEEN` operatorining ishlashini tushunib chiqing.

25. **EXISTS operatori**
    - “enrollments” jadvalida baho (`grade`) 5 ga teng bo‘lgan talabalar ro‘yxatini ko‘rish uchun `WHERE EXISTS (SELECT * FROM enrollments WHERE students.student_id = enrollments.student_id AND grade = 5)` qo‘llanmasidan foydalaning.
    - Natijalarni tekshirib, `EXISTS` operatorining ishlashini tushunib chiqing.
