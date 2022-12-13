const https = require('https');
const HTMLParser = require('node-html-parser');

const urlADISURC = 'https://www.adisurcampania.it/archivio2_aree-tematiche_0_8.html';

/**
 * 
 * @returns {Promise<{type: string, link: string}>}
 */
async function getLunch() {
    return new Promise((resolve, reject) => {
        https.get(urlADISURC, (res) => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', async () => {
                const root = HTMLParser.parse(data)

                const result = root.querySelectorAll('a').filter((a) => {
                    return a.text.includes('Pranzo') || a.text.includes('pranzo')
                }).map((a) => {
                    return {
                        type: a.text,
                        link: a.getAttribute('href')
                    }
                })

                if(result.length === 0) throw Error('No lunch found')

                resolve(result[0])
            })
        }).on('error', (err) => {
            reject('Error: ' + err.message)
        })
    })
}

/**
 * @returns {Promise<{type: string, link: string}>}
 */
async function getDinner() {
    return new Promise((resolve, reject) => {
        https.get(urlADISURC, (res) => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', async () => {
                const root = HTMLParser.parse(data)

                const result = root.querySelectorAll('a').filter((a) => {
                    return a.text.includes('cena') || a.text.includes('Cena')
                }).map((a) => {
                    return {
                        type: a.text,
                        link: a.getAttribute('href')
                    }
                })

                if(result.length === 0) throw Error('No dinner found')
                
                resolve(result[0])
            })
        }).on('error', (err) => {
            reject('Error: ' + err.message)
        })
    })
}

module.exports = { getLunch, getDinner }