import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Nyari apa?'
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  conn.sendFile(m.chat, img.url_image, null, `*${htki} WH-MODS-BOT-V1 WALLPAPER ${htka}*\n🔎 *Result:* ${text}\n🌎 *Sumber Asli:* https://wall.alphacoders.com\n⛩ *ɴᴀᴍᴇ ᴜꜱᴇʀ:* ${conn.getName(m.sender)}\n`, )
}
handler.help = ['wallpaperq <query>']
handler.tags = ['anime']
handler.command = /^wall(paper)?q?$/i

export default handler
