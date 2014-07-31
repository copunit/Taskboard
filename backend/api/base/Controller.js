'use strict';

var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * /api/base/controller.js
 *
 * Base controller for all sails.js controllers. This just contains some common code
 * that every controller uses
 */
module.exports = {
    /**
     * Generic count action for controller.
     *
     * @param   {Request}   request
     * @param   {Response}  response
     */
    count: function(request, response) {
        var model = actionUtil.parseModel(request);

        model
            .count(actionUtil.parseCriteria(request))
            .exec(function found(error, count) {
                if (error) {
                    response.json(500, error);
                } else {
                    response.json(200, {count: count});
                }
            });
    }
};
