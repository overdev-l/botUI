var botui = new BotUI('help-bot');
const info = {
  phone: null,
  firsen: '',
  sedsen: '',
  thisen: '',
}
info.phone = window.prompt("在参加实验前请输入您的手机号后四位，以便确认")
if(!info.phone) {
  info.phone = "text"
}
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
const url = getQueryVariable("c")
console.log(url)
function sendData() {
  fetch('/api/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  })
}


botui.message.add({
  type: 'html',
  delay: 500,
  loading: true,
  content: '您好！欢迎光临，请问你是对这件衣服感兴趣吗（商品号：7125）'
}).then(function () {
  return botui.action.text({
    action: {
      placeholder: 'Type your message here'
    }
  })
}).then(function(context) {
  info.firsen = context.value
})
  .then(function (res) {
    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: '关于对这件衣服，您有什么问题？'
    })
  }).then(function () {
    return botui.action.text({
      action: {
        placeholder: 'Type your message here'
      }
    })
  }).then(function(context) {
    info.sedsen = context.value
  }).then(function (res) {
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: "现在为您转接人工客服。"
    });
  }).then(function (index) {
    botui.message.bot({
      type: 'buttontext',
      content: 'content'
    })
    return botui.message.add({
      delay: 5000,
      loading: true,
      content: '您好，我是人工客服舒曼，请问你的身高体重是？'
    });
  }).then(function () {
    return botui.action.text({
      action: {
        placeholder: 'Type your message here'
      }
    })
  }).then(function(context) {
    info.thisen = context.value
  }).then(function(context) {
    console.log(context)
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: '按照身高体重建议您拍M码'
    });
  }).then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: '感谢您的光临，有任何疑问可随意联系我'
    });
  }).then(() => {
    console.log(info)
    setTimeout(() => {
      const button = document.querySelector(".backButton")
      button.style.display = "block"
      button.onclick = () => {
        window.location.href = url
      }
      sendData()
    }, 500)
  })