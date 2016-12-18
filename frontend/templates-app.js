angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Fame</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <!-- <div ng-chartist id='graph_id' class=\"ct-chart\" data='data' options='{{home.options}}' type='{{home.type}}' tooltips='true'></div> -->\n" +
    "          {{fame}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Temperature</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <span>{{temp}} °C</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Humidty</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <span>{{hum}}%</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Hands</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body voices\">\n" +
    "          <input type=\"checkbox\" name=\"fa\"><label for=\"fa\"> Mark</label><br />\n" +
    "          <input type=\"checkbox\" name=\"fa\"><label for=\"fa\"> Amélie</label><br />\n" +
    "          <input type=\"checkbox\" name=\"fa\"><label for=\"fa\"> Tom</label><br />\n" +
    "          <input type=\"checkbox\" name=\"fa\"><label for=\"fa\"> Jonas</label><br />\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Voices</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body voices\">\n" +
    "          <input type=\"checkbox\" name=\"fa\"><label for=\"fa\"> \"Ich habe vergessen wie ich y + 4 = x ausrechnen kann.\"</label><br />\n" +
    "          <input type=\"checkbox\" name=\"fa\"><label for=\"fa\"> \"Es ist zu warm, ich kann mich nicht konzentrieren.\"</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Mood</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <span>48</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
