/**
 * Created by windows on 2015/5/22.
 */
"use strict"
define(function (require, exports, module) {
    exports.apply = function (base, config, template) {

        function evalTpl(dom, url, data, tpl) {
            $.getJSON(url, data, function (data) {
                dom.html((new Template(tpl)).evaluate(data));
            });
        }

        for (var i = 0; i < config.length; i++) {
            if (config[i].tplId !== undefined) {
                config[i].tpl = template[config[i].tplId];
            }
        }

        var childId = 0;

        for (var i = 0; i < config.length; i++) {
            var content = config[i];
            base.append('<div class="' + content.class + '" ></div>');
            var child = base.children(":eq(" + childId + ")");
            childId++;
            if (content.class !== undefined) {
                if (content.html !== undefined) {
                    child.html(content.html);
                } else if (content.tpl !== undefined) {
                    evalTpl(child, content.dataPath, {}, content.tpl);
                }
            }
            $.each(content.scripts, function (index, scriptPath) {
                $.getScript(scriptPath);
            });
        }
    };

});
