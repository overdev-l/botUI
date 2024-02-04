var botui = new BotUI('help-bot');

botui.action.text({
  action: {
    placeholder: 'Type your message here'
  }
}).then(function () {
  return botui.message.add({
    type: 'html',
    delay: 500,
    loading: true,
    content: '您好！欢迎光临i-Fashion旗舰店，有什么可以帮您的吗？'
  });
}).then(function () {
  return botui.action.text({
    action: {
      placeholder: 'Type your message here'
    }
  })
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
    content: '您好，我是人工客服舒曼，请问有什么可以帮您的？'
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: '按照身高体重建议您拍M码'
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: '由于每个人的身材比例有所不同，我们给到您的是参考尺码，您还可参照宝贝下面的实物尺寸,和平常穿衣尺码习惯再进行选择'
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: '感谢您的光临，有任何疑问可随时呼我哈，我会尽力为您解决的，期待您再次光临'
  });
});