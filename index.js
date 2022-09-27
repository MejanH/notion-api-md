const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs')
const https = require('https')
const url = require('url')
const path = require('path')

require('dotenv').config()

const notion = new Client({
  auth: process.env.AHAQI_API_SECRET_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });


// retriever database to fetch all pages(blog posts)
// (async () => {
//     const listUsersResponse = await notion.databases.query({database_id: 'c6a0f57829ed4ed3813105b2ac000791'})
//     console.log(console.dir(listUsersResponse, {depth: null}))
//   })()

// download images and generater markdown files

// (async () => {
//   n2m.setCustomTransformer('image', async (block) => {
//     const imgUrl = block.image.file.url
//     const parsed = url.parse(imgUrl).pathname
//     const filename = path.basename(parsed)
//     https.get(imgUrl, (res) => {
//       const path = `${__dirname}/files/${filename}`; 
//       const filePath = fs.createWriteStream(path);
//       res.pipe(filePath);
//       filePath.on('finish',() => {
//           filePath.close();
//           console.log('Download Completed'); 
//       })
//     })
//     console.log('ran transofer')
//     return `![](./${filename})`
//   })
//     console.log('ran below')
//   const mdblocks = await n2m.pageToMarkdown("2aa3df639d1545d99b3dd045bff94ca4");
//   const mdString = n2m.toMarkdownString(mdblocks);

//   //writing to file
//   fs.writeFile("test.md", mdString, (err) => {
//     console.log(err);
//   });
// })();