const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// React 빌드 파일 서빙
app.use(express.static(path.join(__dirname, 'build')));

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
