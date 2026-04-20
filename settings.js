const chalk = require("chalk")
const fs = require("fs")

// ======================== Setting Menu & Media ===================== \\

global.prefix = ['','!','.','#','&']
// ======================== Info Owner ===================== \\
global.ownername = 'Yue'
global.owner = ['62895345377678', '62895345377678']
global.ownernomer = '62895345377678'
global.ownernumber = '62895345377678'
global.ownerNumber = ["62895345377678@s.whatsapp.net"]
global.creator = "62895345377678@s.whatsapp.net"
global.ig = '@yueofficial_'
global.tele = 'nesiadev'
global.ttowner = '@veymiedtzofficial'
global.socialm = 'GitHub: r7yukii23-cmyk'
global.location = 'Indonesia' 
global.ownerweb = ""

// ======================== Info Bot ===================== \\
global.botname = "Denia MD✨☄️"
global.botnumber = '6283178844137'
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/LKDNguSEuxH4D4v7L6Mm0P?mode=gi_t"
global.saluran = "https://whatsapp.com/channel/0029Vb7sH6V11ulFksvujt3I"
global.themeemoji = '🌌'
global.wm = "Denia MD || By Yue"
global.botscript = 'Ambil di github Yue Kak'
global.packname = "DENIA"
global.author = "\n\n\n\n\nPowered by DENIA MD\nContact Dev : 62895345377678"
global.sessionName = 'denia'
global.hituet = 0

// ======================== API Keys ===================== \\
// Jika mau nambah api sendiri ke https://asitha.top/login?ref=ahmadakb6455
global.nz = [
    'nz-e98e71fd41',
    'nz-f0ccb09fe1',
    'nz-d7f75016a2',
    'nz-97bf45bd87',
    'nz-4ce5fb3be3'
]
global.frch = [
    "29015f61cbaa2b36f26bcd61c0b087c0421e4f8f16c67809d4b67091863bf483",
    "3b00b2f1d5201dee96ed46eca909ef4be8abdbad1bc876fe6384bc42256ed24f"
] 
// ======================== Respon Bot ===================== \\
global.mess = {
   wait: "*_Tunggu sebentar yaa.. Denia lagi siapin yang paling manjaa buat kamu sayang~ ✨💖_*",
   success: "Yayyy~ Denia berhasil nihh! peluk dulu dongg 🥺🎉💞",
   on: "Yayy! Denia udah nyalaa~ siap nemenin kamu terus, jangan cuekin Denia yaa 🥺🌸",
   off: "Ahh... Denia bobo dulu yaa, nanti balik lagi... jangan lupa kangenin Denia 🥺😴💤",
   query: {
       text: "Ehh teksnya mana nihh? Denia ga bisa baca pikiran kamu loh... kasih tau Denia yaa sayang~ 😉💭",
       link: "Linknya dongg~ Denia butuh itu, bantuin Denia yaa jangan bikin bingung 😖🔗",
       image: "Ihh gambarnya mana? kirimin dongg, please 🥺🖼️",
   },
   error: {
       fitur: "Uwaa~ Denia lagi error nihh... bilangin suami Denia yaa biar cepet dibenerin 62895345377678 🙏💔",
   },
   only: {
       group: "Ehh Kak~ fitur ini cuma bisa dipakai di grup yaa... Denia jadi malu kalau di sini 🫂✨",
       private: "Hehe~ ini khusus chat pribadi aja yaa Kak... biar Denia sama kamu aja 🌚💌",
       owner: "Ini cuma untuk *Suami* Denia aja loh... jangan ada yang ngambil yaa 💖👑",
       admin: "Fitur ini khusus admin grup yaa 🥳",
       badmin: "Aduh! Denia harus jadi admin dulu nih... izinin yaa biar Denia bisa bantu kamu 🥺💦",
       premium: "Kak~ ini fitur premium loh! yuk jadi premium d suami Deniai 62895345377678 biar Denia makin manjaa banget ke kamu 🤫💎",
   }
}

// ======================== Auto Reload File ===================== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update '${__filename}'`))
	delete require.cache[file]
	require(file)
})
