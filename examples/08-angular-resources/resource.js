(function () {
    "use strict";

    var url = 'http://example.com';

    var resource = $resource(url,
        null,
        {
            query: {method: 'GET', url: url, isArray: false, cache: true},
            get: {method: 'GET', url: url, cache: true},
            getById: {method: 'GET', url: url + '/:id', cache: true},
            update: {method: 'PUT'}
        });

    resource.get({});

    resource.query({}).$promise;

    resource.update(params, data).$promise;
})();
