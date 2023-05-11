let handler = async (m, { conn, args, command }) => {
  let message = 'Bot ini menggunakan Script dari channel ZYKO BOTZ MD. Silakan kunjungi link YouTube di bawah ini:\nhttps://www.youtube.com/@zykobotz\n'
  m.reply(message) //jangan hapus om link yt gw nya kalau mau tambahin aja ya ganteng/cantik/om cuakss 🗿
}

handler.help = ['sc']
handler.tags = ['info']
handler.command = ['sc', 'sourlcode']

export default handler
