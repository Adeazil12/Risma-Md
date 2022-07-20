let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Alpi* ´ˎ˗
│ ✎ _Nama_ : Ademods
│ ✎ _Sekolah_ : SMA 1 BANJAREJO
│ ✎ _Umur_ : 20
│ ✎ _Asal_ : Jatim
│ ✎ _Status_ : Pelajar lulus Bro
│ ✎ _WhatsApp_ :
│    wa.me/628980330708
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
