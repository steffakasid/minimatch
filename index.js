const minimatch = require("minimatch")

const fileList = [
    "dbs-businesshub/bizhub-apionly/someapi",
    "dbs-businesshub/bizhub-tools/someproject",
    "dbs-businesshub/bizhub-connect/kong-shared",
    "dbs-businesshub/bizhub-apic/topology",
    "dbs-businesshub/bizhub-tools/bizhub-helm/helmchart",
    "dbs-businesshub/ibm-api-connect/ibm-api-connect",
    "dbs-businesshub/smartlocker/ibm-api-connect"
]

console.log(minimatch.match(fileList, "dbs-businesshub/{bizhub!(-apionly),ibm-api-connect}/**/*", {matchBase: true}))
