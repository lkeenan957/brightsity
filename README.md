# bright

xammpp - manager osx  -mysql database start
sequel pro -- host - localhost
              username - root
              no password
              
              
        
mysql -S /Applications/XAMPP/xamppfiles/var/mysql/mysql.sock -u root      ====this is to open mysql in terminal


create table abilities_element_data as
select cr.element_name, cr.description, a.data_value, o.title
from abilities a, occupation_data o, content_model_reference cr
where o.title = "Chief Executives" 
  and a.onetsoc_code = o.onetsoc_code
  AND a.element_id = cr.element_id
  ORDER BY a.data_value desc
  limit 10



-- select cr.element_name, cr.description, a.data_value, o.title
-- from abilities a, occupation_data o, content_model_reference cr
-- where o.title = "Chief Executives" 
--   and a.onetsoc_code = o.onetsoc_code
--   AND a.element_id = cr.element_id
--   ORDER BY a.data_value desc
--   limit 10



CREATE table abilities_element_data as
select cr.element_name, cr.description, a.data_value, o.title
from abilities a, occupation_data o, content_model_reference cr
where  
   a.onetsoc_code = o.onetsoc_code
  AND a.element_id = cr.element_id
  ORDER BY a.data_value desc
 

CREATE table knowledge_element_data as
select cr.element_name, cr.description, k.data_value, o.title
from knowledge k, occupation_data o, content_model_reference cr
where  
   k.onetsoc_code = o.onetsoc_code
  AND k.element_id = cr.element_id
  ORDER BY k.data_value desc
 
 
 CREATE table skills_element_data as
 select cr.element_name, cr.description, s.data_value, o.title
 from skills s, occupation_data o, content_model_reference cr
 where  
    s.onetsoc_code = o.onetsoc_code
   AND s.element_id = cr.element_id
   ORDER BY s.data_value desc



<!-- ------ -->
// app.get('/api/searchAbi', (req, res) => {
//   q=req.query.term
//   console.log("Query: " + q)
//   let sql = 'SELECT *  FROM jobskill_data WHERE title LIKE "%' + q + '%"';
//   let query = db.query(sql, (err, result) => {
//     if(err) throw err;
//     res.send(JSON.stringify(result))
//   })
// })
<!-- -->

  // let sql1 = 'CREATE table abilities_element_data as\
  //             SELECT cr.element_name, cr.description, a.data_value, o.title\
  //             FROM abilities a, occupation_data o, content_model_reference cr\
  //             WHERE o.title LIKE "%' + q + '%" \
  //             AND a.onetsoc_code = o.onetsoc_code\
  //             AND a.element_id = cr.element_id\
  //             ORDER BY a.data_value desc\
  //             limit 3';
  //
  // let sql2 = 'CREATE table knowledge_element_data as\
  //             SELECT cr.element_name, cr.description, k.data_value, o.title\
  //             FROM knowledge k, occupation_data o, content_model_reference cr\
  //             WHERE o.title LIKE "%' + q + '%" \
  //             AND k.onetsoc_code = k.onetsoc_code\
  //             AND k.element_id = cr.element_id\
  //             ORDER BY k.data_value desc\
  //             limit 3';
  //
  // let sql3 = 'CREATE table skills_element_data as\
  //             SELECT cr.element_name, cr.description, s.data_value, o.title\
  //             FROM skills s, occupation_data o, content_model_reference cr\
  //             WHERE o.title LIKE "%' + q + '%" \
  //             AND s.onetsoc_code = o.onetsoc_code\
  //             AND s.element_id = cr.element_id\
  //             ORDER BY s.data_value desc\
  //             limit 3';
  //