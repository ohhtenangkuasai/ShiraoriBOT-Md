const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;𝑀𝑒𝑙𝑙 💫;;;'
                    + 'FN:imell\n' // full name
                    + 'ORG:Ilman;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285775238312:+62 857-7523-8312\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: '𝑀𝑒𝑙𝑙 💫', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
