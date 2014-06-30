/**
 * Generic directive for bootstrap-select component to work with angular.js library.
 *
 *  - https://github.com/silviomoreto/bootstrap-select
 *  - https://github.com/joaoneto/angular-bootstrap-select/issues/7
 *
 * Usage examples:
 *
 *  <select class="show-tick show-menu-arrow form-control"
 *      data-live-search="true"
 *      data-container="body"
 *      data-bootstrap-select
 *      data-collection="projects"
 *      data-ng-model="projectId"
 *      data-ng-options="project.id as project.title for project in projects | orderBy:'title'"
 *  >
 *      <option style="display:none" value="" class="text-muted">Choose project to show</option>
 *  </select>
 */
(function() {
    'use strict';

    angular.module('Taskboard.directives')
        .directive('bootstrapSelect',
            [
                '$timeout',
                function($timeout) {
                    return {
                        restrict: 'A',
                        scope: {
                            collection: '=',
                            ngModel: '=',
                            ngDisabled: '='
                        },
                        compile: function() {
                            return function(scope, element) {
                                scope.$watch('collection', function(valueNew) {
                                    if (valueNew) {
                                        $timeout(function() {
                                            element.selectpicker('refresh');
                                        });
                                    }
                                }, true);

                                scope.$watch('ngDisabled', function(valueNew , valueOld) {
                                    if (valueNew != valueOld) {
                                        $timeout(function() {
                                            element.selectpicker('refresh');
                                        });
                                    }
                                }, true);

                                scope.$watch('ngModel', function(valueNew) {
                                    if (valueNew) {
                                        $timeout(function() {
                                            element.selectpicker('refresh');
                                        });
                                    }
                                });
                            };
                        }
                    };
                }
            ]
        );
}());
