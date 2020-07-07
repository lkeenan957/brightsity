const express = require('express');
const mysql = require('mysql');
var path = require('path');

//create connection
const db = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || 'mysql://lydia:smileall123@127.0.0.1:3306/brightmysql');

//connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Mysql connected')
})


const app =  express();

app.use(express.static('public'));

// GET '/' Display main page
app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, './public/index.html' ));
	});

//Create DB
// app.get('/jobs', (req, res) => {
//   let sql = 'SELECT * FROM jobskill_data';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     //console.log(result)
//     jobs = "Jobs:<br>"
//     result.forEach(function(value) {
//       jobs += "<b>"+  value.title + "</b>"+ "<br>" + value.description + "<br>"
//     })
//     res.send(jobs)
//   });
// })

//search for skills
app.get('/api/search', (req, res) => {
  q=req.query.term
  console.log("Query: " + q)
     
      
      let sql1= 'SELECT aed.data_value, aed.element_name, aed.description\
                  FROM abilities_element_data aed\
                  WHERE aed.title LIKE "%' + q + '%"\
                  ORDER BY aed.data_value desc\
                  LIMIT 3';
      let sql2= 'SELECT ked.data_value, ked.element_name, ked.description\
                  FROM knowledge_element_data ked\
                  WHERE ked.title LIKE "%' + q + '%"\
                  ORDER BY ked.data_value desc\
                  LIMIT 3';
      let sql3= 'SELECT sed.data_value, sed.element_name, sed.description\
                  FROM skills_element_data sed\
                  WHERE sed.title LIKE "%' + q + '%"\
                  ORDER BY sed.data_value desc\
                  LIMIT 3';
                  
      
  let out = [];
  let query = db.query(sql1, (err, result1) => {
    out = out.concat(result1);
    
    //console.log(" Abilities results1" + JSON.stringify(result1))
    if(err) throw err;    
    //res.end(JSON.stringify(result1))
    let query = db.query(sql2, (err, result2) => {
      //console.log("Knowledge results2" + JSON.stringify(result2))
      if(err) throw err; 
      out = out.concat(result2);
      //res.end(JSON.stringify(result2))
      let query = db.query(sql3, (err, result3) => {
        //console.log("Skills results3" + JSON.stringify(result3))
        out = out.concat(result3);
        
        if(err) throw err; 
        res.end(JSON.stringify(out))
        //res.send({abilities: JSON.stringify(result1), knowledge: JSON.stringify(result2), skills: JSON.stringify(result3)})
      })
    })
  })
  
})





port = process.env.PORT || '5000';
app.listen(port, () => {
  console.log('Server started on ' + port)
})