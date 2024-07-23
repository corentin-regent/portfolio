export default {
  ci: {
    collect: {
      method: "node",
      headful: false,
      additive: false,
      numberOfRuns: 3,
      startServerCommand: 'docker run --rm -p 80:80 portfolio',
    },
    assert: {
      preset: "lighthouse:all",
      assertions: {
        'is-crawlable': 'off',  // TODO: enable this when we go public
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse/'
    },
  }
}
