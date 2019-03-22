/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: start, старт, ⓜ главное меню, ⬅⬅ назад
CMD*/

switch (user.username) {
case null :
Bot.runCommand("ban");
break;
case "Kaktus_tequila":
Bot.runCommand("bann");
break;
default :
Bot.runCommand("go"); }
