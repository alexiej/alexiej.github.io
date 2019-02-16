(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{999:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python:")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\ncsv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("csv"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'wasb:///data/flights.csv'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inferSchema"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"DayofMonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"DayOfWeek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"Carrier"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"OriginAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"DestAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"DepDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ArrDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Double"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsplits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomSplit"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0.7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrain "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumnRenamed"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"trueLabel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrain_rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" train"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntest_rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" test"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"scala"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scala","aria-hidden":"true"}},[t._v("#")]),t._v(" Scala:")]),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" csv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"inferSchema"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"true"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\toption"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"header"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"true"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\tcsv"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"wasb:///data/flights.csv"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token string"}},[t._v('"DayofMonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"DayOfWeek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"Carrier"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"OriginAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"DestAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"DepDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token string"}},[t._v('"ArrDelay"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Double"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" splits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomSplit"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0.7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" train "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" test "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumnRenamed"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"trueLabel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" train_rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" train"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" test_rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" test"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);