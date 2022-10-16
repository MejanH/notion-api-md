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
(async () => {
  // retrieve page
    // const listUsersResponse = await notion.pages.retrieve({page_id: '7bb4e270-9f5f-49cc-b23e-4d9c263b510b'})
  // retrieve all blocks of a page
    // const listUsersResponse = await notion.blocks.children.list({block_id: '7bb4e270-9f5f-49cc-b23e-4d9c263b510b'})
  // retrieve all columns of a column_list block
    // const listUsersResponse = await notion.blocks.children.list({block_id: 'eb9d560e-ec93-4cf3-8b03-46f0c35f6a8e'})
  // retrieve column children of a column block
    // const listUsersResponse = await notion.blocks.children.list({block_id: 'a09e62e0-c893-42a6-8213-5e86978bf542'})

    // const listUsersResponse = await notion.databases.query({database_id: '7e0133768f3244e29a20dcd25eb312e3'})
    // console.log(console.dir(listUsersResponse, {depth: null}))
  })()

// unsupported notion block type

// (async () => {
//   // n2m.setCustomTransformer('column_list', async (block) => {
//   //   const columnBlocks = await n2m.pageToMarkdown(block.id)
//   //   const columnString = n2m.toMarkdownString(columnBlocks)
//   //   return columnString
//   // })
//     console.log('ran below')
//   const mdblocks = await n2m.pageToMarkdown("7bb4e2709f5f49ccb23e4d9c263b510b");
//   const mdString = n2m.toMarkdownString(mdblocks);

//   //writing to file
//   fs.writeFile("test.md", mdString, (err) => {
//     console.log(err);
//   });
// })();

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