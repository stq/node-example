const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');
const path = require('path');
const { resolveRefs } = require('json-refs');

const multiFileSwagger = root => {
    const options = {
        filter: ["relative", "remote"],
        loaderOptions: {
            processContent: (res, callback) =>callback(null, yamljs.parse(res.text))
        },
    };

    return resolveRefs(root, options)
        .then(results => results.resolved)
        .catch(err => console.log(err.stack))
};


multiFileSwagger(yamljs.load(path.resolve(__dirname, "../swagger.yaml")))
    .then(swaggerDocument => router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument)));


module.exports = router;
