import fs from 'fs'
import path from 'path'

export default function Home() {
  // Read the static HTML file
  const htmlPath = path.join(process.cwd(), 'src', 'index.html')
  let htmlContent = ''
  
  try {
    htmlContent = fs.readFileSync(htmlPath, 'utf-8')
  } catch (error) {
    htmlContent = '<h1>Coming Soon!</h1>'
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}
