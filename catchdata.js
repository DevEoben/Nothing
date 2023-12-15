const fs = require('fs');

// 读取 README.md 文件内容
const readmeContent = fs.readFileSync('README.md', 'utf-8');

// 使用正则表达式匹配破折号后面的信息
const regex = /-\s(.*)/g;
const matches = readmeContent.match(regex);

// 提取信息
const extractedInfo = matches.map(match => match.replace(/-\s/, ''));

// 输出提取的信息
console.log(extractedInfo);
