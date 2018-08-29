(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{614:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python:")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pipeline\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classification "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LogisticRegression\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("feature "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VectorAssembler\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("evaluation "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BinaryClassificationEvaluator\n\ncsv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("csv"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'wasb:///data/flights.csv'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inferSchema"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"DayofMonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DayOfWeek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"OriginAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DestAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token string"}},[t._v('"DepDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ArrDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Int"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsplits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomSplit"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0.7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrain "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumnRenamed"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"trueLabel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Define the pipeline")]),t._v("\nassembler "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" VectorAssembler"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputCols "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"DayofMonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),a("span",{attrs:{class:"token string"}},[t._v('"DayOfWeek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"OriginAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                                         "),a("span",{attrs:{class:"token string"}},[t._v('"DestAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DepDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                            outputCol"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"features"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LogisticRegression"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelCol"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                        featuresCol"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"features"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npipeline "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Pipeline"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stages"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("assembler"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"scala"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scala","aria-hidden":"true"}},[t._v("#")]),t._v(" Scala:")]),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Import Spark SQL and Spark ML libraries")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pipeline\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("feature"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VectorAssembler\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogisticRegression\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ml"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("evaluation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryClassificationEvaluator\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Load the source data")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" csv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"inferSchema"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"true"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\toption"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"header"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"true"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\tcsv"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"wasb:///data/flights.csv"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Select features and label")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token string"}},[t._v('"DayofMonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),a("span",{attrs:{class:"token string"}},[t._v('"DayOfWeek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"OriginAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),a("span",{attrs:{class:"token string"}},[t._v('"DestAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      $"),a("span",{attrs:{class:"token string"}},[t._v('"DepDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                      "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token string"}},[t._v('"ArrDelay"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Int"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Split the data")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" splits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomSplit"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0.7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" train "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" test "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" splits"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumnRenamed"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"trueLabel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Define the pipeline")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" assembler "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" VectorAssembler"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\tsetInputCols"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"DayofMonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DayOfWeek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                       "),a("span",{attrs:{class:"token string"}},[t._v('"OriginAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DestAirportID"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DepDelay"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\tsetOutputCol"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"features"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" lr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" LogisticRegression"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\tsetLabelCol"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\tsetFeaturesCol"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"features"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" pipeline "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Pipeline"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setStages"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assembler"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);