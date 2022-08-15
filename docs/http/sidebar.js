 const downloadedChangelog = require("../../ditto-changelog.json");
 const common = require('../common/sidebar.js')
 
 module.exports = {
    docs: [
        "installation",
        {
          type: "category",
          label: "Getting Started",
          collapsed: false,
          items: [
            'common/concepts/documents',
            'common/concepts/update',
            'common/concepts/upsert',
            'common/concepts/querying',
            'common/concepts/remove',
            "timeseries",
          ]
        },

        {
            type: "category",
            label: "Data Model",
            items: [
              'common/datamodel/register',
              'common/datamodel/map',
            ]
          },
          {
            type: "category",
            label: "Security",
            items: [{
              type: 'autogenerated',
              dirName: 'common/security'
            }]
          },
        {
          type: "category",
          label: "Integration Guides",
          items: [{
            type: 'autogenerated',
            dirName: 'common/guides'
          }]
        },
        "api",
        "how-it-works",
        "common/v2",
    ]
}
 
 