const minimatch = require("minimatch")

const fileList = [
    "top-level1/sub-group-level1-prefix-apionly/someapi",
    "top-level1/sub-group-level1-prefix-tools/someproject",
    "top-level1/sub-group-level1-prefix-connect/kong",
    "top-level1/sub-group-level1-prefix-apic/topology",
    "top-level1/sub-group-level1-prefix-tools/sub-group-level2-helm/helmchart",
    "top-level1/ibm-api-connect/ibm-api-connect",
    "top-level1/smartlocker/ibm-api-connect",
    "top-level2/sub-group-level1-prefix-connect/kong-shared",
    "top-level2/sub-group-level1-prefix-apic/something",
    "top-level2/ibm-api-connect/ibm-api-connect"
]

console.log(minimatch.match(fileList, "?(top-level2|top-level1)/{sub-group-level1-prefix!(-api-only|-playground),ibm-api-connect}/**/*", {matchBase: true}))
