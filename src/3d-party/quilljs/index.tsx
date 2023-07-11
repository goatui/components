import { loadScript } from '../../utils/utils';

export default async function loadQuilljs() {
  await loadScript(`https://cdn.ckeditor.com/ckeditor5/38.1.0/super-build/ckeditor.js`);
}



