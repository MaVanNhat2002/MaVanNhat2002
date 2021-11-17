module.exports.config = {
  name: "sendonti",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "HĐGN",
  description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
  commandCategory: "system",
  usages: "[Text]",
  cooldowns: 5
};

module.exports.languages = {
  "vi": {
    "sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
    "sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
  },
  "en": {
    "sendSuccess": "Sent message to %1 thread!",
    "sendFail": "[!] Can't send message to %1 thread"
  }
}

module.exports.run = async ({ api, event, args, getText }) => {
  
  if (args.join() == "") {api.sendMessage("» Bạn Có Thể Dùng Sendonti Kèm\n» 1 Để Gửi Ảnh Với Dạn: png\n» 2 Để Gửi Ảnh Với Dạn: jpg\n» 3 Để Gửi Nhạc Với Dạn: mp3\n» 4 Để Gửi Video Với Dạn: mp4",event.threadID, event.messageID);
    }
if (args[0] == "1") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
        var path = __dirname + `/cache/snoti.png`;
      


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
else if (args[0] == "2") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
        
        var path = __dirname + `/cache/snoti.jpg`;


var abc2 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc2}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}

   else if (args[0] == "3") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
       var path = __dirname + `/cache/snoti.mp3`;
       


var abc3 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc3}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
 else if (args[0] == "4") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
       var path = __dirname + `/cache/snoti.mp4`;

       


var abc3 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc3}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("╭━━━━━━━━━━━━━╮\n┃🐋𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧┃\n╰━━━━┳━━━┳━━━━╯\n╭━━━━╯        ╰━━━━╮\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
  }
                                                                               }