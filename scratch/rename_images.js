import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'images');

const folderMap = {
  'Al Barari residence': 'al-barari-residence',
  'APT Project Kezad Abu Dhabi': 'apt-project-kezad',
  'Arabian center, Dubai': 'arabian-center',
  'Discovery Garden Flat, Dubai': 'discovery-garden-flat',
  'ICH Hotel Jumeirah': 'ich-hotel-jumeirah',
  'IHG Hotel Al barsha': 'ihg-hotel-al-barsha',
  'Jones the Grocer, Abu Dhabi Airport': 'jones-the-grocer',
  'Jumeirah Park Villa': 'jumeirah-park-villa',
  'PURO GUSTO , Abu Dhabi , Airport': 'puro-gusto',
  'Souk Al Bahar Boffice, Downtown, Dubai': 'souk-al-bahar-office',
  'SPA Abu Dhabi': 'spa-abu-dhabi',
  'Taste of India , Abu Dhabi Airport': 'taste-of-india',
  'Villa Demolition': 'villa-demolition',
  'Villa Jumeirah Islands': 'villa-jumeirah-islands',
  'VIT Shop Abu Dhabi Airport': 'vit-shop',
  'Warehouse Gym Abu Dhabi': 'warehouse-gym',
};

function cleanFileName(filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = path.basename(filename, path.extname(filename));
  const cleanName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${cleanName}${ext}`;
}

const pathMapping = {};

// Process folders
const items = fs.readdirSync(imagesDir);
for (const item of items) {
  const itemPath = path.join(imagesDir, item);
  if (!fs.statSync(itemPath).isDirectory()) continue;

  const newFolderName = folderMap[item] || item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const targetFolderDir = path.join(imagesDir, newFolderName);

  // Read files in folder
  const files = fs.readdirSync(itemPath);
  
  if (!fs.existsSync(targetFolderDir)) {
    fs.mkdirSync(targetFolderDir, { recursive: true });
  }

  for (const file of files) {
    if (file === '.DS_Store' || file.startsWith('.')) {
      fs.unlinkSync(path.join(itemPath, file));
      continue;
    }

    const oldFilePath = path.join(itemPath, file);
    const newFileName = cleanFileName(file);
    const newFilePath = path.join(targetFolderDir, newFileName);

    // Save mapping
    const oldRel = `/images/${item}/${file}`;
    const newRel = `/images/${newFolderName}/${newFileName}`;
    pathMapping[oldRel] = newRel;

    if (oldFilePath !== newFilePath) {
      fs.renameSync(oldFilePath, newFilePath);
    }
  }

  if (itemPath !== targetFolderDir && fs.readdirSync(itemPath).length === 0) {
    fs.rmdirSync(itemPath);
  }
}

console.log('Path Mapping Generated:');
console.log(JSON.stringify(pathMapping, null, 2));

// Save mapping file
fs.writeFileSync(
  path.join(__dirname, 'mapping.json'),
  JSON.stringify(pathMapping, null, 2)
);
