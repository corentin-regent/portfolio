import { readdir, readFile, writeFile } from 'fs/promises';
import { minify as minifyHtml } from 'html-minifier';
import { optimize as minifySvg } from 'svgo';

const minifyHtmlConfig = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  ignoreCustomComments: [/^\[$/, /^\]$/, /^\]!$/],
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
};

readdir('build/', { withFileTypes: true, recursive: true }).then(dirents =>
  dirents
    .filter(dirent => dirent.isFile())
    .filter(entry => entry.name.endsWith('.html') || entry.name.endsWith('.svg'))
    .map(entry => ({
      path: `${entry.parentPath}/${entry.name}`,
      minify: entry.name.endsWith('.html')
        ? content => minifyHtml(content, minifyHtmlConfig)
        : content => minifySvg(content).data,
    }))
    .map(({ path, minify }) =>
      readFile(path, 'utf-8')
        .then(minify)
        .then(minified => writeFile(path, minified, 'utf-8'))
    )
);
