export default {
  "ci": {
    "collect": {
      "method": "node",
      "headful": false,
      "additive": false,
      "numberOfRuns": 1,
      "startServerCommand": "docker run --rm -p 80:80 portfolio"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "is-crawlable": "off",
        "render-blocking-resources": "off",
        "unsized-images": "off",
        "categories:performance": [
          "error",
          {
            "minScore": 0.9
          }
        ],
        "categories:accessibility": [
          "error",
          {
            "minScore": 1
          }
        ],
        "categories:best-practices": [
          "error",
          {
            "minScore": 1
          }
        ],
        "categories:seo": [
          "warn",  // while blocking robots from indexing
          {
            "minScore": 1
          }
        ]
      }
    },
    "upload": {
      "target": "filesystem"
    }
  }
}