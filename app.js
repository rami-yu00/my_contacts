const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Node!');
});

app.get('/contacts', (req, res) => {
  res.send('Contact page');
});

/**     
 * get      : 서버에 있는 자료를 가져오려고 할 때 사용.
 * post     : 사용자가 입력한 정보를 서버로 보내려고 할 때 사용.
 * put      : 서버에 있는 자료를 수정하려고 할 때 사용.
 * delete   : 서버에 있는 자료를 삭제하려고 할 때 사용.
 */

app.post('/contacts', (req, res) => {
  res.send('Create Contacts!');
});

// 서버시작 !
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('🚀 http://localhost:3000');
});
