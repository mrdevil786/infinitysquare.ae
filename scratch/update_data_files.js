import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'mapping.json'), 'utf8'));

// Update portfolio.ts
const portfolioPath = path.join(rootDir, 'src', 'data', 'portfolio.ts');
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

for (const [oldPath, newPath] of Object.entries(mapping)) {
  portfolioContent = portfolioContent.replaceAll(oldPath, newPath);
}

fs.writeFileSync(portfolioPath, portfolioContent, 'utf8');
console.log('Updated portfolio.ts');

// Update services.ts
const servicesPath = path.join(rootDir, 'src', 'data', 'services.ts');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

for (const [oldPath, newPath] of Object.entries(mapping)) {
  servicesContent = servicesContent.replaceAll(oldPath, newPath);
}

fs.writeFileSync(servicesPath, servicesContent, 'utf8');
console.log('Updated services.ts');
