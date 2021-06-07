const Code = require('../../server/db/models/Code');

const syncPublic = async () => {
  const p1 = await Code.create({
    id: 'P1',
    fileName: 'htmlIndex.js',
    category: 'public',
    title: 'Public: index.html',
    snippet: `
<!DOCTYPE html>
<head>
  <link href="/public/style.css" rel="stylesheet" />
  <script src="../public/bundle.js" defer></script>
</head>
<body>
  <% if(react) { %>
  <div id="root"></div>
  <% } else { %>
  <h1>Hello world</h1>
  <p>Welcome to your web app!</p>
  <% } %>
</body>
    `,
  });
};
