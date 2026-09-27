import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function registrationsPlugin() {
  return {
    name: 'marvel-registrations-local-csv',
    configureServer(server) {
      const dataDir = path.resolve(process.cwd(), 'data')
      const csvFile = path.join(dataDir, 'registrations.csv')
      fs.mkdirSync(dataDir, { recursive: true })
      if (!fs.existsSync(csvFile)) {
        fs.writeFileSync(csvFile, 'name,email,phone,collegeId,registeredAt\n', 'utf8')
      }

      server.middlewares.use('/api/register', (req, res, next) => {
        if (req.method !== 'POST') return next()

        let body = ''
        req.on('data', (chunk) => { body += chunk })
        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}')
            const required = ['name', 'email', 'phone', 'collegeId']
            if (required.some((key) => !String(data[key] || '').trim())) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: 'All fields are required.' }))
              return
            }

            const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`
            const row = [data.name, data.email, data.phone, data.collegeId, new Date().toISOString()]
              .map(escapeCsv)
              .join(',') + '\n'

            fs.appendFileSync(csvFile, row, 'utf8')
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'Invalid registration payload.' }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), registrationsPlugin()],
})
