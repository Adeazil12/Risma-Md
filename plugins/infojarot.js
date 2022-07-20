let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Ademods
│ ✎ _Sekolah_ : Lulus
│ ✎ _Umur_ : 20
│ ✎ _Asal_ : Jawa timur
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/H984ganTo0n6IuBlpMMEbh
│ ✎ _Bio Ademods_ :
│    https://instabio.cc/ademods
│ ✎ _Youtube _:
│    Ga Ada Yt
│ ✎ _Instagram_ : 
│    https://instagram.com/ademods_
│ ✎ _WhatsApp_ :
│    wa.me/628980330708
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
