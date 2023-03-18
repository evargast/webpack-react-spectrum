const custom = require("@digitalroute/cz-conventional-changelog-for-jira/configurable");

module.exports = custom({
    jiraMode: false,
    jiraOptional: true,
    skipScope: true,
    skipBreaking: true,
    exclamationMark: true,
});
