Package.describe({
  name: 'concats:bootstrap-markdown',
  summary: "Markdown editing meets Bootstrap.",
  version: "2.10.0",
  git: "https://github.com/concats/bootstrap-markdown.git"
});

Package.onUse(function(api) {
  api.addFiles([
    'css/bootstrap-markdown.min.css',
    'js/bootstrap-markdown.js',
    'locale/bootstrap-markdown.ar.js',
    'locale/bootstrap-markdown.cs.js',
    'locale/bootstrap-markdown.da.js',
    'locale/bootstrap-markdown.de.js',
    'locale/bootstrap-markdown.es.js',
    'locale/bootstrap-markdown.fa.js',
    'locale/bootstrap-markdown.fr.js',
    'locale/bootstrap-markdown.it.js',
    'locale/bootstrap-markdown.ja.js',
    'locale/bootstrap-markdown.kr.js',
    'locale/bootstrap-markdown.nb.js',
    'locale/bootstrap-markdown.nl.js',
    'locale/bootstrap-markdown.pl.js',
    'locale/bootstrap-markdown.ru.js',
    'locale/bootstrap-markdown.sl.js',
    'locale/bootstrap-markdown.sv.js',
    'locale/bootstrap-markdown.tr.js',
    'locale/bootstrap-markdown.ua.js',
    'locale/bootstrap-markdown.zh.js'
  ], ['client']);
});
